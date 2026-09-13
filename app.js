const initialActivities = [

    // Exterior
    {
        activity: "Exterior",
        subActivity: "Stone work",
        amount: "1L",
        endMonth: 1,
        text: "Stone work",
        color: "blue"
    },
    {
        activity: "Exterior",
        subActivity: "Exterior lighting",
        amount: "1L",
        endMonth: 2,
        text: "Exterior lighting",
        color: "blue"
    },
    {
        activity: "Exterior",
        subActivity: "GRC production work",
        amount: "1L",
        endMonth: 2,
        text: "GRC production work",
        color: "blue"
    },
    {
        activity: "Exterior",
        subActivity: "GRC installation",
        amount: "1L",
        endMonth: 3,
        text: "GRC installation",
        color: "blue"
    },

    // Fire safety
    {
        activity: "Fire safety",
        subActivity: "Overhead Tank",
        amount: "1L",
        endMonth: 1,
        text: "Overhead Tank",
        color: "orange"
    },
    {
        activity: "Fire safety",
        subActivity: "Hydrant Line",
        amount: "1L",
        endMonth: 2,
        text: "Hydrant Line",
        color: "orange"
    },
    {
        activity: "Fire safety",
        subActivity: "Fire alarm systems - detectors",
        amount: "1L",
        endMonth: 2,
        text: "Fire alarm systems - detectors",
        color: "orange"
    },

    // CCTV
    {
        activity: "CCTV",
        subActivity: "CCTV conduits & wiring",
        amount: "1L",
        endMonth: 2,
        text: "CCTV conduits & wiring",
        color: "purple"
    },
    {
        activity: "CCTV",
        subActivity: "Live Streaming wiring",
        amount: "1L",
        endMonth: 2,
        text: "Live Streaming wiring",
        color: "purple"
    },

    // AC
    {
        activity: "AC",
        subActivity: "Copper Piping",
        amount: "1L",
        endMonth: 2,
        text: "Copper Piping",
        color: "cyan"
    },
    {
        activity: "AC",
        subActivity: "Electrical wiring",
        amount: "1L",
        endMonth: 2,
        text: "Electrical wiring",
        color: "cyan"
    },

    // Wall cladding
    {
        activity: "Wall cladding",
        subActivity: "Material Selection",
        amount: "1L",
        endMonth: 1,
        text: "Material Selection",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Staircase Block",
        amount: "1L",
        endMonth: 2,
        text: "Staircase Block",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Deity service area",
        amount: "1L",
        endMonth: 2,
        text: "Deity service area",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Rural development area",
        amount: "1L",
        endMonth: 3,
        text: "Rural development area",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Mezzanine",
        amount: "1L",
        endMonth: 4,
        text: "Mezzanine",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Temple Hall",
        amount: "1L",
        endMonth: 4,
        text: "Temple Hall",
        color: "green"
    },

    // Flooring
    {
        activity: "Flooring",
        subActivity: "Material Selection",
        amount: "1L",
        endMonth: 1,
        text: "Material Selection",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Pujari Rooms - library",
        amount: "1L",
        endMonth: 2,
        text: "Pujari Rooms - library",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Deity Service area",
        amount: "1L",
        endMonth: 2,
        text: "Deity Service area",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Rural development area",
        amount: "1L",
        endMonth: 2,
        text: "Rural development area",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Mezzanine",
        amount: "1L",
        endMonth: 3,
        text: "Mezzanine",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Temple Hall",
        amount: "1L",
        endMonth: 4,
        text: "Temple Hall",
        color: "pink"
    },

    // Sound
    {
        activity: "Sound",
        subActivity: "Conduits",
        amount: "1L",
        endMonth: 1,
        text: "Conduits",
        color: "purple"
    },
    {
        activity: "Sound",
        subActivity: "Wiring",
        amount: "1L",
        endMonth: 2,
        text: "Wiring",
        color: "purple"
    },

    // Prasadam Hall
    {
        activity: "Prasadam Hall",
        subActivity: "False ceiling design",
        amount: "1L",
        endMonth: 1,
        text: "False ceiling design",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "AC ducting",
        amount: "1L",
        endMonth: 2,
        text: "AC ducting",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Sprinkler lines",
        amount: "1L",
        endMonth: 2,
        text: "Sprinkler lines",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Fire alarms wiring",
        amount: "1L",
        endMonth: 2,
        text: "Fire alarms wiring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Electrical",
        amount: "1L",
        endMonth: 2,
        text: "Electrical",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Sound - wiring",
        amount: "1L",
        endMonth: 2,
        text: "Sound - wiring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "CCTV - wiring",
        amount: "1L",
        endMonth: 2,
        text: "CCTV - wiring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "False ceiling - POP / sound proofing",
        amount: "1L",
        endMonth: 4,
        text: "False ceiling - POP / sound proofing",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Flooring",
        amount: "1L",
        endMonth: 4,
        text: "Flooring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Wall Cladding",
        amount: "1L",
        endMonth: 4,
        text: "Wall Cladding",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Wall sound proofing",
        amount: "1L",
        endMonth: 4,
        text: "Wall sound proofing",
        color: "blue"
    }

];

