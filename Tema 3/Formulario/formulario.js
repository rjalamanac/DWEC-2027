const form = document.getElementById("idForm");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const nombre = document.getElementById("idNombre").value;
  const apellido = document.getElementById("idApellido").value;
  const edad = document.getElementById("idEdad").value;
  const localizacion = document.getElementById("idLocalización").value;
  const correo = document.getElementById("idCorreo").value;

  const persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    localizacion: localizacion,
    correo: correo,
  };
  sessionStorage.setItem("UsuarioAnterior", JSON.stringify(persona));
}

const button = document.getElementById("idButton");

button.addEventListener("click", btnSumarUno);

function btnSumarUno(event) {
  const spanClicks = document.getElementById("idNumclicks");
  let numeroClicks = Number.parseInt(spanClicks.textContent);
  numeroClicks++;
  spanClicks.textContent = numeroClicks;
  spanClicks.FRANCISCO = numeroClicks;
}
