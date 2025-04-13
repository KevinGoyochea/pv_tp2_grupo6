// Función para duplicar los números en un arreglo  
const duplicar = (arreglo) => {  
    return arreglo.map(num => num * 2);  
};  

// Ejemplo de uso de la función duplicar  
const numeros = [2, 4, 6, 8, 24];  
const numerosDuplicados = duplicar(numeros);  

// Mostrar el resultado en la consola  
console.log("Números originales:", numeros);  
console.log("Números duplicados:", numerosDuplicados);  