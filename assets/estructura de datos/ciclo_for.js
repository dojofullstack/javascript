


// ciclo for
// Nos ayuda a iterar sobre una lista o array de elemntros


const frutas = [
    'pera',
    'fresa',
    'banana',
    'sandia',
    'naranjas'
];


// for (let contador = 0;  contador  < frutas.length;  contador++ ){

//     let fruta =  frutas[contador];

//     // console.log(fruta.toUpperCase());

//     console.log(`indice: ${contador}  fruta: ${fruta.toUpperCase()}`);


//     if (fruta.toLowerCase() === 'fresa'){
//         console.log('fresa esta disponible');
//     } else if (fruta.toLowerCase() === 'sandia'){
//         console.log('sandia esta en Stock');
//     }


// }



for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element);
}
