
const nombre =  window.prompt('Cual es tu nombre');

const alumno =  window.prompt('Eres alumno');

let edad = window.prompt('cual es tu edad?');
edad = parseInt(edad);
// parseFloat()
// parseInt()

let mayor_edad = edad >= 18;


// opcional 
let obsequio = mayor_edad && alumno === 'si';



console.log(`hola mi nombre ${nombre} y mi edad es ${edad} y soy mayor de edad ${mayor_edad} y tengo obsequio: ${obsequio} `);