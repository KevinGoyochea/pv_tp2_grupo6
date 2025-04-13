convertirtiempo = (hora , minutos) => {
    let horaasegundos = hora * 3600;
    let minutoasegundos = minutos * 60;

    console.log ("En " + hora + " horas son: " + horaasegundos + " segundos");
    console.log ("En " + minutos + " minutos son: " + minutoasegundos + " segundos");
};

const hora = 3;
const minutos = 45;

convertirtiempo (hora , minutos);