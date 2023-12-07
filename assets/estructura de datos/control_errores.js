



// control de errores en JS
//  try catch


try {
    // casos de uso
    // cuando nos conectamos con servicios de tercros o API
    // procesos el usuario interactua 

    console.log('ejecutando algunas intruccion');
    // console.log(username);

} catch (error) {
    
    console.log('detectando el error:', error);

    if (error.toString().includes('username')){
        console.log('reparando error');
        const username = 'pedro';
        console.log(username);
    }

    
} finally {
    console.log('limpiar localStoarge....');
}


// console.log('ejecutando algunas intruccion');
// console.log(username);


alert('final del programa');
