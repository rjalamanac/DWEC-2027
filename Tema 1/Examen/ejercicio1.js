"use strict";

/*
"Helada" si la temperatura es menor que 0.
"Frío" si está entre 0 y 14, incluidos.
"Templado" si está entre 15 y 24, incluidos.
"Calor" si es 25 o superior.
"Dato incorrecto" si el argumento no es un número válido.
*/

function clasificarTemperatura(temperatura) {
  if (Number.isNaN(temperatura)) return "Dato incorrecto";

  if (temperatura < 0) return "Helada";

  if (temperatura <= 14) return "Frío";

  if (temperatura >= 25) return "Calor";

  return "Templada";
}

module.exports = { clasificarTemperatura };
