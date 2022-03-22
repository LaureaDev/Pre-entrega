const divProductos = document.getElementById('listado-verduras')

const carrito = [];
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
console.log(divProductos)

productos.forEach(element =>{
    let card = document.createElement('div')

   card.innerHTML = `
   
   <div class="col h-100" >
    <div class="card border-0 shadow-sm">
        <div class="card-body">
            <img src="img/${element.imagen}" alt="Zanahoria">
            <h4>${element.titulo}</h4>
            <h5 class="price">$ ${element.precio}</h5>
            <button type="button" class="btn btn-outline-success">Agregar</button>
        </div>
    </div>
    </div>

`
   divProductos.appendChild(card) 
})

agregarProductos ();























/* 
function generarCards (productosAMostrar){
    let acomuladorCards = ``;
    productosAMostrar.forEach(element => {
        acomuladorCards += ` <div class="col-lg-3" >
        <div class="card border-0 shadow-sm">
            <div class="card-body">
                <img src="img/${element.imagen}">
                <h4>${element.titulo}</h4>
                <h5 class="price">Precio por Kg: $120</h5>
                <button type="button" class="btn btn-outline-success">Agregar</button>
            </div>
        </div>
   </div>
`
mostrarCardHTML (acomuladorCards);
    });
}

 const mostrarCardHTML = (cards) =>{
    document.getElementsById('#listado-verduras').innerHTML = cards;
}
const listaDeCards = document.getElementById('listado-verduras')
generarCards(productos); */