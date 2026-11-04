const { faker } = await import("https://esm.sh/@faker-js/faker");
const claveNumeroAleatorio = Math.ceil(Math.random() * 1000);

const valueNuevoCard = {
  alt: faker.science.chemicalElement().name,
  titulo: faker.hacker.adjective(),
  texto: faker.food.description(),
  img: faker.image.avatar(),
};

const valueNuevoCardString = JSON.stringify(valueNuevoCard);

localStorage.setItem(`Cards_${claveNumeroAleatorio}`, valueNuevoCardString);

for (let index = 0; index < localStorage.length; index++) {
  const keyLocalStorage = localStorage.key(index);
  if (!keyLocalStorage.startsWith("Cards_")) {
    continue;
  }
  generateHTMLCard(keyLocalStorage);
}

function generateHTMLCard(keyLocalStorage) {
  try {
    const valueObjectCard = JSON.parse(localStorage.getItem(keyLocalStorage));
    const contenedorCards = document.getElementById("idTbody");
    let fila = document.createElement("tr");

    fila.innerHTML = `
      <th scope="row">${valueObjectCard.titulo}</th>
      <td>${valueObjectCard.texto}</td>
      <td>
        <img src="${valueObjectCard.img}" alt="${valueObjectCard.alt}" />
      </td>`;
    contenedorCards.appendChild(fila);
  } catch (error) {
    console.log(error);
  }
}
