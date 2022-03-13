const agregarCarrito = (producto) => {
    carrito.push(producto)
}
const carrito = [];
const productos = [
    { id: 1, titulo: "Zanahoria", precio: 120 },
    { id: 2, titulo: "CebollaC", precio: 110 },
    { id: 3, titulo: "Brocoli", precio: 580 },
    { id: 4, titulo: "Ajo", precio: 130 },
    { id: 5, titulo: "Huevos", precio: 350 },
    { id: 6, titulo: "Papas", precio: 150 },
    { id: 7, titulo: "Choclos", precio: 250 },
    { id: 8, titulo: "Tomates", precio: 245 },
]

agregarCarrito(productos [0]);
console.log(carrito);

productos.forEach(elementoVerduras =>{
    console.log(elementoVerduras)
})
