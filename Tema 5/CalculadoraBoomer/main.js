import { ARRAY_OPERANDOS, MAS, RESULT } from "./constants.js";

const sBotonera = document.getElementById("sBotonera");
const pResul = document.getElementById("pResul");
let valor_anterior = null;
let operando = null;

for (let index = 0; index < 10; index++) {
  const btnNumero = document.createElement("button");
  btnNumero.textContent = index;
  btnNumero.addEventListener("click", clickBtn);
  sBotonera.appendChild(btnNumero);
}

for (let index = 0; index < ARRAY_OPERANDOS.length; index++) {
  const btnNumero = document.createElement("button");
  btnNumero.textContent = ARRAY_OPERANDOS[index];
  btnNumero.addEventListener("click", clickBtn);
  sBotonera.appendChild(btnNumero);
}

const btnNumero = document.createElement("button");
btnNumero.textContent = RESULT;
btnNumero.addEventListener("click", clickBtn);
sBotonera.appendChild(btnNumero);

function clickBtn(event) {
  let valueBtn = event.target.textContent;
  let valueBtnNumber = Number.parseInt(valueBtn);
  if (Number.isInteger(valueBtnNumber)) {
    pResul.textContent = pResul.textContent + valueBtn;
    return;
  }

  if (ARRAY_OPERANDOS.includes(valueBtn)) {
    operando = valueBtn;
    valor_anterior = Number.parseInt(pResul.textContent);
    pResul.textContent = "";
    return;
  }

  if (valueBtn === RESULT) {
    switch (operando) {
      case MAS:
        pResul.textContent =
          Number.parseInt(pResul.textContent) + valor_anterior;
        break;
    }
  }
}
