let nuevoObjeto = {
  Nombre: "rafa",
  Apellidos: null,
  sumar: (a, b) => a + b,
  hijos: ["Paco", "Luis", "Pepe"],
};

console.log(nuevoObjeto.Nombre);
nuevoObjeto.Nombre = "Pepe";
console.log(nuevoObjeto.Nombre);

nuevoObjeto.sumar = () => "Jajaj ya no funciona";
console.log(nuevoObjeto.sumar(1, 2));

//Como clonar un objeto desde Node
let otroObjeto = JSON.parse(JSON.stringify(nuevoObjeto));
nuevoObjeto.Nombre = "paco";
console.log(otroObjeto.Nombre);
