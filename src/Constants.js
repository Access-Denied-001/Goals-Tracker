import {format} from "date-fns";

function formatOrdinalDay(date) {
    const day = date.getDate();
    const suffix = ['th', 'st', 'nd', 'rd'][
      day % 10 > 3 ? 0 : (((day % 100) - (day % 10) !== 10) * day) % 10
    ];
    return day + suffix;
};

export const SUCCESS_SOUND = 'success-sound.mp3';
export const FAILURE_SOUND = 'failure-sound.mp3';
export const NEUTRAL = 'neutral';
export const EMPTY_STRING = '';
export const STEPS = 'steps';

// COLORS 
export const COLOR_BLACK = '#000000';

// NUMBERS
export const NEGATIVE_ONE = -1;
export const NINETY_NINE_PLUS = '99+';

// ACTIONS
export const CLICK = 'click';
export const KEYDOWN = 'keydown';
export const CHANGE = 'change';
export const KEYUP = 'keyup';
export const ENTER = 'Enter';

// CLASSES
export const HAMBURGER_BTN_CLASS = '.hamburger-btn';
export const OVERLAY_CLASS = '.overlay';
export const ACTIVE_GOAL_SIDEBAR_CLASS = '.active-todo-sidebar';
export const LIST_SIDEBAR_CLASS = '.list-sidebar';
export const CATEGORY_CONTAINER_CLASS = '.category-container';
export const LOGIN_BTN_CLASS = '.login-btn';
export const COLOR_INPUT_CLASS = '.color-input';
export const HIDDEN_DATE_INPUT_CLASS = '.hidden-date-input';
export const CALENDAR_CLASS = '.calendar';
export const CALENDAR_NOGRID_CLASS = '.calendar-no-grid';
export const COLOR_SELECTOR_CLASS = '.color-selector';
export const NO_SELECTOR_CLASS = '.no-selection';
export const TITLE_WRAPPER_CLASS = '.title-wrapper';
export const DATE_INPUT_WRAPPER_CLASS = '.date-input-wrapper';
export const CALENDAR_MONTH_CLASS = '.calendar-month';
export const CALENDAR_DAY_CLASS = '.calendar-day';
export const CANCEL_COLOR_CLASS = '.cancel-color';
export const PRESET_CLASS = '.preset';
export const SEARCH_BAR_CLASS = '.search-bar';
export const FAVOURITES_BTN_CLASS = '.favourites-btn';
export const PLANNED_BTN_CLASS = '.planned-btn';
export const OVERDUE_BTN_CLASS = '.overdue-btn';
export const DUE_TODAY_CLASS = '.due-today-btn';
export const DUE_TOMORROW_BTN_CLASS = '.due-tomorrow-btn';
export const LIST_CONTAINER_CLASS = '.list-container';
export const LIST_CARD_CLASS = 'list-card';
export const SWAP_BTN_CLASS = 'swap-btn';
export const TOTAL_TASKS_WRAPPER_CLASS = 'total-tasks-wrapper';
export const TOTAL_TASKS_CLASS= 'total-tasks';
export const DELETE_BTN_CLASS = 'delete-btn';
export const ACTIVE_LIST_TITLE_CLASS = '.active-list-title';
export const INCOMPLETE_CONTAINER_CLASS = '.incomplete-container';
export const COMPLETE_CONTAINER_CLASS = '.complete-container';
export const TODO_CARD_CLASS = 'todo-card';
export const TODO_CARD_TASK_WRAPPER_CLASS = 'todo-card-task-wrapper';
export const TASK_TITLE_CLASS = 'task-title';
export const TASK_DETAILS_WRAPPER_CLASS = 'task-details-wrapper';
export const PARENT_LIST_TITLE_CLASS = 'parent-list-title';
export const TASK_DUE_DATE_CLASS = 'task-due-date';
export const PAST_DUE_CLASS = 'past-due';
export const SUB_TASKS_CLASS = 'sub-tasks';
export const TASK_NOTE_CLASS = 'task-note';
export const TASK_WRAPPER_CLASS = '.task-wrapper';
export const CHECK_BOX_CLASS = '.check-box';
export const CHECK_BOX_CLASS_1 = 'check-box';
export const DATA_COLOR_CLASS = 'data-color';
export const PRIORITY_CLASS = 'priority';
export const STEP_CARD_CLASS = 'step-card';
export const STEP_DELETE_BTN_CLASS = 'step-delete-btn';
export const FA_REGULAR_FA_STAR = 'fa-regular fa-star';
export const INCOMPLETE_TASK_FA_REGULAR_FA_CIRCLE = 'incomplete-task fa-regular fa-circle';
export const COMPLETE_TASK_FA_SOLID_FA_CIRCLE_CHECK = 'complete-task fa-solid fa-circle-check';
export const STEP_DELETE_FA_SOLID_FA_TRASH = 'step-delete fa-solid fa-trash';
export const FA_REGULAR_FA_PEN_TO_SQUARE = 'fa-regular fa-pen-to-square';
export const FA_SOLID_FA_STAR = '<i class="fa-solid fa-star"></i>';

