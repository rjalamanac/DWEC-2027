import { DOLLARS, EUROS, LIBRAS } from "./constantes.js";
import { exchangeDivisa } from "./exchanger.js";
document.addEventListener("submit", cambioDivisa);

function cambioDivisa(event) {
  event.preventDefault();

  //idImporte
  const importe = Number.parseInt(document.getElementById("idImporte").value);

  if (Number.isNaN(importe)) {
    return;
  }

  const optionOrigen = document.getElementById("divisa-origen");
  const valorDivisaOrigen =
    optionOrigen.options[optionOrigen.selectedIndex].value;

  if (valorDivisaOrigen === "") {
    return;
  }

  const optionEnd = document.getElementById("divisa-fin");
  const valorDivisaEnd = optionEnd.options[optionEnd.selectedIndex].value;

  if (valorDivisaEnd === "") {
    return;
  }

  const resultado = exchangeDivisa(valorDivisaOrigen, valorDivisaEnd, importe);
  const nuevoElementoLista = document.createElement("li");
  const fechaActual = new Date(Date.now());
  const resultadoString = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()} Importe ${importe} ${valorDivisaOrigen} - ${resultado.toFixed(2)}`;
  nuevoElementoLista.textContent = resultadoString;
  document.getElementById("idHistorico").appendChild(nuevoElementoLista);
}
