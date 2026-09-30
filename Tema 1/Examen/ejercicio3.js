"use strict";

/*
Implementa contarVocales(texto).

Devuelve el número de vocales que contiene una cadena. ç
Debe contar vocales en mayúsculas y minúsculas, 
incluidas las vocales acentuadas á, é, í, ó y ú. 
Si el argumento no es una cadena, devuelve 0.

contarVocales("Programación"); // 5
contarVocales("JS"); // 0
*/
function contarVocales(texto) {
  if (typeof texto !== "string") return 0;

  const VOCALES = ["a", "e", "i", "o", "á", "é", "í", "ó", "ú"];

  let resultado = 0;

  for (let index = 0; index < texto.length; index++) {
    if (VOCALES.includes(texto[index].toLowerCase())) {
      resultado++;
    }
  }
  return resultado;
}

module.exports = { contarVocales };
