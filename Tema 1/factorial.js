//Devuelve el número factorial o nan en caso de ser entero negativo.
function devolverFactorial(numero) {
  if (numero < 0) {
    return NaN;
  }
  let total = 1;
  for (let index = 1; index <= numero; index++) {
    total = total * index;
  }
  return total;
}

function calcuarFactorial() {
  //Cojo el valor del input.
  const inputValue = Number.parseInt(document.getElementById("idInput").value);
  //Cojo el elemento div donde guardaremos el resultado.
  const contenedor = document.getElementById("idContenedor");

  let textoResultado =
    "<p>El factorial de " +
    inputValue +
    " es " +
    devolverFactorial(inputValue) +
    "</p>";
  //Insertamos el nuevo párrafo en el contenedor.
  contenedor.innerHTML = textoResultado;
}
