const compraResumen = (nombre, precio) => {
    agregarCarrito (nombre, precio)
    console.log(`Se agrego al carrito ${nombre} $ ${precio}`);
    total += precio;  
    console.log(total)
}
let compra;
let total = 0;


const agregarCarrito = (nombre, precio) => {
    carrito.push(new Producto(nombre, precio))
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
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

const usuario = prompt('Ingrese nombre: ')
do {
    const productosComprar = parseInt (prompt(`Ingrese el numero del producto que desea comprar:
    1 - ${productos[0].titulo} $ ${productos[0].precio}
    2 - ${productos[1].titulo} $ ${productos[1].precio}
    3 - ${productos[2].titulo} $ ${productos[2].precio}
    4 - ${productos[3].titulo} $ ${productos[3].precio}
    5 - ${productos[4].titulo} $ ${productos[4].precio}
    6 - ${productos[5].titulo} $ ${productos[5].precio}
    7 - ${productos[6].titulo} $ ${productos[6].precio}
    8 - ${productos[7].titulo} $ ${productos[7].precio}`));

    switch (productosComprar){
        case 1:
            compraResumen (productos[0].titulo, productos[0].precio) 
            break;
        case 2:
            compraResumen (productos[1].titulo, productos[1].precio) 
            break;
        case 3:
            compraResumen (productos[2].titulo, productos[2].precio) 
            break;
        case 4:
            compraResumen (productos[3].titulo, productos[3].precio) 
            break;
        case 5:
            compraResumen (productos[4].titulo, productos[4].precio) 
            break;
        case 6:
            compraResumen (productos[5].titulo, productos[5].precio) 
            break;
        case 7:
            compraResumen (productos[6].titulo, productos[6].precio) 
            break;
        case 8:
            compraResumen (productos[7].titulo, productos[7].precio) 
            break;
        
        default: alert('Numero ingresado es incorrecto');
        break;
    }

     compra = prompt('Deseas seguir comprando? S/N')

}
    while (compra !== "n");
console.log(carrito) 

console.log(`El total de tu compra es: $ ${total}`)