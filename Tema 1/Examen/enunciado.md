# Examen de JavaScript - DAW2

**Puntuación total:** 10 puntos

## Instrucciones

- Completa los cinco archivos proporcionados.
- No cambies el nombre de las funciones.
- Cada función debe devolver el resultado mediante `return`.
- No uses `document`, `prompt`, `alert` ni `console.log` dentro de las funciones.
- No cambies la línea `module.exports`.

## Ejercicio 1. Clasificar una temperatura - 2 puntos

Implementa `clasificarTemperatura(temperatura)`.

Debe devolver:

- `"Helada"` si la temperatura es menor que 0.
- `"Frío"` si está entre 0 y 14, incluidos.
- `"Templado"` si está entre 15 y 24, incluidos.
- `"Calor"` si es 25 o superior.
- `"Dato incorrecto"` si el argumento no es un número válido.

```js
clasificarTemperatura(18); // "Templado"
clasificarTemperatura(-3); // "Helada"
```

## Ejercicio 2. Sumar números pares - 2 puntos

Implementa `sumarPares(numeros)`.

Recibe un array de números y devuelve la suma de los números pares. Si el argumento no es un array, devuelve `0`.

```js
sumarPares([2, 5, 8, 3, 4]); // 14
sumarPares([]); // 0
```

## Ejercicio 3. Contar vocales - 2 puntos

Implementa `contarVocales(texto)`.

Devuelve el número de vocales que contiene una cadena. Debe contar vocales en mayúsculas y minúsculas, incluidas las vocales acentuadas `á`, `é`, `í`, `ó` y `ú`. Si el argumento no es una cadena, devuelve `0`.

```js
contarVocales("Programación"); // 5
contarVocales("JS"); // 0
```

## Ejercicio 4. Número mayor sin repetir - 2 puntos

Implementa `mayorSinRepetir(numeros)`.

Devuelve el número mayor que aparece una sola vez en el array. Si todos los números están repetidos, el array está vacío o el argumento no es un array, devuelve `null`.

```js
mayorSinRepetir([4, 7, 4, 9, 7, 3]); // 9
mayorSinRepetir([2, 2, 5, 5]); // null
```

## Ejercicio 5. Comprobar contraseña - 2 puntos

Implementa `comprobarContrasena(contrasena)`.

Debe devolver `true` únicamente cuando la contraseña:

- Es una cadena.
- Tiene al menos 8 caracteres.
- Contiene al menos una letra mayúscula.
- Contiene al menos una letra minúscula.
- Contiene al menos un número.

En cualquier otro caso devuelve `false`.

```js
comprobarContrasena("Clave123"); // true
comprobarContrasena("clave123"); // false
```

## Calificación

Cada ejercicio vale 2 puntos. La nota de cada ejercicio se obtiene proporcionalmente a las pruebas superadas.
