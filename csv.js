'use strict';
const csvColumns = ['Activity', 'Sub-activity', 'Amount', 'Start month', 'End month', 'Color', 'Graph start', 'Graph end'];
function exportCSV() {
    const range = [monthValue(state.start), monthValue(state.end)];
    const rows = state.activities.map(item => [item.activity, item.subActivity, String(item.amount ?? ''),
        monthValue(item.start), monthValue(item.end), item.color, ...range]);
    // Keep the view range even when there are no activities.
    if (!rows.length) rows.push(['', '', '', '', '', '', ...range]);
    return '\uFEFF' + [csvColumns, ...rows].map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\r\n') + '\r\n';
}
function parseCSV(text) {
    text = text.replace(/^\uFEFF/, '');
    const rows = [];
    let row = [], value = '', quoted = false, closed = false;
    function cell() { row.push(value); value = ''; closed = false; }
    function line() { cell(); rows.push(row); row = []; }
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (quoted) {
            if (char === '"') {
                if (text[i + 1] === '"') { value += '"'; i++; }
                else { quoted = false; closed = true; }
            } else value += char;
        } else if (char === ',') cell();
        else if (char === '\r' || char === '\n') {
            if (char === '\r' && text[i + 1] === '\n') i++;
            line();
        } else if (char === '"' && value === '' && !closed) quoted = true;
        else {
            if (closed || char === '"') throw new Error('Invalid CSV quoting. Export a CSV for a template.');
            value += char;
        }
        if (rows.length > 10001 || row.length > 100) throw new Error('Import up to 10,000 activities and 100 columns at a time.');
    }
    if (quoted) throw new Error('The CSV contains an unclosed quote.');
    if (value !== '' || row.length || closed) line();
    return rows;
}
function importCSV(text) {
    const rows = parseCSV(text);
    const headers = (rows.shift() || []).map(value => value.trim().toLowerCase());
    const columns = csvColumns.map(name => headers.indexOf(name.toLowerCase()));
    if (columns.slice(0, 6).some(index => index < 0) || new Set(headers).size !== headers.length) {
        throw new Error(`Required columns: ${csvColumns.slice(0, 6).join(', ')}. Export a CSV for a template.`);
    }
    const activities = [];
    let graphStart, graphEnd;
    rows.forEach((row, index) => {
        if (row.every(value => value.trim() === '')) return;
        if (row.length !== headers.length) throw new Error(`Row ${index + 2}: the number of columns does not match the header.`);
        const [activity, subActivity, amount, startValue, endValue, colorValue, viewStart, viewEnd] = columns.map(column => (row[column] ?? '').trim());
        if (viewStart || viewEnd) {
            const start = monthIndex(viewStart), end = monthIndex(viewEnd);
            if (!validRange(start, end) || end - start >= 60 ||
                (graphStart !== undefined && (graphStart !== start || graphEnd !== end))) {
                throw new Error(`Row ${index + 2}: Graph start/end must be consistent and span 1–60 months.`);
            }
            graphStart = start; graphEnd = end;
        }
        if (![activity, subActivity, amount, startValue, endValue, colorValue].some(Boolean)) return;
        const start = monthIndex(startValue), end = monthIndex(endValue);
        const color = colorValue.toLowerCase() || 'blue';
        if (!activity || activity.length > 120 || !subActivity || subActivity.length > 200 || amount.length > 40 || !validRange(start, end) || !colorSettings(color)) {
            throw new Error(`Row ${index + 2}: check names, amount (up to 40 characters), months (YYYY-MM), and color. No data was imported.`);
        }
        activities.push({id: `import-${Date.now()}-${index}`, activity, subActivity, amount, start, end, color});
    });
    const start = graphStart ?? (activities.length ? Math.min(...activities.map(a => a.start)) : state.start);
    const end = graphEnd ?? (activities.length ? Math.max(...activities.map(a => a.end)) : state.end);
    if (!validRange(start, end) || end - start >= 60) throw new Error('Set Graph start and Graph end to a range of up to 60 months.');
    return {start, end, activities};
}
function canUseCSV() {
    if (editingId !== null) { notice('Save or cancel your current edit before importing or exporting.'); return false; }
    return true;
}
$('export-csv').addEventListener('click', () => {
    if (!canUseCSV()) return;
    const url = URL.createObjectURL(new Blob([exportCSV()], {type: 'text/csv;charset=utf-8;'}));
    const link = document.createElement('a');
    link.href = url; link.download = 'activity-timeline.csv';
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notice(`Exported ${state.activities.length} activities and the graph range.`);
});
$('import-csv').addEventListener('click', () => {
    if (canUseCSV()) $('csv-file').click();
});
$('csv-file').addEventListener('change', async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
        if (!canUseCSV()) return;
        if (!/\.csv$/i.test(file.name)) throw new Error('Choose a .csv file.');
        if (file.size > 10 * 1024 * 1024) throw new Error('Choose a CSV smaller than 10 MB.');
        const imported = importCSV(await file.text());
        if (!canUseCSV()) return;
        if (!window.confirm(`Import ${imported.activities.length} activities and replace the current ${state.activities.length} activities?`)) return;
        state = imported;
        persist(); setupRange(); renderChart();
        const visible = state.activities.filter(a => a.start <= state.end && a.end >= state.start).length;
        notice(`Imported ${state.activities.length} activities; ${visible} shown in the selected graph range.`);
    } catch (error) { notice(`Import failed: ${error.message}`); }
    finally { event.target.value = ''; }
});
