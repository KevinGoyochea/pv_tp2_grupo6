const boton = document.querySelector("#enviar");
boton.addEventListener("click", function(event){
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#lu").value;
    alert("Los datos ingresados son:" + "\n" + "Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Libreta universitaria: " + libreta);
});