'use strict';
const STORAGE_KEY = 'temple-activity-timeline-v1';
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const colors = ['blue', 'green', 'purple', 'orange', 'pink', 'cyan'];
const $ = id => document.getElementById(id);
const monthIndex = value => {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(value)) return NaN;
    const [year, month] = value.split('-').map(Number);
    return year >= 1 ? year * 12 + month - 1 : NaN;
};
const monthValue = index => `${String(Math.floor(index / 12)).padStart(4, '0')}-${String(index % 12 + 1).padStart(2, '0')}`;
const monthLabel = index => `${monthNames[index % 12]} ${Math.floor(index / 12)}`;
const validRange = (start, end) => Number.isInteger(start) && Number.isInteger(end) && start >= 12 && end <= 119999 && end >= start;
const year = new Date().getFullYear();
let state = {
    start: year * 12 + 8,
    end: (year + 1) * 12,
    activities: initialActivities.map((item, index) => ({
        id: `initial-${index}`, activity: item.activity, subActivity: item.subActivity,
        color: item.color, amount: item.amount ?? "", start: year * 12 + 8, end: year * 12 + 8 + item.endMonth - 1
    }))
};
let editingId = null;
let suppressRowClickUntil = 0;
let storageAvailable = true;
let storageWarning = '';
try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== null) {
        const saved = JSON.parse(raw);
        if (!saved || !validRange(saved.start, saved.end) || saved.end - saved.start >= 60 || !Array.isArray(saved.activities) ||
            !saved.activities.every(a => a && typeof a.id === 'string' && typeof a.activity === 'string' && a.activity.trim() && typeof a.subActivity === 'string' && a.subActivity.trim() && colors.includes(a.color) && validRange(a.start, a.end)) ||
            new Set(saved.activities.map(a => a.id)).size !== saved.activities.length) throw new Error('Invalid saved data');
        saved.activities = saved.activities.map(item => ({
            ...item,
            amount: typeof item.amount === "string" || (Number.isFinite(item.amount) && item.amount >= 0)
                ? String(item.amount)
                : (initialActivities[Number(item.id.replace('initial-', ''))]?.amount ?? "")
        }));
        state = saved;
    }
} catch (error) {
    storageAvailable = false;
    storageWarning = 'Saved data could not be loaded. Changes are temporary; existing storage will not be overwritten.';
}
function notice(message) {
    $('status').textContent = storageWarning || message;
}
function persist() {
    if (!storageAvailable) return false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return true;
    } catch (error) {
        storageWarning = 'Browser storage is unavailable or full. Changes are temporary until this page closes.';
        return false;
    }
}
function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}
function setupRange() {
    for (const side of ['start', 'end']) {
        const monthSelect = $(`${side}-month`);
        monthSelect.replaceChildren();
        monthNames.forEach((name, index) => monthSelect.add(new Option(name, index)));
        const yearSelect = $(`${side}-year`);
        yearSelect.replaceChildren();
        const years = new Set(Array.from({length: 201}, (_, i) => year - 100 + i).filter(y => y >= 1 && y <= 9999));
        [state.start, state.end, ...state.activities.flatMap(a => [a.start, a.end])].forEach(index => years.add(Math.floor(index / 12)));
        [...years].sort((a,b) => a-b).forEach(y => yearSelect.add(new Option(y, y)));
        monthSelect.value = state[side] % 12;
        yearSelect.value = Math.floor(state[side] / 12);
    }
}
function renderChart() {
    const chart = $('chart');
    chart.replaceChildren();
    const count = state.end - state.start + 1;
    chart.style.minWidth = `${Math.max(700, 260 + count * 100)}px`;
    const months = Array.from({length: count}, (_, i) => state.start + i);
    function axis(className, label, monthsClass, cellClass) {
        const row = element('div', className);
        row.append(element('div', className === 'chart-header' ? 'activity-title' : 'bottom-label', label));
        const cells = element('div', monthsClass);
        cells.style.gridTemplateColumns = `repeat(${count}, minmax(0, 1fr))`;
        months.forEach(index => cells.append(element('div', cellClass, monthLabel(index))));
        row.append(cells);
        chart.append(row);
    }
    axis('chart-header', 'Activity / Sub Activity', 'months', 'month');
    const visible = state.activities.filter(a => a.start <= state.end && a.end >= state.start);
    if (editingId === 'new') {
        const draftRow = element('div', 'chart-row new-activity-row');
        chart.append(draftRow);
        renderInlineEditor(draftRow, {activity:'', subActivity:'', amount:'1L', start:state.start, end:state.end, color:'blue'}, true);
    }
    visible.forEach(item => {
        const row = element('div', 'chart-row');
        const info = element('div', 'activity-info');
        info.append(element('div', 'activity-name', item.activity), element('div', 'sub-activity', item.subActivity));
        row.dataset.activityId = item.id;
        attachRowDrag(info, row, item);
        const timeline = element('div', 'timeline');
        timeline.style.gridTemplateColumns = `repeat(${count}, minmax(0, 1fr))`;
        months.forEach(() => timeline.append(element('div', 'timeline-cell')));
        const left = Math.max(item.start, state.start) - state.start;
        const span = Math.min(item.end, state.end) - Math.max(item.start, state.start) + 1;
        const bar = element('div', `bar ${item.color}`, item.subActivity);
        bar.title = `${item.subActivity}: ${monthLabel(item.start)} – ${monthLabel(item.end)}`;
        bar.style.left = `calc(${left / count * 100}% + 6px)`;
        bar.style.width = `calc(${span / count * 100}% - 12px)`;
        attachRangeHandles(bar, timeline, row, item, count);
        timeline.append(bar);
        if (item.amount !== "" && item.amount != null) {
            const amount = element('div', 'bar-amount', `Rs. ${item.amount}`);
            const endPercent = (left + span) / count * 100;
            // Keep the amount left-aligned after the bar; use a second line when space is tight.
            if (100 - endPercent >= 20) {
                amount.style.left = `${endPercent}%`;
                amount.style.width = `${100 - endPercent}%`;
            } else {
                amount.classList.add('bar-amount-below');
                amount.style.right = `${100 - endPercent}%`;
                row.classList.add('has-amount-below');
            }
            timeline.append(amount);
        }
        row.append(info, timeline);
        row.tabIndex = 0;
        row.setAttribute('aria-label', `Edit ${item.activity} / ${item.subActivity}`);
        const edit = () => {
            if (editingId !== null || Date.now() < suppressRowClickUntil) return;
            editingId = item.id;
            renderInlineEditor(row, item);
        };
        row.addEventListener('click', edit);
        row.addEventListener('keydown', event => {
            if (event.target === row && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault(); edit();
            }
        });
        chart.append(row);
        if (editingId === item.id) renderInlineEditor(row, item);
    });
    if (!visible.length) chart.append(element('div', 'empty', 'No activities scheduled in this range.'));
    axis('bottom-axis', 'Timeline (inclusive months)', 'bottom-months', 'bottom-month');
    notice(`${visible.length} of ${state.activities.length} activities shown. Data is saved in this browser.`);
}
function reorderActivity(id, position) {
    const visible = state.activities.filter(a => a.start <= state.end && a.end >= state.start);
    const from = visible.findIndex(a => a.id === id);
    if (from < 0) return;
    const to = Math.max(0, Math.min(position, visible.length - 1));
    if (from === to) return;
    visible.splice(to, 0, visible.splice(from, 1)[0]);
    let index = 0;
    state.activities = state.activities.map(a => a.start <= state.end && a.end >= state.start ? visible[index++] : a);
    persist();
}
function attachRowDrag(info, row, item) {
    const handle = element('button', 'row-order', '⠿');
    handle.type = 'button';
    handle.title = 'Drag to reorder. Keyboard: use Up/Down.';
    handle.setAttribute('aria-label', `Reorder ${item.activity} / ${item.subActivity}. Drag or use Up and Down arrow keys.`);
    handle.addEventListener('click', event => event.stopPropagation());
    info.append(handle);
    let drag = null;
    let frame = null;
    function clearMarkers() {
        $('chart').querySelectorAll('.drop-before, .drop-after').forEach(node => node.classList.remove('drop-before', 'drop-after'));
    }
    function preview() {
        if (!drag) return;
        clearMarkers();
        const others = [...$('chart').querySelectorAll('.chart-row')].filter(node => node !== row);
        const before = others.findIndex(node => {
            const rect = node.getBoundingClientRect();
            return drag.y < rect.top + rect.height / 2;
        });
        drag.position = before < 0 ? others.length : before;
        if (before >= 0) others[before].classList.add('drop-before');
        else others.at(-1)?.classList.add('drop-after');
    }
    function scroll() {
        if (!drag) return;
        const speed = drag.y < 70 ? -12 : drag.y > window.innerHeight - 70 ? 12 : 0;
        if (speed) { window.scrollBy(0, speed); preview(); }
        frame = requestAnimationFrame(scroll);
    }
    function finish(commit) {
        if (!drag) return;
        const current = drag;
        drag = null;
        cancelAnimationFrame(frame);
        if (handle.hasPointerCapture(current.pointerId)) handle.releasePointerCapture(current.pointerId);
        clearMarkers();
        row.classList.remove('row-dragging');
        suppressRowClickUntil = Date.now() + 300;
        if (commit) reorderActivity(item.id, current.position);
        renderChart();
        [...$('chart').querySelectorAll('.chart-row')].find(node => node.dataset.activityId === item.id)?.querySelector('.row-order')?.focus();
        notice(commit ? `Row order saved for ${item.subActivity}.` : 'Row move canceled.');
    }
    handle.addEventListener('pointerdown', event => {
        event.stopPropagation();
        if (event.button !== 0 || drag) return;
        if (editingId !== null) { notice('Save or cancel your edit before moving rows.'); return; }
        event.preventDefault();
        const visible = state.activities.filter(a => a.start <= state.end && a.end >= state.start);
        drag = {pointerId:event.pointerId, y:event.clientY, position:visible.findIndex(a => a.id === item.id)};
        handle.setPointerCapture(event.pointerId);
        handle.focus();
        row.classList.add('row-dragging');
        frame = requestAnimationFrame(scroll);
    });
    handle.addEventListener('pointermove', event => {
        if (!drag || event.pointerId !== drag.pointerId) return;
        drag.y = event.clientY; preview();
    });
    handle.addEventListener('pointerup', event => {
        if (!drag || event.pointerId !== drag.pointerId) return;
        event.stopPropagation(); finish(true);
    });
    handle.addEventListener('pointercancel', () => finish(false));
    handle.addEventListener('lostpointercapture', () => finish(false));
    handle.addEventListener('keydown', event => {
        if (event.key === 'Escape' && drag) {
            event.preventDefault(); event.stopPropagation(); finish(false); return;
        }
        if (!['ArrowUp', 'ArrowDown'].includes(event.key) || drag || editingId !== null) return;
        event.preventDefault(); event.stopPropagation();
        const visible = state.activities.filter(a => a.start <= state.end && a.end >= state.start);
        reorderActivity(item.id, visible.findIndex(a => a.id === item.id) + (event.key === 'ArrowUp' ? -1 : 1));
        renderChart();
        [...$('chart').querySelectorAll('.chart-row')].find(node => node.dataset.activityId === item.id)?.querySelector('.row-order')?.focus();
    });
}
function resizeMonth(item, side, value) {
    return side === 'start'
        ? Math.max(state.start, Math.min(value, item.end, state.end))
        : Math.min(state.end, Math.max(value, item.start, state.start));
}
function attachRangeHandles(bar, timeline, row, item, count) {
    for (const side of ['start', 'end']) {
        // A clipped edge is not the activity's actual start or end.
        if (item[side] < state.start || item[side] > state.end) continue;
        const handle = element('button', `range-handle range-handle-${side}`);
        handle.type = 'button';
        handle.title = `Drag ${side} month, or use Left/Right arrow keys`;
        handle.setAttribute('aria-label', `${item.subActivity}: ${side} ${monthLabel(item[side])}. Use arrow keys to change by one month.`);
        handle.addEventListener('click', event => event.stopPropagation());
        let drag = null;
        function preview(value) {
            const start = Math.max(side === 'start' ? value : item.start, state.start);
            const end = Math.min(side === 'end' ? value : item.end, state.end);
            bar.style.left = `calc(${(start - state.start) / count * 100}% + 6px)`;
            bar.style.width = `calc(${(end - start + 1) / count * 100}% - 12px)`;
            notice(`${item.subActivity}: ${monthLabel(side === 'start' ? value : item.start)} – ${monthLabel(side === 'end' ? value : item.end)}`);
        }
        function finish(commit) {
            if (!drag) return;
            const current = drag;
            drag = null;
            if (handle.hasPointerCapture(current.pointerId)) handle.releasePointerCapture(current.pointerId);
            suppressRowClickUntil = Date.now() + 300;
            if (commit && current.value !== item[side]) {
                item[side] = current.value;
                persist();
            }
            renderChart();
        }
        handle.addEventListener('pointerdown', event => {
            event.stopPropagation();
            if (event.button !== 0 || editingId !== null || drag) return;
            event.preventDefault();
            drag = {pointerId: event.pointerId, x: event.clientX, value: item[side], monthWidth: timeline.getBoundingClientRect().width / count};
            handle.setPointerCapture(event.pointerId);
            handle.focus();
            row.classList.add('resizing');
        });
        function update(event) {
            if (!drag || event.pointerId !== drag.pointerId) return;
            const steps = Math.round((event.clientX - drag.x) / drag.monthWidth);
            drag.value = resizeMonth(item, side, item[side] + steps);
            preview(drag.value);
        }
        handle.addEventListener('pointermove', update);
        handle.addEventListener('pointerup', event => {
            if (!drag || event.pointerId !== drag.pointerId) return;
            event.stopPropagation(); update(event); finish(true);
        });
        handle.addEventListener('pointercancel', () => finish(false));
        handle.addEventListener('lostpointercapture', () => finish(false));
        handle.addEventListener('keydown', event => {
            if (event.key === 'Escape' && drag) {
                event.preventDefault(); event.stopPropagation(); finish(false); return;
            }
            if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || editingId !== null || drag) return;
            event.preventDefault(); event.stopPropagation();
            item[side] = resizeMonth(item, side, item[side] + (event.key === 'ArrowRight' ? 1 : -1));
            persist(); renderChart();
            const index = state.activities.filter(a => a.start <= state.end && a.end >= state.start).findIndex(a => a.id === item.id);
            $('chart').children[index + 1]?.querySelector(`.range-handle-${side}`)?.focus();
        });
        bar.append(handle);
    }
}
function renderInlineEditor(row, item, isNew = false) {
    row.classList.add('editing');
    const form = element('form', 'controls inline-editor');
    const fields = {};
    function field(key, title, type, value) {
        const label = element('label', '', title);
        const input = element(type === 'select' ? 'select' : 'input');
        input.name = key;
        if (type === 'select') colors.forEach(color => input.add(new Option(color, color)));
        else input.type = type;
        input.value = value;
        if (key !== 'amount') input.required = true;
        if (type === 'month') { input.min = '0001-01'; input.max = '9999-12'; }
        if (type === 'text') input.maxLength = key === 'activity' ? 120 : 200;
        if (key === 'amount') { input.maxLength = 40; input.placeholder = 'e.g. 1L, 4.4L, 49K'; }
        fields[key] = input;
        label.append(input); form.append(label);
    }
    field('activity', 'Activity', 'text', item.activity);
    field('subActivity', 'Sub-activity', 'text', item.subActivity);
    field('amount', 'Amount (Rs.)', 'text', item.amount ?? '');
    field('start', 'Start month', 'month', monthValue(item.start));
    field('end', 'End month', 'month', monthValue(item.end));
    fields.color = {value: item.color};
    const palette = element('fieldset', 'color-picker');
    const colorLegend = element('legend', '', `Color: ${item.color}`);
    const grid = element('div', 'color-grid');
    palette.append(colorLegend, grid);
    const swatches = [];
    colors.forEach(color => {
        const swatch = element('button', `color-swatch ${color}`, color === item.color ? '✓' : '');
        swatch.type = 'button';
        swatch.title = color;
        swatch.setAttribute('aria-label', color);
        swatch.setAttribute('aria-pressed', String(color === item.color));
        swatch.addEventListener('click', () => {
            fields.color.value = color;
            colorLegend.textContent = `Color: ${color}`;
            swatches.forEach(({button, value}) => {
                button.setAttribute('aria-pressed', String(value === color));
                button.textContent = value === color ? '✓' : '';
            });
        });
        swatches.push({button: swatch, value: color});
        grid.append(swatch);
    });
    form.append(palette);
    const error = element('p', 'inline-error');
    error.setAttribute('role', 'alert');
    const save = element('button', 'print-btn', isNew ? 'Add activity' : 'Save changes');
    save.type = 'submit';
    const cancel = element('button', '', 'Cancel');
    cancel.type = 'button';
    const close = () => { editingId = null; renderChart(); $('add-activity').focus(); };
    cancel.addEventListener('click', close);
    form.addEventListener('click', event => event.stopPropagation());
    form.addEventListener('keydown', event => {
        if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); }
    });
    form.addEventListener('submit', event => {
        event.preventDefault();
        const activity = fields.activity.value.trim();
        const subActivity = fields.subActivity.value.trim();
        const start = monthIndex(fields.start.value);
        const end = monthIndex(fields.end.value);
        const amount = fields.amount.value.trim();
        if (!activity || !subActivity || !validRange(start, end) ||
            amount.length > 40) {
            error.textContent = 'Enter both names, a valid month range, and an amount of up to 40 characters (or leave it blank).';
            return;
        }
        const updated = {...item, id: isNew ? `activity-${Date.now()}-${Math.random().toString(36).slice(2)}` : item.id,
            activity, subActivity, amount, start, end, color: fields.color.value};
        if (isNew) state.activities.push(updated);
        else state.activities = state.activities.map(a => a.id === item.id ? updated : a);
        editingId = null; persist(); renderChart(); $('add-activity').focus();
    });
    form.append(save, cancel);
    if (!isNew) {
        const remove = element('button', '', 'Delete');
        remove.type = 'button';
        remove.addEventListener('click', () => {
            if (!window.confirm(`Delete ${item.activity} / ${item.subActivity}?`)) return;
            state.activities = state.activities.filter(a => a.id !== item.id);
            editingId = null; persist(); renderChart(); $('add-activity').focus();
        });
        form.append(remove);
    }
    form.append(error); row.append(form);
    fields.activity.focus();
}
$('range-form').addEventListener('submit', event => {
    event.preventDefault();
    if (editingId !== null) { notice('Save or cancel the current edit before changing the range.'); return; }
    const start = Number($('start-year').value) * 12 + Number($('start-month').value);
    const end = Number($('end-year').value) * 12 + Number($('end-month').value);
    if (!validRange(start, end) || end - start >= 60) {
        $('status').textContent = 'Select an end month on or after the start month, with a maximum range of 60 months.';
        return;
    }
    state.start = start; state.end = end;
    persist(); renderChart();
});
$('add-activity').addEventListener('click', () => {
    if (editingId !== null) return;
    editingId = 'new'; renderChart();
});
$('print-button').addEventListener('click', () => window.print());
setupRange();
if (storageAvailable) persist();
renderChart();
