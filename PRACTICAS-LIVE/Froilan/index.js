const nombre = window.prompt("Cual es tu nombre");

const edad = window.prompt("Cual es tu edad");

const alumno = window.prompt("Eres alumno??");

let mayor_edad = edad >= 18;

let resul = mayor_edad && alumno === "si";

console.log(
  `Hola mi nombre es ${nombre} y mi edad es ${edad} y soy mayor de ${mayor_edad} y tenho obsequio ${resul}`
);
