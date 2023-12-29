/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Builders/GoalsBuilder.js":
/*!**************************************!*\
  !*** ./src/Builders/GoalsBuilder.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListBuilder */ "./src/Builders/ListBuilder.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");


var GoalsBuilder = function GoalsBuilder(childOf, title, color, dueDate, priority, complete, note, steps) {
  var goal = {
    togglePriority: function togglePriority() {
      if (this.priority === true) {
        this.priority = false;
      } else {
        this.priority = true;
      }
    },
    toggleComplete: function toggleComplete() {
      if (this.complete === true) {
        this.complete = false;
      } else {
        this.complete = true;
      }
    },
    setColor: function setColor(newColor) {
      if (newColor === _Constants__WEBPACK_IMPORTED_MODULE_1__.COLOR_BLACK) this.color = _Constants__WEBPACK_IMPORTED_MODULE_1__.NEUTRAL;else this.color = newColor;
    }
  };
  goal.childOf = childOf;
  if (goal.childOf === undefined) {
    goal.childOf = _Constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING;
  }
  goal.title = title;
  if (goal.title === undefined) {
    goal.title = _Constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING;
  }
  goal.color = color;
  if (goal.color === undefined) {
    goal.color = _Constants__WEBPACK_IMPORTED_MODULE_1__.NEUTRAL;
  }
  goal.dueDate = dueDate;
  if (goal.dueDate === undefined) {
    goal.dueDate = _Constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING;
  }
  goal.priority = priority;
  if (goal.priority === undefined) {
    goal.priority = _Constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING;
  }
  goal.complete = complete;
  if (goal.complete == undefined) {
    goal.complete = _Constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING;
  }
  goal.note = note;
  if (goal.note === undefined) {
    goal.note = _Constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING;
  }
  goal.steps = steps;
  if (goal.steps === undefined) {
    goal.steps = (0,_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(_Constants__WEBPACK_IMPORTED_MODULE_1__.STEPS);
  }
  return goal;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoalsBuilder);

/***/ }),

/***/ "./src/Builders/ListBuilder.js":
/*!*************************************!*\
  !*** ./src/Builders/ListBuilder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var ListBuilder = function ListBuilder(listName) {
  // Debug why arrow function is not running
  var list = {
    addItem: function addItem(item) {
      this.items.push(item);
    },
    deleteItem: function deleteItem(item) {
      var index = this.items.indexOf(item);
      if (index !== _Constants__WEBPACK_IMPORTED_MODULE_0__.NEGATIVE_ONE) this.items.splice(index, 1);
    }
  };
  list.title = listName;
  list.items = [];
  return list;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListBuilder);

/***/ }),

/***/ "./src/Builders/StepBuilder.js":
/*!*************************************!*\
  !*** ./src/Builders/StepBuilder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var StepBuilder = function StepBuilder(title, complete) {
  var step = {
    toggleComplete: function toggleComplete() {
      if (this.complete === true) {
        this.complete = false;
      } else {
        this.complete = true;
      }
    }
  };
  step.title = title;
  step.complete = complete;
  if (step.complete === undefined) {
    step.complete = false;
  }
  return step;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepBuilder);

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIVE: () => (/* binding */ ACTIVE),
/* harmony export */   ACTIVE_GOAL_SIDEBAR_CLASS: () => (/* binding */ ACTIVE_GOAL_SIDEBAR_CLASS),
/* harmony export */   ACTIVE_LIST_TITLE_CLASS: () => (/* binding */ ACTIVE_LIST_TITLE_CLASS),
/* harmony export */   ACTIVE_STEPS_CONTAINER_CLASS: () => (/* binding */ ACTIVE_STEPS_CONTAINER_CLASS),
/* harmony export */   ADD_STEP_INPUT_ID: () => (/* binding */ ADD_STEP_INPUT_ID),
/* harmony export */   APRIL: () => (/* binding */ APRIL),
/* harmony export */   AUGUST: () => (/* binding */ AUGUST),
/* harmony export */   BUTTON: () => (/* binding */ BUTTON),
/* harmony export */   CALENDAR_CLASS: () => (/* binding */ CALENDAR_CLASS),
/* harmony export */   CALENDAR_DAY_CLASS: () => (/* binding */ CALENDAR_DAY_CLASS),
/* harmony export */   CALENDAR_MONTH_CLASS: () => (/* binding */ CALENDAR_MONTH_CLASS),
/* harmony export */   CALENDAR_NOGRID_CLASS: () => (/* binding */ CALENDAR_NOGRID_CLASS),
/* harmony export */   CANCEL_COLOR_CLASS: () => (/* binding */ CANCEL_COLOR_CLASS),
/* harmony export */   CATEGORY_CONTAINER_CLASS: () => (/* binding */ CATEGORY_CONTAINER_CLASS),
/* harmony export */   CHANGE: () => (/* binding */ CHANGE),
/* harmony export */   CHECK_BOX_CLASS: () => (/* binding */ CHECK_BOX_CLASS),
/* harmony export */   CHECK_BOX_CLASS_1: () => (/* binding */ CHECK_BOX_CLASS_1),
/* harmony export */   CLICK: () => (/* binding */ CLICK),
/* harmony export */   COLOR_BLACK: () => (/* binding */ COLOR_BLACK),
/* harmony export */   COLOR_INPUT_CLASS: () => (/* binding */ COLOR_INPUT_CLASS),
/* harmony export */   COLOR_SELECTOR_CLASS: () => (/* binding */ COLOR_SELECTOR_CLASS),
/* harmony export */   COMPLETE_CONTAINER_CLASS: () => (/* binding */ COMPLETE_CONTAINER_CLASS),
/* harmony export */   COMPLETE_TASK_FA_SOLID_FA_CIRCLE_CHECK: () => (/* binding */ COMPLETE_TASK_FA_SOLID_FA_CIRCLE_CHECK),
/* harmony export */   CURRENT_LABEL_COLOR_ID: () => (/* binding */ CURRENT_LABEL_COLOR_ID),
/* harmony export */   DATA_COLOR_CLASS: () => (/* binding */ DATA_COLOR_CLASS),
/* harmony export */   DATE_INPUT_WRAPPER_CLASS: () => (/* binding */ DATE_INPUT_WRAPPER_CLASS),
/* harmony export */   DECEMBER: () => (/* binding */ DECEMBER),
/* harmony export */   DELETE_BTN_CLASS: () => (/* binding */ DELETE_BTN_CLASS),
/* harmony export */   DIV: () => (/* binding */ DIV),
/* harmony export */   DUE_TODAY_CLASS: () => (/* binding */ DUE_TODAY_CLASS),
/* harmony export */   DUE_TODAY_MESSAGE: () => (/* binding */ DUE_TODAY_MESSAGE),
/* harmony export */   DUE_TOMORROW_BTN_CLASS: () => (/* binding */ DUE_TOMORROW_BTN_CLASS),
/* harmony export */   DUE_TOMORROW_MESSAGE: () => (/* binding */ DUE_TOMORROW_MESSAGE),
/* harmony export */   EMPTY_STRING: () => (/* binding */ EMPTY_STRING),
/* harmony export */   ENTER: () => (/* binding */ ENTER),
/* harmony export */   FAILURE_SOUND: () => (/* binding */ FAILURE_SOUND),
/* harmony export */   FAVOURITES_BTN_CLASS: () => (/* binding */ FAVOURITES_BTN_CLASS),
/* harmony export */   FAVOURITES_RESULTS: () => (/* binding */ FAVOURITES_RESULTS),
/* harmony export */   FA_REGULAR_FA_PEN_TO_SQUARE: () => (/* binding */ FA_REGULAR_FA_PEN_TO_SQUARE),
/* harmony export */   FA_REGULAR_FA_STAR: () => (/* binding */ FA_REGULAR_FA_STAR),
/* harmony export */   FA_SOLID_FA_STAR: () => (/* binding */ FA_SOLID_FA_STAR),
/* harmony export */   FEBRUARY: () => (/* binding */ FEBRUARY),
/* harmony export */   HAMBURGER_BTN_CLASS: () => (/* binding */ HAMBURGER_BTN_CLASS),
/* harmony export */   HIDDEN: () => (/* binding */ HIDDEN),
/* harmony export */   HIDDEN_DATE_INPUT_CLASS: () => (/* binding */ HIDDEN_DATE_INPUT_CLASS),
/* harmony export */   INCOMPLETE_CONTAINER_CLASS: () => (/* binding */ INCOMPLETE_CONTAINER_CLASS),
/* harmony export */   INCOMPLETE_TASK_FA_REGULAR_FA_CIRCLE: () => (/* binding */ INCOMPLETE_TASK_FA_REGULAR_FA_CIRCLE),
/* harmony export */   INVALID_MONTH: () => (/* binding */ INVALID_MONTH),
/* harmony export */   ITALIC_HTML: () => (/* binding */ ITALIC_HTML),
/* harmony export */   JANUARY: () => (/* binding */ JANUARY),
/* harmony export */   JULY: () => (/* binding */ JULY),
/* harmony export */   JUNE: () => (/* binding */ JUNE),
/* harmony export */   KEYDOWN: () => (/* binding */ KEYDOWN),
/* harmony export */   KEYUP: () => (/* binding */ KEYUP),
/* harmony export */   LIST_CARD_CLASS: () => (/* binding */ LIST_CARD_CLASS),
/* harmony export */   LIST_CONTAINER_CLASS: () => (/* binding */ LIST_CONTAINER_CLASS),
/* harmony export */   LIST_SIDEBAR_CLASS: () => (/* binding */ LIST_SIDEBAR_CLASS),
/* harmony export */   LOGIN_BTN_CLASS: () => (/* binding */ LOGIN_BTN_CLASS),
/* harmony export */   LOGIN_ERROR: () => (/* binding */ LOGIN_ERROR),
/* harmony export */   MARCH: () => (/* binding */ MARCH),
/* harmony export */   MAY: () => (/* binding */ MAY),
/* harmony export */   MORE_THAN_A_YEAR: () => (/* binding */ MORE_THAN_A_YEAR),
/* harmony export */   MORE_THAN_A_YEAR_MESSAGE: () => (/* binding */ MORE_THAN_A_YEAR_MESSAGE),
/* harmony export */   MY_TASKS: () => (/* binding */ MY_TASKS),
/* harmony export */   NEGATIVE_ONE: () => (/* binding */ NEGATIVE_ONE),
/* harmony export */   NEUTRAL: () => (/* binding */ NEUTRAL),
/* harmony export */   NEW_GOAL_INPUT_ID: () => (/* binding */ NEW_GOAL_INPUT_ID),
/* harmony export */   NEW_LIST_INPUT_ID: () => (/* binding */ NEW_LIST_INPUT_ID),
/* harmony export */   NINETY_NINE: () => (/* binding */ NINETY_NINE),
/* harmony export */   NOVEMBER: () => (/* binding */ NOVEMBER),
/* harmony export */   NO_DUE_DATE_MESSAGE: () => (/* binding */ NO_DUE_DATE_MESSAGE),
/* harmony export */   NO_SELECTOR_CLASS: () => (/* binding */ NO_SELECTOR_CLASS),
/* harmony export */   OCTOBER: () => (/* binding */ OCTOBER),
/* harmony export */   OVERDUE_BTN_CLASS: () => (/* binding */ OVERDUE_BTN_CLASS),
/* harmony export */   OVERLAY_CLASS: () => (/* binding */ OVERLAY_CLASS),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   PARENT_LIST_TITLE_CLASS: () => (/* binding */ PARENT_LIST_TITLE_CLASS),
/* harmony export */   PAST_DUE: () => (/* binding */ PAST_DUE),
/* harmony export */   PAST_DUE_CLASS: () => (/* binding */ PAST_DUE_CLASS),
/* harmony export */   PAST_DUE_MESSAGE: () => (/* binding */ PAST_DUE_MESSAGE),
/* harmony export */   PLANNED_BTN_CLASS: () => (/* binding */ PLANNED_BTN_CLASS),
/* harmony export */   PRESET_CLASS: () => (/* binding */ PRESET_CLASS),
/* harmony export */   PRIORITY_CLASS: () => (/* binding */ PRIORITY_CLASS),
/* harmony export */   SEARCH_BAR_CLASS: () => (/* binding */ SEARCH_BAR_CLASS),
/* harmony export */   SEARCH_RESULTS: () => (/* binding */ SEARCH_RESULTS),
/* harmony export */   SELECT_COLOR_MESSAGE: () => (/* binding */ SELECT_COLOR_MESSAGE),
/* harmony export */   SEPTEMBER: () => (/* binding */ SEPTEMBER),
/* harmony export */   STEPS: () => (/* binding */ STEPS),
/* harmony export */   STEP_CARD_CLASS: () => (/* binding */ STEP_CARD_CLASS),
/* harmony export */   STEP_DELETE_BTN_CLASS: () => (/* binding */ STEP_DELETE_BTN_CLASS),
/* harmony export */   STEP_DELETE_FA_SOLID_FA_TRASH: () => (/* binding */ STEP_DELETE_FA_SOLID_FA_TRASH),
/* harmony export */   STYLE: () => (/* binding */ STYLE),
/* harmony export */   SUB_TASKS_CLASS: () => (/* binding */ SUB_TASKS_CLASS),
/* harmony export */   SUCCESS_SOUND: () => (/* binding */ SUCCESS_SOUND),
/* harmony export */   SWAP_BTN_CLASS: () => (/* binding */ SWAP_BTN_CLASS),
/* harmony export */   TASK_DATE_SELECT_ID: () => (/* binding */ TASK_DATE_SELECT_ID),
/* harmony export */   TASK_DELETE_ID: () => (/* binding */ TASK_DELETE_ID),
/* harmony export */   TASK_DETAILS_WRAPPER_CLASS: () => (/* binding */ TASK_DETAILS_WRAPPER_CLASS),
/* harmony export */   TASK_DUE_DATE_CLASS: () => (/* binding */ TASK_DUE_DATE_CLASS),
/* harmony export */   TASK_DUE_DATE_ID: () => (/* binding */ TASK_DUE_DATE_ID),
/* harmony export */   TASK_NOTE_CLASS: () => (/* binding */ TASK_NOTE_CLASS),
/* harmony export */   TASK_NOTE_ID: () => (/* binding */ TASK_NOTE_ID),
/* harmony export */   TASK_TITLE_CLASS: () => (/* binding */ TASK_TITLE_CLASS),
/* harmony export */   TASK_TITLE_ID: () => (/* binding */ TASK_TITLE_ID),
/* harmony export */   TASK_WRAPPER_CLASS: () => (/* binding */ TASK_WRAPPER_CLASS),
/* harmony export */   TITLE_WRAPPER_CLASS: () => (/* binding */ TITLE_WRAPPER_CLASS),
/* harmony export */   TODAY: () => (/* binding */ TODAY),
/* harmony export */   TODO_CARD_CLASS: () => (/* binding */ TODO_CARD_CLASS),
/* harmony export */   TODO_CARD_TASK_WRAPPER_CLASS: () => (/* binding */ TODO_CARD_TASK_WRAPPER_CLASS),
/* harmony export */   TOMORROW: () => (/* binding */ TOMORROW),
/* harmony export */   TOTAL_TASKS_CLASS: () => (/* binding */ TOTAL_TASKS_CLASS),
/* harmony export */   TOTAL_TASKS_WRAPPER_CLASS: () => (/* binding */ TOTAL_TASKS_WRAPPER_CLASS),
/* harmony export */   WITHIN_A_YEAR_MESSAGE: () => (/* binding */ WITHIN_A_YEAR_MESSAGE),
/* harmony export */   WITH_IN_A_WEEK: () => (/* binding */ WITH_IN_A_WEEK),
/* harmony export */   WITH_IN_A_WEEK_MESSAGE: () => (/* binding */ WITH_IN_A_WEEK_MESSAGE),
/* harmony export */   WITH_IN_A_YEAR: () => (/* binding */ WITH_IN_A_YEAR)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");

