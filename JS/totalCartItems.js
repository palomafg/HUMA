// Para mostrar cantidad de items en el carrito
function mostrarCantidadCart(){
  // Traer Carrito del Local Storage
  const cartItems = JSON.parse(localStorage.getItem("carrito"));

  // Traer ícono de carrito
  const iconoCart = $('.carritoBoton');

  // Inyectarlo al HTML
  $(".cantidadCarrito").remove();
  iconoCart.append(`<div class="position-absolute top-0 start-50 mt-1 ms-4 translate-middle cantidadCarrito">
                      <span>${cartItems.length}</span>
                    </div>`);
}
// Fin Para mostrar cantidad de items en el carrito

mostrarCantidadCart();