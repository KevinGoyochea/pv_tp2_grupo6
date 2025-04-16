function sumarRango(numI, numF){
    let suma = 0;
    if(numI > numF)
        return"El numero inicial tiene que ser menor o igual al numero final";
    else{
        for(let i=numI; i<= numF; i++){
            suma+=i;
        }
        return suma;
    }
}

console.log(sumarRango(2, 5));
