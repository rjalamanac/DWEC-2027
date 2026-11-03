import { DivisaExchanger } from "./exchanger.js";
import { HistoricWriter } from "./historicWriter.js";

document.addEventListener("submit", cambioDivisa);

function cambioDivisa(event) {
  event.preventDefault();
  const exchanger = new DivisaExchanger();
  const historicWriter = new HistoricWriter();

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

  const resultado = exchanger.exchangeDivisa(
    valorDivisaOrigen,
    valorDivisaEnd,
    importe,
  );
  historicWriter.writeNewLine(document, importe, valorDivisaOrigen, resultado);
}
