

console.log('peticiones http con axios');


const API = 'https://dummyjson.com/comments';

// console.log(axios);

axios.get(API).then((data) => {
    console.log(data.data);



    let totalUsersHTML = '';

    data.data.comments.forEach(element => {
        
        let usuario = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.user.username}</h5>
          <p class="card-text">${element.body}</p>
          <a href="#" class="btn btn-primary">UserID: ${element.postId}</a>
        </div>
      </div>`;
    
      totalUsersHTML += usuario;

    });

    document.querySelector('#comentarios').innerHTML = totalUsersHTML;


}).catch((error) => {
    console.log('capturando error');
    alert('servicio en mantenimeionto, intente mas tarde');
    console.log(error);
})



///// metodo post con axios

// CRUD
// C - CREATE CREAR
// R - READ LEER
// U - UPDATE ACTUALUZAR
// D - DELETE - ELIMINAR

// const API_AUTH = 'https://dummyjson.com/auth/login';

// const data = {
//     username: 'kminchelle',
//     password: '0lelplR'
// }

// axios.post(API_AUTH, data).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })



// EJEMPLO AXIOS POST

const API_PRODUCT_CREATE   = 'https://dummyjson.com/products/add';

const data = {
    "title": 'IPhhone 2025',
    "description": "iphone glasss",
    "price": 55,
    "discountPercentage": 12.96,
    "rating": 1.5,
    "stock": 1,
    "brand": "Apple",
    "category": "smartphones"
}

axios.post(API_PRODUCT_CREATE, data).then((res) => {
    console.log(res.data);
}).catch((error) => {
    console.log('error', error);
})


