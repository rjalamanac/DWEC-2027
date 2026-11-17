"use strict";
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

let Command = function (execute, value, opuesto) {
  this.execute = execute;
  this.value = value;
  this.undo = opuesto;
};

let AddCommand = function (value) {
  return new Command(add, value, sub);
};

let SubCommand = function (value) {
  return new Command(sub, value, add);
};

let MulCommand = function (value) {
  return new Command(mul, value, div);
};

let DivCommand = function (value) {
  return new Command(div, value, mul);
};

let Calculator = function () {
  let current = 0;

  function action(command) {
    let name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      console.log(action(command) + ": " + command.value);
    },

    getCurrentValue: function () {
      return current;
    },
  };
};

function run() {
  let calculator = new Calculator();
  calculator.execute(new AddCommand(100));
  calculator.execute(new SubCommand(24));
  calculator.execute(new MulCommand(6));
  calculator.execute(new DivCommand(2));

  console.log("\nValue: " + calculator.getCurrentValue());
}

run();
