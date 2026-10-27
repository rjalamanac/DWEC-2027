document.addEventListener("submit", cambioDivisa);

function cambioDivisa(event) {
  event.preventDefault();

  //idImporte
  const importe = Number.parseInt(document.getElementById("idImporte").value);

  const optionOrigen = document.getElementById("divisa-origen");
  const valorDivisaOrigen =
    optionOrigen.options[optionOrigen.selectedIndex].value;

  const optionEnd = document.getElementById("divisa-fin");
  const valorDivisaEnd = optionEnd.options[optionEnd.selectedIndex].value;
}
