const calcularpromedioedades = (edades) => {
    let suma = 0;

    for (let i = 0; i < edades.length; i++){
        suma += edades[i];
    }
    let promedioedad = suma / edades.length;
    console.log ("Edades: " + edades);
    console.log ("Promedio: " + promedioedad);

};
const edades = [19 , 26 , 30 , 22, 19, 28, 23, 33, 40, 35];
calcularpromedioedades (edades);