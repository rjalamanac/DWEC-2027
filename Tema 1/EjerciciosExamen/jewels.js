//Devuelve el número factorial o nan en caso de ser entero negativo.
function calcularResultado(jewels, stones) {
  if (jewels.length < 0 || stones.length < 0) {
    return 0;
  }

  let total = 0;

  for (let indexStones = 0; indexStones < stones.length; indexStones++) {
    for (let indexJewels = 0; indexJewels < jewels.length; indexJewels++) {
      if (jewels[indexJewels].includes(stones[indexStones])) {
        total++;
        break;
      }
    }
  }
  return total;
}

//Devuelve el número factorial o nan en caso de ser entero negativo.
function calcularResultadoReplace(jewels, stones) {
  let count = 0;
  for (let i = 0; i <= jewels.length; i++) {
    while (stones.includes(jewels[i])) {
      count++;
      stones = stones.replace(jewels[i], "");
    }
  }
  return count;
}

function calcularNumeroJewels() {
  //Cojo el valor de jewels.
  const inputJewels = document.getElementById("idInputJewels").value;

  //Cojo el valor del input.
  const inputStones = document.getElementById("idInputStones").value;

  //Cojo el elemento div donde guardaremos el resultado.
  const contenedor = document.getElementById("idContenedor");

  let textoResultado =
    "<p>El número de jewels es " +
    calcularResultado(inputJewels, inputStones) +
    "</p>";

  //Insertamos el nuevo párrafo en el contenedor.
  contenedor.innerHTML = textoResultado;
}
