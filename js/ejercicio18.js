let cad1 = "Programacion visual es una materia de segundo año de la carrera APU.";
let cad2 = "Estructura de datos es una materia de primer año de la carrera APU.";
let cambio = false;

function cambiarTexto(){
    let parrafo = document.getElementById("texto");
    if(cambio){
        parrafo.innerText = cad1;
    }else{
        parrafo.innerText = cad2;
    }
    cambio = !cambio;
}