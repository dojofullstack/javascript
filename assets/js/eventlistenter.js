

console.log('eventlisteners');


function mostrarMensaje(){
    alert('hola usuario!');
}



const btnComprar = document.querySelector('#comprar');


btnComprar.addEventListener('click', () => {
    console.log('evento clic detectado');
}  ) 


// btnComprar.addEventListener('mouseover', () => {
//     mostrarMensaje();
// }  ) 



// formularioTag.addEventListener('submit', () => {
//     console.log('enviando datos del formulario')
// }  ) 



const searchProduct = document.querySelector('#search-product');


searchProduct.addEventListener('keydown', (event) => {
    console.log('enviando datos del formulario', event.code);

    if (event.code === 'Enter'){

        const nombre = searchProduct.value;
        console.log(nombre);

        searchProductAPI(nombre);
        // buscar productor en el API productos
    }

}  ) 




function searchProductAPI(nombre){

    const API = `https://dummyjson.com/products/search?q=${nombre}`;
    axios.get(API).then((res) => {
        console.log(res.data);



    let totalItemsHTML = '';

    res.data.products.forEach(element => {
        
        let producto = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${element.images[0]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <a href="#" class="btn btn-primary">UserID: ${element.price}</a>
        </div>
      </div>`;
    
      totalItemsHTML += producto;

    });

    document.querySelector('#productos-container').innerHTML = totalItemsHTML;



    }).catch((error) => {
        console.log(error);
    })

}