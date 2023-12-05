


// casos en JS
// tienes una serie de opciones establecidad


let semaforo = prompt('indica el color del semaforo');


// switch (semaforo){
//     case 'verde':
//         console.log('puedes cruzar la pista');
//         break;
//     case 'rojo':
//         console.log('espera un momento que pases los autos');
//         break;
//     case 'naranja':
//         console.log('espera 30s.');
//         break;
//     default:
//         console.log('no cruzar');
// }


if (semaforo === 'verde'){
    console.log('puedes cruzar la pista');
} else if (semaforo === 'rojo'){
        console.log('espera un momento que pases los autos');
} else if (semaforo === 'naranja'){
        console.log('espera 30s.');
} else {
    console.log('no cruzar');
}