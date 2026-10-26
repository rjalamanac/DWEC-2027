const { faker } = await import("https://esm.sh/@faker-js/faker");
const claveNumeroAleatorio = Math.ceil(Math.random() * 1000);
import CLAVE_JS_CARDS from "./constantes.js";

const valueNuevoCard = {
  alt: faker.science.chemicalElement().name,
  titulo: faker.hacker.adjective(),
  texto: faker.food.description(),
  img: faker.image.avatar(),
};

let arrayCards = [];
const valueStringArrayCards = localStorage.getItem(CLAVE_JS_CARDS);
if (valueStringArrayCards.length === 0) {
  arrayCards.push(valueNuevoCard);
  localStorage.setItem(CLAVE_JS_CARDS, arrayCards);
} else {
  arrayCards = JSON.parse(localStorage.getItem(CLAVE_JS_CARDS));
  arrayCards.push(valueNuevoCard);
  localStorage.setItem(CLAVE_JS_CARDS, arrayCards);
}

for (let index = 0; index < arrayCards.length; index++) {
  generateHTMLCard(arrayCards[index]);
}

function generateHTMLCard(valueObjectCard) {
  try {
    const contenedorCards = document.getElementById("cards");
    const nuevoDiv = document.createElement("div");
    nuevoDiv.innerHTML = `
       <img
       src=${valueObjectCard.img}
       alt=${valueObjectCard.alt}
     />
     <div class="card-content">
       <h3>${valueObjectCard.titulo}</h3>
       <p>${valueObjectCard.texto}.</p>
       <a href="#" class="btn">
         Ver más
       </a>
     </div>
   `;
    nuevoDiv.classList.add("card");
    contenedorCards.appendChild(nuevoDiv);
  } catch (error) {
    console.log(error);
  }
}
