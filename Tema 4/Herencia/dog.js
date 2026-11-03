import { Animal } from "./animal.js";

class Dog extends Animal {
  constructor(parametro) {
    super(parametro);
    this.pelo = "Big";
    this.hijos = [1, 2, 3, 4];
  }
  bark() {
    return `The ${this.name} barks!`;
  }
  stopRunning() {
    //Ejecuta el código del Parent
    super.stopRunning();
    console.log("The dog is having fun");
  }
  static Cry() {
    return "Joo que mal, tengo muchos examenes de DWEC";
  }
}
let miAnimal = new Animal("Speedi");
let miperro = new Dog("Tobi");
console.log(miperro.startRunning(10));
console.log(miperro.bark()); //The Dog barks!
miperro.stopRunning(); //The Dog barks!
console.log(Dog.Cry()); //The Dog cries!
