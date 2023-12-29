import ListBuilder from "./ListBuilder";
import {NEUTRAL, EMPTY_STRING, STEPS, COLOR_BLACK} from '../Constants';

const GoalsBuilder = (childOf, title, color, dueDate, priority, complete, note, steps) => {
  const goal = {
    togglePriority: function () {
      if(this.priority === true){
        this.priority = false;
      }else{
        this.priority = true;
      }
    },
    toggleComplete: function () { 
      if(this.complete === true){
        this.complete = false;
      }else{
        this.complete = true;
      }
    },
    setColor: function (newColor) {
      if (newColor === COLOR_BLACK) this.color = NEUTRAL;
      else this.color = newColor;
    },
  };

  goal.childOf = childOf;
  if(goal.childOf === undefined){
    goal.childOf = EMPTY_STRING;
  }
  goal.title = title;
  if(goal.title === undefined){
    goal.title = EMPTY_STRING;
  }
  goal.color = color;
  if(goal.color === undefined){
    goal.color = NEUTRAL;
  }
  goal.dueDate = dueDate;
  if(goal.dueDate === undefined){
    goal.dueDate = EMPTY_STRING;
  }
  goal.priority = priority;
  if(goal.priority === undefined){
    goal.priority = EMPTY_STRING;
  }
  goal.complete = complete;
  if(goal.complete == undefined){
    goal.complete = EMPTY_STRING;
  }
  goal.note = note;
  if(goal.note === undefined){
    goal.note = EMPTY_STRING;
  }
  goal.steps = steps;
  if(goal.steps === undefined){
    goal.steps = ListBuilder(STEPS);
  }
  return goal;
};

export default GoalsBuilder;