import { NEGATIVE_ONE } from "../Constants";

const ListBuilder = (listName) => {
  // Debug why arrow function is not running
  const list = {
    addItem: function (item) {
      this.items.push(item);
    },
    deleteItem: function (item) {
      const index = this.items.indexOf(item);
      if (index !== NEGATIVE_ONE) this.items.splice(index, 1);
    },
  };

  list.title = listName;
  list.items = [];

  return list;
};

export default ListBuilder;