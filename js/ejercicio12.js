let num1 = parseInt(prompt("Ingresa un numero y verificaremos si es par o impar:"));
let div = 0;

div = num1 % 2; 

if ( div == 0 ) {
    alert("El numero: " + num1 + " es un numero par");
} else {
    alert("El numero: " + num1 + " es un numero impar");
}