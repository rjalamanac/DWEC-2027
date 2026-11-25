import {
  CLASS_BUTTON,
  SP_CLICK_ID,
  SP_MISS_ID,
  CLASS_BTN_KEFIR,
} from "./constants.js";

let timerSpeed = 1000;

setInterval(() => {
  timerSpeed = Math.abs(timerSpeed - 200);
  arrayAllIntervalsKefirs.forEach((element) => {
    clearInterval(element);
  });
  arrayAllIntervalsKefirs = [];

  for (
    let index = 0;
    index < document.getElementsByTagName("img").length;
    index++
  ) {
    arrayAllIntervalsKefirs.push(
      setInterval(() => {
        moveBuitonRandomPosition(document.getElementsByTagName("img")[index]);
      }, timerSpeed.toString()),
    );
  }
}, "4000");

let arrayAllIntervalsKefirs = [];

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
}, timerSpeed.toString());

let buttonDown = document.createElement("button");
buttonDown.textContent = "🐋";
buttonDown.classList.add(CLASS_BUTTON);
document.getElementsByTagName("main")[0].appendChild(buttonDown);
setInterval(() => {
  moveBuitonDown(buttonDown);
}, timerSpeed.toString());

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
  }, timerSpeed.toString());
}

function sumarContadorClick(event) {
  event.target.className === CLASS_BUTTON ||
  event.target.className === CLASS_BTN_KEFIR
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

//TODO: Aparecen un número aleatorio de kéfirs en pantalla, si le das click a 1, aparecen 2 kefir más.
//TODO: Los kéfirs se mueven cada vez más rápido.

const numKefirDefault = Math.round(Math.random() * 10);
for (let index = 0; index < numKefirDefault; index++) {
  createKefirImage();
}

function createKefirImage() {
  let imgKefir = document.createElement("img");
  imgKefir.classList.add(CLASS_BTN_KEFIR);
  imgKefir.src = "./kefir.png";
  document.getElementsByTagName("main")[0].appendChild(imgKefir);
  moveBuitonRandomPosition(imgKefir);
  arrayAllIntervalsKefirs.push(
    setInterval(() => {
      moveBuitonRandomPosition(imgKefir);
    }, timerSpeed.toString()),
  );
  imgKefir.addEventListener("click", duplicateKefir);
}

function duplicateKefir(event) {
  event.target.remove();
  createKefirImage();
  createKefirImage();
}
