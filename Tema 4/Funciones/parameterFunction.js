function operar(valorUno, valorDos, operacion) {
  return operacion(valorUno, valorDos);
}

let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let multiplicación = (a, b) => a * b;
let division = (a, b) => a / b;
let maximo = (a, b = 99) => Math.max(a, b);

console.log(maximo(5));

//Dado el número de segundos actual, dependiendo del resto al dividir 5,
// ejecutar sumar, restar, multiplicación, división

const fechaActual = new Date(Date.now());
const segundosRestoDivisionCinco = fechaActual.getSeconds() % 5;

let resultado = NaN;
switch (segundosRestoDivisionCinco) {
  case 0:
    resultado = operar(10, 5, suma);
    break;
  case 1:
    resultado = operar(10, 5, resta);
    break;
  case 2:
    resultado = operar(10, 5, division);
    break;
  case 3:
    resultado = operar(10, 5, multiplicación);
    break;
  case 4:
    resultado = operar(10, 5, maximo);
    break;
}

console.log(resultado);
