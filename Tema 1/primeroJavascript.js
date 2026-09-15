for (let index = 5; index > 0; index--) {
  if (index !== 3) {
    crearParrafo("Parrafo" + index);
  }
}

function crearParrafo(texto) {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.body.appendChild(parrafo);
}
