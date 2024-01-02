import './css/index.css';
import ListBuilder from './Builders/ListBuilder';
import GoalsBuilder from './Builders/GoalsBuilder';
import StepBuilder from './Builders/StepBuilder';
import MasterList from './MasterList';
import { getMonth, getDate, parseISO, differenceInCalendarDays, differenceInYears} from "date-fns";
import { EMPTY_STRING, CLICK , HAMBURGER_BTN_CLASS, OVERLAY_CLASS, ACTIVE_GOAL_SIDEBAR_CLASS, LIST_SIDEBAR_CLASS, NEW_LIST_INPUT_ID, NEW_GOAL_INPUT_ID, ACTIVE, CATEGORY_CONTAINER_CLASS, LOGIN_BTN_CLASS, LOGIN_ERROR, KEYDOWN, COLOR_BLACK, NEUTRAL, COLOR_INPUT_CLASS, HIDDEN_DATE_INPUT_CLASS, CALENDAR_CLASS, CALENDAR_NOGRID_CLASS, COLOR_SELECTOR_CLASS, NO_SELECTOR_CLASS, TITLE_WRAPPER_CLASS, HIDDEN, CHANGE, DATE_INPUT_WRAPPER_CLASS, CALENDAR_MONTH_CLASS, CALENDAR_DAY_CLASS, INVALID_MONTH, DECEMBER, NOVEMBER, OCTOBER, SEPTEMBER, AUGUST, JULY, JUNE, MARCH, APRIL, FEBRUARY, JANUARY, CANCEL_COLOR_CLASS, PRESET_CLASS, KEYUP, SEARCH_BAR_CLASS, FAVOURITES_BTN_CLASS, SEARCH_RESULTS, FAVOURITES_RESULTS, PLANNED_BTN_CLASS, OVERDUE_BTN_CLASS, DUE_TODAY_CLASS, DUE_TOMORROW_BTN_CLASS, ENTER, LIST_CONTAINER_CLASS, LIST_CARD_CLASS, SWAP_BTN_CLASS, TOTAL_TASKS_WRAPPER_CLASS, TOTAL_TASKS_CLASS, DELETE_BTN_CLASS, ACTIVE_LIST_TITLE_CLASS, INCOMPLETE_CONTAINER_CLASS, COMPLETE_CONTAINER_CLASS, TODO_CARD_CLASS, TODO_CARD_TASK_WRAPPER_CLASS, TASK_TITLE_CLASS, PARENT_LIST_TITLE_CLASS, TASK_DETAILS_WRAPPER_CLASS, TASK_DUE_DATE_CLASS, PAST_DUE, TODAY, TOMORROW, WITH_IN_A_WEEK, WITH_IN_A_YEAR, MORE_THAN_A_YEAR, PAST_DUE_CLASS, PAST_DUE_MESSAGE, DUE_TODAY_MESSAGE, WITH_IN_A_WEEK_MESSAGE, WITHIN_A_YEAR_MESSAGE, MORE_THAN_A_YEAR_MESSAGE, SUB_TASKS_CLASS, TASK_NOTE_CLASS, TASK_WRAPPER_CLASS, TASK_TITLE_ID, ADD_STEP_INPUT_ID, TASK_DUE_DATE_ID, TASK_DATE_SELECT_ID, CURRENT_LABEL_COLOR_ID, CHECK_BOX_CLASS, NO_DUE_DATE_MESSAGE, SELECT_COLOR_MESSAGE, TASK_NOTE_ID, TASK_DELETE_ID, CHECK_BOX_CLASS_1, DATA_COLOR_CLASS, PRIORITY_CLASS, ACTIVE_STEPS_CONTAINER_CLASS, STEP_CARD_CLASS, STEP_DELETE_BTN_CLASS, MY_TASKS, BUTTON, DIV, P, STYLE, NINETY_NINE_PLUS} from './Constants';
import {getMasterListFromLocalStorage, setMasterListToLocalStorage} from './LocalStorage';
import SUCCESS_SOUND from './Public/success-sound.mp3';
import FAILURE_SOUND from './Public/failure-sound.mp3';

