import ListBuilder from "./Builders/ListBuilder";
import GoalsBuilder from "./Builders/GoalsBuilder";
import StepBuilder from "./Builders/StepBuilder";
import {format, addDays} from "date-fns";

const MasterList = (() => {
    let currList = [];
  
    const setActiveList = (list) => (currList = list);
    const getActiveList = () => currList;
  
    const prepareForStorage = () => {
      const activeListIndex = MasterList.items.indexOf(currList);
      return {
        title: MasterList.title,
        items: MasterList.items.map((list) => {
          return {
            title: list.title,
            items: list.items.map((todo) => {
              return {
                title: todo.title,
                color: todo.color,
                dueDate: todo.dueDate,
                priority: todo.priority,
                complete: todo.complete,
                note: todo.note,
                steps: todo.steps.items.map((step) => {
                  return {
                    title: step.title,
                    complete: step.complete,
                  };
                }),
              };
            }),
          };
        }),
        activeListIndex,
      };
    };
  
    const reconstructFromStorage = (savedData) => {
      const newMasterList = ListBuilder(savedData.title);
      newMasterList.items = savedData.items.map((listData) => {
        const newList = ListBuilder(listData.title);
        newList.items = listData.items.map((todoData) => {
          const steps = ListBuilder('steps');
          steps.items = todoData.steps.map((stepData) => {
            return StepBuilder(stepData.title, stepData.complete);
          });
          return GoalsBuilder(
            newList,
            todoData.title,
            todoData.color,
            todoData.dueDate,
            todoData.priority,
            todoData.complete,
            todoData.note,
            steps
          );
        });
        return newList;
      });
  
      Object.assign(MasterList, newMasterList);
      MasterList.setActiveList(MasterList.items[savedData.activeListIndex]);
    };
  
    const buildDefault = () => {
      const newMasterList = ListBuilder('Master List');
      const defaultList = ListBuilder('Welcome List');
  
      newMasterList.addItem(defaultList);
      defaultList.addItem(GoalsBuilder(defaultList, 'Get ready to track your goal progress'));
      defaultList.addItem(
        GoalsBuilder(defaultList, 'Now Tag your goals with colors', '#F1A3BB')
      );

      const today = new Date();
  
      defaultList.addItem(
        GoalsBuilder(
          defaultList,
          'Set the due date of the goal',
          '#F2EE8F',
          format(today, 'yyyy-MM-dd')
        )
      );
      
      defaultList.addItem(
        GoalsBuilder(defaultList, 'Mark your goals as favourites to complete them immediately', '#F4C4A9', undefined, true)
      );

      const steps = ListBuilder('Steps');
      steps.addItem(StepBuilder('Delete a step.', false));
      steps.addItem(StepBuilder('Change the due date', false));
      steps.addItem(StepBuilder('Change the tagged color of goal', false));
      steps.addItem(StepBuilder('Add notes for the goal', false));
      steps.addItem(StepBuilder('Delete the goal from tracking', false));

  
      defaultList.addItem(
        GoalsBuilder(
          defaultList,
          'Click on me to see details of the goal',
          '#96D470',
          format(addDays(today, 1), 'yyyy-MM-dd'),
          false,
          false,
          'Add notes for the goal',
          steps
        )
      );
  
      defaultList.addItem(
        GoalsBuilder(
          defaultList,
          'Completed woho !!!!',
          '#AC68D7',
          format(addDays(today, -1), 'yyyy-MM-dd'),
          true,
          true
        )
      );
  
      Object.assign(MasterList, newMasterList);
      MasterList.setActiveList(defaultList);
    };
  
    return Object.assign(Object.create(ListBuilder('Master List')), {
      setActiveList,
      getActiveList,
      prepareForStorage,
      reconstructFromStorage,
      buildDefault,
    });
})();

export default MasterList;