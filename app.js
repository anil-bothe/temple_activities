const initialActivities = [

    // Exterior
    {
        activity: "Exterior",
        subActivity: "Stone work",
        endMonth: 1,
        text: "Stone work",
        color: "blue"
    },
    {
        activity: "Exterior",
        subActivity: "Exterior lighting",
        endMonth: 2,
        text: "Exterior lighting",
        color: "blue"
    },
    {
        activity: "Exterior",
        subActivity: "GRC production work",
        endMonth: 2,
        text: "GRC production work",
        color: "blue"
    },
    {
        activity: "Exterior",
        subActivity: "GRC installation",
        endMonth: 3,
        text: "GRC installation",
        color: "blue"
    },

    // Fire safety
    {
        activity: "Fire safety",
        subActivity: "Overhead Tank",
        endMonth: 1,
        text: "Overhead Tank",
        color: "orange"
    },
    {
        activity: "Fire safety",
        subActivity: "Hydrant Line",
        endMonth: 2,
        text: "Hydrant Line",
        color: "orange"
    },
    {
        activity: "Fire safety",
        subActivity: "Fire alarm systems - detectors",
        endMonth: 2,
        text: "Fire alarm systems - detectors",
        color: "orange"
    },

    // CCTV
    {
        activity: "CCTV",
        subActivity: "CCTV conduits & wiring",
        endMonth: 2,
        text: "CCTV conduits & wiring",
        color: "purple"
    },
    {
        activity: "CCTV",
        subActivity: "Live Streaming wiring",
        endMonth: 2,
        text: "Live Streaming wiring",
        color: "purple"
    },

    // AC
    {
        activity: "AC",
        subActivity: "Copper Piping",
        endMonth: 2,
        text: "Copper Piping",
        color: "cyan"
    },
    {
        activity: "AC",
        subActivity: "Electrical wiring",
        endMonth: 2,
        text: "Electrical wiring",
        color: "cyan"
    },

    // Wall cladding
    {
        activity: "Wall cladding",
        subActivity: "Material Selection",
        endMonth: 1,
        text: "Material Selection",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Staircase Block",
        endMonth: 2,
        text: "Staircase Block",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Deity service area",
        endMonth: 2,
        text: "Deity service area",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Rural development area",
        endMonth: 3,
        text: "Rural development area",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Mezzanine",
        endMonth: 4,
        text: "Mezzanine",
        color: "green"
    },
    {
        activity: "Wall cladding",
        subActivity: "Temple Hall",
        endMonth: 4,
        text: "Temple Hall",
        color: "green"
    },

    // Flooring
    {
        activity: "Flooring",
        subActivity: "Material Selection",
        endMonth: 1,
        text: "Material Selection",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Pujari Rooms - library",
        endMonth: 2,
        text: "Pujari Rooms - library",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Deity Service area",
        endMonth: 2,
        text: "Deity Service area",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Rural development area",
        endMonth: 2,
        text: "Rural development area",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Mezzanine",
        endMonth: 3,
        text: "Mezzanine",
        color: "pink"
    },
    {
        activity: "Flooring",
        subActivity: "Temple Hall",
        endMonth: 4,
        text: "Temple Hall",
        color: "pink"
    },

    // Sound
    {
        activity: "Sound",
        subActivity: "Conduits",
        endMonth: 1,
        text: "Conduits",
        color: "purple"
    },
    {
        activity: "Sound",
        subActivity: "Wiring",
        endMonth: 2,
        text: "Wiring",
        color: "purple"
    },

    // Prasadam Hall
    {
        activity: "Prasadam Hall",
        subActivity: "False ceiling design",
        endMonth: 1,
        text: "False ceiling design",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "AC ducting",
        endMonth: 2,
        text: "AC ducting",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Sprinkler lines",
        endMonth: 2,
        text: "Sprinkler lines",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Fire alarms wiring",
        endMonth: 2,
        text: "Fire alarms wiring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Electrical",
        endMonth: 2,
        text: "Electrical",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Sound - wiring",
        endMonth: 2,
        text: "Sound - wiring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "CCTV - wiring",
        endMonth: 2,
        text: "CCTV - wiring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "False ceiling - POP / sound proofing",
        endMonth: 4,
        text: "False ceiling - POP / sound proofing",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Flooring",
        endMonth: 4,
        text: "Flooring",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Wall Cladding",
        endMonth: 4,
        text: "Wall Cladding",
        color: "blue"
    },
    {
        activity: "Prasadam Hall",
        subActivity: "Wall sound proofing",
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
        color: item.color, start: year * 12 + 8, end: year * 12 + 8 + item.endMonth - 1
    }))
};
let editingId = null;
let storageAvailable = true;
let storageWarning = '';
try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== null) {
        const saved = JSON.parse(raw);
        if (!saved || !validRange(saved.start, saved.end) || saved.end - saved.start >= 60 || !Array.isArray(saved.activities) ||
            !saved.activities.every(a => a && typeof a.id === 'string' && typeof a.activity === 'string' && a.activity.trim() && typeof a.subActivity === 'string' && a.subActivity.trim() && colors.includes(a.color) && validRange(a.start, a.end)) ||
            new Set(saved.activities.map(a => a.id)).size !== saved.activities.length) throw new Error('Invalid saved data');
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
        monthNames.forEach((name, index) => monthSelect.add(new Option(name, index)));
        const yearSelect = $(`${side}-year`);
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
    chart.style.minWidth = `${Math.max(860, 420 + count * 100)}px`;
    const months = Array.from({length: count}, (_, i) => state.start + i);
    function axis(className, label, monthsClass, cellClass) {
        const row = element('div', className);
        row.append(element('div', className === 'chart-header' ? 'activity-title' : 'bottom-label', label));
        const cells = element('div', monthsClass);
        cells.style.gridTemplateColumns = `repeat(${count}, minmax(0, 1fr))`;
        months.forEach(index => cells.append(element('div', cellClass, monthLabel(index))));
        row.append(cells);
        row.append(element('div', 'amount-cell', className === 'chart-header' ? 'Amount' : ''));
        chart.append(row);
    }
    axis('chart-header', 'Activity / Sub Activity', 'months', 'month');
    const visible = state.activities.filter(a => a.start <= state.end && a.end >= state.start);
    visible.forEach(item => {
        const row = element('div', 'chart-row');
        const info = element('div', 'activity-info');
        info.append(element('div', 'activity-name', item.activity), element('div', 'sub-activity', item.subActivity));
        const timeline = element('div', 'timeline');
        timeline.style.gridTemplateColumns = `repeat(${count}, minmax(0, 1fr))`;
        months.forEach(() => timeline.append(element('div', 'timeline-cell')));
        const left = Math.max(item.start, state.start) - state.start;
        const span = Math.min(item.end, state.end) - Math.max(item.start, state.start) + 1;
        const bar = element('div', `bar ${item.color}`, item.subActivity);
        bar.title = `${item.subActivity}: ${monthLabel(item.start)} – ${monthLabel(item.end)}`;
        bar.style.left = `calc(${left / count * 100}% + 6px)`;
        bar.style.width = `calc(${span / count * 100}% - 12px)`;
        timeline.append(bar);
        row.append(info, timeline, element('div', 'amount-cell', 'Amount: Rs 2999'));
        chart.append(row);
    });
    if (!visible.length) chart.append(element('div', 'empty', 'No activities scheduled in this range.'));
    axis('bottom-axis', 'Timeline (inclusive months)', 'bottom-months', 'bottom-month');
    notice(`${visible.length} of ${state.activities.length} activities shown. Data is saved in this browser.`);
}
function clearEditor() {
    editingId = null;
    $('activity-form').reset();
    $('activity-start').value = monthValue(state.start);
    $('activity-end').value = monthValue(state.end);
    $('save-activity').textContent = 'Add activity';
}
function renderList() {
    $('activity-list').replaceChildren();
    state.activities.forEach(item => {
        const row = element('div', 'manage-row');
        row.append(element('span', '', `${item.activity} / ${item.subActivity} · ${monthLabel(item.start)} – ${monthLabel(item.end)}`));
        const edit = element('button', '', 'Edit');
        edit.type = 'button';
        edit.setAttribute('aria-label', `Edit ${item.activity} / ${item.subActivity}`);
        edit.addEventListener('click', () => {
            editingId = item.id;
            $('activity-name').value = item.activity;
            $('sub-activity').value = item.subActivity;
            $('activity-start').value = monthValue(item.start);
            $('activity-end').value = monthValue(item.end);
            $('activity-color').value = item.color;
            $('save-activity').textContent = 'Save changes';
            $('activity-name').focus();
        });
        const remove = element('button', '', 'Delete');
        remove.type = 'button';
        remove.setAttribute('aria-label', `Delete ${item.activity} / ${item.subActivity}`);
        remove.addEventListener('click', () => {
            if (!window.confirm(`Delete ${item.activity} / ${item.subActivity}?`)) return;
            state.activities = state.activities.filter(a => a.id !== item.id);
            if (editingId === item.id) clearEditor();
            persist(); renderChart(); renderList();
        });
        row.append(edit, remove);
        $('activity-list').append(row);
    });
}
$('range-form').addEventListener('submit', event => {
    event.preventDefault();
    const start = Number($('start-year').value) * 12 + Number($('start-month').value);
    const end = Number($('end-year').value) * 12 + Number($('end-month').value);
    if (!validRange(start, end) || end - start >= 60) {
        $('status').textContent = 'Select an end month on or after the start month, with a maximum range of 60 months.';
        return;
    }
    state.start = start; state.end = end;
    persist(); renderChart();
});
$('activity-form').addEventListener('submit', event => {
    event.preventDefault();
    const start = monthIndex($('activity-start').value);
    const end = monthIndex($('activity-end').value);
    const activity = $('activity-name').value.trim();
    const subActivity = $('sub-activity').value.trim();
    if (!activity || !subActivity || !validRange(start, end)) {
        $('status').textContent = 'Enter both activity names and an end month on or after the start month.';
        return;
    }
    const item = {id: editingId || `activity-${Date.now()}-${Math.random().toString(36).slice(2)}`, activity, subActivity, start, end, color: $('activity-color').value};
    if (editingId) state.activities = state.activities.map(a => a.id === editingId ? item : a);
    else state.activities.push(item);
    persist(); clearEditor(); renderChart(); renderList();
});
$('cancel-edit').addEventListener('click', clearEditor);
$('print-button').addEventListener('click', () => window.print());
setupRange();
clearEditor();
if (storageAvailable) persist();
renderChart();
renderList();
