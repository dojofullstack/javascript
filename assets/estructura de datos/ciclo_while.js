




console.log('ciclo while');

let monitoring = true;

let horas = 12;


// while (monitoring && horas <= 24) {
//     console.log('ejecutando codigo');
//     // alert('ejeuctando codigo');
//     const respuesta =  prompt('desea finalizar el ciclo while??');

//     horas += 10;

//     if (respuesta === 'si'){
//         monitoring = false;
//         // break
//     }
// }


// console.log('programa prinicpal');


// break points
// break = finalizar el ciclo forzadamente
// continue = evaluna nuevamente (next page)




// ciclo do while
// el bloque se ejcuta por primera vez

let isUserVIP = true;

do {
    console.log('iterando');
    let respuesta =  prompt('desea continuar?');
    if (respuesta === 'no'){
        // break;
        isUserVIP = false;
    }
} while (isUserVIP);



const MONITOR_PRECIOS = false


do {
    // se conectar a un API y trae el precio de las monedas DOLAR, EURO, PEN
    // insertar datos a una table html
    // MUESTRA los datos

} while (MONITOR_PRECIOS);


// boton con la accion refrescar precios cada momento
MONITOR_PRECIOS = true; 