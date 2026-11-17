class FilterStrategy {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  filter(array, data) {
    return this.strategy.filter(array, data);
  }
}
class FilterTaskByName {
  filter(array, data) {
    return array.filter((x) => x.nombre === data);
  }
}
class FilterTaskByPriority {
  filter(array, data) {
    return array.filter((x) => x.priority === data);
  }
}

class FilterTaskByDate {
  filter(array, data) {
    return array.filter((x) => x.date === data);
  }
}

class FilterTaskByNumber {
  filter(array, data) {
    return array.filter((x) => x.number === data);
  }
}

class FilterTaskById {
  filter(array, data) {
    return array.filter((x) => x.id === data);
  }
}

const filterStrategy = new FilterStrategy();
const taskArrayFull = [
  { nombre: "hola", priority: "red" },
  { nombre: "adios", priority: "red" },
  { nombre: "jamon", priority: "blue" },
];

document.addEventListener("submit", filterArray);
let taskArrayFiltered = [...taskArrayFull];

function filterArray(event) {
  event.preventDefault();
  const nombreValue = document.getElementById("idInpNombre").value;
  const prioridadValue = document.getElementById("idInpPrioridad").value;
  taskArrayFiltered = [...taskArrayFull];

  if (nombreValue !== undefined && nombreValue.trim().length !== 0) {
    filterStrategy.setStrategy(new FilterTaskByName());
    taskArrayFiltered = filterStrategy.filter(taskArrayFiltered, nombreValue);
    console.log(taskArrayFiltered);
  }

  if (prioridadValue !== undefined && prioridadValue.trim().length !== 0) {
    filterStrategy.setStrategy(new FilterTaskByPriority());
    taskArrayFiltered = filterStrategy.filter(
      taskArrayFiltered,
      prioridadValue,
    );
  }
}

setInterval(printObject, 200);

function printObject() {
  let dataString = "";
  taskArrayFiltered.forEach(
    (x) => (dataString += `Nombre: ${x.nombre} Priority ${x.priority} `),
  );
  document.getElementById("idDataSection").innerHTML = `<p> ${dataString} </p>`;
}
