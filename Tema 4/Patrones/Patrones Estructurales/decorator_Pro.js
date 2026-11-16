// Base component class
class Coffee {
  getCost() {
    return 5; // base cost
  }

  getDescription() {
    return "Plain coffee";
  }
}

class American {
  getCost() {
    return 3; // base cost
  }

  getDescription() {
    return "American coffee";
  }
}

// Decorator base class
class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
  getCost() {
    return this.coffee.getCost() + 1.5;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, with milk`;
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, with whipped cream`;
  }
}

class CaramelDecorator extends CoffeeDecorator {
  getCost() {
    return this.coffee.getCost() + 2.5;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, with caramel`;
  }
}

// Usage
const plainCoffee = new Coffee();

console.log(plainCoffee.getDescription()); // "Plain coffee"
console.log(`Cost: $${plainCoffee.getCost()}`); // "Cost: $5"

const milkCoffee = new MilkDecorator(plainCoffee);

console.log(milkCoffee.getDescription()); // "Plain coffee, with milk"
console.log(`Cost: $${milkCoffee.getCost()}`); // "Cost: $6.5"

// We can stack decorators
const fancyCoffee = new CaramelDecorator(
  new WhippedCreamDecorator(new MilkDecorator(plainCoffee)),
);

console.log(fancyCoffeeAmericanBased.getDescription()); // "Plain coffee, with milk, with whipped cream, with caramel"
console.log(`Cost: $${fancyCoffeeAmericanBased.getCost()}`); // "Cost: $11"

const american = new American();
const fancyCoffeeAmericanBased = new WhippedCreamDecorator(
  new MilkDecorator(american),
);

console.log(fancyCoffee.getDescription()); // American coffee, with milk, with whipped cream
console.log(`Cost: $${fancyCoffee.getCost()}`); // "Cost: $6,5"
