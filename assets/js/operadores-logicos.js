


console.log('operadores logicos en JS');

// Existen 3 operador logicos AND OR NOT 

// operador logico AND (y)
// para que esta operacion logiaca evalue o retorne 'true' ambas deben evaluarse en 'true'

// se representa con el operador AND   &&
// true && true = true
// false && true = false
// true && false = false
// false && false = false


let isAdmin = true;
let email = 'henry@gmail.com';
let puntos = 15;


// let salida = isAdmin && email.includes('@');
// let salida = isAdmin && email;
let salida = isAdmin && (puntos === 20) && email.includes('@');
// console.log(salida);




// operador logicos OR
// para que esta operacion logica evalue o retorne 'true' al menos una deben evaluarse en 'true'


// se representa con el operador OR   ||
// true || true = true
// false || true = true
// true || false = true
// false || false = false

let isAdmin2 = true;
let email2 = 'henry@gmail.com';
let puntaje = 50;


// let salidaLogica =  isAdmin2 || email2.includes('henry');
// let salidaLogica =  puntaje || email2.includes('henry');
// let salidaLogica =  email2.includes('jose') || puntaje || isAdmin2;

// let salidaLogica = puntaje !== email2.length;
let salidaLogica = puntaje >= email2.length || email2.includes('henry');

console.log(salidaLogica);



// operador logico NOT (!)
// Permite negar el estado booleano de la variable o constante
let isMemberDojo = true;
let isPremium = false;
const nombre = 'erick';
const apellido = '';

console.log( !isMemberDojo);
console.log( !isPremium);
console.log( !nombre);
console.log( !apellido);