//Classes in JavaScript
class Person {
  constructor(firstName, lastName, age, position, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
    this.country = country;
  }

  static planeta = "La Tierra";

  printDetails() {
    console.log(`Hi! My details are:
        Name: ${this.firstName},
        Name: ${this.lastName},
    `);
  }
}

const samuel = new Person("Samuel", "L Jackson", 59, "Actor", "America");
samuel.printDetails();
console.log(Person.planeta);
