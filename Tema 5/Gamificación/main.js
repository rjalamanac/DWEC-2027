import { BTN_ID, CLASS_BUTTON, SP_CLICK_ID, SP_MISS_ID } from "./constants.js";

const buiton = document.getElementById("btnGame");
moveBuitonRandomPosition(buiton);
buiton.addEventListener("mouseover", frickYou);
document.addEventListener("click", sumarContadorClick);

let button = document.createElement("button");
button.textContent = "💎";
button.classList.add(CLASS_BUTTON);

document.getElementsByTagName("main")[0].appendChild(button);
setInterval(() => {
  moveBuitonRandomPosition(button);
}, "1000");

let buttonDown = document.createElement("button");
buttonDown.textContent = "🐋";
buttonDown.classList.add(CLASS_BUTTON);
document.getElementsByTagName("main")[0].appendChild(buttonDown);
setInterval(() => {
  moveBuitonDown(buttonDown);
}, "1000");

function moveBuitonRandomPosition(buiton) {
  let witdh = Math.round(Math.random() * 80);
  let height = Math.round(Math.random() * 80);
  buiton.style = `TOP:${height}vh;LEFT:${witdh}vw;`;
}

function moveBuitonDown(buiton) {
  if (buiton.style.length === 0) {
    buiton.style = `TOP:5vh;`;
    return;
  }
  let currentHeight = Number.parseInt(
    buiton.style.top.substring(0, buiton.style.top.length - 2),
  );

  currentHeight += 5;
  buiton.style = `TOP:${currentHeight}vh;`;
}

function frickYou(event) {
  setTimeout(() => {
    moveBuitonRandomPosition(buiton);
  }, "300");
}

function sumarContadorClick(event) {
  event.target.className === CLASS_BUTTON
    ? cambiarContador(SP_CLICK_ID)
    : cambiarContador(SP_MISS_ID);
}
function cambiarContador(idContador) {
  let numClicks = Number.parseInt(
    document.getElementById(idContador).textContent,
  );
  numClicks++;
  document.getElementById(idContador).textContent = numClicks;
}
