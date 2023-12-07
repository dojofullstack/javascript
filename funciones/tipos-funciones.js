

console.log('tipos de funciones en JS');


// funcion tradicional

var cardVencido = false;
let tipoTarjeta = 'mastercard';

const cardIsCredit = false;


function realizarPago(){
    console.log('EJECUTANDO FUNCTION REALIZA PAGO');

    console.log('tipoTarjeta', tipoTarjeta);
    console.log('cardVencido', cardVencido);
    console.log('cardIsCredit', cardIsCredit);
    cardVencido = true;
    tipoTarjeta = 'visa';
    console.log('cardVencido', cardVencido);
    console.log('tipoTarjeta', tipoTarjeta);

}

realizarPago();
// console.log(tipoTarjeta);
// console.log(cardVencido);


console.log('cardVencido', cardVencido);
console.log('tipoTarjeta', tipoTarjeta);


// tipo de funcion por Expresion
const saludarPedro = function saludar(nombre){
    return `hola! ${nombre}`;
}

console.log(saludarPedro('pedro'));



// tipo de funcion lambda o anonima
const saludarHenry = function (nombre){
    return `hola! ${nombre}`;
}

// console.log(saludarHenry('henry'));



// funcion tipo flecha  array function

const cancelarPago = (tipo_tarjeta) => {
    // console.log('cancelando pago');
    return `cancelando pag ${tipo_tarjeta}`;
}



// console.log( cancelarPago('tarjeta credito'));






const lanzarDado = (numero) => {
    console.log('lanzando dado...');

    saludarHenry();

    return numero*2
}


// console.log( lanzarDado(2));


const liveNotif = document.querySelector('#liveNotif');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveNotif);

const liveNotifError = document.querySelector('#liveNotifError');
const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(liveNotifError);


const validarPin = () => {

    const pin =  document.querySelector('#pin').value;
    console.log(pin);

    // nos conectamos un API /api/pin/verif
    const data = {
        'statusPIN': true,
        'pin': '1234'
    }

    if (pin === data.pin && data.statusPIN){
        console.log('pin correcto');

        toastBootstrap.show();

        const pregunarRedirect = prompt('quiere rvar cardVencido = false;edereccionar al panel?');
        if (pregunarRedirect === 'si'){
            document.location.href = '/panel.html'
        }

    } else {

        toastBootstrapError.show();

    }
    




}


