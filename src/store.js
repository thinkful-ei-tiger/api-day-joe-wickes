const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  try {
    this.items.push(item);
  } catch (e) {
    console.log(e.message);
  }
};

const  findAndUpdate = function (id, newData) {
  const found = this.findById(id);
  console.log('found', found);

  Object.assign(found, newData);
  console.log('assigned');
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  error,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
};