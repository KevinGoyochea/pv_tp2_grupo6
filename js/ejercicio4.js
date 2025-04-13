const calcularcuadrado = (lado) => {
    let area = lado * lado;
    let perimetro = lado * 4;

    console.log ("Lado del cuadrado: " + lado);
    console.log ("Area: " + area);
    console.log ("Perimetro: " + perimetro);

};

const lado = 5;
calcularcuadrado (lado);