function formatOrdinalDay(date) {
  var day = date.getDate();
  var suffix = ['th', 'st', 'nd', 'rd'][day % 10 > 3 ? 0 : (day % 100 - day % 10 !== 10) * day % 10];
  return day + suffix;
}
;
var SUCCESS_SOUND = 'success-sound.mp3';
var FAILURE_SOUND = 'failure-sound.mp3';
var NEUTRAL = 'neutral';
var EMPTY_STRING = '';
var STEPS = 'steps';

// COLORS 
var COLOR_BLACK = '#000000';

// NUMBERS
var NEGATIVE_ONE = -1;
var NINETY_NINE = '99';

// ACTIONS
var CLICK = 'click';
var KEYDOWN = 'keydown';
var CHANGE = 'change';
var KEYUP = 'keyup';
var ENTER = 'Enter';

// CLASSES
var HAMBURGER_BTN_CLASS = '.hamburger-btn';
var OVERLAY_CLASS = '.overlay';
var ACTIVE_GOAL_SIDEBAR_CLASS = '.active-todo-sidebar';
var LIST_SIDEBAR_CLASS = '.list-sidebar';
var CATEGORY_CONTAINER_CLASS = '.category-container';
var LOGIN_BTN_CLASS = '.login-btn';
var COLOR_INPUT_CLASS = '.color-input';
var HIDDEN_DATE_INPUT_CLASS = '.hidden-date-input';
var CALENDAR_CLASS = '.calendar';
var CALENDAR_NOGRID_CLASS = '.calendar-no-grid';
var COLOR_SELECTOR_CLASS = '.color-selector';
var NO_SELECTOR_CLASS = '.no-selection';
var TITLE_WRAPPER_CLASS = '.title-wrapper';
var DATE_INPUT_WRAPPER_CLASS = '.date-input-wrapper';
var CALENDAR_MONTH_CLASS = '.calendar-month';
var CALENDAR_DAY_CLASS = '.calendar-day';
var CANCEL_COLOR_CLASS = '.cancel-color';
var PRESET_CLASS = '.preset';
var SEARCH_BAR_CLASS = '.search-bar';
var FAVOURITES_BTN_CLASS = '.favourites-btn';
var PLANNED_BTN_CLASS = '.planned-btn';
var OVERDUE_BTN_CLASS = '.overdue-btn';
var DUE_TODAY_CLASS = '.due-today-btn';
var DUE_TOMORROW_BTN_CLASS = '.due-tomorrow-btn';
var LIST_CONTAINER_CLASS = '.list-container';
var LIST_CARD_CLASS = 'list-card';
var SWAP_BTN_CLASS = 'swap-btn';
var TOTAL_TASKS_WRAPPER_CLASS = 'total-tasks-wrapper';
var TOTAL_TASKS_CLASS = 'total-tasks';
var DELETE_BTN_CLASS = 'delete-btn';
var ACTIVE_LIST_TITLE_CLASS = '.active-list-title';
var INCOMPLETE_CONTAINER_CLASS = '.incomplete-container';
var COMPLETE_CONTAINER_CLASS = '.complete-container';
var TODO_CARD_CLASS = 'todo-card';
var TODO_CARD_TASK_WRAPPER_CLASS = 'todo-card-task-wrapper';
var TASK_TITLE_CLASS = 'task-title';
var TASK_DETAILS_WRAPPER_CLASS = 'task-details-wrapper';
var PARENT_LIST_TITLE_CLASS = 'parent-list-title';
var TASK_DUE_DATE_CLASS = 'task-due-date';
var PAST_DUE_CLASS = 'past-due';
var SUB_TASKS_CLASS = 'sub-tasks';
var TASK_NOTE_CLASS = 'task-note';
var TASK_WRAPPER_CLASS = '.task-wrapper';
var CHECK_BOX_CLASS = '.check-box';
var CHECK_BOX_CLASS_1 = 'check-box';
var DATA_COLOR_CLASS = 'data-color';
var PRIORITY_CLASS = 'priority';
var STEP_CARD_CLASS = 'step-card';
var STEP_DELETE_BTN_CLASS = 'step-delete-btn';
var FA_REGULAR_FA_STAR = 'fa-regular fa-star';
var INCOMPLETE_TASK_FA_REGULAR_FA_CIRCLE = 'incomplete-task fa-regular fa-circle';
var COMPLETE_TASK_FA_SOLID_FA_CIRCLE_CHECK = 'complete-task fa-solid fa-circle-check';
var STEP_DELETE_FA_SOLID_FA_TRASH = 'step-delete fa-solid fa-trash';
var FA_REGULAR_FA_PEN_TO_SQUARE = 'fa-regular fa-pen-to-square';
var FA_SOLID_FA_STAR = '<i class="fa-solid fa-star"></i>';

// ID
var NEW_LIST_INPUT_ID = '#new-list-input';
var NEW_GOAL_INPUT_ID = '#new-todo-input';
var TASK_TITLE_ID = 'task-title';
var ADD_STEP_INPUT_ID = '#add-step-input';
var TASK_DUE_DATE_ID = '#task-due-date';
var TASK_DATE_SELECT_ID = '#task-date-select';
var CURRENT_LABEL_COLOR_ID = '#current-label-color';
var TASK_NOTE_ID = '#task-note';
var TASK_DELETE_ID = '#task-delete';
var ACTIVE_STEPS_CONTAINER_CLASS = '#active-steps-container';
// TOGGLES
var ACTIVE = 'active';
var HIDDEN = 'hidden';

// MESSAGES
var LOGIN_ERROR = 'Cannot currently login.';
var PAST_DUE = 'pastDue';
var TODAY = 'today';
var TOMORROW = 'tomorrow';
var WITH_IN_A_WEEK = 'withinAWeek';
var WITH_IN_A_YEAR = 'withinAYear';
var MORE_THAN_A_YEAR = 'moreThanAYear';
var PAST_DUE_MESSAGE = function PAST_DUE_MESSAGE(daysUntilDue) {
  return "Due ".concat(daysUntilDue * -1, " days ago");
};
var DUE_TODAY_MESSAGE = 'Due Today';
var DUE_TOMORROW_MESSAGE = 'Due Tomorrow';
var WITH_IN_A_WEEK_MESSAGE = function WITH_IN_A_WEEK_MESSAGE(daysUntilDue) {
  return "Due in ".concat(daysUntilDue, " days");
};
var WITHIN_A_YEAR_MESSAGE = function WITHIN_A_YEAR_MESSAGE(parsedDate) {
  return "Due ".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(parsedDate, 'EEE, MMM do', {
    awareOfUnicodeTokens: true
  }).replace('do', formatOrdinalDay(parsedDate)));
};
var MORE_THAN_A_YEAR_MESSAGE = function MORE_THAN_A_YEAR_MESSAGE(parsedDate) {
  return "Due ".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(parsedDate, 'EEE, MMM do, yyyy', {
    awareOfUnicodeTokens: true
  }).replace('do', formatOrdinalDay(parsedDate)));
};
var NO_DUE_DATE_MESSAGE = 'No Due Date';
var SELECT_COLOR_MESSAGE = 'Select a Color';

// MONTHS
var JANUARY = 'JAN';
var FEBRUARY = 'FEB';
var MARCH = 'MAR';
var APRIL = 'APR';
var MAY = 'MAY';
var JUNE = 'JUN';
var JULY = 'JUL';
var AUGUST = 'AUG';
var SEPTEMBER = 'SEP';
var OCTOBER = 'OCT';
var NOVEMBER = 'NOV';
var DECEMBER = 'DEC';
var INVALID_MONTH = 'Invalid month index';

// LISTNAMES
var SEARCH_RESULTS = 'Search Results';
var FAVOURITES_RESULTS = 'Favourites';
var MY_TASKS = 'My Tasks';

// INNER HTML
var ITALIC_HTML = function ITALIC_HTML(className) {
  return "<i class=".concat(className, "></i>");
};

// HTML ELEMENTS
var DIV = 'div';
var P = 'p';
var BUTTON = 'button';
var STYLE = 'style';

/***/ }),

/***/ "./src/LocalStorage.js":
/*!*****************************!*\
  !*** ./src/LocalStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMasterListFromLocalStorage: () => (/* binding */ getMasterListFromLocalStorage),
