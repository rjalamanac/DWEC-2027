class HistoricWriter {
  static instance = null;
  constructor() {
    if (HistoricWriter.instance === null) {
      HistoricWriter.instance = this;
    }
    return HistoricWriter.instance;
  }

  writeNewLine(document, importe, valorDivisaOrigen, resultado) {
    const nuevoElementoLista = document.createElement("li");
    const fechaActual = new Date(Date.now());
    const resultadoString = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()} Importe ${importe} ${valorDivisaOrigen} - ${resultado.toFixed(2)}`;
    nuevoElementoLista.textContent = resultadoString;
    document.getElementById("idHistorico").appendChild(nuevoElementoLista);
  }
}

export { HistoricWriter };
