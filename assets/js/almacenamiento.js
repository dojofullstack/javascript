

// almacenamiento de datos

// cookies y localstorage


// las diferencias
// cookies almacenar kb de informacion
// casos de uso
// identificar al ussuario y acceder recursos
// marketing google y facebook 'pixel' 'cookie'
// en texto plano 'string'






// cookies o galletas
// por dominio 

// obtener cookes
console.log(document.cookie)


document.cookie = 'sesionID=0129011092019201; expires=Thu, 01 Jan 2024 00:00:00 UTC';


document.cookie = 'sesionID=345671102901; expires=Thu, 15 Jan 2024 00:00:00 UTC ';

// document.cookie = 'email=henry@gmail.com';




// Trabajando con localStorage
// localstorage
// mas capacidad de alamcenmiento
// almacenar informacion en formato JSON
// casos de uso
// preferencias del usuario, configuracion, email, id
// carrito de compras, favoritos, etc


// lista las claves guardas
console.log(localStorage);


const carrito = [
    {
        id: 1,
        title: 'phone',
        price: 123,
        isStock: true
    },
    {
        id: 3,
        title: 'samsung',
        price: 99,
        isStock: false
    },
]





// para insertar o crear keys
localStorage.setItem('carritoTienda', JSON.stringify(carrito));


const carritoTienda =  JSON.parse(localStorage.getItem('carritoTienda'));

console.log(carritoTienda);


// localStorage.removeItem('carritoTienda');


const profile = {
    name: 'pepe',
    isLogin: true
}

localStorage.setItem('preferencias', JSON.stringify(profile));



const profileData =  JSON.parse(localStorage.getItem('preferencias'));

console.log(profileData.name);
console.log(profileData.isLogin);

if (profileData.name){
    alert(`hola ${profileData.name}`);
}