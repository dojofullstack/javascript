

const instrumentosMusical = [
    'piano',
    'guitarra',
    'flauta',
    'violin',
    'tambor'
]

// forLoop
// for (let index = 0; index < instrumentosMusical.length; index++) {
//     const element = instrumentosMusical[index];
//     console.log(element);    
// }


// forof
// for (let iterator of instrumentosMusical) {
//     console.log(iterator);
//     // let index = instrumentosMusical.indexOf(iterator);
// }

//foreach

instrumentosMusical.forEach( (item, index) => {
    console.log(item.toUpperCase());
    console.log(index);
    // return item.toUpperCase();
} );



//map
// recibe una arraxy genera otro arrayZ

const salidaInstrumentos =  instrumentosMusical.map( (element, index) => (
    element.toUpperCase()
));



console.log(salidaInstrumentos);