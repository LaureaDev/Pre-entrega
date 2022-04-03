
const carrito = validarStorageCarrito ();
function validarStorageCarrito (){
    const validarStorageCarrito = JSON.parse(localStorage.getItem('carrito'))
    validarStorageCarrito = null ? false : [];

}
document.getElementById ("cantidad-prod").innerHTML = carrito.length;