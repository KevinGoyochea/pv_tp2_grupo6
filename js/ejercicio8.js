const calcularMayor = (numero1,numero2)=>{
    if(numero1 > numero2){
        window.alert("El numero Mayor es: "+numero1);
    }else if(numero1 < numero2){
        window.alert("El numero Mayor es: "+numero2);
    }else{
        window.alert("Los Numeros son Iguales")
    }
}

calcularMayor(10,5);