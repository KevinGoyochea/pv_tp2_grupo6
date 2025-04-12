let nombres = ["Daniel","Kevin","Rene","Agustin","Cristian","Marcos"];
let nombrelargo = nombres[0];

for(let i=1;i < nombres.length;i++){
    if( nombres[i].length > nombrelargo.length){
        nombrelargo = nombres[i];
    }
}
console.log("Nombre mas largo: "+nombrelargo);