/* harmony export */   setMasterListToLocalStorage: () => (/* binding */ setMasterListToLocalStorage)
/* harmony export */ });
function getMasterListFromLocalStorage(MasterList) {
  var jsonResponse = localStorage.getItem('`masterList`');
  if (jsonResponse) {
    var savedData = JSON.parse(jsonResponse);
    MasterList.reconstructFromStorage(savedData);
  } else {
    MasterList.buildDefault();
    console.warn('No saved data found in local storage');
  }
}
;
function setMasterListToLocalStorage(MasterList) {
  var jsonResponse = JSON.stringify(MasterList.prepareForStorage());
  localStorage.setItem('masterList', jsonResponse);
}
;


/***/ }),

/***/ "./src/MasterList.js":
/*!***************************!*\
  !*** ./src/MasterList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builders/ListBuilder */ "./src/Builders/ListBuilder.js");
/* harmony import */ var _Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builders/GoalsBuilder */ "./src/Builders/GoalsBuilder.js");
/* harmony import */ var _Builders_StepBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builders/StepBuilder */ "./src/Builders/StepBuilder.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");




var MasterList = function () {
  var currList = [];
  var setActiveList = function setActiveList(list) {
    return currList = list;
  };
  var getActiveList = function getActiveList() {
    return currList;
  };
  var prepareForStorage = function prepareForStorage() {
    var activeListIndex = MasterList.items.indexOf(currList);
    return {
      title: MasterList.title,
      items: MasterList.items.map(function (list) {
        return {
          title: list.title,
          items: list.items.map(function (todo) {
            return {
              title: todo.title,
              color: todo.color,
              dueDate: todo.dueDate,
              priority: todo.priority,
              complete: todo.complete,
              note: todo.note,
              steps: todo.steps.items.map(function (step) {
                return {
                  title: step.title,
                  complete: step.complete
                };
              })
            };
          })
        };
      }),
      activeListIndex: activeListIndex
    };
  };
  var reconstructFromStorage = function reconstructFromStorage(savedData) {
    var newMasterList = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(savedData.title);
    newMasterList.items = savedData.items.map(function (listData) {
      var newList = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(listData.title);
      newList.items = listData.items.map(function (todoData) {
        var steps = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])('steps');
        steps.items = todoData.steps.map(function (stepData) {
          return (0,_Builders_StepBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(stepData.title, stepData.complete);
        });
        return (0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(newList, todoData.title, todoData.color, todoData.dueDate, todoData.priority, todoData.complete, todoData.note, steps);
      });
      return newList;
    });
    Object.assign(MasterList, newMasterList);
    MasterList.setActiveList(MasterList.items[savedData.activeListIndex]);
  };
  var buildDefault = function buildDefault() {
    var newMasterList = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])('Master List');
    var defaultList = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])('My Tasks');
    newMasterList.addItem(defaultList);
    defaultList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultList, 'Welcome to Tasker!'));
    defaultList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultList, 'Create a new task.', '#F1A3BB'));
    defaultList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultList, 'Prioritize a task.', '#F4C4A9', undefined, true));
    var today = new Date();
    defaultList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultList, 'Add a due date.', '#F2EE8F', (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(today, 'yyyy-MM-dd')));
    var steps = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])('Steps');
    steps.addItem((0,_Builders_StepBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])('Open todo details.', true));
    steps.addItem((0,_Builders_StepBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])('Delete a step.', false));
    steps.addItem((0,_Builders_StepBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])('Edit a note.', false));
    defaultList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultList, 'Click to add a step.', '#96D470', (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(today, 1), 'yyyy-MM-dd'), false, false, 'You can also add notes!', steps));
    defaultList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultList, 'Start a new list.', '#959FEF', (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(today, 7), 'yyyy-MM-dd')));
    defaultList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultList, 'Discover Tasker!', '#AC68D7', (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(today, -1), 'yyyy-MM-dd'), true, true));
    Object.assign(MasterList, newMasterList);
    MasterList.setActiveList(defaultList);
  };
  return Object.assign(Object.create((0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])('Master List')), {
    setActiveList: setActiveList,
    getActiveList: getActiveList,
    prepareForStorage: prepareForStorage,
    reconstructFromStorage: reconstructFromStorage,
    buildDefault: buildDefault
  });
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MasterList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font: inherit;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nhtml, body {\r\n  min-height: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\nul, ol {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nimg, picture, svg, video {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput, select, textarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *, *::before, *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\ninput[type='color'] {\r\n  outline: none;\r\n  -webkit-appearance: none;\r\n}\r\n\r\ninput[type='color']::-webkit-color-swatch-wrapper {\r\n  padding: 0;\r\n}\r\n\r\ninput[type='color']::-webkit-color-swatch {\r\n  border: none;\r\n}\r\n\r\ninput[type='color']::-moz-color-swatch {\r\n  border: none;\r\n}\r\n\r\ninput[type='color']::-moz-focus-inner {\r\n  border: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE;IACE,qBAAqB;EACvB;;EAEA;IACE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;AACX","sourcesContent":["*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font: inherit;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nhtml, body {\r\n  min-height: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\nul, ol {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nimg, picture, svg, video {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput, select, textarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *, *::before, *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\ninput[type='color'] {\r\n  outline: none;\r\n  -webkit-appearance: none;\r\n}\r\n\r\ninput[type='color']::-webkit-color-swatch-wrapper {\r\n  padding: 0;\r\n}\r\n\r\ninput[type='color']::-webkit-color-swatch {\r\n  border: none;\r\n}\r\n\r\ninput[type='color']::-moz-color-swatch {\r\n  border: none;\r\n}\r\n\r\ninput[type='color']::-moz-focus-inner {\r\n  border: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  /*Colors*/\r\n  --clr-accent-300: hsl(198, 100%, 50%);\r\n  --clr-accent-400: hsl(198, 100%, 42%);\r\n  --clr-accent-500: hsl(191, 100%, 33%);\r\n  --clr-accent-700: hsl(191, 70%, 40%);\r\n\r\n  --clr-panel-400: hsl(199, 13%, 33%);\r\n  --clr-panel-500: hsl(199, 13%, 22%);\r\n  --clr-panel-600: hsl(199, 13%, 18%);\r\n\r\n  --clr-neutral-100: hsl(0, 0%, 99%);\r\n  --clr-neutral-200: hsl(0, 0%, 80%);\r\n  --clr-neutral-300: hsl(0, 0%, 66%);\r\n  --clr-neutral-400: hsl(0, 0%, 50%);\r\n  --clr-neutral-500: hsl(0, 0%, 33%);\r\n  --clr-neutral-525: hsl(0, 0%, 27%);\r\n  --clr-neutral-550: hsl(0, 0%, 20%);\r\n  --clr-neutral-600: hsl(0, 0%, 17%);\r\n  --clr-neutral-700: hsl(0, 0%, 11%);\r\n  --clr-neutral-900: hsl(0, 0%, 0%);\r\n\r\n  --clr-list-card: hsla(0, 0%, 0%, 0.22);\r\n  --clr-list-card-hover: hsla(0, 0%, 0%, 0.44);\r\n  --clr-past-due: hsl(0, 72%, 62%);\r\n  --clr-priority: hsl(49, 100%, 50%);\r\n  --clr-completed-task: var(--clr-accent-400);\r\n\r\n  /*Font Family*/\r\n  --ff-primary: Roboto, Arial, sans-serif;\r\n\r\n  /*Font Weight*/\r\n  --fw-reg: 400;\r\n  --fw-bold: 700;\r\n\r\n  /*Font Sizing*/\r\n\r\n  --fs-200: clamp(0.63rem, calc(0.82rem + -0.16vw), 0.79rem);\r\n  --fs-300: clamp(0.75rem, calc(0.9rem + 0.04vw), 0.95rem);\r\n  --fs-400: clamp(0.9rem, calc(0.98rem + 0.13vw), 1.13rem);\r\n  --fs-500: clamp(1.13rem, calc(1.05rem + 0.37vw), 1.5rem);\r\n  --fs-600: clamp(1.27rem, calc(1.12rem + 0.73vw), 2rem);\r\n  --fs-700: clamp(1.42rem, calc(1.18rem + 1.24vw), 2.66rem);\r\n  --fs-800: clamp(1.6rem, calc(1.21rem + 1.95vw), 3.55rem);\r\n  --fs-900: clamp(1.8rem, calc(1.22rem + 2.93vw), 4.74rem);\r\n\r\n  /*Spacing*/\r\n\r\n  /* One-up pairs */\r\n  --spc-100: clamp(0.25rem, calc(0.19rem + 0.31vw), 0.56rem);\r\n  --spc-200: clamp(0.5rem, calc(0.43rem + 0.38vw), 0.88rem);\r\n  --spc-300: clamp(0.75rem, calc(0.68rem + 0.38vw), 1.13rem);\r\n  --spc-400: clamp(1rem, calc(0.86rem + 0.69vw), 1.69rem);\r\n  --spc-500: clamp(1.5rem, calc(1.35rem + 0.75vw), 2.25rem);\r\n  --spc-600: clamp(2rem, calc(1.73rem + 1.38vw), 3.38rem);\r\n  --spc-700: clamp(3rem, calc(2.7rem + 1.5vw), 4.5rem);\r\n  --spc-800: clamp(4rem, calc(3.45rem + 2.75vw), 6.75rem);\r\n\r\n  /*Misc*/\r\n  --border-radius: 8px;\r\n  --color-picker-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  font-family: var(--ff-primary);\r\n  font-size: var(--fs-400);\r\n  color: var(--clr-neutral-100);\r\n}\r\n\r\n.btn-hover-transition {\r\n  filter: brightness(0.9);\r\n\r\n  transition: 0.12s;\r\n}\r\n\r\n.btn-hover-transition:hover,\r\n.btn-hover-transition:focus-within {\r\n  filter: brightness(1.05);\r\n  scale: 1.03;\r\n\r\n  transition: 0.12s;\r\n}\r\n\r\n/***---HEADER---***/\r\n\r\nheader {\r\n  position: relative;\r\n  z-index: 1;\r\n  background-color: var(--clr-panel-600);\r\n}\r\n\r\n.header-wrapper {\r\n  height: 6vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: var(--spc-300);\r\n  box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  align-content: center;\r\n  height: 5vh;\r\n}\r\n\r\n.hamburger-btn {\r\n  display: none;\r\n  color: var(--clr-accent-300);\r\n  font-size: 2.5rem;\r\n  transform-origin: left;\r\n}\r\n\r\n.hamburger-btn > i {\r\n  position: relative;\r\n  top: calc(var(--spc-100) * 0.25);\r\n}\r\n\r\n.login-btn {\r\n  border-radius: var(--border-radius);\r\n  padding-block: var(--spc-100);\r\n  padding-inline: var(--spc-200);\r\n\r\n  font-size: calc(var(--fs-500) * 0.9);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n\r\n  color: var(--clr-neutral-600);\r\n  background-color: var(--clr-accent-300);\r\n  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/***---MAIN---***/\r\n\r\nmain {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: minmax(0, clamp(15rem, 20vw, 25rem)) 3fr;\r\n\r\n  background-color: var(--clr-panel-400);\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  font-size: var(--fs-500);\r\n  font-weight: bold;\r\n  letter-spacing: 0.66px;\r\n  color: var(--clr-neutral-100);\r\n}\r\n\r\ninput[type='text'],\r\ninput[type='search'],\r\ntextarea {\r\n  padding: 0.33rem;\r\n  padding-left: var(--spc-200);\r\n  border-radius: var(--border-radius);\r\n  background-color: rgba(0, 0, 0, 0.35);\r\n  color: var(--clr-neutral-100);\r\n  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/***---SIDEBAR---***/\r\n\r\n.sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-block: var(--spc-400);\r\n  padding-inline: var(--spc-200);\r\n  background-color: var(--clr-panel-500);\r\n}\r\n\r\n.list-sidebar {\r\n  box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.active-todo-sidebar {\r\n  box-shadow: -6px 0px 12px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.sidebar input {\r\n  width: 100%;\r\n}\r\n\r\n.preset-lists-container,\r\n.list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-block: var(--spc-200);\r\n\r\n  width: 100%;\r\n  gap: var(--spc-100);\r\n}\r\n\r\n.preset-list-card,\r\n.list-card {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: calc(var(--spc-100) * 0.5);\r\n  border-radius: var(--border-radius);\r\n  background-color: var(--clr-list-card);\r\n  color: var(--clr-neutral-200);\r\n}\r\n\r\n.preset-list-card:hover,\r\n.list-card:hover {\r\n  background-color: var(--clr-list-card-hover);\r\n}\r\n\r\n.list-sidebar button {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: var(--clr-neutral-100);\r\n}\r\n\r\n.list-container {\r\n  flex-grow: 1;\r\n}\r\n\r\n.lists-wrapper {\r\n  height: 76vh;\r\n  width: 100%;\r\n  margin-block: var(--spc-200);\r\n  padding-inline: var(--spc-200);\r\n  overflow-y: auto;\r\n}\r\n\r\n.list-sidebar .swap-btn {\r\n  text-align: left;\r\n  padding-left: var(--spc-200);\r\n  width: 100%;\r\n}\r\n\r\n.list-card {\r\n  display: flex;\r\n}\r\n\r\n.list-card .total-tasks-wrapper {\r\n  position: relative;\r\n\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  border-radius: 99px;\r\n  height: 1.2rem;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n.list-card .total-tasks {\r\n  position: absolute;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n\r\n  transform: translate(-60%, -45%);\r\n\r\n  color: var(--clr-neutral-400);\r\n  font-weight: 900;\r\n  font-size: calc(var(--fs-200) * 1.1);\r\n  text-align: center;\r\n  letter-spacing: -1px;\r\n}\r\n\r\n.list-card .delete-btn {\r\n  padding-inline: var(--spc-100);\r\n  color: var(--clr-neutral-400);\r\n}\r\n\r\n/***---ACTIVE LIST---***/\r\n\r\n.active-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  padding: var(--spc-300);\r\n}\r\n\r\n.category-container {\r\n  margin-bottom: var(--spc-500);\r\n  width: clamp(15rem, 66vw, 50rem);\r\n}\r\n\r\n.title-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--spc-200);\r\n\r\n  padding-block: calc(var(--spc-100) * 0.5);\r\n  padding-inline: var(--spc-200);\r\n  margin-block: var(--spc-200);\r\n\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border-radius: var(--border-radius);\r\n  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.category-container .fa-angle-down {\r\n  transition: transform 0.16s;\r\n}\r\n\r\n.category-container.hidden .fa-angle-down {\r\n  transform: rotate(-90deg);\r\n\r\n  transition: transform 0.16s;\r\n}\r\n\r\n.category-container.hidden .tasks {\r\n  display: none;\r\n}\r\n\r\n.todo-container {\r\n  isolation: isolate;\r\n  flex-grow: 1;\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n  gap: var(--spc-300);\r\n  padding-inline: var(--spc-200);\r\n}\r\n\r\n.complete-container,\r\n.incomplete-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.complete-container > * {\r\n  filter: brightness(0.8);\r\n}\r\n\r\n.complete-container .task-title {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.complete-container .past-due {\r\n  color: var(--clr-neutral-300);\r\n}\r\n\r\n.todo-card:not([data-color='neutral']):before {\r\n  content: '';\r\n  z-index: -1;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 20%;\r\n  height: 100%;\r\n  border-radius: var(--border-radius) 0 0 var(--border-radius);\r\n}\r\n\r\n.todo-card,\r\n.step-card {\r\n  z-index: 1;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: var(--spc-200);\r\n  padding-block: var(--spc-100);\r\n\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.todo-card:hover {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.check-box {\r\n  scale: 1.2;\r\n  margin-right: var(--spc-200);\r\n  color: var(--clr-neutral-200);\r\n}\r\n\r\n.complete-task {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--clr-completed-task);\r\n}\r\n\r\n.todo-card-task-wrapper {\r\n  letter-spacing: 0.66px;\r\n}\r\n\r\n.task-details-wrapper {\r\n  display: flex;\r\n  font-size: var(--fs-300);\r\n  gap: var(--spc-200);\r\n  color: var(--clr-neutral-300);\r\n  letter-spacing: 0.66px;\r\n}\r\n\r\n.past-due {\r\n  color: var(--clr-past-due);\r\n}\r\n\r\n.priority {\r\n  margin-left: auto;\r\n  color: var(--clr-neutral-200);\r\n}\r\n\r\n.priority > .fa-solid {\r\n  color: var(--clr-priority);\r\n}\r\n\r\n/*Todo Input*/\r\n\r\n.todo-input {\r\n  display: flex;\r\n  gap: var(--spc-200);\r\n\r\n  background-color: rgba(0, 0, 0, 0.33);\r\n  padding: var(--spc-300);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.todo-input > * {\r\n  border-radius: var(--border-radius);\r\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.33);\r\n}\r\n\r\n.input-wrapper {\r\n  position: relative;\r\n  width: clamp(13rem, 10rem + 33vw, 35rem);\r\n  height: 2.5rem;\r\n}\r\n\r\n.input-wrapper > input {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.input-wrapper > .date-input-wrapper {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.date-input-wrapper {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  position: relative;\r\n  height: 2.5rem;\r\n}\r\n\r\n.calendar-icon-wrapper {\r\n  isolation: isolate;\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.calendar-icon-wrapper > img {\r\n  display: none;\r\n  height: 100%;\r\n}\r\n\r\n.calendar-icon-wrapper > img.active {\r\n  display: block;\r\n}\r\n\r\n.calendar-icon-wrapper > .calendar-month,\r\n.calendar-icon-wrapper > .calendar-day {\r\n  z-index: 1;\r\n  position: absolute;\r\n  display: none;\r\n  font-weight: bold;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\n.calendar-icon-wrapper:has(.calendar-no-grid.active) > .cal-date {\r\n  display: block;\r\n}\r\n\r\n.calendar-icon-wrapper > .calendar-month {\r\n  font-size: var(--fs-200);\r\n  scale: 0.9;\r\n  transform: translate(-50%, -115%);\r\n}\r\n\r\n.calendar-icon-wrapper > .calendar-day {\r\n  color: black;\r\n  transform: translate(-50%, -27%);\r\n}\r\n\r\n.hidden-date-input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.hidden-date-input::-webkit-calendar-picker-indicator {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.color-selector {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 3.24rem;\r\n}\r\n\r\n.color-selector.no-selection {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f1a3bb,\r\n    #f4c4a9,\r\n    #f2ee8f,\r\n    #96d470,\r\n    #959fef,\r\n    #ac68d7\r\n  );\r\n}\r\n\r\n.color-selector:focus-within .color-selector-menu {\r\n  display: grid;\r\n}\r\n\r\n.color-selector-menu {\r\n  position: absolute;\r\n  display: none;\r\n  gap: var(--spc-100);\r\n  left: 50%;\r\n  transform: translate(calc(-50%), -115%);\r\n\r\n  background-color: var(--clr-neutral-200);\r\n  border-radius: var(--border-radius);\r\n  padding: var(--spc-200);\r\n}\r\n\r\n.color-selector-menu::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -9px;\r\n  left: 50%;\r\n  transform: translateX(-50%) rotate(-45deg);\r\n  border-width: 10px;\r\n  border-style: solid;\r\n  border-color: transparent transparent var(--clr-neutral-200)\r\n    var(--clr-neutral-200);\r\n  border-radius: 0px 0px 0px 4px;\r\n}\r\n\r\n.color-input-wrapper {\r\n  display: flex;\r\n  gap: var(--spc-100);\r\n}\r\n\r\n.color-input-wrapper > *,\r\n.presets > *,\r\n.color-selector-menu {\r\n  box-shadow: var(--color-picker-shadow);\r\n}\r\n\r\n.color-input {\r\n  width: calc(1.5rem * 2 + var(--spc-100));\r\n  height: 1.5rem;\r\n\r\n  border: 2px solid #ffffff;\r\n  border-radius: var(--border-radius);\r\n  overflow: hidden;\r\n}\r\n\r\n.cancel-color {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  border: 2px solid #ffffff;\r\n  border-radius: var(--border-radius);\r\n  color: red;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.cancel-color > i {\r\n  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.33));\r\n}\r\n\r\n.presets {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: calc((1.5rem + var(--spc-100)) * 3 - var(--spc-100));\r\n  gap: var(--spc-100);\r\n}\r\n\r\n.preset {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  cursor: pointer;\r\n  border: 2px solid #ffffff;\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n/***---TODO DETAILS SIDEBAR---***/\r\n\r\n.details-card {\r\n  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  gap: var(--spc-200);\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: var(--spc-200);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.task-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#active-steps-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  gap: 0.25rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.step-delete-btn {\r\n  margin-left: auto;\r\n}\r\n\r\n.settings-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  min-height: 3.5rem;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: var(--spc-200);\r\n  padding-left: var(--spc-400);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.settings-wrapper .date-input-wrapper,\r\n.settings-wrapper .color-selector {\r\n  margin-left: auto;\r\n  border-radius: var(--border-radius);\r\n\r\n  width: 2.5rem;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n#task-note {\r\n  width: 100%;\r\n  height: 20%;\r\n  resize: vertical;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.active-todo-sidebar #task-delete {\r\n  margin-top: auto;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: var(--spc-200);\r\n  border-radius: var(--border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.active-todo-sidebar {\r\n  position: absolute;\r\n  width: clamp(15rem, 5rem + 15vw, 25rem);\r\n  height: 100%;\r\n  right: 0;\r\n\r\n  display: none;\r\n}\r\n\r\n.active-todo-sidebar.active {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--spc-200);\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n\r\n  display: none;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n}\r\n\r\n/***---FOOTER---***/\r\n\r\nbody {\r\n  /* footer support */\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nfooter {\r\n  height: 6vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: auto;\r\n  padding: var(--spacing-xs);\r\n  padding-top: var(--spacing-xl);\r\n  background-color: var(--clr-panel-600);\r\n}\r\n\r\n#copyright {\r\n  font-size: 1.24rem;\r\n  font-weight: 700;\r\n  text-decoration-line: none;\r\n  letter-spacing: 0.5px;\r\n  color: var(--clr-neutral-300);\r\n}\r\n\r\n.fa-github {\r\n  font-size: 1.38rem;\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n\r\n.fa-github:hover {\r\n  transform: rotate(360deg) scale(1.2);\r\n}\r\n\r\n/***---SCROLLBAR---***/\r\n\r\n/* WebKit-based browsers (Chrome, Safari, etc.) */\r\n::-webkit-scrollbar {\r\n  width: 8px; /* Width of the scrollbar */\r\n  height: 8px; /* Height of the scrollbar on horizontal containers */\r\n}\r\n\r\n/* Track (the background of the scrollbar) */\r\n::-webkit-scrollbar-track {\r\n  background-color: #f0f0f0; /* Background color of the track */\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n/* Thumb (the actual scroll handle) */\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--clr-accent-300); /* Background color of the thumb */\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n/* Hover effect for the thumb */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: var(\r\n    --clr-accent-500\r\n  ); /* Background color of the thumb when hovered */\r\n}\r\n\r\n/* Firefox */\r\n* {\r\n  scrollbar-width: thin; /* Width of the scrollbar */\r\n  scrollbar-color: #888 #f0f0f0; /* Thumb color and track color */\r\n}\r\n\r\n/***---MEDIA QUERIES---***/\r\n\r\n@media screen and (max-width: 37.5em) {\r\n  .header-wrapper {\r\n    padding-inline: var(--spc-600);\r\n  }\r\n\r\n  .logo-container {\r\n    height: 4vh;\r\n  }\r\n\r\n  .hamburger-btn {\r\n    display: block;\r\n  }\r\n\r\n  main {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .list-sidebar {\r\n    z-index: 1;\r\n    position: absolute;\r\n    width: 17.5rem;\r\n    height: 100%;\r\n    left: 0;\r\n\r\n    display: none;\r\n  }\r\n\r\n  .list-sidebar.active {\r\n    display: flex;\r\n  }\r\n\r\n  .category-container {\r\n    width: clamp(15rem, 90vw, 50rem);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,qCAAqC;EACrC,qCAAqC;EACrC,qCAAqC;EACrC,oCAAoC;;EAEpC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;;EAEnC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,iCAAiC;;EAEjC,sCAAsC;EACtC,4CAA4C;EAC5C,gCAAgC;EAChC,kCAAkC;EAClC,2CAA2C;;EAE3C,cAAc;EACd,uCAAuC;;EAEvC,cAAc;EACd,aAAa;EACb,cAAc;;EAEd,cAAc;;EAEd,0DAA0D;EAC1D,wDAAwD;EACxD,wDAAwD;EACxD,wDAAwD;EACxD,sDAAsD;EACtD,yDAAyD;EACzD,wDAAwD;EACxD,wDAAwD;;EAExD,UAAU;;EAEV,iBAAiB;EACjB,0DAA0D;EAC1D,yDAAyD;EACzD,0DAA0D;EAC1D,uDAAuD;EACvD,yDAAyD;EACzD,uDAAuD;EACvD,oDAAoD;EACpD,uDAAuD;;EAEvD,OAAO;EACP,oBAAoB;EACpB,qDAAqD;AACvD;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,8BAA8B;EAC9B,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;;EAEvB,iBAAiB;AACnB;;AAEA;;EAEE,wBAAwB;EACxB,WAAW;;EAEX,iBAAiB;AACnB;;AAEA,mBAAmB;;AAEnB;EACE,kBAAkB;EAClB,UAAU;EACV,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;EACvB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,mCAAmC;EACnC,6BAA6B;EAC7B,8BAA8B;;EAE9B,oCAAoC;EACpC,iBAAiB;EACjB,mBAAmB;;EAEnB,6BAA6B;EAC7B,uCAAuC;EACvC,0CAA0C;AAC5C;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;EAClB,aAAa;EACb,+DAA+D;;EAE/D,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;;;EAGE,gBAAgB;EAChB,4BAA4B;EAC5B,mCAAmC;EACnC,qCAAqC;EACrC,6BAA6B;EAC7B,0CAA0C;AAC5C;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,8BAA8B;EAC9B,sCAAsC;AACxC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;;EAE5B,WAAW;EACX,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,mCAAmC;EACnC,sCAAsC;EACtC,6BAA6B;AAC/B;;AAEA;;EAEE,4CAA4C;AAC9C;;AAEA;EACE,wCAAwC;EACxC,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,4BAA4B;EAC5B,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;EAC5B,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;;EAElB,oCAAoC;EACpC,mBAAmB;EACnB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,QAAQ;EACR,SAAS;;EAET,gCAAgC;;EAEhC,6BAA6B;EAC7B,gBAAgB;EAChB,oCAAoC;EACpC,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;;EAEnB,yCAAyC;EACzC,8BAA8B;EAC9B,4BAA4B;;EAE5B,YAAY;EACZ,oCAAoC;EACpC,mCAAmC;EACnC,2CAA2C;AAC7C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;;EAEzB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,UAAU;EACV,YAAY;EACZ,4DAA4D;AAC9D;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,8BAA8B;EAC9B,6BAA6B;;EAE7B,WAAW;EACX,oCAAoC;EACpC,mCAAmC;AACrC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,aAAa;;AAEb;EACE,aAAa;EACb,mBAAmB;;EAEnB,qCAAqC;EACrC,uBAAuB;EACvB,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,MAAM;;EAEN,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE;;;;;;;;GAQC;AACH;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,uCAAuC;;EAEvC,wCAAwC;EACxC,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,0CAA0C;EAC1C,kBAAkB;EAClB,mBAAmB;EACnB;0BACwB;EACxB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;EAGE,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;EACxC,cAAc;;EAEd,yBAAyB;EACzB,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,mCAAmC;EACnC,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,aAAa;EACb,eAAe;EACf,2DAA2D;EAC3D,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,mCAAmC;AACrC;;AAEA,iCAAiC;;AAEjC;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,oCAAoC;EACpC,uBAAuB;EACvB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,oCAAoC;EACpC,uBAAuB;EACvB,4BAA4B;EAC5B,mCAAmC;AACrC;;AAEA;;EAEE,iBAAiB;EACjB,mCAAmC;;EAEnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,uBAAuB;EACvB,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uCAAuC;EACvC,YAAY;EACZ,QAAQ;;EAER,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qCAAqC;;EAErC,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA,mBAAmB;;AAEnB;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,0BAA0B;EAC1B,8BAA8B;EAC9B,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,0BAA0B;EAC1B,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,sBAAsB;;AAEtB,iDAAiD;AACjD;EACE,UAAU,EAAE,2BAA2B;EACvC,WAAW,EAAE,qDAAqD;AACpE;;AAEA,4CAA4C;AAC5C;EACE,yBAAyB,EAAE,kCAAkC;EAC7D,mCAAmC;AACrC;;AAEA,qCAAqC;AACrC;EACE,uCAAuC,EAAE,kCAAkC;EAC3E,mCAAmC;AACrC;;AAEA,+BAA+B;AAC/B;EACE;;GAEC,EAAE,+CAA+C;AACpD;;AAEA,YAAY;AACZ;EACE,qBAAqB,EAAE,2BAA2B;EAClD,6BAA6B,EAAE,gCAAgC;AACjE;;AAEA,0BAA0B;;AAE1B;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,OAAO;;IAEP,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gCAAgC;EAClC;AACF","sourcesContent":[":root {\r\n  /*Colors*/\r\n  --clr-accent-300: hsl(198, 100%, 50%);\r\n  --clr-accent-400: hsl(198, 100%, 42%);\r\n  --clr-accent-500: hsl(191, 100%, 33%);\r\n  --clr-accent-700: hsl(191, 70%, 40%);\r\n\r\n  --clr-panel-400: hsl(199, 13%, 33%);\r\n  --clr-panel-500: hsl(199, 13%, 22%);\r\n  --clr-panel-600: hsl(199, 13%, 18%);\r\n\r\n  --clr-neutral-100: hsl(0, 0%, 99%);\r\n  --clr-neutral-200: hsl(0, 0%, 80%);\r\n  --clr-neutral-300: hsl(0, 0%, 66%);\r\n  --clr-neutral-400: hsl(0, 0%, 50%);\r\n  --clr-neutral-500: hsl(0, 0%, 33%);\r\n  --clr-neutral-525: hsl(0, 0%, 27%);\r\n  --clr-neutral-550: hsl(0, 0%, 20%);\r\n  --clr-neutral-600: hsl(0, 0%, 17%);\r\n  --clr-neutral-700: hsl(0, 0%, 11%);\r\n  --clr-neutral-900: hsl(0, 0%, 0%);\r\n\r\n  --clr-list-card: hsla(0, 0%, 0%, 0.22);\r\n  --clr-list-card-hover: hsla(0, 0%, 0%, 0.44);\r\n  --clr-past-due: hsl(0, 72%, 62%);\r\n  --clr-priority: hsl(49, 100%, 50%);\r\n  --clr-completed-task: var(--clr-accent-400);\r\n\r\n  /*Font Family*/\r\n  --ff-primary: Roboto, Arial, sans-serif;\r\n\r\n  /*Font Weight*/\r\n  --fw-reg: 400;\r\n  --fw-bold: 700;\r\n\r\n  /*Font Sizing*/\r\n\r\n  --fs-200: clamp(0.63rem, calc(0.82rem + -0.16vw), 0.79rem);\r\n  --fs-300: clamp(0.75rem, calc(0.9rem + 0.04vw), 0.95rem);\r\n  --fs-400: clamp(0.9rem, calc(0.98rem + 0.13vw), 1.13rem);\r\n  --fs-500: clamp(1.13rem, calc(1.05rem + 0.37vw), 1.5rem);\r\n  --fs-600: clamp(1.27rem, calc(1.12rem + 0.73vw), 2rem);\r\n  --fs-700: clamp(1.42rem, calc(1.18rem + 1.24vw), 2.66rem);\r\n  --fs-800: clamp(1.6rem, calc(1.21rem + 1.95vw), 3.55rem);\r\n  --fs-900: clamp(1.8rem, calc(1.22rem + 2.93vw), 4.74rem);\r\n\r\n  /*Spacing*/\r\n\r\n  /* One-up pairs */\r\n  --spc-100: clamp(0.25rem, calc(0.19rem + 0.31vw), 0.56rem);\r\n  --spc-200: clamp(0.5rem, calc(0.43rem + 0.38vw), 0.88rem);\r\n  --spc-300: clamp(0.75rem, calc(0.68rem + 0.38vw), 1.13rem);\r\n  --spc-400: clamp(1rem, calc(0.86rem + 0.69vw), 1.69rem);\r\n  --spc-500: clamp(1.5rem, calc(1.35rem + 0.75vw), 2.25rem);\r\n  --spc-600: clamp(2rem, calc(1.73rem + 1.38vw), 3.38rem);\r\n  --spc-700: clamp(3rem, calc(2.7rem + 1.5vw), 4.5rem);\r\n  --spc-800: clamp(4rem, calc(3.45rem + 2.75vw), 6.75rem);\r\n\r\n  /*Misc*/\r\n  --border-radius: 8px;\r\n  --color-picker-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  font-family: var(--ff-primary);\r\n  font-size: var(--fs-400);\r\n  color: var(--clr-neutral-100);\r\n}\r\n\r\n.btn-hover-transition {\r\n  filter: brightness(0.9);\r\n\r\n  transition: 0.12s;\r\n}\r\n\r\n.btn-hover-transition:hover,\r\n.btn-hover-transition:focus-within {\r\n  filter: brightness(1.05);\r\n  scale: 1.03;\r\n\r\n  transition: 0.12s;\r\n}\r\n\r\n/***---HEADER---***/\r\n\r\nheader {\r\n  position: relative;\r\n  z-index: 1;\r\n  background-color: var(--clr-panel-600);\r\n}\r\n\r\n.header-wrapper {\r\n  height: 6vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: var(--spc-300);\r\n  box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  align-content: center;\r\n  height: 5vh;\r\n}\r\n\r\n.hamburger-btn {\r\n  display: none;\r\n  color: var(--clr-accent-300);\r\n  font-size: 2.5rem;\r\n  transform-origin: left;\r\n}\r\n\r\n.hamburger-btn > i {\r\n  position: relative;\r\n  top: calc(var(--spc-100) * 0.25);\r\n}\r\n\r\n.login-btn {\r\n  border-radius: var(--border-radius);\r\n  padding-block: var(--spc-100);\r\n  padding-inline: var(--spc-200);\r\n\r\n  font-size: calc(var(--fs-500) * 0.9);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n\r\n  color: var(--clr-neutral-600);\r\n  background-color: var(--clr-accent-300);\r\n  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/***---MAIN---***/\r\n\r\nmain {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: minmax(0, clamp(15rem, 20vw, 25rem)) 3fr;\r\n\r\n  background-color: var(--clr-panel-400);\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  font-size: var(--fs-500);\r\n  font-weight: bold;\r\n  letter-spacing: 0.66px;\r\n  color: var(--clr-neutral-100);\r\n}\r\n\r\ninput[type='text'],\r\ninput[type='search'],\r\ntextarea {\r\n  padding: 0.33rem;\r\n  padding-left: var(--spc-200);\r\n  border-radius: var(--border-radius);\r\n  background-color: rgba(0, 0, 0, 0.35);\r\n  color: var(--clr-neutral-100);\r\n  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/***---SIDEBAR---***/\r\n\r\n.sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-block: var(--spc-400);\r\n  padding-inline: var(--spc-200);\r\n  background-color: var(--clr-panel-500);\r\n}\r\n\r\n.list-sidebar {\r\n  box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.active-todo-sidebar {\r\n  box-shadow: -6px 0px 12px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.sidebar input {\r\n  width: 100%;\r\n}\r\n\r\n.preset-lists-container,\r\n.list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-block: var(--spc-200);\r\n\r\n  width: 100%;\r\n  gap: var(--spc-100);\r\n}\r\n\r\n.preset-list-card,\r\n.list-card {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: calc(var(--spc-100) * 0.5);\r\n  border-radius: var(--border-radius);\r\n  background-color: var(--clr-list-card);\r\n  color: var(--clr-neutral-200);\r\n}\r\n\r\n.preset-list-card:hover,\r\n.list-card:hover {\r\n  background-color: var(--clr-list-card-hover);\r\n}\r\n\r\n.list-sidebar button {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: var(--clr-neutral-100);\r\n}\r\n\r\n.list-container {\r\n  flex-grow: 1;\r\n}\r\n\r\n.lists-wrapper {\r\n  height: 76vh;\r\n  width: 100%;\r\n  margin-block: var(--spc-200);\r\n  padding-inline: var(--spc-200);\r\n  overflow-y: auto;\r\n}\r\n\r\n.list-sidebar .swap-btn {\r\n  text-align: left;\r\n  padding-left: var(--spc-200);\r\n  width: 100%;\r\n}\r\n\r\n.list-card {\r\n  display: flex;\r\n}\r\n\r\n.list-card .total-tasks-wrapper {\r\n  position: relative;\r\n\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  border-radius: 99px;\r\n  height: 1.2rem;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n.list-card .total-tasks {\r\n  position: absolute;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n\r\n  transform: translate(-60%, -45%);\r\n\r\n  color: var(--clr-neutral-400);\r\n  font-weight: 900;\r\n  font-size: calc(var(--fs-200) * 1.1);\r\n  text-align: center;\r\n  letter-spacing: -1px;\r\n}\r\n\r\n.list-card .delete-btn {\r\n  padding-inline: var(--spc-100);\r\n  color: var(--clr-neutral-400);\r\n}\r\n\r\n/***---ACTIVE LIST---***/\r\n\r\n.active-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  padding: var(--spc-300);\r\n}\r\n\r\n.category-container {\r\n  margin-bottom: var(--spc-500);\r\n  width: clamp(15rem, 66vw, 50rem);\r\n}\r\n\r\n.title-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--spc-200);\r\n\r\n  padding-block: calc(var(--spc-100) * 0.5);\r\n  padding-inline: var(--spc-200);\r\n  margin-block: var(--spc-200);\r\n\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border-radius: var(--border-radius);\r\n  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.category-container .fa-angle-down {\r\n  transition: transform 0.16s;\r\n}\r\n\r\n.category-container.hidden .fa-angle-down {\r\n  transform: rotate(-90deg);\r\n\r\n  transition: transform 0.16s;\r\n}\r\n\r\n.category-container.hidden .tasks {\r\n  display: none;\r\n}\r\n\r\n.todo-container {\r\n  isolation: isolate;\r\n  flex-grow: 1;\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n  gap: var(--spc-300);\r\n  padding-inline: var(--spc-200);\r\n}\r\n\r\n.complete-container,\r\n.incomplete-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.complete-container > * {\r\n  filter: brightness(0.8);\r\n}\r\n\r\n.complete-container .task-title {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.complete-container .past-due {\r\n  color: var(--clr-neutral-300);\r\n}\r\n\r\n.todo-card:not([data-color='neutral']):before {\r\n  content: '';\r\n  z-index: -1;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 20%;\r\n  height: 100%;\r\n  border-radius: var(--border-radius) 0 0 var(--border-radius);\r\n}\r\n\r\n.todo-card,\r\n.step-card {\r\n  z-index: 1;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: var(--spc-200);\r\n  padding-block: var(--spc-100);\r\n\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.todo-card:hover {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.check-box {\r\n  scale: 1.2;\r\n  margin-right: var(--spc-200);\r\n  color: var(--clr-neutral-200);\r\n}\r\n\r\n.complete-task {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--clr-completed-task);\r\n}\r\n\r\n.todo-card-task-wrapper {\r\n  letter-spacing: 0.66px;\r\n}\r\n\r\n.task-details-wrapper {\r\n  display: flex;\r\n  font-size: var(--fs-300);\r\n  gap: var(--spc-200);\r\n  color: var(--clr-neutral-300);\r\n  letter-spacing: 0.66px;\r\n}\r\n\r\n.past-due {\r\n  color: var(--clr-past-due);\r\n}\r\n\r\n.priority {\r\n  margin-left: auto;\r\n  color: var(--clr-neutral-200);\r\n}\r\n\r\n.priority > .fa-solid {\r\n  color: var(--clr-priority);\r\n}\r\n\r\n/*Todo Input*/\r\n\r\n.todo-input {\r\n  display: flex;\r\n  gap: var(--spc-200);\r\n\r\n  background-color: rgba(0, 0, 0, 0.33);\r\n  padding: var(--spc-300);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.todo-input > * {\r\n  border-radius: var(--border-radius);\r\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.33);\r\n}\r\n\r\n.input-wrapper {\r\n  position: relative;\r\n  width: clamp(13rem, 10rem + 33vw, 35rem);\r\n  height: 2.5rem;\r\n}\r\n\r\n.input-wrapper > input {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.input-wrapper > .date-input-wrapper {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.date-input-wrapper {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  position: relative;\r\n  height: 2.5rem;\r\n}\r\n\r\n.calendar-icon-wrapper {\r\n  isolation: isolate;\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.calendar-icon-wrapper > img {\r\n  display: none;\r\n  height: 100%;\r\n}\r\n\r\n.calendar-icon-wrapper > img.active {\r\n  display: block;\r\n}\r\n\r\n.calendar-icon-wrapper > .calendar-month,\r\n.calendar-icon-wrapper > .calendar-day {\r\n  z-index: 1;\r\n  position: absolute;\r\n  display: none;\r\n  font-weight: bold;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\n.calendar-icon-wrapper:has(.calendar-no-grid.active) > .cal-date {\r\n  display: block;\r\n}\r\n\r\n.calendar-icon-wrapper > .calendar-month {\r\n  font-size: var(--fs-200);\r\n  scale: 0.9;\r\n  transform: translate(-50%, -115%);\r\n}\r\n\r\n.calendar-icon-wrapper > .calendar-day {\r\n  color: black;\r\n  transform: translate(-50%, -27%);\r\n}\r\n\r\n.hidden-date-input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.hidden-date-input::-webkit-calendar-picker-indicator {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.color-selector {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 3.24rem;\r\n}\r\n\r\n.color-selector.no-selection {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f1a3bb,\r\n    #f4c4a9,\r\n    #f2ee8f,\r\n    #96d470,\r\n    #959fef,\r\n    #ac68d7\r\n  );\r\n}\r\n\r\n.color-selector:focus-within .color-selector-menu {\r\n  display: grid;\r\n}\r\n\r\n.color-selector-menu {\r\n  position: absolute;\r\n  display: none;\r\n  gap: var(--spc-100);\r\n  left: 50%;\r\n  transform: translate(calc(-50%), -115%);\r\n\r\n  background-color: var(--clr-neutral-200);\r\n  border-radius: var(--border-radius);\r\n  padding: var(--spc-200);\r\n}\r\n\r\n.color-selector-menu::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -9px;\r\n  left: 50%;\r\n  transform: translateX(-50%) rotate(-45deg);\r\n  border-width: 10px;\r\n  border-style: solid;\r\n  border-color: transparent transparent var(--clr-neutral-200)\r\n    var(--clr-neutral-200);\r\n  border-radius: 0px 0px 0px 4px;\r\n}\r\n\r\n.color-input-wrapper {\r\n  display: flex;\r\n  gap: var(--spc-100);\r\n}\r\n\r\n.color-input-wrapper > *,\r\n.presets > *,\r\n.color-selector-menu {\r\n  box-shadow: var(--color-picker-shadow);\r\n}\r\n\r\n.color-input {\r\n  width: calc(1.5rem * 2 + var(--spc-100));\r\n  height: 1.5rem;\r\n\r\n  border: 2px solid #ffffff;\r\n  border-radius: var(--border-radius);\r\n  overflow: hidden;\r\n}\r\n\r\n.cancel-color {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  border: 2px solid #ffffff;\r\n  border-radius: var(--border-radius);\r\n  color: red;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.cancel-color > i {\r\n  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.33));\r\n}\r\n\r\n.presets {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: calc((1.5rem + var(--spc-100)) * 3 - var(--spc-100));\r\n  gap: var(--spc-100);\r\n}\r\n\r\n.preset {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  cursor: pointer;\r\n  border: 2px solid #ffffff;\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n/***---TODO DETAILS SIDEBAR---***/\r\n\r\n.details-card {\r\n  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  gap: var(--spc-200);\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: var(--spc-200);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.task-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#active-steps-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  gap: 0.25rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.step-delete-btn {\r\n  margin-left: auto;\r\n}\r\n\r\n.settings-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  min-height: 3.5rem;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: var(--spc-200);\r\n  padding-left: var(--spc-400);\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.settings-wrapper .date-input-wrapper,\r\n.settings-wrapper .color-selector {\r\n  margin-left: auto;\r\n  border-radius: var(--border-radius);\r\n\r\n  width: 2.5rem;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n#task-note {\r\n  width: 100%;\r\n  height: 20%;\r\n  resize: vertical;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.active-todo-sidebar #task-delete {\r\n  margin-top: auto;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: var(--spc-200);\r\n  border-radius: var(--border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.active-todo-sidebar {\r\n  position: absolute;\r\n  width: clamp(15rem, 5rem + 15vw, 25rem);\r\n  height: 100%;\r\n  right: 0;\r\n\r\n  display: none;\r\n}\r\n\r\n.active-todo-sidebar.active {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--spc-200);\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n\r\n  display: none;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n}\r\n\r\n/***---FOOTER---***/\r\n\r\nbody {\r\n  /* footer support */\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nfooter {\r\n  height: 6vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: auto;\r\n  padding: var(--spacing-xs);\r\n  padding-top: var(--spacing-xl);\r\n  background-color: var(--clr-panel-600);\r\n}\r\n\r\n#copyright {\r\n  font-size: 1.24rem;\r\n  font-weight: 700;\r\n  text-decoration-line: none;\r\n  letter-spacing: 0.5px;\r\n  color: var(--clr-neutral-300);\r\n}\r\n\r\n.fa-github {\r\n  font-size: 1.38rem;\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n\r\n.fa-github:hover {\r\n  transform: rotate(360deg) scale(1.2);\r\n}\r\n\r\n/***---SCROLLBAR---***/\r\n\r\n/* WebKit-based browsers (Chrome, Safari, etc.) */\r\n::-webkit-scrollbar {\r\n  width: 8px; /* Width of the scrollbar */\r\n  height: 8px; /* Height of the scrollbar on horizontal containers */\r\n}\r\n\r\n/* Track (the background of the scrollbar) */\r\n::-webkit-scrollbar-track {\r\n  background-color: #f0f0f0; /* Background color of the track */\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n/* Thumb (the actual scroll handle) */\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--clr-accent-300); /* Background color of the thumb */\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n/* Hover effect for the thumb */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: var(\r\n    --clr-accent-500\r\n  ); /* Background color of the thumb when hovered */\r\n}\r\n\r\n/* Firefox */\r\n* {\r\n  scrollbar-width: thin; /* Width of the scrollbar */\r\n  scrollbar-color: #888 #f0f0f0; /* Thumb color and track color */\r\n}\r\n\r\n/***---MEDIA QUERIES---***/\r\n\r\n@media screen and (max-width: 37.5em) {\r\n  .header-wrapper {\r\n    padding-inline: var(--spc-600);\r\n  }\r\n\r\n  .logo-container {\r\n    height: 4vh;\r\n  }\r\n\r\n  .hamburger-btn {\r\n    display: block;\r\n  }\r\n\r\n  main {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .list-sidebar {\r\n    z-index: 1;\r\n    position: absolute;\r\n    width: 17.5rem;\r\n    height: 100%;\r\n    left: 0;\r\n\r\n    display: none;\r\n  }\r\n\r\n  .list-sidebar.active {\r\n    display: flex;\r\n  }\r\n\r\n  .category-container {\r\n    width: clamp(15rem, 90vw, 50rem);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInYears/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInYears/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));

  // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days
  dateLeft.setFullYear(1584);
  dateRight.setFullYear(1584);

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;
  var result = sign * (difference - Number(isLastYearNotFull));
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDate/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builders/ListBuilder */ "./src/Builders/ListBuilder.js");
/* harmony import */ var _Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Builders/GoalsBuilder */ "./src/Builders/GoalsBuilder.js");
/* harmony import */ var _Builders_StepBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Builders/StepBuilder */ "./src/Builders/StepBuilder.js");
/* harmony import */ var _MasterList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MasterList */ "./src/MasterList.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInYears/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LocalStorage */ "./src/LocalStorage.js");









function removeStep(goal, step, card, container, MasterList) {
  goal.steps.deleteItem(step);
  (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(MasterList);
  container.removeChild(card);
}
;
function closeSidebar(overlay, activeGoalSidebar) {
  overlay.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
  activeGoalSidebar.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
}
;
function closeListSidebar(overlay, listSideBar) {
  overlay.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
  listSideBar.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
}
;
function playSound(sound) {
  sound.volume = 0.2;
  sound.play();
}
;
function hamburgerBtnClickEventListener(hamburgerBtn, listSideBar, overlay) {
  hamburgerBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
    listSideBar.classList.toggle(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
    overlay.classList.toggle(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
  });
}
;
function overlayClickEventListener(overlay, activeGoalSidebar, listSideBar) {
  // When a task is select and we click on the screen the task properties are closed
  overlay.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
    closeSidebar(overlay, activeGoalSidebar);
    closeListSidebar(overlay, listSideBar);
  });
}
;
var DomController = function () {
  var successSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_6__.SUCCESS_SOUND);
  var failureSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_6__.FAILURE_SOUND);

  // Fetch by ClassName
  var hamburgerBtn = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.HAMBURGER_BTN_CLASS);
  var overlay = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.OVERLAY_CLASS);
  var activeGoalSidebar = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE_GOAL_SIDEBAR_CLASS);
  var listSideBar = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.LIST_SIDEBAR_CLASS);
  var categoryContainer = document.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_6__.CATEGORY_CONTAINER_CLASS);
  var newListInput = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.NEW_LIST_INPUT_ID);
  var addGoalInput = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.NEW_GOAL_INPUT_ID);
  var loginBtn = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.LOGIN_BTN_CLASS);
  // Add a local host in local storage
  loginBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
    return alert(_Constants__WEBPACK_IMPORTED_MODULE_6__.LOGIN_ERROR);
  });
  hamburgerBtnClickEventListener(hamburgerBtn, listSideBar, overlay);
  overlayClickEventListener(overlay, activeGoalSidebar, listSideBar);

  // When a new list is entered then adjust title
  newListInput.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.KEYDOWN, function (e) {
    if (!checkInputEntered(e, newListInput.value)) return;
    var title = newListInput.value;
    newListInput.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
    addList(title);
    (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
  });

  // When for a list a goal is added then change the dom elements
  addGoalInput.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.KEYDOWN, function (e) {
    if (!checkInputEntered(e, addGoalInput.value)) return;
    var title = addGoalInput.value;
    addGoalInput.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
    var calenderInput = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.HIDDEN_DATE_INPUT_CLASS);
    var calIcon = calenderInput.parentElement.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CALENDAR_CLASS);
    var calNoGridIcon = calenderInput.parentElement.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CALENDAR_NOGRID_CLASS);
    calIcon.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
    calNoGridIcon.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
    var dueDate = calenderInput.value;
    calenderInput.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
    var colorSelector = addGoalInput.parentElement.parentElement.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_SELECTOR_CLASS);
    colorSelector.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.NO_SELECTOR_CLASS);
    var colorInput = addGoalInput.parentElement.parentElement.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_INPUT_CLASS);
    var color = _Constants__WEBPACK_IMPORTED_MODULE_6__.NEUTRAL;
    if (colorInput.value != _Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_BLACK) {
      color = colorInput.value;
    }
    colorInput.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
    addGoal(title, color, dueDate);
    (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
  });
  categoryContainer.forEach(function (category) {
    var wrapper = category.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.TITLE_WRAPPER_CLASS);
    wrapper.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
      category.classList.toggle(_Constants__WEBPACK_IMPORTED_MODULE_6__.HIDDEN);
    });
  });
  (function setUpDateSelector() {
    var dateInputWrapper = document.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_6__.DATE_INPUT_WRAPPER_CLASS);
    dateInputWrapper.forEach(function (wrapper) {
      var hiddenInput = wrapper.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.HIDDEN_DATE_INPUT_CLASS);
      hiddenInput.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CHANGE, function () {
        var calIcon = wrapper.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CALENDAR_CLASS);
        var calNoGridIcon = wrapper.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CALENDAR_NOGRID_CLASS);
        var date = hiddenInput.value;
        var dateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(date);
        var month = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(dateFormatted);
        var day = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(dateFormatted);
        wrapper.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CALENDAR_MONTH_CLASS).textContent = getAbbreviatedMonth(month);
        wrapper.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CALENDAR_DAY_CLASS).textContent = day;
        calIcon.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
        calNoGridIcon.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
      });
    });
    function getAbbreviatedMonth(monthIndex) {
      var abbreviatedMonth;
      switch (monthIndex) {
        case 0:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.JANUARY;
          break;
        case 1:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.FEBRUARY;
          break;
        case 2:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.MARCH;
          break;
        case 3:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.APRIL;
          break;
        case 4:
          abbreviatedMonth = MAY;
          break;
        case 5:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.JUNE;
          break;
        case 6:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.JULY;
          break;
        case 7:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.AUGUST;
          break;
        case 8:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.SEPTEMBER;
          break;
        case 9:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.OCTOBER;
          break;
        case 10:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.NOVEMBER;
          break;
        case 11:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.DECEMBER;
          break;
        default:
          abbreviatedMonth = _Constants__WEBPACK_IMPORTED_MODULE_6__.INVALID_MONTH;
      }
      return abbreviatedMonth;
    }
  })();
  (function setUpColorPicker() {
    var colorSelector = document.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_SELECTOR_CLASS);
    colorSelector.forEach(function (selector) {
      var colorInput = selector.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_INPUT_CLASS);
      var cancelColor = selector.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CANCEL_COLOR_CLASS);
      var changeEvent = new Event(_Constants__WEBPACK_IMPORTED_MODULE_6__.CHANGE);
      colorInput.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CHANGE, function () {
        if (colorInput.value === _Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_BLACK) return;
        selector.style.backgroundColor = colorInput.value;
        selector.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.NO_SELECTOR_CLASS);
      });
      cancelColor.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
        colorInput.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_BLACK;
        selector.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.NO_SELECTOR_CLASS);
        colorInput.dispatchEvent(changeEvent);
      });
      selector.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_6__.PRESET_CLASS).forEach(function (preset) {
        preset.style.backgroundColor = preset.dataset.color;
        preset.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function (e) {
          selector.blur();
          selector.style.backgroundColor = preset.dataset.color;
          selector.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.NO_SELECTOR_CLASS);
          colorInput.value = e.target.dataset.color;
          colorInput.dispatchEvent(changeEvent);
        });
      });
    });
  })();
  (function setUpSearchbar() {
    var searchBar = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.SEARCH_BAR_CLASS);
    searchBar.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.KEYUP, function () {
      var matches = findAllMatches(searchBar.value.toLowerCase());
      if (searchBar.value === _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING) displayGoals();else displayGoals(matches);
    });
    function findAllMatches(query) {
      var matches = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(_Constants__WEBPACK_IMPORTED_MODULE_6__.SEARCH_RESULTS);
      _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items.forEach(function (list) {
        list.items.forEach(function (task) {
          var title = task.title.toLowerCase();
          if (title.includes(query)) {
            matches.addItem(task);
          }
        });
      });
      return matches;
    }
  })();
  (function setUpImportantList() {
    var favouritesBtn = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.FAVOURITES_BTN_CLASS);
    favouritesBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
      var matches = findAllStarredTasks();
      displayGoals(matches);
    });
    function findAllStarredTasks() {
      var matches = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(_Constants__WEBPACK_IMPORTED_MODULE_6__.FAVOURITES_RESULTS);
      _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items.forEach(function (list) {
        list.items.forEach(function (task) {
          if (task.priority) {
            matches.addItem(task);
          }
        });
      });
      return matches;
    }
  })();
  (function setUpDueDatePresets() {
    var plannedBtn = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.PLANNED_BTN_CLASS);
    var overdueBtn = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.OVERDUE_BTN_CLASS);
    var dueTodayBtn = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.DUE_TODAY_CLASS);
    var dueTomorrowBtn = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.DUE_TOMORROW_BTN_CLASS);
    plannedBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
      var matches = findAllDueToday('planned', 'Planned');
      displayGoals(matches);
    });
    overdueBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
      var matches = findAllDueToday('pastdue', 'Past Due');
      displayGoals(matches);
    });
    dueTodayBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
      var matches = findAllDueToday(0, 'Due Today');
      displayGoals(matches);
    });
    dueTomorrowBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
      var matches = findAllDueToday(1, 'Due Tomorrow');
      displayGoals(matches);
    });
    function findAllDueToday(query, queryTitle) {
      var matches = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(queryTitle);
      var currentDate = new Date();
      _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items.forEach(function (list) {
        list.items.forEach(function (task) {
          var parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(task.dueDate);
          var daysUntilDue = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(parsedDate, currentDate);
          if (!Number.isNaN(daysUntilDue) && (daysUntilDue === query || query === 'planned' || query === 'pastdue' && daysUntilDue < 0)) {
            matches.addItem(task);
          }
        });
      });
      return matches;
    }
  })();
  function checkInputEntered(e, value) {
    if (e.key !== _Constants__WEBPACK_IMPORTED_MODULE_6__.ENTER || e.keyCode !== 13) return false;
    if (value === _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING) return false;
    e.preventDefault();
    return true;
  }
  (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.getMasterListFromLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
  displayLists();
  displayGoals();
  function addList(title) {
    var newList = (0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
    _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].addItem(newList);
    swapActiveList(newList);
    displayLists();
  }
  function addGoal(title, color, dueDate) {
    var activeList = _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].getActiveList();
    activeList.addItem((0,_Builders_GoalsBuilder__WEBPACK_IMPORTED_MODULE_3__["default"])(activeList, title, color, dueDate));
    displayGoals();
  }
  function swapActiveList(list) {
    _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].setActiveList(list);
    (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
    displayGoals();
  }
  function displayLists() {
    var listContainer = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.LIST_CONTAINER_CLASS);
    listContainer.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
    _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items.forEach(function (list) {
      var card = buildListCard(list);
      listContainer.appendChild(card);
    });
    function buildListCard(list) {
      var card = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
      card.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.LIST_CARD_CLASS);
      var swapBtn = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.BUTTON);
      card.appendChild(swapBtn);
      swapBtn.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.SWAP_BTN_CLASS);
      swapBtn.innerHTML = list.title;
      swapBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
        swapActiveList(list);
      });
      var totalTasksWrapper = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
      card.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TOTAL_TASKS_WRAPPER_CLASS);
      var totalTasks = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TOTAL_TASKS_CLASS);
      totalTasks.innerHTML = list.items.length > 99 ? _Constants__WEBPACK_IMPORTED_MODULE_6__.NINETY_NINE : list.items.length;
      var deleteBtn = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.BUTTON);
      card.appendChild(deleteBtn);
      deleteBtn.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.DELETE_BTN_CLASS);
      deleteBtn.innerHTML = '<i id="task-delete" class="fa-solid fa-trash"></i>';
      deleteBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
        _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].deleteItem(list);
        listContainer.removeChild(card);
        if (_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items.length === 0) {
          _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].addItem((0,_Builders_ListBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(_Constants__WEBPACK_IMPORTED_MODULE_6__.MY_TASKS));
          _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].setActiveList(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items[0]);
          displayGoals();
          displayLists();
        } else if (_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].getActiveList() === list) {
          var nextList = _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items[_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].items.length - 1];
          _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].setActiveList(nextList);
          displayGoals();
        }
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
      });
      return card;
    }
  }
  function displayGoals(goalsList) {
    if (goalsList === undefined) {
      goalsList = _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"].getActiveList();
    }

    // Setting the list title from button click
    var listTitle = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE_LIST_TITLE_CLASS);
    listTitle.textContent = goalsList.title;

    // Incompleted goals are shown here
    var incompleteContainer = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.INCOMPLETE_CONTAINER_CLASS);
    incompleteContainer.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;

    // Completing goals are shown here
    var completeContainer = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.COMPLETE_CONTAINER_CLASS);
    completeContainer.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
    goalsList.items.forEach(function (goal) {
      (function setUpCard(replaceCard) {
        var card = buildTodoCard(goal);
        card.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function () {
          displaySidebar(goal, card);
          overlay.onclick = function () {
            setUpCard(card);
          };
        });
        if (replaceCard === undefined) {
          if (goal.complete) completeContainer.appendChild(card);else incompleteContainer.appendChild(card);
        } else {
          if (goal.complete) completeContainer.replaceChild(card, replaceCard);else incompleteContainer.replaceChild(card, replaceCard);
        }
      })();
    });
    function buildTodoCard(goal) {
      var card = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
      card.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TODO_CARD_CLASS);
      card.appendChild(buildCheckBox(goal, card));
      var taskWrapper = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
      card.appendChild(taskWrapper);
      taskWrapper.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TODO_CARD_TASK_WRAPPER_CLASS);
      var title = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
      taskWrapper.appendChild(title);
      title.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_TITLE_CLASS);
      title.innerHTML = goal.title;
      var detailsWrapper = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
      taskWrapper.appendChild(detailsWrapper);
      detailsWrapper.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_DETAILS_WRAPPER_CLASS);
      if (goal.childOf.title !== goalsList.title) {
        var parentListTitle = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
        detailsWrapper.appendChild(parentListTitle);
        parentListTitle.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.PARENT_LIST_TITLE_CLASS);
        var _listTitle = goal.childOf.title.split(_Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING);
        parentListTitle.textContent = _listTitle.length > 24 ? _listTitle.splice(0, 24).join(_Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING) + '...' : goal.childOf.title;
      }
      if (goal.dueDate !== _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING) {
        var getDaysUntilDueCase = function getDaysUntilDueCase(daysUntilDue, yearsUntilDue) {
          if (daysUntilDue < 0) return _Constants__WEBPACK_IMPORTED_MODULE_6__.PAST_DUE;
          if (daysUntilDue === 0) return _Constants__WEBPACK_IMPORTED_MODULE_6__.TODAY;
          if (daysUntilDue === 1) return _Constants__WEBPACK_IMPORTED_MODULE_6__.TOMORROW;
          if (daysUntilDue < 7) return _Constants__WEBPACK_IMPORTED_MODULE_6__.WITH_IN_A_WEEK;
          if (yearsUntilDue < 1) return _Constants__WEBPACK_IMPORTED_MODULE_6__.WITH_IN_A_YEAR;
          return _Constants__WEBPACK_IMPORTED_MODULE_6__.MORE_THAN_A_YEAR;
        };
        var dueDate = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
        detailsWrapper.appendChild(dueDate);
        dueDate.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_DUE_DATE_CLASS);
        var parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(goal.dueDate);
        var daysUntilDue = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(parsedDate, new Date());
        var yearsUntilDue = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(parsedDate, new Date());
        switch (getDaysUntilDueCase(daysUntilDue, yearsUntilDue)) {
          case _Constants__WEBPACK_IMPORTED_MODULE_6__.PAST_DUE:
            dueDate.innerHTML = (0,_Constants__WEBPACK_IMPORTED_MODULE_6__.PAST_DUE_MESSAGE)(daysUntilDue);
            dueDate.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.PAST_DUE_CLASS);
            break;
          case _Constants__WEBPACK_IMPORTED_MODULE_6__.TODAY:
            dueDate.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_6__.DUE_TODAY_MESSAGE;
            break;
          case _Constants__WEBPACK_IMPORTED_MODULE_6__.TOMORROW:
            dueDate.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_6__.DUE_TODAY_MESSAGE;
            break;
          case _Constants__WEBPACK_IMPORTED_MODULE_6__.WITH_IN_A_WEEK:
            dueDate.innerHTML = (0,_Constants__WEBPACK_IMPORTED_MODULE_6__.WITH_IN_A_WEEK_MESSAGE)(daysUntilDue);
            break;
          case _Constants__WEBPACK_IMPORTED_MODULE_6__.WITH_IN_A_YEAR:
            dueDate.innerHTML = (0,_Constants__WEBPACK_IMPORTED_MODULE_6__.WITHIN_A_YEAR_MESSAGE)(parsedDate);
            break;
          case _Constants__WEBPACK_IMPORTED_MODULE_6__.MORE_THAN_A_YEAR:
            dueDate.innerHTML = (0,_Constants__WEBPACK_IMPORTED_MODULE_6__.MORE_THAN_A_YEAR_MESSAGE)(parsedDate);
            break;
        }
      }
      if (goal.steps.items.length > 0) {
        var subTasks = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
        detailsWrapper.appendChild(subTasks);
        subTasks.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.SUB_TASKS_CLASS);
        var completedSubTasks = goal.steps.items.reduce(function (total, task) {
          return task.complete ? total + 1 : total;
        }, 0);
        subTasks.innerHTML = goal.steps.items.length === 0 ? _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING : "".concat(completedSubTasks, "/").concat(goal.steps.items.length);
      }
      var note = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
      detailsWrapper.appendChild(note);
      note.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_NOTE_CLASS);
      note.innerHTML = goal.note === _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING ? _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING : '<i class="fa-regular fa-pen-to-square"></i>';
      card.appendChild(buildPriorityBtn(goal));
      return card;
    }
    function displaySidebar(goal, card) {
      var taskWrapper = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_WRAPPER_CLASS);
      taskWrapper.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
      var checkBox = buildCheckBox(goal, card);
      taskWrapper.appendChild(checkBox);
      var title = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
      taskWrapper.appendChild(title);
      title.id = _Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_TITLE_ID;
      title.textContent = goal.title;
      var priorityBtn = buildPriorityBtn(goal);
      taskWrapper.appendChild(priorityBtn);
      displaySteps(goal);
      var addStepInput = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.ADD_STEP_INPUT_ID);
      addStepInput.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
      addStepInput.onkeydown = function (e) {
        if (!checkInputEntered(e, addStepInput.value)) return;
        addStep(goal, addStepInput.value);
        addStepInput.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
      };
      var dueDateLabel = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_DUE_DATE_ID);
      if (goal.dueDate === _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING) dueDateLabel.textContent = _Constants__WEBPACK_IMPORTED_MODULE_6__.NO_DUE_DATE_MESSAGE;else dueDateLabel.textContent = goal.dueDate;
      var dateSelect = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_DATE_SELECT_ID);
      dateSelect.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
      dateSelect.onchange = function () {
        goal.dueDate = dateSelect.value;
        dueDateLabel.textContent = goal.dueDate;
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
      };
      var colorSelector = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_SELECTOR_CLASS);
      var colorInput = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_INPUT_CLASS);
      var colorLabel = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CURRENT_LABEL_COLOR_ID);
      colorInput.onchange = function () {
        goal.setColor(colorInput.value);
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
        setColorLabel();
        var oldCheckBox = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.CHECK_BOX_CLASS);
        taskWrapper.replaceChild(buildCheckBox(goal, card), oldCheckBox);
      };
      setColorLabel();
      function setColorLabel() {
        if (goal.color === _Constants__WEBPACK_IMPORTED_MODULE_6__.NEUTRAL) {
          colorLabel.textContent = _Constants__WEBPACK_IMPORTED_MODULE_6__.SELECT_COLOR_MESSAGE;
          colorSelector.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.NO_SELECTOR_CLASS);
        } else {
          colorLabel.textContent = "".concat(goal.color.toUpperCase());
          colorSelector.style.backgroundColor = goal.color;
          colorInput.value = goal.color;
          colorSelector.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_6__.NO_SELECTOR_CLASS);
        }
      }
      var note = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_NOTE_ID);
      note.value = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
      if (goal.note !== undefined) note.value = goal.note;
      note.onchange = function () {
        goal.note = note.value;
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
      };
      var deleteBtn = activeGoalSidebar.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.TASK_DELETE_ID);
      deleteBtn.onclick = function () {
        removeGoal(goal, card);
      };
      activeGoalSidebar.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
      overlay.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE);
    }
    function buildCheckBox(goal, card) {
      var checkBox = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
      checkBox.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_6__.DATA_COLOR_CLASS, goal.color);
      checkBox.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.CHECK_BOX_CLASS_1);
      var taskColor = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.STYLE);
      card.appendChild(taskColor);
      taskColor.innerHTML = ".check-box[data-color=\"".concat(goal.color, "\"] i {color: ").concat(goal.color, "}");
      onCompletedToggled(checkBox, goal);
      checkBox.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function (e) {
        e.stopPropagation();
        goal.toggleComplete();
        onCompletedToggled(checkBox, goal);
        moveGoal(card, goal.complete);
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
      });
      return checkBox;
    }
    function buildPriorityBtn(goal) {
      var priority = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
      priority.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.PRIORITY_CLASS);
      onPriorityToggled(priority, goal);
      priority.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function (e) {
        e.stopPropagation();
        goal.togglePriority();
        onPriorityToggled(priority, goal);
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
      });
      return priority;
    }
    function addStep(goal, step) {
      goal.steps.addItem((0,_Builders_StepBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])(step));
      (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
      displaySteps(goal);
    }
    function displaySteps(goal) {
      var stepsContainer = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_6__.ACTIVE_STEPS_CONTAINER_CLASS);
      stepsContainer.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_6__.EMPTY_STRING;
      goal.steps.items.forEach(function (currentStep) {
        var card = buildStepCard(currentStep);
        stepsContainer.appendChild(card);
      });
      function buildStepCard(step) {
        var stepCard = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
        stepCard.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.STEP_CARD_CLASS);
        var checkBox = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
        stepCard.appendChild(checkBox);
        checkBox.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.CHECK_BOX_CLASS_1);
        onCompletedToggled(checkBox, step);
        checkBox.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function (e) {
          e.stopPropagation();
          step.toggleComplete();
          onCompletedToggled(checkBox, step);
          (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
        });
        var stepTitle = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.P);
        stepCard.appendChild(stepTitle);
        stepTitle.textContent = step.title;
        var deleteBtn = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_6__.DIV);
        stepCard.appendChild(deleteBtn);
        deleteBtn.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_6__.STEP_DELETE_BTN_CLASS);
        deleteBtn.innerHTML = '<i class="step-delete fa-solid fa-trash"></i>';
        deleteBtn.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_6__.CLICK, function (e) {
          e.stopPropagation();
          removeStep(goal, step, stepCard, stepsContainer, _MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
        });
        return stepCard;
      }
      ;
    }
    ;
    function onPriorityToggled(btnContainer, goal) {
      var favouriteStatus = goal.priority;
      if (favouriteStatus) {
        btnContainer.innerHTML = '<i class="fa-solid fa-star"></i>';
      } else {
        btnContainer.innerHTML = '<i class="fa-regular fa-star"></i>';
      }
    }
    ;
    function onCompletedToggled(btnContainer, goal) {
      var goalCompleted = goal.complete;
      if (goalCompleted) {
        btnContainer.innerHTML = '<i class="complete-task fa-solid fa-circle-check"></i>';
      } else {
        btnContainer.innerHTML = '<i class="incomplete-task fa-regular fa-circle"></i>';
      }
    }
    ;
    function moveGoal(card, completed) {
      if (completed) {
        incompleteContainer.removeChild(card);
        completeContainer.appendChild(card);
        playSound(successSound);
      } else {
        completeContainer.removeChild(card);
        incompleteContainer.appendChild(card);
        playSound(failureSound);
      }
    }
    ;
    function removeGoal(goal, card) {
      goal.childOf.deleteItem(goal);
      (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_7__.setMasterListToLocalStorage)(_MasterList__WEBPACK_IMPORTED_MODULE_5__["default"]);
      var goalCompleted = goal.complete;
      if (goalCompleted) {
        completeContainer.removeChild(card);
      } else {
        incompleteContainer.removeChild(card);
      }
      displayLists();
      closeSidebar(overlay, activeGoalSidebar);
    }
    ;
  }
}();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map