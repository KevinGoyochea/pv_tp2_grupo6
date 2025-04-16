function contarLetraA(cad){
    let contador = 0;
    for(let i=0; i<cad.length; i++){
        if(cad[i].toLowerCase() == 'a'){
            contador++;
        }
    }
    return contador;
}

console.log(contarLetraA("Programacion visual"));