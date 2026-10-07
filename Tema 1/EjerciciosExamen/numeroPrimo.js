//Un número es primo si solo es divisible por si mismo y 1.
function esPrimo(numero) {
  for (let index = 2; index < numero; index++) {
    if (numero % index === 0) {
      return false;
    }
  }
  return true;
}

function comprobarPrimo() {
  //Cojo el valor del input.
  const inputValue = Number.parseInt(document.getElementById("idInput").value);
  //Cojo el elemento div donde guardaremos el resultado.
  const contenedor = document.getElementById("idContenedor");
  //Asigno por defecto que sea primo
  let textoResultado = "<p>¡El número " + inputValue + " es primo!</p>";

  if (!esPrimo(inputValue)) {
    //Dado que el número es no primo asigno diferente valor variable
    textoResultado = "<p>¡El número " + inputValue + " no es primo!</p>";
  }

  //Insertamos el nuevo párrafo en el contenedor.
  contenedor.innerHTML = textoResultado;
}
