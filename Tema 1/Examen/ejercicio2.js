"use strict";
/*
Implementa sumarPares(numeros).

Recibe un array de números y devuelve la suma de los números pares. Si el argumento no es un array, devuelve 0.

sumarPares([2, 5, 8, 3, 4]); // 14
sumarPares([]); // 0
*/

function sumarPares(numeros) {
  if (!Array.isArray(numeros)) {
    return 0;
  }

  let suma = 0;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 === 0) suma += numeros[index];
  }
  return suma;
}

module.exports = { sumarPares };
