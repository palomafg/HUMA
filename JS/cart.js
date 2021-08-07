/********************** Variables Globales **********************/
// Traer Carrito del Local Storage
const dbItemsCompra = JSON.parse(localStorage.getItem("carrito"));

// Contenedor de los items del Carrito
const contenedorItemsCarrito = $('.contenedorItemsCarrito');

// Traer boton de Finalizar Compra y asignar funcion
const botonFinalizarCompra = $('.botonFinalizarCompra');
botonFinalizarCompra.on('click',botonFinalizarCompraClicked);
/********************** Fin Variables Globales **********************/

anadirItemsAlCarrito(dbItemsCompra);

/********************** Funciones **********************/
// Para añadir/imprimir los items del carrito
function anadirItemsAlCarrito(items){
    if(items != null){
        for(item of items){
            // Cuantos items estan repetidos
            let cantElemento = items.filter(el => el.nombre === item.nombre && el.formato === item.formato).length;
            // Traigo los nombres y formatos para luego comprobar si se repiten
            const elementosNombre = $('.itemCarritoNombre');
            const elementosFormato = $('.itemCarritoFormato');
            // Imprimo los items del carrito
            contenedorItemsCarrito.append(`<div class="col-11 col-md-5 my-3 mx-0 mx-md-3 py-2 py-sm-3 py-md-1 px-0 px-sm-3 px-md-1 row itemCarrito">

                                                <div class="col-3 col-sm-4 m-0 px-1 d-flex align-items-center">
                                                    <img class="itemCarritoPortada" src=${item.portada} alt="Portada">
                                                </div>

                                                <div class="col-5 m-0 p-1 d-flex flex-column justify-content-evenly align-items-center">
                                                    <h6 class="itemCarritoNombre">${item.nombre}</h6>
                                                    <h6 class="itemCarritoFormato">${item.formato}</h6>
                                                    <p class="itemCarritoPrecio mb-2">$${item.precio}</p>
                                                </div>

                                                <div class="col-4 col-sm-3 m-0 px-1 py-0 d-flex flex-row justify-content-between align-items-end">
                                                    <input class="itemCarritoCantidad mb-4 rounded-pill" type="number" value="${cantElemento}">
                                                    <button class="btn botonBorrar p-0 align-self-start" type="button"><i class="fas fa-times-circle"></i></button>
                                                </div>

                                            </div>`);
    
            // Asignacion de funciones para el boton borrar y cambiar cantidad
            $('.botonBorrar').on('click',borrarItemCarrito);
            $('.itemCarritoCantidad').on('change',cantidadCambiada);
    
            

            // Si esta repetido el producto en el carrito, lo borro
            for(let i = 0; i < elementosNombre.length; i++){
                if(elementosNombre[i].innerText == item.nombre && elementosFormato[i].innerText == item.formato){
                    let elemento = elementosNombre[i].parentElement.parentElement;
                    elemento.remove();
                }
            }
        }
        actualizarTotalCarrito();

    } else {
        // Si no hay nada, decir que sume productos
        contenedorItemsCarrito.append(`<div class="sinProductos col-12 d-flex align-items-center justify-content-center">
                                            <span class="text-center">Sumá productos al carrito!</span>
                                        </div>
        `);
    }
}

// Actualiza el costo total de la compra
function actualizarTotalCarrito(){
    let total = 0;
    // Obtener el total actual
    const totalCarrito = document.querySelector('.totalCarrito');
    // Obtener items en el carrito
    const itemsCarrito = document.querySelectorAll('.itemCarrito');
    // Para cada item en el carrito obtener precio y cantidad, calcular total e imprimirlo
    itemsCarrito.forEach((itemCarrito) => {
        // Precio
        const itemCarritoPrecioElemento = itemCarrito.querySelector('.itemCarritoPrecio');
        const itemCarritoPrecio = Number(itemCarritoPrecioElemento.textContent.replace('$',''));
        // Cantidad
        const itemCarritoCantidadElemento = itemCarrito.querySelector('.itemCarritoCantidad');
        const itemCarritoCantidad = Number(itemCarritoCantidadElemento.value);
        // Calcular total
        total = total + itemCarritoPrecio * itemCarritoCantidad;
    });
    totalCarrito.innerHTML = `$ ${total}`;
    // Modificarlo en el badge del carrito
        // Traer Carrito del Local Storage
        const carritoItems = JSON.parse(localStorage.getItem("carrito"));
        // Traer ícono de carrito
        const iconoCart = $('.carritoBoton');
        // Inyectarlo al HTML
        $(".cantidadCarrito").remove();
        iconoCart.append(`<div class="position-absolute top-0 start-50 mt-1 ms-4 translate-middle cantidadCarrito">
                            <span>${carritoItems.length}</span>
                        </div>`);
}

// Borra el item seleccionado del carrito y del localStorage
function borrarItemCarrito(e){
    // Traer boton presionado y el item al que pertenece
    const botonClicked = e.target;
    const itemBorrar = botonClicked.closest('.itemCarrito');
    // Traer nombre y formato del elemento a borrar
    const nombreBorrar = itemBorrar.querySelector('.itemCarritoNombre').textContent;
    const formatoBorrar = itemBorrar.querySelector('.itemCarritoFormato').textContent;
    // Borrarlo del localStorage
    for(i = 0;i < dbItemsCompra.length; i++){
        if(dbItemsCompra[i].nombre === nombreBorrar && dbItemsCompra[i].formato === formatoBorrar){
            dbItemsCompra.splice(i,1);
            localStorage.setItem("carrito", JSON.stringify(dbItemsCompra));
        }
    }
    // Borrarlo del HTML
    itemBorrar.remove();
    
    actualizarTotalCarrito();
}

// Cuando cambia la cantidad del input
function cantidadCambiada(e){
    const input = e.target;
    // Para evitar que ponga menos de uno
    input.value <= 0 ? (input.value = 1) : null;
    actualizarTotalCarrito();
}

// Cuando finaliza la compra
function botonFinalizarCompraClicked(){
    alert('Gracias por tu compra!');
    localStorage.removeItem('carrito');
    location.reload();
}
/********************** Fin Funciones **********************/