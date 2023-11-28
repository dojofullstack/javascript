

// Tipo de dato Array es una coleccion de objetos


console.log('tipo de dato Array');


const motos = new Array('susuky', 'honda', 'italika');

const stack = ['python', 'javascript', 'golang' ];

console.log(motos);

console.log(stack);

console.log( typeof motos);
console.log( typeof stack);


console.log( stack.length);

console.log( stack[0]);
console.log( stack[1]);

console.log( stack[1]);

const ultimoElmento = stack.length - 1;

console.log( stack[ultimoElmento]);


console.log( stack.sort());

// para insertar elementos al final del Array
stack.push('typescript');

console.log(stack);

stack[0] = 'nodeJS'; 
console.log(stack);

// stack[5] = 'Google Cloud'; 

// console.log(stack);

// para eliminar el ultimo de un arreglo
// stack.pop();

// console.log(stack);


//para eliminar el primer elemento del Array
// stack.shift();
// console.log(stack);


// stack.splice(0, 1);

// console.log(stack);

// delete stack[0];

// console.log(stack);
