import"./css/index.css";import ListBuilder from"./Builders/ListBuilder";import GoalsBuilder from"./Builders/GoalsBuilder";import StepBuilder from"./Builders/StepBuilder";import MasterList from"./MasterList";import{getMonth,getDate,parseISO,differenceInCalendarDays,differenceInYears}from"date-fns";import{EMPTY_STRING,CLICK,HAMBURGER_BTN_CLASS,OVERLAY_CLASS,ACTIVE_GOAL_SIDEBAR_CLASS,LIST_SIDEBAR_CLASS,NEW_LIST_INPUT_ID,NEW_GOAL_INPUT_ID,ACTIVE,CATEGORY_CONTAINER_CLASS,LOGIN_BTN_CLASS,LOGIN_ERROR,KEYDOWN,COLOR_BLACK,NEUTRAL,COLOR_INPUT_CLASS,HIDDEN_DATE_INPUT_CLASS,CALENDAR_CLASS,CALENDAR_NOGRID_CLASS,COLOR_SELECTOR_CLASS,NO_SELECTOR_CLASS,TITLE_WRAPPER_CLASS,HIDDEN,CHANGE,DATE_INPUT_WRAPPER_CLASS,CALENDAR_MONTH_CLASS,CALENDAR_DAY_CLASS,INVALID_MONTH,DECEMBER,NOVEMBER,OCTOBER,SEPTEMBER,AUGUST,JULY,JUNE,MARCH,APRIL,FEBRUARY,JANUARY,CANCEL_COLOR_CLASS,PRESET_CLASS,KEYUP,SEARCH_BAR_CLASS,FAVOURITES_BTN_CLASS,SEARCH_RESULTS,FAVOURITES_RESULTS,PLANNED_BTN_CLASS,OVERDUE_BTN_CLASS,DUE_TODAY_CLASS,DUE_TOMORROW_BTN_CLASS,ENTER,LIST_CONTAINER_CLASS,LIST_CARD_CLASS,SWAP_BTN_CLASS,TOTAL_TASKS_WRAPPER_CLASS,TOTAL_TASKS_CLASS,DELETE_BTN_CLASS,ACTIVE_LIST_TITLE_CLASS,INCOMPLETE_CONTAINER_CLASS,COMPLETE_CONTAINER_CLASS,TODO_CARD_CLASS,TODO_CARD_TASK_WRAPPER_CLASS,TASK_TITLE_CLASS,PARENT_LIST_TITLE_CLASS,TASK_DETAILS_WRAPPER_CLASS,TASK_DUE_DATE_CLASS,PAST_DUE,TODAY,TOMORROW,WITH_IN_A_WEEK,WITH_IN_A_YEAR,MORE_THAN_A_YEAR,PAST_DUE_CLASS,PAST_DUE_MESSAGE,DUE_TODAY_MESSAGE,WITH_IN_A_WEEK_MESSAGE,WITHIN_A_YEAR_MESSAGE,MORE_THAN_A_YEAR_MESSAGE,SUB_TASKS_CLASS,TASK_NOTE_CLASS,TASK_WRAPPER_CLASS,TASK_TITLE_ID,ADD_STEP_INPUT_ID,TASK_DUE_DATE_ID,TASK_DATE_SELECT_ID,CURRENT_LABEL_COLOR_ID,CHECK_BOX_CLASS,NO_DUE_DATE_MESSAGE,SELECT_COLOR_MESSAGE,TASK_NOTE_ID,TASK_DELETE_ID,CHECK_BOX_CLASS_1,DATA_COLOR_CLASS,PRIORITY_CLASS,ACTIVE_STEPS_CONTAINER_CLASS,STEP_CARD_CLASS,STEP_DELETE_BTN_CLASS,MY_TASKS,BUTTON,DIV,P,STYLE,NINETY_NINE_PLUS}from"./Constants";import{getMasterListFromLocalStorage,setMasterListToLocalStorage}from"./LocalStorage";import SUCCESS_SOUND from"./Public/success-sound.mp3";import FAILURE_SOUND from"./Public/failure-sound.mp3";function removeStep(e,t,n,S,a){e.steps.deleteItem(t),setMasterListToLocalStorage(a),S.removeChild(n)}function closeSidebar(e,t){e.classList.remove(ACTIVE),t.classList.remove(ACTIVE)}function closeListSidebar(e,t){e.classList.remove(ACTIVE),t.classList.remove(ACTIVE)}function playSound(e){e.volume=.2,e.play()}function hamburgerBtnClickEventListener(e,t,n){e.addEventListener(CLICK,(function(){t.classList.toggle(ACTIVE),n.classList.toggle(ACTIVE)}))}function overlayClickEventListener(e,t,n){e.addEventListener(CLICK,(function(){closeSidebar(e,t),closeListSidebar(e,n)}))}var DomController=function(){var e,t,n,S,a,r=new Audio(SUCCESS_SOUND),L=new Audio(FAILURE_SOUND),s=document.querySelector(HAMBURGER_BTN_CLASS),_=document.querySelector(OVERLAY_CLASS),i=document.querySelector(ACTIVE_GOAL_SIDEBAR_CLASS),E=document.querySelector(LIST_SIDEBAR_CLASS),o=document.querySelectorAll(CATEGORY_CONTAINER_CLASS),A=document.querySelector(NEW_LIST_INPUT_ID),l=document.querySelector(NEW_GOAL_INPUT_ID);function T(){var e=ListBuilder(FAVOURITES_RESULTS);return MasterList.items.forEach((function(t){t.items.forEach((function(t){t.priority&&e.addItem(t)}))})),e}function c(e,t){var n=ListBuilder(t),S=new Date;return MasterList.items.forEach((function(t){t.items.forEach((function(t){var a=parseISO(t.dueDate),r=differenceInCalendarDays(a,S);!Number.isNaN(r)&&(r===e||"planned"===e||"pastdue"===e&&r<0)&&n.addItem(t)}))})),n}function C(e,t){return e.key===ENTER&&13===e.keyCode&&(e.preventDefault(),t!==EMPTY_STRING)}function d(e){MasterList.setActiveList(e),setMasterListToLocalStorage(MasterList),D()}function u(){var e=document.querySelector(PLANNED_BTN_CLASS).parentElement,t=e.getElementsByClassName(TOTAL_TASKS_CLASS),n=c("planned","Planned");if(t.length>0)t[0].innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length;else{var S=document.createElement(P);e.appendChild(S),S.classList.add(TOTAL_TASKS_WRAPPER_CLASS);var a=document.createElement(P);S.appendChild(a),a.classList.add(TOTAL_TASKS_CLASS),a.innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length}}function I(){var e=document.querySelector(DUE_TOMORROW_BTN_CLASS).parentElement,t=e.getElementsByClassName(TOTAL_TASKS_CLASS),n=c(1,"Due Tomorrow");if(t.length>0)t[0].innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length;else{var S=document.createElement(P);e.appendChild(S),S.classList.add(TOTAL_TASKS_WRAPPER_CLASS);var a=document.createElement(P);S.appendChild(a),a.classList.add(TOTAL_TASKS_CLASS),a.innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length}}function N(){var e=document.querySelector(FAVOURITES_BTN_CLASS).parentElement,t=e.getElementsByClassName(TOTAL_TASKS_CLASS),n=T();if(t.length>0)t[0].innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length;else{var S=document.createElement(P);e.appendChild(S),S.classList.add(TOTAL_TASKS_WRAPPER_CLASS);var a=document.createElement(P);S.appendChild(a),a.classList.add(TOTAL_TASKS_CLASS),a.innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length}}function R(){var e=document.querySelector(OVERDUE_BTN_CLASS).parentElement,t=e.getElementsByClassName(TOTAL_TASKS_CLASS),n=c("pastdue","Past Due");if(t.length>0)t[0].innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length;else{var S=document.createElement(P);e.appendChild(S),S.classList.add(TOTAL_TASKS_WRAPPER_CLASS);var a=document.createElement(P);S.appendChild(a),a.classList.add(TOTAL_TASKS_CLASS),a.innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length}}function m(){var e=document.querySelector(DUE_TODAY_CLASS).parentElement,t=e.getElementsByClassName(TOTAL_TASKS_CLASS),n=c(0,"Due Today");if(t.length>0)t[0].innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length;else{var S=document.createElement(P);e.appendChild(S),S.classList.add(TOTAL_TASKS_WRAPPER_CLASS);var a=document.createElement(P);S.appendChild(a),a.classList.add(TOTAL_TASKS_CLASS),a.innerHTML=n.items.length>99?NINETY_NINE_PLUS:n.items.length}}function O(){N(),R(),m(),I(),u();var e=document.querySelector(LIST_CONTAINER_CLASS);e.innerHTML=EMPTY_STRING,MasterList.items.forEach((function(t){var n=function(t){var n=document.createElement(DIV);n.classList.add(LIST_CARD_CLASS);var S=document.createElement(BUTTON);n.appendChild(S),S.classList.add(SWAP_BTN_CLASS),S.innerHTML=t.title.length<=25?t.title:t.title.slice(0,20)+".....",S.addEventListener(CLICK,(function(){d(t)}));var a=document.createElement(P);n.appendChild(a),a.classList.add(TOTAL_TASKS_WRAPPER_CLASS);var r=document.createElement(P);a.appendChild(r),r.classList.add(TOTAL_TASKS_CLASS),r.innerHTML=t.items.length>99?NINETY_NINE_PLUS:t.items.length;var L=document.createElement(BUTTON);n.appendChild(L),L.classList.add(DELETE_BTN_CLASS);return L.innerHTML='<i id="task-delete" class="fa-solid fa-trash"></i>',L.addEventListener(CLICK,(function(){if(MasterList.deleteItem(t),e.removeChild(n),0===MasterList.items.length)MasterList.addItem(ListBuilder(MY_TASKS)),MasterList.setActiveList(MasterList.items[0]),D(),O();else if(MasterList.getActiveList()===t){var S=MasterList.items[MasterList.items.length-1];MasterList.setActiveList(S),D()}setMasterListToLocalStorage(MasterList)})),n}(t);e.appendChild(n)}))}function D(e){void 0===e&&(e=MasterList.getActiveList()),document.querySelector(ACTIVE_LIST_TITLE_CLASS).textContent=e.title;var t=document.querySelector(INCOMPLETE_CONTAINER_CLASS);t.innerHTML=EMPTY_STRING;var n=document.querySelector(COMPLETE_CONTAINER_CLASS);function S(e,S){var a=document.createElement(DIV);a.setAttribute(DATA_COLOR_CLASS,e.color),a.classList.add(CHECK_BOX_CLASS_1);var s=document.createElement(STYLE);return S.appendChild(s),s.innerHTML='.check-box[data-color="'.concat(e.color,'"] i {color: ').concat(e.color,"}"),o(a,e),a.addEventListener(CLICK,(function(s){s.stopPropagation(),e.toggleComplete(),o(a,e),function(e,S){S?(t.removeChild(e),n.appendChild(e),playSound(r)):(n.removeChild(e),t.appendChild(e),playSound(L))}(S,e.complete),setMasterListToLocalStorage(MasterList)})),a}function a(e){var t=document.createElement(DIV);return t.classList.add(PRIORITY_CLASS),E(t,e),t.addEventListener(CLICK,(function(n){n.stopPropagation(),e.togglePriority(),E(t,e),setMasterListToLocalStorage(MasterList)})),t}function s(e){var t=document.querySelector(ACTIVE_STEPS_CONTAINER_CLASS);t.innerHTML=EMPTY_STRING,e.steps.items.forEach((function(n){var S=function(n){var S=document.createElement(DIV);S.classList.add(STEP_CARD_CLASS);var a=document.createElement(DIV);S.appendChild(a),a.classList.add(CHECK_BOX_CLASS_1),o(a,n),a.addEventListener(CLICK,(function(e){e.stopPropagation(),n.toggleComplete(),o(a,n),setMasterListToLocalStorage(MasterList)}));var r=document.createElement(P);S.appendChild(r),r.textContent=n.title;var L=document.createElement(DIV);return S.appendChild(L),L.classList.add(STEP_DELETE_BTN_CLASS),L.innerHTML='<i class="step-delete fa-solid fa-trash"></i>',L.addEventListener(CLICK,(function(a){a.stopPropagation(),removeStep(e,n,S,t,MasterList)})),S}(n);t.appendChild(S)}))}function E(e,t){t.priority?e.innerHTML='<i class="fa-solid fa-star"></i>':e.innerHTML='<i class="fa-regular fa-star"></i>',N()}function o(e,t){t.complete?e.innerHTML='<i class="complete-task fa-solid fa-circle-check"></i>':e.innerHTML='<i class="incomplete-task fa-regular fa-circle"></i>'}n.innerHTML=EMPTY_STRING,e.items.forEach((function(r){!function L(E){var o=function(t){var n=document.createElement(DIV);n.classList.add(TODO_CARD_CLASS),n.appendChild(S(t,n));var r=document.createElement(DIV);n.appendChild(r),r.classList.add(TODO_CARD_TASK_WRAPPER_CLASS);var L=document.createElement(P);r.appendChild(L),L.classList.add(TASK_TITLE_CLASS),L.innerHTML=t.title;var s=document.createElement(DIV);if(r.appendChild(s),s.classList.add(TASK_DETAILS_WRAPPER_CLASS),t.childOf.title!==e.title){var _=document.createElement(P);s.appendChild(_),_.classList.add(PARENT_LIST_TITLE_CLASS);var i=t.childOf.title.split(EMPTY_STRING);_.textContent=i.length>24?i.splice(0,24).join(EMPTY_STRING)+"...":t.childOf.title}if(t.dueDate!==EMPTY_STRING){var E=document.createElement(P);s.appendChild(E),E.classList.add(TASK_DUE_DATE_CLASS);var o=parseISO(t.dueDate),A=differenceInCalendarDays(o,new Date);switch(function(e,t){return e<0?PAST_DUE:0===e?TODAY:1===e?TOMORROW:e<7?WITH_IN_A_WEEK:t<1?WITH_IN_A_YEAR:MORE_THAN_A_YEAR}(A,differenceInYears(o,new Date))){case PAST_DUE:E.innerHTML=PAST_DUE_MESSAGE(A),E.classList.add(PAST_DUE_CLASS);break;case TODAY:case TOMORROW:E.innerHTML=DUE_TODAY_MESSAGE;break;case WITH_IN_A_WEEK:E.innerHTML=WITH_IN_A_WEEK_MESSAGE(A);break;case WITH_IN_A_YEAR:E.innerHTML=WITHIN_A_YEAR_MESSAGE(o);break;case MORE_THAN_A_YEAR:E.innerHTML=MORE_THAN_A_YEAR_MESSAGE(o)}}if(t.steps.items.length>0){var l=document.createElement(P);s.appendChild(l),l.classList.add(SUB_TASKS_CLASS);var T=t.steps.items.reduce((function(e,t){return t.complete?e+1:e}),0);l.innerHTML=0===t.steps.items.length?EMPTY_STRING:"".concat(T,"/").concat(t.steps.items.length)}var c=document.createElement(P);return s.appendChild(c),c.classList.add(TASK_NOTE_CLASS),c.innerHTML=t.note===EMPTY_STRING?EMPTY_STRING:'<i class="fa-regular fa-pen-to-square"></i>',n.appendChild(a(t)),n}(r);o.addEventListener(CLICK,(function(){!function(e,r){var L=i.querySelector(TASK_WRAPPER_CLASS);L.innerHTML=EMPTY_STRING;var E=S(e,r);L.appendChild(E);var o=document.createElement(P);L.appendChild(o),o.id=TASK_TITLE_ID,o.textContent=e.title;var A=a(e);L.appendChild(A),s(e);var l=i.querySelector(ADD_STEP_INPUT_ID);l.value=EMPTY_STRING,l.onkeydown=function(t){C(t,l.value)&&(function(e,t){e.steps.addItem(StepBuilder(t)),setMasterListToLocalStorage(MasterList),s(e)}(e,l.value),l.value=EMPTY_STRING)};var T=i.querySelector(TASK_DUE_DATE_ID);e.dueDate===EMPTY_STRING?T.textContent=NO_DUE_DATE_MESSAGE:T.textContent=e.dueDate;var c=i.querySelector(TASK_DATE_SELECT_ID);c.value=EMPTY_STRING,c.onchange=function(){e.dueDate=c.value,T.textContent=e.dueDate,setMasterListToLocalStorage(MasterList),m(),I(),R(),u()};var d=i.querySelector(COLOR_SELECTOR_CLASS),N=i.querySelector(COLOR_INPUT_CLASS),D=i.querySelector(CURRENT_LABEL_COLOR_ID);function v(){e.color===NEUTRAL?(D.textContent=SELECT_COLOR_MESSAGE,d.classList.add(NO_SELECTOR_CLASS)):(D.textContent="".concat(e.color.toUpperCase()),d.style.backgroundColor=e.color,N.value=e.color,d.classList.remove(NO_SELECTOR_CLASS))}N.onchange=function(){e.setColor(N.value),setMasterListToLocalStorage(MasterList),v();var t=i.querySelector(CHECK_BOX_CLASS);L.replaceChild(S(e,r),t)},v();var p=i.querySelector(TASK_NOTE_ID);p.value=EMPTY_STRING,void 0!==e.note&&(p.value=e.note),p.onchange=function(){e.note=p.value,setMasterListToLocalStorage(MasterList)},i.querySelector(TASK_DELETE_ID).onclick=function(){!function(e,S){e.childOf.deleteItem(e),setMasterListToLocalStorage(MasterList),e.complete?n.removeChild(S):t.removeChild(S),O(),closeSidebar(_,i)}(e,r)},i.classList.add(ACTIVE),_.classList.add(ACTIVE)}(r,o),_.onclick=function(){L(o)}})),void 0===E?r.complete?n.appendChild(o):t.appendChild(o):r.complete?n.replaceChild(o,E):t.replaceChild(o,E)}()}))}document.querySelector(LOGIN_BTN_CLASS).addEventListener(CLICK,(function(){return alert(LOGIN_ERROR)})),hamburgerBtnClickEventListener(s,E,_),overlayClickEventListener(_,i,E),A.addEventListener(KEYDOWN,(function(e){if(C(e,A.value)){var t=A.value;A.value=EMPTY_STRING,function(e){var t=ListBuilder(e);MasterList.addItem(t),d(t),O()}(t),setMasterListToLocalStorage(MasterList)}})),l.addEventListener(KEYDOWN,(function(e){if(C(e,l.value)){var t=l.value;l.value=EMPTY_STRING;var n=document.querySelector(HIDDEN_DATE_INPUT_CLASS),S=n.parentElement.querySelector(CALENDAR_CLASS),a=n.parentElement.querySelector(CALENDAR_NOGRID_CLASS);S.classList.add(ACTIVE),a.classList.remove(ACTIVE);var r=n.value;n.value=EMPTY_STRING,l.parentElement.parentElement.querySelector(COLOR_SELECTOR_CLASS).classList.add(NO_SELECTOR_CLASS);var L=l.parentElement.parentElement.querySelector(COLOR_INPUT_CLASS),s=NEUTRAL;L.value!=COLOR_BLACK&&(s=L.value),L.value=EMPTY_STRING,function(e,t,n){var S=MasterList.getActiveList();S.addItem(GoalsBuilder(S,e,t,n)),D()}(t,s,r),setMasterListToLocalStorage(MasterList),O()}})),o.forEach((function(e){e.querySelector(TITLE_WRAPPER_CLASS).addEventListener(CLICK,(function(){e.classList.toggle(HIDDEN)}))})),document.querySelectorAll(DATE_INPUT_WRAPPER_CLASS).forEach((function(e){var t=e.querySelector(HIDDEN_DATE_INPUT_CLASS);t.addEventListener(CHANGE,(function(){var n=e.querySelector(CALENDAR_CLASS),S=e.querySelector(CALENDAR_NOGRID_CLASS),a=t.value,r=parseISO(a),L=getMonth(r),s=getDate(r);e.querySelector(CALENDAR_MONTH_CLASS).textContent=function(e){var t;switch(e){case 0:t=JANUARY;break;case 1:t=FEBRUARY;break;case 2:t=MARCH;break;case 3:t=APRIL;break;case 4:t=MAY;break;case 5:t=JUNE;break;case 6:t=JULY;break;case 7:t=AUGUST;break;case 8:t=SEPTEMBER;break;case 9:t=OCTOBER;break;case 10:t=NOVEMBER;break;case 11:t=DECEMBER;break;default:t=INVALID_MONTH}return t}(L),e.querySelector(CALENDAR_DAY_CLASS).textContent=s,n.classList.remove(ACTIVE),S.classList.add(ACTIVE)}))})),document.querySelectorAll(COLOR_SELECTOR_CLASS).forEach((function(e){var t=e.querySelector(COLOR_INPUT_CLASS),n=e.querySelector(CANCEL_COLOR_CLASS),S=new Event(CHANGE);t.addEventListener(CHANGE,(function(){t.value!==COLOR_BLACK&&(e.style.backgroundColor=t.value,e.classList.remove(NO_SELECTOR_CLASS))})),n.addEventListener(CLICK,(function(){t.value=COLOR_BLACK,e.classList.add(NO_SELECTOR_CLASS),t.dispatchEvent(S)})),e.querySelectorAll(PRESET_CLASS).forEach((function(n){n.style.backgroundColor=n.dataset.color,n.addEventListener(CLICK,(function(a){e.blur(),e.style.backgroundColor=n.dataset.color,e.classList.remove(NO_SELECTOR_CLASS),t.value=a.target.dataset.color,t.dispatchEvent(S)}))}))})),(e=document.querySelector(SEARCH_BAR_CLASS)).addEventListener(KEYUP,(function(){var t,n;null==e||null===e.value||e.value===EMPTY_STRING?D():D((t=e.value.toLowerCase(),n=ListBuilder(SEARCH_RESULTS),MasterList.items.forEach((function(e){e.items.forEach((function(e){e.title.toLowerCase().includes(t)&&n.addItem(e)}))})),n))})),document.querySelector(FAVOURITES_BTN_CLASS).addEventListener(CLICK,(function(){D(T())})),t=document.querySelector(PLANNED_BTN_CLASS),n=document.querySelector(OVERDUE_BTN_CLASS),S=document.querySelector(DUE_TODAY_CLASS),a=document.querySelector(DUE_TOMORROW_BTN_CLASS),t.addEventListener(CLICK,(function(){D(c("planned","Planned"))})),n.addEventListener(CLICK,(function(){D(c("pastdue","Past Due"))})),S.addEventListener(CLICK,(function(){D(c(0,"Due Today"))})),a.addEventListener(CLICK,(function(){D(c(1,"Due Tomorrow"))})),getMasterListFromLocalStorage(MasterList),O(),D()}();