

// funciones en JavaScript
console.log(' funciones en JavaScript');
// maquina recibe elemento
// y genera una salida elementos
// maquina de juegos
// recibes las frutas -> salida el jugo


const frutas = [
    'pera',
    'fresa',
    'naranja',
    'banana'
]


function jugoFrutas(frutas_frescas){
    console.log(frutas_frescas);
    // frutas_frescas.forEach(element => {
    //     console.log(element.toUpperCase());
    // });

    const frutasPeladas =  frutas_frescas.map(element => (
        element.toUpperCase()
    ));
    console.log('paso 1 limpiando las frutas');
    console.log('paso 2 cortando la frutas');
    console.log('paso 3 licuando la frutas');
    console.log('paso 4 salida del jugo...');

    return 'JUGO DE NARANJAS LISTO';
}




// const salidaMaquina =  jugoFrutas(frutas);
// console.log(salidaMaquina);


function saludar(nombre, apellido='gasparin'){
    return `hola ${nombre} ${apellido}`;
}


// const saludoHenry =  saludar(nombre='henry', apellido='vasquez');

// console.log(saludoHenry);



function startLogin(){

    const notifPWDIncorrect = `<div class="alert alert-warning" role="alert">
        Contrasena incorrecta, minimo 8 caracteres
  </div>`;


  const notifPWDIncorrectNumero = `<div class="alert alert-warning" role="alert">
  Contrasena incorrecta, agregar al menos 1 digito
</div>`;


    const loginOk = `<div class="alert alert-success" role="alert">
        Credecianles correctas!
  </div>`

    console.log('iniciar sesion');

    const email = document.querySelector('#email').value;
    const pwd =  document.querySelector('#password').value;

    console.log(email, pwd);

    if (pwd.length < 7){
        document.querySelector('#notif_password').innerHTML = notifPWDIncorrect;
        return;
    } 


    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let contieneNumero = false;
    numeros.forEach((numero) => {
        if (pwd.includes(numero)){
            contieneNumero = true;
        }
    })


    if (!contieneNumero){
        document.querySelector('#notif_password').innerHTML = notifPWDIncorrectNumero;
        return;
    }



    // conectar a un servidor o API enviar credenciales
    // mostrar datos del usuario

    
    document.querySelector('#notif_password').innerHTML = loginOk;



}

