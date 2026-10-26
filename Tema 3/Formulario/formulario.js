document.addEventListener("submit", function (event) {
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
});
