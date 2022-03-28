const carrito = validarStorageCarrito ();
function validarStorageCarrito (){
    if (localStorage.getItem("carrito") != null){
        const storageProductos =  JSON.parse(localStorage.getItem("carrito"));
        return storageProductos;
    } else{
        return[]
    }
}

document.getElementById ("cantidad-prod").innerHTML = carrito.length;

const productos = [
    { id: 1, titulo: "Zanahoria", precio: 120, imagen: 'zanahoria.png' },
    { id: 2, titulo: "CebollaC", precio: 110, imagen: 'cebollac.png'},
    { id: 3, titulo: "Brocoli", precio: 580, imagen: 'brocoli.png' },
    { id: 4, titulo: "Ajo", precio: 130, imagen: 'ajo.png' },
    { id: 5, titulo: "Huevos", precio: 350, imagen: 'huevos.png' },
    { id: 6, titulo: "Papas", precio: 150, imagen: 'papas.png' },
    { id: 7, titulo: "Choclos", precio: 250, imagen: 'choclos.png'},
    { id: 8, titulo: "Tomates", precio: 245, imagen: 'tomates.png' }
]
const boton = document.getElementById('boton-buscar')

const AgregarAlCarrito = (idProducto) =>{
    /* AGREGAR AL CARRITO */
    const productoAgregado = productos.find(producto => producto.id === idProducto )
    carrito.push(productoAgregado)

    /* ACTUALIZANDO STORAGE  */
    localStorage.setItem("carrito", JSON.stringify(carrito))
    /* ACTUALIZANDO HTML */
   document.getElementById ("cantidad-prod").innerHTML = carrito.length;
}

const divProductos = document.getElementById('listado-verduras')
generarCards(productos);
function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((element) => {
        acumuladorDeCards += `<div class="col h-100" >
        <div class="card border-0 shadow-sm">
            <div class="card-body" >
                <img src="img/${element.imagen}" alt="Zanahoria">
                <h4>${element.titulo}</h4>
                <h5 class="price">$ ${element.precio}</h5>
                <button onclick="AgregarAlCarrito(${element.id})" type="button" class="btn btn-outline-success">Add to Cart</button>
            </div>
        </div>
        </div> `;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);

}
    function mostrarCardsEnElHTML(card) {
    document.getElementById("listado-verduras").innerHTML = card;
};

function buscarProducto() {
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });
 
    generarCards(productosEncontrados);

}


