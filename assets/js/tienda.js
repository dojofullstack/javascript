

console.log('construyendo Tienda');

class Tienda {

    constructor(nombre='', logotipo='', description=''){
        this.nombre = nombre;
        this.logotipo = logotipo;
        this.description = description;
        this.productos = [];
        this.carrito = [];
    }


    crearTienda(){
        console.log('creando tienda online..');
        this.nombre = document.querySelector('#input_name').value;
        this.logotipo = document.querySelector('#input_logotipo').value;
        this.description = document.querySelector('#input_description').value;

        console.log(this.nombre, this.logotipo, this.description);

        document.querySelector('#logotipo_store').src = this.logotipo;
        document.querySelector('#name_store').innerHTML = this.nombre;
        document.querySelector('#descripcion_store').innerHTML = this.description;

    }

    crearProducto(){

        console.log('creando tienda online..');
        const product = document.querySelector('#input_product_title').value;
        const precio = document.querySelector('#input_product_price').value;
        const imagen = document.querySelector('#input_product_image').value;
        const sku = document.querySelector('#input_sku').value;

        // const productoTienda = {
        //     product: product,
        //     precio: precio,
        //     imagen: imagen,
        // }
        const productoTienda = {
            product,
            precio,
            imagen,
            sku
        }

        this.productos.push(productoTienda);

        this.mostrarProductos();

    }


    eliminarProducto(sku){
        console.log('eliminando sku', sku);


        this.productos.forEach((item, index) => {

            if (item.sku === sku){
                console.log('elimiando el prodicto con el indice', index);

                this.productos.splice(index, 1);
                this.mostrarProductos();
            }

        })


    }

    mostrarProductos(){
        
        console.log(this.productos);

        let totalProductoHTML = '';

        this.productos.forEach(element => {
            
            let producto = `<div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title">${element.product}</h5>
              <a href="#" class="btn btn-primary">Price: ${element.precio}</a>
              <button class="btn btn-danger" onclick="tiendaDojo.eliminarProducto('${element.sku}')" >Eliminar</button>
            </div>
          </div>`;
        
          totalProductoHTML += producto;
    
    
        });
    
        document.querySelector('#contenedor-productos').innerHTML = totalProductoHTML;
        


    }


}



const tiendaDojo = new Tienda();




const btnCrearTienda =  document.querySelector('#crear-tienda');
const btnCrearproducto =  document.querySelector('#crear-producto');


btnCrearTienda.addEventListener('click', () => {
    tiendaDojo.crearTienda();
})


btnCrearproducto.addEventListener('click', () => {
    tiendaDojo.crearProducto();
})



function eliminarProduct(){
    console.log('elimiando');
}