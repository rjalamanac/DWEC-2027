//Objects
let user = {
  userName: "Rick",
  age: 33,
  fecha: Date.now().toLocaleString(),
  isEmpty: true,
  hijos: {
    Nombre: "rafa",
    Apellidos: "ultraRafa",
  },
  datos: [1, 2, 3, 4],
};

user.isEmpty = "Jamon";
user.VARIABLE_NUEVA = "JAJA";

let newUser = user.structuredClone();
newUser.isEmpty = false;
newUser.hijos.Apellidos = "jaja";

let userName = user.userName;
let userAge = user.age;
//mostramos sus valores
console.log(userName);
console.log(userAge);
