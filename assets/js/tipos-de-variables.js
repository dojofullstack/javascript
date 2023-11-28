
console.log('tipos de variables en JS');

// Que es es una variable?
// Es un contenedor o caja que nos permite datos en memoria Ram

// 3 formas de declarar variables
// var, let y const

// declararando la variable y definiendo usuario con var
var usuario = 'henry';
var email;

// console.log(usuario);

// usuario = 'mario';
// console.log(usuario);

// console.log(email);

// email = 'henry@gmail.com';
// console.log(email);


// declarando variables con let

// let passwrod = '12344';


// hoisting aplicado
console.log(admin1);
var admin1 = 'pedro';


// no aplica hositing
// console.log(admin2);
let admin2 = 'jose';
admin2 = 'jose salazar';
console.log(admin2);





// tipo const
// una vez asignado el valor no se modificar o
// reasignar

const URL_PRODUCTOS = 'https://api.com';

console.log(URL_PRODUCTOS);

// URL_PRODUCTOS = 'http://google.com';

const URL_AUTH = 'google.com';
console.log(URL_AUTH);




// standares para escribir variables

// notacion Camelcase
let firstName = 'henry';
let userAdminPermisos = true;

let isAdmin = false;
let isMember = true;
console.log(isMember);
isMember = false;
console.log(isMember);


