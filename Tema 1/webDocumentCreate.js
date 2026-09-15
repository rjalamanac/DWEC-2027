addParrafo("¡Este es el texto en código usando createElement!");
addParrafo("Otro parrafo");

function addParrafo(texto) {
  // Crear un nuevo párrafo
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  // Añadir el párrafo al contenedor
  document.getElementById("contenedor").appendChild(parrafo);
}
