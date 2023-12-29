import './css/reset.css';
import './css/style.css';
import ListBuilder from './Builders/ListBuilder';
import GoalsBuilder from './Builders/GoalsBuilder';
import StepBuilder from './Builders/StepBuilder';
import MasterList from './MasterList';
import { getMonth, getDate, parseISO, differenceInCalendarDays, differenceInYears } from 'date-fns';
import { EMPTY_STRING, FAILURE_SOUND, SUCCESS_SOUND, CLICK, HAMBURGER_BTN_CLASS, OVERLAY_CLASS, ACTIVE_GOAL_SIDEBAR_CLASS, LIST_SIDEBAR_CLASS, NEW_LIST_INPUT_ID, NEW_GOAL_INPUT_ID, ACTIVE, CATEGORY_CONTAINER_CLASS, LOGIN_BTN_CLASS, LOGIN_ERROR, KEYDOWN, COLOR_BLACK, NEUTRAL, COLOR_INPUT_CLASS, HIDDEN_DATE_INPUT_CLASS, CALENDAR_CLASS, CALENDAR_NOGRID_CLASS, COLOR_SELECTOR_CLASS, NO_SELECTOR_CLASS, TITLE_WRAPPER_CLASS, HIDDEN, CHANGE, DATE_INPUT_WRAPPER_CLASS, CALENDAR_MONTH_CLASS, CALENDAR_DAY_CLASS, INVALID_MONTH, DECEMBER, NOVEMBER, OCTOBER, SEPTEMBER, AUGUST, JULY, JUNE, MARCH, APRIL, FEBRUARY, JANUARY, CANCEL_COLOR_CLASS, PRESET_CLASS, KEYUP, SEARCH_BAR_CLASS, FAVOURITES_BTN_CLASS, SEARCH_RESULTS, FAVOURITES_RESULTS, PLANNED_BTN_CLASS, OVERDUE_BTN_CLASS, DUE_TODAY_CLASS, DUE_TOMORROW_BTN_CLASS, ENTER, LIST_CONTAINER_CLASS, LIST_CARD_CLASS, SWAP_BTN_CLASS, TOTAL_TASKS_WRAPPER_CLASS, TOTAL_TASKS_CLASS, DELETE_BTN_CLASS, ACTIVE_LIST_TITLE_CLASS, INCOMPLETE_CONTAINER_CLASS, COMPLETE_CONTAINER_CLASS, TODO_CARD_CLASS, TODO_CARD_TASK_WRAPPER_CLASS, TASK_TITLE_CLASS, PARENT_LIST_TITLE_CLASS, TASK_DETAILS_WRAPPER_CLASS, TASK_DUE_DATE_CLASS, PAST_DUE, TODAY, TOMORROW, WITH_IN_A_WEEK, WITH_IN_A_YEAR, MORE_THAN_A_YEAR, PAST_DUE_CLASS, PAST_DUE_MESSAGE, DUE_TODAY_MESSAGE, WITH_IN_A_WEEK_MESSAGE, WITHIN_A_YEAR_MESSAGE, MORE_THAN_A_YEAR_MESSAGE, SUB_TASKS_CLASS, TASK_NOTE_CLASS, TASK_WRAPPER_CLASS, TASK_TITLE_ID, ADD_STEP_INPUT_ID, TASK_DUE_DATE_ID, TASK_DATE_SELECT_ID, CURRENT_LABEL_COLOR_ID, CHECK_BOX_CLASS, NO_DUE_DATE_MESSAGE, SELECT_COLOR_MESSAGE, TASK_NOTE_ID, TASK_DELETE_ID, CHECK_BOX_CLASS_1, DATA_COLOR_CLASS, PRIORITY_CLASS, ACTIVE_STEPS_CONTAINER_CLASS, STEP_CARD_CLASS, STEP_DELETE_BTN_CLASS, MY_TASKS, ITALIC_HTML, NINETY_NINE, BUTTON, DIV, P, STYLE } from './Constants';
import { getMasterListFromLocalStorage, setMasterListToLocalStorage } from './LocalStorage';
function removeStep(goal, step, card, container, MasterList) {
  goal.steps.deleteItem(step);
  setMasterListToLocalStorage(MasterList);
  container.removeChild(card);
}
;
function closeSidebar(overlay, activeGoalSidebar) {
  overlay.classList.remove(ACTIVE);
  activeGoalSidebar.classList.remove(ACTIVE);
}
;
function closeListSidebar(overlay, listSideBar) {
  overlay.classList.remove(ACTIVE);
  listSideBar.classList.remove(ACTIVE);
}
;
function playSound(sound) {
  sound.volume = 0.2;
  sound.play();
}
;
function hamburgerBtnClickEventListener(hamburgerBtn, listSideBar, overlay) {
  hamburgerBtn.addEventListener(CLICK, function () {
    listSideBar.classList.toggle(ACTIVE);
    overlay.classList.toggle(ACTIVE);
  });
}
;
function overlayClickEventListener(overlay, activeGoalSidebar, listSideBar) {
  // When a task is select and we click on the screen the task properties are closed
  overlay.addEventListener(CLICK, function () {
    closeSidebar(overlay, activeGoalSidebar);
    closeListSidebar(overlay, listSideBar);
  });
}
;
var DomController = function () {
  var successSound = new Audio(SUCCESS_SOUND);
  var failureSound = new Audio(FAILURE_SOUND);

  // Fetch by ClassName
  var hamburgerBtn = document.querySelector(HAMBURGER_BTN_CLASS);
  var overlay = document.querySelector(OVERLAY_CLASS);
  var activeGoalSidebar = document.querySelector(ACTIVE_GOAL_SIDEBAR_CLASS);
  var listSideBar = document.querySelector(LIST_SIDEBAR_CLASS);
  var categoryContainer = document.querySelectorAll(CATEGORY_CONTAINER_CLASS);
  var newListInput = document.querySelector(NEW_LIST_INPUT_ID);
  var addGoalInput = document.querySelector(NEW_GOAL_INPUT_ID);
  var loginBtn = document.querySelector(LOGIN_BTN_CLASS);
  // Add a local host in local storage
  loginBtn.addEventListener(CLICK, function () {
    return alert(LOGIN_ERROR);
  });
  hamburgerBtnClickEventListener(hamburgerBtn, listSideBar, overlay);
  overlayClickEventListener(overlay, activeGoalSidebar, listSideBar);

  // When a new list is entered then adjust title
  newListInput.addEventListener(KEYDOWN, function (e) {
    if (!checkInputEntered(e, newListInput.value)) return;
    var title = newListInput.value;
    newListInput.value = EMPTY_STRING;
    addList(title);
    setMasterListToLocalStorage(MasterList);
  });

  // When for a list a goal is added then change the dom elements
  addGoalInput.addEventListener(KEYDOWN, function (e) {
    if (!checkInputEntered(e, addGoalInput.value)) return;
    var title = addGoalInput.value;
    addGoalInput.value = EMPTY_STRING;
    var calenderInput = document.querySelector(HIDDEN_DATE_INPUT_CLASS);
    var calIcon = calenderInput.parentElement.querySelector(CALENDAR_CLASS);
    var calNoGridIcon = calenderInput.parentElement.querySelector(CALENDAR_NOGRID_CLASS);
    calIcon.classList.add(ACTIVE);
    calNoGridIcon.classList.remove(ACTIVE);
    var dueDate = calenderInput.value;
    calenderInput.value = EMPTY_STRING;
    var colorSelector = addGoalInput.parentElement.parentElement.querySelector(COLOR_SELECTOR_CLASS);
    colorSelector.classList.add(NO_SELECTOR_CLASS);
    var colorInput = addGoalInput.parentElement.parentElement.querySelector(COLOR_INPUT_CLASS);
    var color = NEUTRAL;
    if (colorInput.value != COLOR_BLACK) {
      color = colorInput.value;
    }
    colorInput.value = EMPTY_STRING;
    addGoal(title, color, dueDate);
    setMasterListToLocalStorage(MasterList);
  });
  categoryContainer.forEach(function (category) {
    var wrapper = category.querySelector(TITLE_WRAPPER_CLASS);
    wrapper.addEventListener(CLICK, function () {
      category.classList.toggle(HIDDEN);
    });
  });
  (function setUpDateSelector() {
    var dateInputWrapper = document.querySelectorAll(DATE_INPUT_WRAPPER_CLASS);
    dateInputWrapper.forEach(function (wrapper) {
      var hiddenInput = wrapper.querySelector(HIDDEN_DATE_INPUT_CLASS);
      hiddenInput.addEventListener(CHANGE, function () {
        var calIcon = wrapper.querySelector(CALENDAR_CLASS);
        var calNoGridIcon = wrapper.querySelector(CALENDAR_NOGRID_CLASS);
        var date = hiddenInput.value;
        var dateFormatted = parseISO(date);
        var month = getMonth(dateFormatted);
        var day = getDate(dateFormatted);
        wrapper.querySelector(CALENDAR_MONTH_CLASS).textContent = getAbbreviatedMonth(month);
        wrapper.querySelector(CALENDAR_DAY_CLASS).textContent = day;
        calIcon.classList.remove(ACTIVE);
        calNoGridIcon.classList.add(ACTIVE);
      });
    });
    function getAbbreviatedMonth(monthIndex) {
      var abbreviatedMonth;
      switch (monthIndex) {
        case 0:
          abbreviatedMonth = JANUARY;
          break;
        case 1:
          abbreviatedMonth = FEBRUARY;
          break;
        case 2:
          abbreviatedMonth = MARCH;
          break;
        case 3:
          abbreviatedMonth = APRIL;
          break;
        case 4:
          abbreviatedMonth = MAY;
          break;
        case 5:
          abbreviatedMonth = JUNE;
          break;
        case 6:
          abbreviatedMonth = JULY;
          break;
        case 7:
          abbreviatedMonth = AUGUST;
          break;
        case 8:
          abbreviatedMonth = SEPTEMBER;
          break;
        case 9:
          abbreviatedMonth = OCTOBER;
          break;
        case 10:
          abbreviatedMonth = NOVEMBER;
          break;
        case 11:
          abbreviatedMonth = DECEMBER;
          break;
        default:
          abbreviatedMonth = INVALID_MONTH;
      }
      return abbreviatedMonth;
    }
  })();
  (function setUpColorPicker() {
    var colorSelector = document.querySelectorAll(COLOR_SELECTOR_CLASS);
    colorSelector.forEach(function (selector) {
      var colorInput = selector.querySelector(COLOR_INPUT_CLASS);
      var cancelColor = selector.querySelector(CANCEL_COLOR_CLASS);
      var changeEvent = new Event(CHANGE);
      colorInput.addEventListener(CHANGE, function () {
        if (colorInput.value === COLOR_BLACK) return;
        selector.style.backgroundColor = colorInput.value;
        selector.classList.remove(NO_SELECTOR_CLASS);
      });
      cancelColor.addEventListener(CLICK, function () {
        colorInput.value = COLOR_BLACK;
        selector.classList.add(NO_SELECTOR_CLASS);
        colorInput.dispatchEvent(changeEvent);
      });
      selector.querySelectorAll(PRESET_CLASS).forEach(function (preset) {
        preset.style.backgroundColor = preset.dataset.color;
        preset.addEventListener(CLICK, function (e) {
          selector.blur();
          selector.style.backgroundColor = preset.dataset.color;
          selector.classList.remove(NO_SELECTOR_CLASS);
          colorInput.value = e.target.dataset.color;
          colorInput.dispatchEvent(changeEvent);
        });
      });
    });
  })();
  (function setUpSearchbar() {
    var searchBar = document.querySelector(SEARCH_BAR_CLASS);
    searchBar.addEventListener(KEYUP, function () {
      var matches = findAllMatches(searchBar.value.toLowerCase());
      if (searchBar.value === EMPTY_STRING) displayGoals();else displayGoals(matches);
    });
    function findAllMatches(query) {
      var matches = ListBuilder(SEARCH_RESULTS);
      MasterList.items.forEach(function (list) {
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
    var favouritesBtn = document.querySelector(FAVOURITES_BTN_CLASS);
    favouritesBtn.addEventListener(CLICK, function () {
      var matches = findAllStarredTasks();
      displayGoals(matches);
    });
    function findAllStarredTasks() {
      var matches = ListBuilder(FAVOURITES_RESULTS);
      MasterList.items.forEach(function (list) {
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
    var plannedBtn = document.querySelector(PLANNED_BTN_CLASS);
    var overdueBtn = document.querySelector(OVERDUE_BTN_CLASS);
    var dueTodayBtn = document.querySelector(DUE_TODAY_CLASS);
    var dueTomorrowBtn = document.querySelector(DUE_TOMORROW_BTN_CLASS);
    plannedBtn.addEventListener(CLICK, function () {
      var matches = findAllDueToday('planned', 'Planned');
      displayGoals(matches);
    });
    overdueBtn.addEventListener(CLICK, function () {
      var matches = findAllDueToday('pastdue', 'Past Due');
      displayGoals(matches);
    });
    dueTodayBtn.addEventListener(CLICK, function () {
      var matches = findAllDueToday(0, 'Due Today');
      displayGoals(matches);
    });
    dueTomorrowBtn.addEventListener(CLICK, function () {
      var matches = findAllDueToday(1, 'Due Tomorrow');
      displayGoals(matches);
    });
    function findAllDueToday(query, queryTitle) {
      var matches = ListBuilder(queryTitle);
      var currentDate = new Date();
      MasterList.items.forEach(function (list) {
        list.items.forEach(function (task) {
          var parsedDate = parseISO(task.dueDate);
          var daysUntilDue = differenceInCalendarDays(parsedDate, currentDate);
          if (!Number.isNaN(daysUntilDue) && (daysUntilDue === query || query === 'planned' || query === 'pastdue' && daysUntilDue < 0)) {
            matches.addItem(task);
          }
        });
      });
      return matches;
    }
  })();
  function checkInputEntered(e, value) {
    if (e.key !== ENTER || e.keyCode !== 13) return false;
    if (value === EMPTY_STRING) return false;
    e.preventDefault();
    return true;
  }
  getMasterListFromLocalStorage(MasterList);
  displayLists();
  displayGoals();
  function addList(title) {
    var newList = ListBuilder(title);
    MasterList.addItem(newList);
    swapActiveList(newList);
    displayLists();
  }
  function addGoal(title, color, dueDate) {
    var activeList = MasterList.getActiveList();
    activeList.addItem(GoalsBuilder(activeList, title, color, dueDate));
    displayGoals();
  }
  function swapActiveList(list) {
    MasterList.setActiveList(list);
    setMasterListToLocalStorage(MasterList);
    displayGoals();
  }
  function displayLists() {
    var listContainer = document.querySelector(LIST_CONTAINER_CLASS);
    listContainer.innerHTML = EMPTY_STRING;
    MasterList.items.forEach(function (list) {
      var card = buildListCard(list);
      listContainer.appendChild(card);
    });
    function buildListCard(list) {
      var card = document.createElement(DIV);
      card.classList.add(LIST_CARD_CLASS);
      var swapBtn = document.createElement(BUTTON);
      card.appendChild(swapBtn);
      swapBtn.classList.add(SWAP_BTN_CLASS);
      swapBtn.innerHTML = list.title;
      swapBtn.addEventListener(CLICK, function () {
        swapActiveList(list);
      });
      var totalTasksWrapper = document.createElement(P);
      card.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(TOTAL_TASKS_WRAPPER_CLASS);
      var totalTasks = document.createElement(P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(TOTAL_TASKS_CLASS);
      totalTasks.innerHTML = list.items.length > 99 ? NINETY_NINE : list.items.length;
      var deleteBtn = document.createElement(BUTTON);
      card.appendChild(deleteBtn);
      deleteBtn.classList.add(DELETE_BTN_CLASS);
      deleteBtn.innerHTML = '<i id="task-delete" class="fa-solid fa-trash"></i>';
      deleteBtn.addEventListener(CLICK, function () {
        MasterList.deleteItem(list);
        listContainer.removeChild(card);
        if (MasterList.items.length === 0) {
          MasterList.addItem(ListBuilder(MY_TASKS));
          MasterList.setActiveList(MasterList.items[0]);
          displayGoals();
          displayLists();
        } else if (MasterList.getActiveList() === list) {
          var nextList = MasterList.items[MasterList.items.length - 1];
          MasterList.setActiveList(nextList);
          displayGoals();
        }
        setMasterListToLocalStorage(MasterList);
      });
      return card;
    }
  }
  function displayGoals(goalsList) {
    if (goalsList === undefined) {
      goalsList = MasterList.getActiveList();
    }

    // Setting the list title from button click
    var listTitle = document.querySelector(ACTIVE_LIST_TITLE_CLASS);
    listTitle.textContent = goalsList.title;

    // Incompleted goals are shown here
    var incompleteContainer = document.querySelector(INCOMPLETE_CONTAINER_CLASS);
    incompleteContainer.innerHTML = EMPTY_STRING;

    // Completing goals are shown here
    var completeContainer = document.querySelector(COMPLETE_CONTAINER_CLASS);
    completeContainer.innerHTML = EMPTY_STRING;
    goalsList.items.forEach(function (goal) {
      (function setUpCard(replaceCard) {
        var card = buildTodoCard(goal);
        card.addEventListener(CLICK, function () {
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
      var card = document.createElement(DIV);
      card.classList.add(TODO_CARD_CLASS);
      card.appendChild(buildCheckBox(goal, card));
      var taskWrapper = document.createElement(DIV);
      card.appendChild(taskWrapper);
      taskWrapper.classList.add(TODO_CARD_TASK_WRAPPER_CLASS);
      var title = document.createElement(P);
      taskWrapper.appendChild(title);
      title.classList.add(TASK_TITLE_CLASS);
      title.innerHTML = goal.title;
      var detailsWrapper = document.createElement(DIV);
      taskWrapper.appendChild(detailsWrapper);
      detailsWrapper.classList.add(TASK_DETAILS_WRAPPER_CLASS);
      if (goal.childOf.title !== goalsList.title) {
        var parentListTitle = document.createElement(P);
        detailsWrapper.appendChild(parentListTitle);
        parentListTitle.classList.add(PARENT_LIST_TITLE_CLASS);
        var _listTitle = goal.childOf.title.split(EMPTY_STRING);
        parentListTitle.textContent = _listTitle.length > 24 ? _listTitle.splice(0, 24).join(EMPTY_STRING) + '...' : goal.childOf.title;
      }
      if (goal.dueDate !== EMPTY_STRING) {
        var getDaysUntilDueCase = function getDaysUntilDueCase(daysUntilDue, yearsUntilDue) {
          if (daysUntilDue < 0) return PAST_DUE;
          if (daysUntilDue === 0) return TODAY;
          if (daysUntilDue === 1) return TOMORROW;
          if (daysUntilDue < 7) return WITH_IN_A_WEEK;
          if (yearsUntilDue < 1) return WITH_IN_A_YEAR;
          return MORE_THAN_A_YEAR;
        };
        var dueDate = document.createElement(P);
        detailsWrapper.appendChild(dueDate);
        dueDate.classList.add(TASK_DUE_DATE_CLASS);
        var parsedDate = parseISO(goal.dueDate);
        var daysUntilDue = differenceInCalendarDays(parsedDate, new Date());
        var yearsUntilDue = differenceInYears(parsedDate, new Date());
        switch (getDaysUntilDueCase(daysUntilDue, yearsUntilDue)) {
          case PAST_DUE:
            dueDate.innerHTML = PAST_DUE_MESSAGE(daysUntilDue);
            dueDate.classList.add(PAST_DUE_CLASS);
            break;
          case TODAY:
            dueDate.innerHTML = DUE_TODAY_MESSAGE;
            break;
          case TOMORROW:
            dueDate.innerHTML = DUE_TODAY_MESSAGE;
            break;
          case WITH_IN_A_WEEK:
            dueDate.innerHTML = WITH_IN_A_WEEK_MESSAGE(daysUntilDue);
            break;
          case WITH_IN_A_YEAR:
            dueDate.innerHTML = WITHIN_A_YEAR_MESSAGE(parsedDate);
            break;
          case MORE_THAN_A_YEAR:
            dueDate.innerHTML = MORE_THAN_A_YEAR_MESSAGE(parsedDate);
            break;
        }
      }
      if (goal.steps.items.length > 0) {
        var subTasks = document.createElement(P);
        detailsWrapper.appendChild(subTasks);
        subTasks.classList.add(SUB_TASKS_CLASS);
        var completedSubTasks = goal.steps.items.reduce(function (total, task) {
          return task.complete ? total + 1 : total;
        }, 0);
        subTasks.innerHTML = goal.steps.items.length === 0 ? EMPTY_STRING : "".concat(completedSubTasks, "/").concat(goal.steps.items.length);
      }
      var note = document.createElement(P);
      detailsWrapper.appendChild(note);
      note.classList.add(TASK_NOTE_CLASS);
      note.innerHTML = goal.note === EMPTY_STRING ? EMPTY_STRING : '<i class="fa-regular fa-pen-to-square"></i>';
      card.appendChild(buildPriorityBtn(goal));
      return card;
    }
    function displaySidebar(goal, card) {
      var taskWrapper = activeGoalSidebar.querySelector(TASK_WRAPPER_CLASS);
      taskWrapper.innerHTML = EMPTY_STRING;
      var checkBox = buildCheckBox(goal, card);
      taskWrapper.appendChild(checkBox);
      var title = document.createElement(P);
      taskWrapper.appendChild(title);
      title.id = TASK_TITLE_ID;
      title.textContent = goal.title;
      var priorityBtn = buildPriorityBtn(goal);
      taskWrapper.appendChild(priorityBtn);
      displaySteps(goal);
      var addStepInput = activeGoalSidebar.querySelector(ADD_STEP_INPUT_ID);
      addStepInput.value = EMPTY_STRING;
      addStepInput.onkeydown = function (e) {
        if (!checkInputEntered(e, addStepInput.value)) return;
        addStep(goal, addStepInput.value);
        addStepInput.value = EMPTY_STRING;
      };
      var dueDateLabel = activeGoalSidebar.querySelector(TASK_DUE_DATE_ID);
      if (goal.dueDate === EMPTY_STRING) dueDateLabel.textContent = NO_DUE_DATE_MESSAGE;else dueDateLabel.textContent = goal.dueDate;
      var dateSelect = activeGoalSidebar.querySelector(TASK_DATE_SELECT_ID);
      dateSelect.value = EMPTY_STRING;
      dateSelect.onchange = function () {
        goal.dueDate = dateSelect.value;
        dueDateLabel.textContent = goal.dueDate;
        setMasterListToLocalStorage(MasterList);
      };
      var colorSelector = activeGoalSidebar.querySelector(COLOR_SELECTOR_CLASS);
      var colorInput = activeGoalSidebar.querySelector(COLOR_INPUT_CLASS);
      var colorLabel = activeGoalSidebar.querySelector(CURRENT_LABEL_COLOR_ID);
      colorInput.onchange = function () {
        goal.setColor(colorInput.value);
        setMasterListToLocalStorage(MasterList);
        setColorLabel();
        var oldCheckBox = activeGoalSidebar.querySelector(CHECK_BOX_CLASS);
        taskWrapper.replaceChild(buildCheckBox(goal, card), oldCheckBox);
      };
      setColorLabel();
      function setColorLabel() {
        if (goal.color === NEUTRAL) {
          colorLabel.textContent = SELECT_COLOR_MESSAGE;
          colorSelector.classList.add(NO_SELECTOR_CLASS);
        } else {
          colorLabel.textContent = "".concat(goal.color.toUpperCase());
          colorSelector.style.backgroundColor = goal.color;
          colorInput.value = goal.color;
          colorSelector.classList.remove(NO_SELECTOR_CLASS);
        }
      }
      var note = activeGoalSidebar.querySelector(TASK_NOTE_ID);
      note.value = EMPTY_STRING;
      if (goal.note !== undefined) note.value = goal.note;
      note.onchange = function () {
        goal.note = note.value;
        setMasterListToLocalStorage(MasterList);
      };
      var deleteBtn = activeGoalSidebar.querySelector(TASK_DELETE_ID);
      deleteBtn.onclick = function () {
        removeGoal(goal, card);
      };
      activeGoalSidebar.classList.add(ACTIVE);
      overlay.classList.add(ACTIVE);
    }
    function buildCheckBox(goal, card) {
      var checkBox = document.createElement(DIV);
      checkBox.setAttribute(DATA_COLOR_CLASS, goal.color);
      checkBox.classList.add(CHECK_BOX_CLASS_1);
      var taskColor = document.createElement(STYLE);
      card.appendChild(taskColor);
      taskColor.innerHTML = ".check-box[data-color=\"".concat(goal.color, "\"] i {color: ").concat(goal.color, "}");
      onCompletedToggled(checkBox, goal);
      checkBox.addEventListener(CLICK, function (e) {
        e.stopPropagation();
        goal.toggleComplete();
        onCompletedToggled(checkBox, goal);
        moveGoal(card, goal.complete);
        setMasterListToLocalStorage(MasterList);
      });
      return checkBox;
    }
    function buildPriorityBtn(goal) {
      var priority = document.createElement(DIV);
      priority.classList.add(PRIORITY_CLASS);
      onPriorityToggled(priority, goal);
      priority.addEventListener(CLICK, function (e) {
        e.stopPropagation();
        goal.togglePriority();
        onPriorityToggled(priority, goal);
        setMasterListToLocalStorage(MasterList);
      });
      return priority;
    }
    function addStep(goal, step) {
      goal.steps.addItem(StepBuilder(step));
      setMasterListToLocalStorage(MasterList);
      displaySteps(goal);
    }
    function displaySteps(goal) {
      var stepsContainer = document.querySelector(ACTIVE_STEPS_CONTAINER_CLASS);
      stepsContainer.innerHTML = EMPTY_STRING;
      goal.steps.items.forEach(function (currentStep) {
        var card = buildStepCard(currentStep);
        stepsContainer.appendChild(card);
      });
      function buildStepCard(step) {
        var stepCard = document.createElement(DIV);
        stepCard.classList.add(STEP_CARD_CLASS);
        var checkBox = document.createElement(DIV);
        stepCard.appendChild(checkBox);
        checkBox.classList.add(CHECK_BOX_CLASS_1);
        onCompletedToggled(checkBox, step);
        checkBox.addEventListener(CLICK, function (e) {
          e.stopPropagation();
          step.toggleComplete();
          onCompletedToggled(checkBox, step);
          setMasterListToLocalStorage(MasterList);
        });
        var stepTitle = document.createElement(P);
        stepCard.appendChild(stepTitle);
        stepTitle.textContent = step.title;
        var deleteBtn = document.createElement(DIV);
        stepCard.appendChild(deleteBtn);
        deleteBtn.classList.add(STEP_DELETE_BTN_CLASS);
        deleteBtn.innerHTML = '<i class="step-delete fa-solid fa-trash"></i>';
        deleteBtn.addEventListener(CLICK, function (e) {
          e.stopPropagation();
          removeStep(goal, step, stepCard, stepsContainer, MasterList);
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
      setMasterListToLocalStorage(MasterList);
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