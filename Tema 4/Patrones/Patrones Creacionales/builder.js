class Pizza {
  constructor() {
    this.ingredientes = [];
    this.salsa = "Tomate";
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  addIngrediente(ingrediente) {
    this.ingredientes.push(ingrediente);
  }
  addSalsa(salsa) {
    this.salsa = salsa;
  }
  addDiscount(porcentaje) {
    this.porcentaje = porcentaje;
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }
  addCheese() {
    this.pizza.addIngrediente("Queso");
    return this;
  }
  addPepperoni() {
    this.pizza.addIngrediente("Pepperoni");
    return this;
  }
  addAnchoas() {
    this.pizza.addIngrediente("Anchoas");
    return this;
  }
  setNombre(nombre) {
    if (nombre !== "Pizza time") {
      this.pizza.setNombre(nombre);
    } else {
      this.pizza.setNombre("MegaPizza");
      this.pizza.addDiscount(5);
    }
    return this;
  }

  setSalsa(salsa) {
    this.pizza.addSalsa(salsa);
    return this;
  }

  build() {
    return this.pizza;
  }
}
//Pizza Builder siempre será un let, porque se modifica
let pizzaBuilder = new PizzaBuilder();
pizzaBuilder = pizzaBuilder.addCheese();
pizzaBuilder = pizzaBuilder.addPepperoni();
pizzaBuilder = pizzaBuilder.addAnchoas();
pizzaBuilder = pizzaBuilder.setNombre("Pepperoni Pipsa");

//El objeto final siempre será constante, es lo que ha decidido el usuario
const pizza = pizzaBuilder.build();
console.log(pizza);
