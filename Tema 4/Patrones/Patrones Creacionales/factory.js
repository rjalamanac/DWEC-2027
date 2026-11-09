class Vehicle {
  constructor(numRuedas) {
    this.numRuedas = numRuedas;
  }

  getNumRuedas() {
    console.log(`Numero de ruedas ${this.numRuedas}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(4);
    this.vehicleType = "Car";
    this.brand = brand;
    this.model = model;
  }

  drive() {
    return `Driving a ${this.brand} ${this.model} car.`;
  }
}

class Bike extends Vehicle {
  constructor(brand, model) {
    super(2);
    this.vehicleType = "Bike";
    this.brand = brand;
    this.model = model;
  }

  ride() {
    return `Riding a ${this.brand} ${this.model} bike.`;
  }
}

class Truck extends Vehicle {
  constructor(brand, model) {
    super(8);
    this.vehicleType = "Truck";
    this.brand = brand;
    this.model = model;
  }

  haul() {
    return `Hauling with a ${this.brand} ${this.model} truck.`;
  }
}

// Vehicle factory that creates vehicles based on type
class VehicleFactory {
  static createVehicle(type, brand, model) {
    switch (type) {
      case "car":
        return new Car(brand, model);
      case "bike":
        return new Bike(brand, model);
      case "truck":
        return new Truck(brand, model);
      default:
        throw new Error("Vehicle type not supported.");
    }
  }
}

// Using the factory to create vehicles
const myCar = VehicleFactory.createVehicle("car", "Tesla", "Model 3");
console.log(myCar.drive()); // Output: Driving a Tesla Model 3 car.
myCar.getNumRuedas();

const myBike = VehicleFactory.createVehicle("bike", "Yamaha", "MT-15");
console.log(myBike.ride()); // Output: Riding a Yamaha MT-15 bike.

const myTruck = VehicleFactory.createVehicle("truck", "Ford", "F-150");
console.log(myTruck.haul()); // Output: Hauling with a Ford F-150 truck.
