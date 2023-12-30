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
      const defaultList = ListBuilder('My Tasks');
  
      newMasterList.addItem(defaultList);
      defaultList.addItem(GoalsBuilder(defaultList, 'Welcome to Tasker!'));
      defaultList.addItem(
        GoalsBuilder(defaultList, 'Create a new task.', '#F1A3BB')
      );
      defaultList.addItem(
        GoalsBuilder(defaultList, 'Prioritize a task.', '#F4C4A9', undefined, true)
      );
  
      const today = new Date();
  
      defaultList.addItem(
        GoalsBuilder(
          defaultList,
          'Add a due date.',
          '#F2EE8F',
          format(today, 'yyyy-MM-dd')
        )
      );
  
      const steps = ListBuilder('Steps');
      steps.addItem(StepBuilder('Open todo details.', true));
      steps.addItem(StepBuilder('Delete a step.', false));
      steps.addItem(StepBuilder('Edit a note.', false));
  
      defaultList.addItem(
        GoalsBuilder(
          defaultList,
          'Click to add a step.',
          '#96D470',
          format(addDays(today, 1), 'yyyy-MM-dd'),
          false,
          false,
          'You can also add notes!',
          steps
        )
      );
  
      defaultList.addItem(
        GoalsBuilder(
          defaultList,
          'Start a new list.',
          '#959FEF',
          format(addDays(today, 7), 'yyyy-MM-dd')
        )
      );
  
      defaultList.addItem(
        GoalsBuilder(
          defaultList,
          'Discover Tasker!',
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