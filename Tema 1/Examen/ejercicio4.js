"use strict";

/*
Ejercicio 4. Número mayor sin repetir - 2 puntos
Implementa mayorSinRepetir(numeros).

Devuelve el número mayor que aparece una sola vez en el array. 
Si todos los números están repetidos, el array está vacío o el argumento no es un array, 
devuelve null.

mayorSinRepetir([4, 7, 4, 9, 7, 3]); // 9
mayorSinRepetir([2, 2, 5, 5]); // null
*/
function mayorSinRepetir(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) return null;

  let numeroMayor = numeros[0];
  let repeticiones = 0;
  let numerosRepetidos = [];
  arrayConRepetidos.sort();

  for (let index = 1; index < numeros.length; index++) {
    if (numerosRepetidos.includes(numeros[index])) {
      continue;
    }
  }
}

[1, 2, 3, 4, 1, 6, 1];

function devolverArraySinRepetidos(arrayConRepetidos) {
  let arraySinRepetidos = [];
  for (let index = 0; index < arrayConRepetidos.length; index++) {
    /*
    if (arrayConRepetidos.lastIndexOf(arrayConRepetidos[index]) === index) {
      arraySinRepetidos.push(arrayConRepetidos[index]);
    }
    */
  }
}

/*
let count = 0;
let num = Number.NaN;

numero = [1, 2, 3, NaN, NaN];
while (true) {
  num = Math.max(numeros);
  //num=4
  while (numeros.includes(num)) {
    count++;
    numeros[numeros.findIndex(num)] = Number.NaN;
  }
  if (count === 1) {
    return num;
  }
  if (Number.isNaN(num)) {
    return 0;
  }
  num = Number.NaN;
  count = 0;
}
  */

module.exports = { mayorSinRepetir };
