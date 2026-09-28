function calcularTipo() {
  const inputLadoUno = Number.parseInt(
    document.getElementById("idLadoUno").value,
  );
  const inputLadoDos = Number.parseInt(
    document.getElementById("idLadoDos").value,
  );
  const inputLadoTres = Number.parseInt(
    document.getElementById("idLadoTres").value,
  );

  const contenedor = document.getElementById("idDivResultado");

  contenedor.innerHTML =
    "<p>El triángulo es " +
    devolverTipoTriangulo(inputLadoUno, inputLadoDos, inputLadoTres) +
    "</p>";
}

function devolverTipoTriangulo(ladoUno, ladoDos, ladoTres) {
  if (ladoUno === ladoDos && ladoDos === ladoTres) {
    return "Equilatero";
  }

  if (ladoUno !== ladoDos && ladoUno !== ladoTres && ladoTres !== ladoDos) {
    return "Escaleno";
  }

  return "Isósceles";
}
