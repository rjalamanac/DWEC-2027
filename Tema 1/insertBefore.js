// Crear el nuevo elemento
const parrafoNuevo = document.createElement("p");
const node = document.createTextNode(
  "Este es un nuevo párrafo insertado  de p2.",
);

parrafoNuevo.appendChild(node); // Obtener el elemento padre y el hijo de referencia

//Obtenemos el contenedor principal
const contenedorPrincipal = document.getElementById("div1");

const parrafoSegundo = document.getElementById("p2"); // Insertar el nuevo párrafo antes de p1

contenedorPrincipal.insertBefore(parrafoNuevo, parrafoSegundo);
