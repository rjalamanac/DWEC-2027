"use strict";

/*
Ejercicio 5. Comprobar contraseña - 2 puntos
Implementa comprobarContrasena(contrasena).

Debe devolver true únicamente cuando la contraseña:

Es una cadena.
Tiene al menos 8 caracteres.
Contiene al menos una letra mayúscula.
Contiene al menos una letra minúscula.
Contiene al menos un número.
En cualquier otro caso devuelve false.

comprobarContrasena("Clave123"); // true
comprobarContrasena("clave123"); // false
*/

function comprobarContrasena(contrasena) {
  if (typeof contrasena !== string) return false;

  if (contrasena.length < 7) return false;

  let contieneMayuscula = false;
  let contienenMiniscula = false;
  let contieneNumero = false;

  for (let index = 0; index < contrasena.length; index++) {
    if (!Number.isNaN(contrasena[index])) {
      contieneNumero = true;
      continue;
    }

    if (!arrayCaracteresAlfabeto.includes(contrasena[index])) {
      continue;
    }

    if (contrasena[index] === contrasena[index].toUpperCase()) {
      contieneMayuscula = true;
      continue;
    }

    if (contrasena[index] === contrasena[index].toLowerCase()) {
      contienenMiniscula = true;
      continue;
    }
  }
}

module.exports = { comprobarContrasena };
