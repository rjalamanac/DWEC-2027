import { ID_BTN_RESTAR, ID_BTN_SUMAR } from "./constants.js";

document.getElementById("btnSumar").addEventListener("click", clickEvent);
document.getElementById("btnRestar").addEventListener("click", clickEvent);

function clickEvent(event) {
  const spanResultado = document.getElementById("spResultado");
  let resultado = Number.parseInt(spanResultado.textContent);
  if (event.target.id === ID_BTN_RESTAR) {
    resultado--;
    spanResultado.textContent = resultado;
  } else if (event.target.id === ID_BTN_SUMAR) {
    resultado++;
    spanResultado.textContent = resultado;
  }
}

function otroClickEvent(event) {}
