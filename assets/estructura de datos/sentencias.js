

// Las sentecias de control en JS, son intrucciones que nos permiten tomar
// decisiones sobre cual codigo ejecutar segun
// la condicion

// 3 formas aplicar
// if {}
// if {} else {}
// else if


// let contenedor = document.querySelector('.contenedor');

// let isAlumno = false;
// let nombre = 'pedro';
// let email = 'pedro@dojo.com';
// let isMensualidad = true;


// if (isAlumno && nombre === 'pedro' && email.includes('@dojo')){
//     console.log('evaluda en true, ejecutando alfunas intrucciones...');
//     contenedor.innerHTML = '<h2>Es alumno del Dojo</h2>';
//     contenedor.style.color = 'green'; 
//     contenedor.style.fontWeight = 'bold'; 
//     contenedor.style.backgroundColor = 'yellow'; 
//     contenedor.style.padding = '20px'; 
// } else {
//     contenedor.innerHTML = '<h2>Aun no es miembro</h2>';
//     contenedor.style.color = 'white'; 
//     contenedor.style.fontWeight = 'bold'; 
//     contenedor.style.backgroundColor = 'blue'; 
//     contenedor.style.padding = '10px'; 
// }


// anidadas o multiples

// let isAlumno = true;
// const username = prompt("ingresar nombre?");
// let isNuevo = true;

// if (isAlumno && username === 'pedro'){
//     console.log('Pedro es alumnro');
//     contenedor.innerHTML = '<h2>Pedro es alumnroo</h2>';
// } else if (isAlumno && username === 'henry' || isNuevo){
//     console.log('henry es alumnro');
//     contenedor.innerHTML = '<h2>henry es alumnroo</h2>';
// } else if (isAlumno && username === 'julio'){
//     console.log('Julio es alumnro');
//     contenedor.innerHTML = '<h2>Julio es alumnroo</h2>';
// } else {
//     console.log(`${username} no es alumno aun`);
//     contenedor.innerHTML = `<h2>${username} no es alumno aun</h2>`;
// }




// Ejericicio juegod de Dados

// let contenedor = document.querySelector('.contenedor');

// let valorDado = prompt('Cual es valor del dado?') ;

// valorDado = parseInt(valorDado);

// console.log(typeof valorDado);


// if (valorDado === 1){
//     contenedor.innerHTML  = '<img height="300px" src="https://previews.123rf.com/images/francovolpato/francovolpato1205/francovolpato120500320/13760295-el-n%C3%BAmero-uno-la-cara-de-un-dado-de-colores-con-el-n%C3%BAmero-uno.jpg" />';
// } else if (valorDado === 2){
//     contenedor.innerHTML  = '<img height="300px" src="https://previews.123rf.com/images/francovolpato/francovolpato1205/francovolpato120500323/13760296-el-n%C3%BAmero-dos-la-cara-de-un-dado-de-colores-con-el-n%C3%BAmero-dos.jpg" />';
// } else if  (valorDado === 3){
//     contenedor.innerHTML  = '<img height="300px" src="https://previews.123rf.com/images/francovolpato/francovolpato1205/francovolpato120500322/13760297-el-n%C3%BAmero-tres-la-cara-de-un-dado-de-colores-con-el-n%C3%BAmero-tres.jpg" />';
// } else if (valorDado === 6){
//     contenedor.innerHTML  = '<img height="300px" src="https://as1.ftcdn.net/v2/jpg/04/71/81/38/1000_F_471813874_LARKbDsANgF7FdnbnxOBlEmWrWuRyTKm.jpg" />';
// } else {
//     contenedor.innerHTML  = '<img height="300px" src="https://ksr-ugc.imgix.net/assets/035/217/010/e454f0f80322d5167c13f51a93c5dd5d_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1634141866&auto=format&frame=1&q=92&s=f71e84f86227c3b765e6e003d38fc03f" />';

// }






let valorEstacion = prompt('Cual es la estacion actual?') ;

if (valorEstacion === 'verano'){
    document.write("<img src='https://img.freepik.com/vector-premium/vacaciones-verano-ninos-playa_43633-6931.jpg' />")
} else if (valorEstacion === 'otono'){
    document.write("<img src='https://www.supermadre.net/wp-content/uploads/2017/03/fotos-de-oton%CC%83o-1200x900.jpg' />")
} else if (valorEstacion === 'invierno'){
    document.write("<img src='https://estaticos-cdn.elperiodico.com/clip/570e9be2-40f7-43df-b8f8-55119a792fd2_alta-libre-aspect-ratio_default_0.jpg' />")
} else {
    document.write("<img src='https://definicion.de/wp-content/uploads/2013/06/primavera-1.jpg' />")
}