// ID
export const NEW_LIST_INPUT_ID = '#new-list-input';
export const NEW_GOAL_INPUT_ID = '#new-todo-input';
export const TASK_TITLE_ID = 'task-title';
export const ADD_STEP_INPUT_ID = '#add-step-input';
export const TASK_DUE_DATE_ID = '#task-due-date';
export const TASK_DATE_SELECT_ID = '#task-date-select';
export const CURRENT_LABEL_COLOR_ID = '#current-label-color';
export const TASK_NOTE_ID = '#task-note';
export const TASK_DELETE_ID = '#task-delete';
export const ACTIVE_STEPS_CONTAINER_CLASS = '#active-steps-container';
// TOGGLES
export const ACTIVE = 'active';
export const HIDDEN = 'hidden';

// MESSAGES
export const LOGIN_ERROR = 'Cannot currently login.';
export const PAST_DUE = 'pastDue';
export const TODAY = 'today';
export const TOMORROW = 'tomorrow';
export const WITH_IN_A_WEEK = 'withinAWeek';
export const WITH_IN_A_YEAR = 'withinAYear';
export const MORE_THAN_A_YEAR = 'moreThanAYear';
export const PAST_DUE_MESSAGE = (daysUntilDue) => {
    return `Due ${daysUntilDue * -1} days ago`;
};
export const DUE_TODAY_MESSAGE = 'Due Today';
export const DUE_TOMORROW_MESSAGE = 'Due Tomorrow';
export const WITH_IN_A_WEEK_MESSAGE = (daysUntilDue) => {
    return `Due in ${daysUntilDue} days`;
};
export const WITHIN_A_YEAR_MESSAGE = (parsedDate) => {
    return `Due ${format(parsedDate, 'EEE, MMM do', {awareOfUnicodeTokens: true}).replace('do', formatOrdinalDay(parsedDate))}`
};
export const MORE_THAN_A_YEAR_MESSAGE = (parsedDate) => {
    return `Due ${format(parsedDate, 'EEE, MMM do, yyyy', {awareOfUnicodeTokens: true}).replace('do', formatOrdinalDay(parsedDate))}`;
};
export const NO_DUE_DATE_MESSAGE = 'No Due Date';
export const SELECT_COLOR_MESSAGE = 'Select a Color';

// MONTHS
export const JANUARY = 'JAN';
export const FEBRUARY = 'FEB';
export const MARCH = 'MAR';
export const APRIL = 'APR';
export const MAY = 'MAY';
export const JUNE = 'JUN';
export const JULY = 'JUL';
export const AUGUST = 'AUG';
export const SEPTEMBER = 'SEP';
export const OCTOBER = 'OCT';
export const NOVEMBER = 'NOV';
export const DECEMBER = 'DEC';
export const INVALID_MONTH = 'Invalid month index';

// LISTNAMES
export const SEARCH_RESULTS = 'Search Results';
export const FAVOURITES_RESULTS = 'Favourites';
export const MY_TASKS = 'My Tasks';

// INNER HTML
export const ITALIC_HTML = (className) => {
    return `<i class=${className}></i>`;
};

// HTML ELEMENTS
export const DIV = 'div';
export const P = 'p';
export const BUTTON = 'button';
export const STYLE = 'style';
