

// operador ternario
// evluar si una expresion es true o false
// y segun cada caso ejecuta intrucciones

console.log('operadores ternarios');
//   (condicion) ?  console.log('algunas intrucciones') : console.log('si no se cumple');

let resultadoExamen;

let puntajeHTML = 80;
let puntajeCSS = 60;


resultadoExamen =  (puntajeHTML + puntajeCSS >= 100) ?
  'aprobaste el examen urra!!' :
  'vuelve a intentar manana';

console.log(resultadoExamen);


// puntajeHTML + puntajeCSS >= 100 ?
//     alert( 'aprobaste el examen urra!!') :
//   alert('vuelve a intentar manana');


let tag_main = document.querySelector('#main');

puntajeHTML + puntajeCSS >= 100 ?
    tag_main.innerHTML = '<h1> aprobaste el examen urra!! </h1>' :
    tag_main.innerHTML = '<h1> manana intentas nuevamente </h1>';
