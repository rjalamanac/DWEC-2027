class TaskManager {
  static instance = null;
  constructor() {
    if (TaskManager.instance === null) {
      TaskManager.instance = this;
      this.array = [];
    }
    return TaskManager.instance;
  }

  addTask(task) {
    this.array.push(task);
  }
  removeTask(id) {
    filteredArray = [];
    this.array.forEach((x) => {
      if (x.id !== id) {
        filteredArray.push(x);
      }
    });
    this.array = filteredArray;
  }
  show() {
    this.array.forEach((x) => console.log(JSON.stringify(x)));
  }
}

const arrayManager = new TaskManager();
arrayManager.addTask("Hola");
const otroArrayManager = new TaskManager();
otroArrayManager.addTask("Adios");
console.log();
export { arrayManager };
