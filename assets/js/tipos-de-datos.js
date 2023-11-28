

console.log('tipos de datos');

// El tipo de dato String
let nombre = '1233';
let apellido = 'sanchez';

console.log(nombre);

// console.log( typeof nombre);
console.log(nombre + apellido);
console.log(`el nombre es: ${nombre.toUpperCase()} y apellido: ${apellido} `)




// El tipo numerico

let edad = 987;
let precio = 9.5;
// console.log(edad);
// console.log(precio);
// console.log( typeof edad);
// console.log( typeof precio);

// console.log( parseInt(9.8) );
// console.log( parseFloat('9.5') );


// el tipo de dato booleano

// const PI = 3.14159192819
// const isAdmin = true;
// const isTeam = false;

// console.log(isAdmin);
// console.log(isTeam);

// console.log(typeof isTeam);
// console.log(typeof isAdmin);


// operaciona basicas
let contador = 3;

contador = contador + 10;
contador += 10;

contador = contador - 15;
contador -= 15;

contador = contador * 14;  // forma tradicional
contador *= 14; // forma abreviada

contador = contador / 12;
contador /= 12;


// el tipo de dato objeto
let auto = {
    color: 'verde', 
    modelo: 'toyota',
    precio: 999,
    isNew: true,
    preferencias: {
        equipoSonido: 'SounZ',
        colorInterno: 'verde',
    },
}

console.log(auto);
console.log( typeof auto);


// tipo de dato nullo o null

let music = null;
console.log(music);

console.log(typeof music);


// tipo de dato functions

function prepararCafe(){
    console.log('prepraando cafe');
    console.log('prepraando cafe');
    console.log('prepraando cafe');
}
console.log( typeof prepararCafe);