function removeStep(goal, step, card, container, MasterList) {
  goal.steps.deleteItem(step);
  setMasterListToLocalStorage(MasterList)
  container.removeChild(card);
};

function closeSidebar(overlay, activeGoalSidebar) {
  overlay.classList.remove(ACTIVE);
  activeGoalSidebar.classList.remove(ACTIVE);
};

function closeListSidebar(overlay, listSideBar) {
  overlay.classList.remove(ACTIVE);
  listSideBar.classList.remove(ACTIVE);
};

function playSound(sound){
  sound.volume = 0.2;
  sound.play();
};

function hamburgerBtnClickEventListener(hamburgerBtn, listSideBar, overlay){
  hamburgerBtn.addEventListener(CLICK, () => {
    listSideBar.classList.toggle(ACTIVE);
    overlay.classList.toggle(ACTIVE);
  });
};

function overlayClickEventListener(overlay, activeGoalSidebar, listSideBar){
  // When a task is select and we click on the screen the task properties are closed
  overlay.addEventListener(CLICK, () => {
    closeSidebar(overlay, activeGoalSidebar);
    closeListSidebar(overlay, listSideBar);
  });
};

const DomController = (() => {
  const successSound = new Audio(SUCCESS_SOUND);
  const failureSound = new Audio(FAILURE_SOUND);

  // Fetch by ClassName
  const hamburgerBtn = document.querySelector(HAMBURGER_BTN_CLASS);
  const overlay = document.querySelector(OVERLAY_CLASS);
  const activeGoalSidebar = document.querySelector(ACTIVE_GOAL_SIDEBAR_CLASS);
  const listSideBar = document.querySelector(LIST_SIDEBAR_CLASS);
  const categoryContainer = document.querySelectorAll(CATEGORY_CONTAINER_CLASS);


  const newListInput = document.querySelector(NEW_LIST_INPUT_ID);
  const addGoalInput = document.querySelector(NEW_GOAL_INPUT_ID);

  const loginBtn = document.querySelector(LOGIN_BTN_CLASS);
  // Add a local host in local storage
  loginBtn.addEventListener(CLICK, () => alert(LOGIN_ERROR));

  hamburgerBtnClickEventListener(hamburgerBtn, listSideBar, overlay);
  overlayClickEventListener(overlay, activeGoalSidebar, listSideBar);

  // When a new list is entered then adjust title
  newListInput.addEventListener(KEYDOWN, (e) => {
    if (!checkInputEntered(e, newListInput.value)) return;

    const title = newListInput.value;
    newListInput.value = EMPTY_STRING;

    addList(title);
    setMasterListToLocalStorage(MasterList);
  });

  // When for a list a goal is added then change the dom elements
  addGoalInput.addEventListener(KEYDOWN, (e) => {
    if (!checkInputEntered(e, addGoalInput.value)) return;

    const title = addGoalInput.value;
    addGoalInput.value = EMPTY_STRING;

    const calenderInput = document.querySelector(HIDDEN_DATE_INPUT_CLASS);
    const calIcon = calenderInput.parentElement.querySelector(CALENDAR_CLASS);
    const calNoGridIcon =
      calenderInput.parentElement.querySelector(CALENDAR_NOGRID_CLASS);
    calIcon.classList.add(ACTIVE);
    calNoGridIcon.classList.remove(ACTIVE);

    const dueDate = calenderInput.value;
    calenderInput.value = EMPTY_STRING;
    const colorSelector =
      addGoalInput.parentElement.parentElement.querySelector(COLOR_SELECTOR_CLASS);
    colorSelector.classList.add(NO_SELECTOR_CLASS);
    const colorInput =
      addGoalInput.parentElement.parentElement.querySelector(COLOR_INPUT_CLASS);
    let color = NEUTRAL;
    if(colorInput.value != COLOR_BLACK){
      color = colorInput.value;
    }
    colorInput.value = EMPTY_STRING;

    addGoal(title, color, dueDate);
    setMasterListToLocalStorage(MasterList);
    displayLists();
  });

  categoryContainer.forEach((category) => {
    const wrapper = category.querySelector(TITLE_WRAPPER_CLASS);

    wrapper.addEventListener(CLICK, () => {
      category.classList.toggle(HIDDEN);
    });
  });

  (function setUpDateSelector() {
    const dateInputWrapper = document.querySelectorAll(DATE_INPUT_WRAPPER_CLASS);

    dateInputWrapper.forEach((wrapper) => {
      const hiddenInput = wrapper.querySelector(HIDDEN_DATE_INPUT_CLASS);

      hiddenInput.addEventListener(CHANGE, () => {
        const calIcon = wrapper.querySelector(CALENDAR_CLASS);
        const calNoGridIcon = wrapper.querySelector(CALENDAR_NOGRID_CLASS);

        const date = hiddenInput.value;

        const dateFormatted = parseISO(date);

        const month = getMonth(dateFormatted);
        const day = getDate(dateFormatted);

        wrapper.querySelector(CALENDAR_MONTH_CLASS).textContent = getAbbreviatedMonth(month);
        wrapper.querySelector(CALENDAR_DAY_CLASS).textContent = day;

        calIcon.classList.remove(ACTIVE);
        calNoGridIcon.classList.add(ACTIVE);
      });
    });

    function getAbbreviatedMonth(monthIndex) {
      let abbreviatedMonth;

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
    const colorSelector = document.querySelectorAll(COLOR_SELECTOR_CLASS);

    colorSelector.forEach((selector) => {
      const colorInput = selector.querySelector(COLOR_INPUT_CLASS);
      const cancelColor = selector.querySelector(CANCEL_COLOR_CLASS);
      const changeEvent = new Event(CHANGE);

      colorInput.addEventListener(CHANGE, () => {
        if (colorInput.value === COLOR_BLACK) return;
        selector.style.backgroundColor = colorInput.value;
        selector.classList.remove(NO_SELECTOR_CLASS);
      });

      cancelColor.addEventListener(CLICK, () => {
        colorInput.value = COLOR_BLACK;
        selector.classList.add(NO_SELECTOR_CLASS);
        colorInput.dispatchEvent(changeEvent);
      });

      selector.querySelectorAll(PRESET_CLASS).forEach((preset) => {
        preset.style.backgroundColor = preset.dataset.color;

        preset.addEventListener(CLICK, (e) => {
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
    const searchBar = document.querySelector(SEARCH_BAR_CLASS);

    searchBar.addEventListener(KEYUP, () => {
      if (searchBar == null || searchBar.value === null || searchBar.value === EMPTY_STRING) {
        displayGoals();
      } else {
        const matches = findAllMatches(searchBar.value.toLowerCase());
        displayGoals(matches);
      }
    });

    function findAllMatches(query) {
      const matches = ListBuilder(SEARCH_RESULTS);

      MasterList.items.forEach((list) => {
        list.items.forEach((task) => {
          const title = task.title.toLowerCase();
          if (title.includes(query)) {
            matches.addItem(task);
          }
        });
      });

      return matches;
    }
  })();

  function findAllStarredTasks() {
    const matches = ListBuilder(FAVOURITES_RESULTS);

    MasterList.items.forEach((list) => {
      list.items.forEach((task) => {
        if (task.priority) {
          matches.addItem(task);
        }
      });
    });

    return matches;
  };

  function findAllDueToday(query, queryTitle) {
    const matches = ListBuilder(queryTitle);
    const currentDate = new Date();

    MasterList.items.forEach((list) => {
      list.items.forEach((task) => {
        const parsedDate = parseISO(task.dueDate);
        const daysUntilDue = differenceInCalendarDays(
          parsedDate,
          currentDate
        );

        if (
          !Number.isNaN(daysUntilDue) &&
          (daysUntilDue === query ||
            query === 'planned' ||
            (query === 'pastdue' && daysUntilDue < 0))
        ) {
          matches.addItem(task);
        }
      });
    });

    return matches;
  };

  (function setUpImportantList() {
    const favouritesBtn = document.querySelector(FAVOURITES_BTN_CLASS);

    favouritesBtn.addEventListener(CLICK, () => {
      const matches = findAllStarredTasks();

      displayGoals(matches);
    });
  })();

  (function setUpDueDatePresets() {
    const plannedBtn = document.querySelector(PLANNED_BTN_CLASS);
    const overdueBtn = document.querySelector(OVERDUE_BTN_CLASS);
    const dueTodayBtn = document.querySelector(DUE_TODAY_CLASS);
    const dueTomorrowBtn = document.querySelector(DUE_TOMORROW_BTN_CLASS);

    plannedBtn.addEventListener(CLICK, () => {
      const matches = findAllDueToday('planned', 'Planned');

      displayGoals(matches);
    });

    overdueBtn.addEventListener(CLICK, () => {
      const matches = findAllDueToday('pastdue', 'Past Due');

      displayGoals(matches);
    });

    dueTodayBtn.addEventListener(CLICK, () => {
      const matches = findAllDueToday(0, 'Due Today');

      displayGoals(matches);
    });

    dueTomorrowBtn.addEventListener(CLICK, () => {
      const matches = findAllDueToday(1, 'Due Tomorrow');

      displayGoals(matches);
    });
  })();

  function checkInputEntered(e, value) {
    if (e.key !== ENTER || e.keyCode !== 13) return false;
    e.preventDefault();
    if (value === EMPTY_STRING) return false;
    return true;
  }

  getMasterListFromLocalStorage(MasterList);
  displayLists();
  displayGoals();

  function addList(title) {
    const newList = ListBuilder(title);
    MasterList.addItem(newList);
    swapActiveList(newList);
    displayLists();
  }

  function addGoal(title, color, dueDate) {
    const activeList = MasterList.getActiveList();
    activeList.addItem(GoalsBuilder(activeList, title, color, dueDate));

    displayGoals();
  }

  function swapActiveList(list) {
    MasterList.setActiveList(list);
    setMasterListToLocalStorage(MasterList);
    displayGoals();
  }

  function getTotalPlannedTasks() {
    const plannedBtn = document.querySelector(PLANNED_BTN_CLASS);
    const plannedCard = plannedBtn.parentElement;
    const totalTasksList = plannedCard.getElementsByClassName(TOTAL_TASKS_CLASS);
    const matches = findAllDueToday('planned', 'Planned');

    if(totalTasksList.length > 0){
      const totalTasks = totalTasksList[0];
      totalTasks.innerHTML = matches.items.length > 99? NINETY_NINE_PLUS : matches.items.length;
    } else {
      const totalTasksWrapper = document.createElement(P);
      plannedCard.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(TOTAL_TASKS_WRAPPER_CLASS);
      const totalTasks = document.createElement(P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(TOTAL_TASKS_CLASS);

      totalTasks.innerHTML = matches.items.length > 99 ? NINETY_NINE_PLUS : matches.items.length;
    }
  };

  function getTotalDueTomorrowTasks() {
    const dueTomorrowBtn = document.querySelector(DUE_TOMORROW_BTN_CLASS);
    const dueTomorrowCard = dueTomorrowBtn.parentElement;
    const totalTasksList = dueTomorrowCard.getElementsByClassName(TOTAL_TASKS_CLASS);
    const matches = findAllDueToday(1, 'Due Tomorrow');

    if(totalTasksList.length > 0){
      const totalTasks = totalTasksList[0];
      totalTasks.innerHTML = matches.items.length > 99? NINETY_NINE_PLUS : matches.items.length;
    } else {
      const totalTasksWrapper = document.createElement(P);
      dueTomorrowCard.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(TOTAL_TASKS_WRAPPER_CLASS);
      const totalTasks = document.createElement(P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(TOTAL_TASKS_CLASS);

      totalTasks.innerHTML = matches.items.length > 99 ? NINETY_NINE_PLUS : matches.items.length;
    }
  };

  function getTotalFavouriteTasks() { 
    const favouritesBtn = document.querySelector(FAVOURITES_BTN_CLASS);
    const favouritesCard = favouritesBtn.parentElement;
    const totalTasksList = favouritesCard.getElementsByClassName(TOTAL_TASKS_CLASS);
    const matches = findAllStarredTasks();

    if(totalTasksList.length > 0){
      const totalTasks = totalTasksList[0];
      totalTasks.innerHTML = matches.items.length > 99? NINETY_NINE_PLUS : matches.items.length;
    } else {
      const totalTasksWrapper = document.createElement(P);
      favouritesCard.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(TOTAL_TASKS_WRAPPER_CLASS);
      const totalTasks = document.createElement(P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(TOTAL_TASKS_CLASS);

      totalTasks.innerHTML = matches.items.length > 99 ? NINETY_NINE_PLUS : matches.items.length;
    }
  };

  function getTotalOverdueTasks() {
    const overdueBtn = document.querySelector(OVERDUE_BTN_CLASS);
    const overdueCard = overdueBtn.parentElement;
    const totalTasksList = overdueCard.getElementsByClassName(TOTAL_TASKS_CLASS);
    const matches = findAllDueToday('pastdue', 'Past Due');

    if(totalTasksList.length > 0){
      const totalTasks = totalTasksList[0];
      totalTasks.innerHTML = matches.items.length > 99? NINETY_NINE_PLUS : matches.items.length;
    } else {
      const totalTasksWrapper = document.createElement(P);
      overdueCard.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(TOTAL_TASKS_WRAPPER_CLASS);
      const totalTasks = document.createElement(P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(TOTAL_TASKS_CLASS);

      totalTasks.innerHTML = matches.items.length > 99 ? NINETY_NINE_PLUS : matches.items.length;
    }
  };

  function getTotalDueTodayTasks() {
    const dueTodayBtn = document.querySelector(DUE_TODAY_CLASS);
    const dueTodayCard = dueTodayBtn.parentElement;
    const totalTasksList = dueTodayCard.getElementsByClassName(TOTAL_TASKS_CLASS);
    const matches = findAllDueToday(0, 'Due Today');

    if(totalTasksList.length > 0){
      const totalTasks = totalTasksList[0];
      totalTasks.innerHTML = matches.items.length > 99? NINETY_NINE_PLUS : matches.items.length;
    } else {
      const totalTasksWrapper = document.createElement(P);
      dueTodayCard.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(TOTAL_TASKS_WRAPPER_CLASS);
      const totalTasks = document.createElement(P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(TOTAL_TASKS_CLASS);

      totalTasks.innerHTML = matches.items.length > 99 ? NINETY_NINE_PLUS : matches.items.length;
    }
  };

  function displayLists() {
    getTotalFavouriteTasks();
    getTotalOverdueTasks();
    getTotalDueTodayTasks();
    getTotalDueTomorrowTasks();
    getTotalPlannedTasks();

    const listContainer = document.querySelector(LIST_CONTAINER_CLASS);
    listContainer.innerHTML = EMPTY_STRING;

    MasterList.items.forEach((list) => {
      const card = buildListCard(list);
      listContainer.appendChild(card);
    });

    function buildListCard(list) {
      const card = document.createElement(DIV);
      card.classList.add(LIST_CARD_CLASS);

      const swapBtn = document.createElement(BUTTON);
      card.appendChild(swapBtn);
      swapBtn.classList.add(SWAP_BTN_CLASS);
      swapBtn.innerHTML = list.title.length<=25 ? list.title: list.title.slice(0, 20)+".....";

      swapBtn.addEventListener(CLICK, () => {
        swapActiveList(list);
      });

      const totalTasksWrapper = document.createElement(P);
      card.appendChild(totalTasksWrapper);
      totalTasksWrapper.classList.add(TOTAL_TASKS_WRAPPER_CLASS);
      const totalTasks = document.createElement(P);
      totalTasksWrapper.appendChild(totalTasks);
      totalTasks.classList.add(TOTAL_TASKS_CLASS);
      totalTasks.innerHTML = list.items.length > 99 ? NINETY_NINE_PLUS : list.items.length;

      const deleteBtn = document.createElement(BUTTON);
      card.appendChild(deleteBtn);
      deleteBtn.classList.add(DELETE_BTN_CLASS);
      deleteBtn.innerHTML = '<i id="task-delete" class="fa-solid fa-trash"></i>';

      deleteBtn.addEventListener(CLICK, () => {
        MasterList.deleteItem(list);
        listContainer.removeChild(card);

        if (MasterList.items.length === 0) {
          MasterList.addItem(ListBuilder(MY_TASKS));
          MasterList.setActiveList(MasterList.items[0]);
          displayGoals();
          displayLists();
        } else if (MasterList.getActiveList() === list) {
          const nextList = MasterList.items[MasterList.items.length - 1];
          MasterList.setActiveList(nextList);
          displayGoals();
        }

        setMasterListToLocalStorage(MasterList);
      });

      return card;
    }
  }

  function displayGoals(goalsList) {
    if(goalsList === undefined){
      goalsList = MasterList.getActiveList();
    }

    // Setting the list title from button click
    const listTitle = document.querySelector(ACTIVE_LIST_TITLE_CLASS);
    listTitle.textContent = goalsList.title;

    // Incompleted goals are shown here
    const incompleteContainer = document.querySelector(INCOMPLETE_CONTAINER_CLASS);
    incompleteContainer.innerHTML = EMPTY_STRING;

    // Completing goals are shown here
    const completeContainer = document.querySelector(COMPLETE_CONTAINER_CLASS);
    completeContainer.innerHTML = EMPTY_STRING;

    goalsList.items.forEach((goal) => {
      (function setUpCard(replaceCard) {
        const card = buildTodoCard(goal);

        card.addEventListener(CLICK, () => {
          displaySidebar(goal, card);

          overlay.onclick = () => {
            setUpCard(card);
          };
        });

        if (replaceCard === undefined) {
          if (goal.complete) completeContainer.appendChild(card);
          else incompleteContainer.appendChild(card);
        } else {
          if (goal.complete) completeContainer.replaceChild(card, replaceCard);
          else incompleteContainer.replaceChild(card, replaceCard);
        }
      })();
    });

    function buildTodoCard(goal) {
      const card = document.createElement(DIV);
      card.classList.add(TODO_CARD_CLASS);

      card.appendChild(buildCheckBox(goal, card));

      const taskWrapper = document.createElement(DIV);
      card.appendChild(taskWrapper);
      taskWrapper.classList.add(TODO_CARD_TASK_WRAPPER_CLASS);

      const title = document.createElement(P);
      taskWrapper.appendChild(title);
      title.classList.add(TASK_TITLE_CLASS);
      title.innerHTML = goal.title;

      const detailsWrapper = document.createElement(DIV);
      taskWrapper.appendChild(detailsWrapper);
      detailsWrapper.classList.add(TASK_DETAILS_WRAPPER_CLASS);

      if (goal.childOf.title !== goalsList.title) {
        const parentListTitle = document.createElement(P);
        detailsWrapper.appendChild(parentListTitle);
        parentListTitle.classList.add(PARENT_LIST_TITLE_CLASS);

        const listTitle = goal.childOf.title.split(EMPTY_STRING);
        parentListTitle.textContent =
          listTitle.length > 24
            ? listTitle.splice(0, 24).join(EMPTY_STRING) + '...'
            : goal.childOf.title;
      }

      if (goal.dueDate !== EMPTY_STRING) {
        const dueDate = document.createElement(P);
        detailsWrapper.appendChild(dueDate);
        dueDate.classList.add(TASK_DUE_DATE_CLASS);
        const parsedDate = parseISO(goal.dueDate);
        const daysUntilDue = differenceInCalendarDays(parsedDate, new Date());
        const yearsUntilDue = differenceInYears(parsedDate, new Date());

        function getDaysUntilDueCase(daysUntilDue, yearsUntilDue) {
          if (daysUntilDue < 0) return PAST_DUE;
          if (daysUntilDue === 0) return TODAY;
          if (daysUntilDue === 1) return TOMORROW;
          if (daysUntilDue < 7) return WITH_IN_A_WEEK;
          if (yearsUntilDue < 1) return WITH_IN_A_YEAR;
          return MORE_THAN_A_YEAR;
        }

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
        const subTasks = document.createElement(P);
        detailsWrapper.appendChild(subTasks);
        subTasks.classList.add(SUB_TASKS_CLASS);

        const completedSubTasks = goal.steps.items.reduce((total, task) => {
          return task.complete ? total + 1 : total;
        }, 0);
        subTasks.innerHTML =
          goal.steps.items.length === 0
            ? EMPTY_STRING
            : `${completedSubTasks}/${goal.steps.items.length}`;
      }

      const note = document.createElement(P);
      detailsWrapper.appendChild(note);
      note.classList.add(TASK_NOTE_CLASS);
      note.innerHTML =
        goal.note === EMPTY_STRING ? EMPTY_STRING : '<i class="fa-regular fa-pen-to-square"></i>';

      card.appendChild(buildPriorityBtn(goal));

      return card;
    }

    function displaySidebar(goal, card) {
      const taskWrapper = activeGoalSidebar.querySelector(TASK_WRAPPER_CLASS);
      taskWrapper.innerHTML = EMPTY_STRING;

      const checkBox = buildCheckBox(goal, card);
      taskWrapper.appendChild(checkBox);

      const title = document.createElement(P);
      taskWrapper.appendChild(title);
      title.id = TASK_TITLE_ID;
      title.textContent = goal.title;

      const priorityBtn = buildPriorityBtn(goal);
      taskWrapper.appendChild(priorityBtn);

      displaySteps(goal);

      const addStepInput = activeGoalSidebar.querySelector(ADD_STEP_INPUT_ID);
      addStepInput.value = EMPTY_STRING;
      addStepInput.onkeydown = (e) => {
        if (!checkInputEntered(e, addStepInput.value)) return;
        addStep(goal, addStepInput.value);
        addStepInput.value = EMPTY_STRING;
      };

      const dueDateLabel = activeGoalSidebar.querySelector(TASK_DUE_DATE_ID);
      if (goal.dueDate === EMPTY_STRING) dueDateLabel.textContent = NO_DUE_DATE_MESSAGE;
      else dueDateLabel.textContent = goal.dueDate;

      const dateSelect = activeGoalSidebar.querySelector(TASK_DATE_SELECT_ID);
      dateSelect.value = EMPTY_STRING;

      dateSelect.onchange = () => {
        goal.dueDate = dateSelect.value;
        dueDateLabel.textContent = goal.dueDate;
        setMasterListToLocalStorage(MasterList);
        getTotalDueTodayTasks();
        getTotalDueTomorrowTasks();
        getTotalOverdueTasks();
        getTotalPlannedTasks();
      };

      const colorSelector = activeGoalSidebar.querySelector(COLOR_SELECTOR_CLASS);
      const colorInput = activeGoalSidebar.querySelector(COLOR_INPUT_CLASS);
      const colorLabel = activeGoalSidebar.querySelector(CURRENT_LABEL_COLOR_ID);

      colorInput.onchange = () => {
        goal.setColor(colorInput.value);
        setMasterListToLocalStorage(MasterList);
        setColorLabel();
        const oldCheckBox = activeGoalSidebar.querySelector(CHECK_BOX_CLASS);
        taskWrapper.replaceChild(buildCheckBox(goal, card), oldCheckBox);
      };

      setColorLabel();
      function setColorLabel() {
        if (goal.color === NEUTRAL) {
          colorLabel.textContent = SELECT_COLOR_MESSAGE;
          colorSelector.classList.add(NO_SELECTOR_CLASS);
        } else {
          colorLabel.textContent = `${goal.color.toUpperCase()}`;
          colorSelector.style.backgroundColor = goal.color;
          colorInput.value = goal.color;
          colorSelector.classList.remove(NO_SELECTOR_CLASS);
        }
      }

      const note = activeGoalSidebar.querySelector(TASK_NOTE_ID);
      note.value = EMPTY_STRING;

      if (goal.note !== undefined) note.value = goal.note;

      note.onchange = () => {
        goal.note = note.value;
        setMasterListToLocalStorage(MasterList);
      };

      const deleteBtn = activeGoalSidebar.querySelector(TASK_DELETE_ID);

      deleteBtn.onclick = () => {
        removeGoal(goal, card);
      };

      activeGoalSidebar.classList.add(ACTIVE);
      overlay.classList.add(ACTIVE);
    };

    function buildCheckBox(goal, card) {
      const checkBox = document.createElement(DIV);
      checkBox.setAttribute(DATA_COLOR_CLASS, goal.color);
      checkBox.classList.add(CHECK_BOX_CLASS_1);

      const taskColor = document.createElement(STYLE);
      card.appendChild(taskColor);
      taskColor.innerHTML = `.check-box[data-color="${goal.color}"] i {color: ${goal.color}}`;

      onCompletedToggled(checkBox, goal);
      checkBox.addEventListener(CLICK, (e) => {
        e.stopPropagation();
        goal.toggleComplete();
        onCompletedToggled(checkBox, goal);
        moveGoal(card, goal.complete);
        setMasterListToLocalStorage(MasterList);
      });

      return checkBox;
    };

    function buildPriorityBtn(goal) {
      const priority = document.createElement(DIV);
      priority.classList.add(PRIORITY_CLASS);
      onPriorityToggled(priority, goal);

      priority.addEventListener(CLICK, (e) => {
        e.stopPropagation();
        goal.togglePriority();
        onPriorityToggled(priority, goal);
        setMasterListToLocalStorage(MasterList);
      });

      return priority;
    };

    function addStep(goal, step) {
      goal.steps.addItem(StepBuilder(step));
      setMasterListToLocalStorage(MasterList);
      displaySteps(goal);
    };

    function displaySteps(goal) {
      const stepsContainer = document.querySelector(ACTIVE_STEPS_CONTAINER_CLASS);
      stepsContainer.innerHTML = EMPTY_STRING;

      goal.steps.items.forEach((currentStep) => {
        const card = buildStepCard(currentStep);
        stepsContainer.appendChild(card);
      });

      function buildStepCard(step) {
        const stepCard = document.createElement(DIV);
        stepCard.classList.add(STEP_CARD_CLASS);

        const checkBox = document.createElement(DIV);
        stepCard.appendChild(checkBox);
        checkBox.classList.add(CHECK_BOX_CLASS_1);

        onCompletedToggled(checkBox, step);

        checkBox.addEventListener(CLICK, (e) => {
          e.stopPropagation();
          step.toggleComplete();
          onCompletedToggled(checkBox, step);
          setMasterListToLocalStorage(MasterList);
        });

        const stepTitle = document.createElement(P);
        stepCard.appendChild(stepTitle);
        stepTitle.textContent = step.title;

        const deleteBtn = document.createElement(DIV);
        stepCard.appendChild(deleteBtn);
        deleteBtn.classList.add(STEP_DELETE_BTN_CLASS);
        deleteBtn.innerHTML = '<i class="step-delete fa-solid fa-trash"></i>';

        deleteBtn.addEventListener(CLICK, (e) => {
          e.stopPropagation();
          removeStep(goal, step, stepCard, stepsContainer, MasterList);
        });

        return stepCard;
      };
    };

    function onPriorityToggled(btnContainer, goal) {
      const favouriteStatus = goal.priority;
      if (favouriteStatus){
        const favouriteStar = '<i class="fa-solid fa-star"></i>';
        btnContainer.innerHTML = favouriteStar;
      }else{
        const notFavouriteStar = '<i class="fa-regular fa-star"></i>';
        btnContainer.innerHTML = notFavouriteStar;
      }
      getTotalFavouriteTasks();
    };

    function onCompletedToggled(btnContainer, goal) {
      const goalCompleted = goal.complete;
      if(goalCompleted){
        const completedTask = '<i class="complete-task fa-solid fa-circle-check"></i>';
        btnContainer.innerHTML = completedTask;
      }else {
        const uncompletedTask = '<i class="incomplete-task fa-regular fa-circle"></i>';
        btnContainer.innerHTML = uncompletedTask;
      }
    };

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
    };

    function combinedGetTotalTasks(){
      getTotalFavouriteTasks();
      getTotalOverdueTasks();
      getTotalDueTodayTasks();
      getTotalDueTomorrowTasks();
      getTotalPlannedTasks();
    };

    function removeGoal(goal, card) {
      goal.childOf.deleteItem(goal);
      setMasterListToLocalStorage(MasterList);

      const goalCompleted = goal.complete;
      if (goalCompleted){
        completeContainer.removeChild(card);
      }else{
        incompleteContainer.removeChild(card);
      }

      displayLists();
      closeSidebar(overlay, activeGoalSidebar);
    };
  }
})();
