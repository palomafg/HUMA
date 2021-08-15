// Caja Nuestras Playlists
const npl = document.getElementById("npl");

// Array con nuestras playlists desde un JSON
const URLJSON = "https://palomafg.github.io/HUMA/data/nuestrasPlaylists.json";
$.getJSON(URLJSON, function (respuesta, estado) {

        if(estado === "success"){
            let nuestrasPlaylists = respuesta;
            
            mostrarProductos(nuestrasPlaylists);

        } else{
            mostrarProductos(null);
        }
});


const carrito = [];


// Mostrar productos
function mostrarProductos(prod){
    let productosMostrar = prod;

    if(productosMostrar != null){
        productosMostrar.forEach(element => {

            // Item
            let itemH = document.createElement("div");
            itemH.setAttribute("class","itemH my-0 my-md-4 col-12 col-md-10 row justify-content-around");
            // Setear id para los productos especiales
            if(element.nombre === "DALE"){
                itemH.setAttribute("id","daleItemH");
            }
            if(element.nombre === "IT'S BRAINY, BITCH"){
                itemH.setAttribute("id","itsBBItemH");
            }
            if(element.nombre === "TOGAS"){
                itemH.setAttribute("id","togasItemH");
            }

                // Datos
                let data = document.createElement("div");
                data.setAttribute("class","data my-4 my-md-5 px-4 px-md-5 col-6");

                    // Nombre
                    let nombre = document.createElement("h4");
                    nombre.setAttribute("class","data__nombre name");
                    nombre.textContent = `${element.nombre}`;
                    data.appendChild(nombre);

                    // Formato
                    let formato = document.createElement("h5");
                    formato.setAttribute("class","data__formato format");
                    formato.textContent = `${element.formato}`;
                    data.appendChild(formato);

                    // Duracion
                    let duracion = document.createElement("h6");
                    duracion.setAttribute("class","data__duracion time");
                    duracion.textContent = `${element.duracion}min`;
                    data.appendChild(duracion);
                
                itemH.appendChild(data);

                // Precio
                let precio = document.createElement("h4");
                precio.setAttribute("class","precio my-4 my-md-5 px-4 px-md-5 col-6");
                precio.textContent = `$${element.precio}`;
                itemH.appendChild(precio);

                // Ver lista BOTON
                let verMas = document.createElement("div");
                verMas.setAttribute("class","col-6 col-sm-3 col-lg-7 m-2 p-2");

                    let btnMas = document.createElement("button");
                    btnMas.setAttribute("class","btn verMas p-2");
                    btnMas.setAttribute("type","button");
                    btnMas.setAttribute("data-bs-toggle","collapse");
                    btnMas.setAttribute("data-bs-target",`#collapse${element.nombre}`);
                    btnMas.setAttribute("aria-expanded","false");
                    btnMas.setAttribute("aria-controls",`collapse${element.nombre}`);
                    if(element.nombre === "IT'S BRAINY, BITCH"){
                        btnMas.setAttribute("id","dark");
                        btnMas.setAttribute("data-bs-target",`#collapseItsBB`);
                        btnMas.setAttribute("aria-controls",`collapseItsBB`);
                    }
                    
                        let verLista = document.createElement("span");
                        verLista.textContent = `+ VER LISTA`;
                        btnMas.appendChild(verLista);
                    
                    verMas.appendChild(btnMas);

                itemH.appendChild(verMas);

                // Añadir al carrito BOTON
                let sumarCarrito = document.createElement("button");
                sumarCarrito.setAttribute("class","btn btnHN rounded-circle sumarCarrito col-3 col-sm-1 m-3 p-0 py-lg-4");
                if(element.nombre === "IT'S BRAINY, BITCH"){
                    sumarCarrito.setAttribute("id","dark");
                }
                sumarCarrito.innerHTML = '<i class="fas fa-cart-plus"></i>';
                itemH.appendChild(sumarCarrito);

                // Lista
                let colapsa = document.createElement("div");
                colapsa.setAttribute("class","collapse container-fluid col-12 col-lg-6 p-4 d-lg-flex justify-content-lg-center");
                colapsa.setAttribute("id",`collapse${element.nombre}`);
                if(element.nombre === "IT'S BRAINY, BITCH"){
                    colapsa.setAttribute("id",`collapseItsBB`);
                }

                    let lista = document.createElement("div");
                    lista.setAttribute("class","lista");

                        for(i=0; i < element.lista.length; i++){
                            let tema = document.createElement("p");
                            tema.setAttribute("class","lista__info text-center");
                            tema.textContent = `${element.lista[i]}`;
                            lista.appendChild(tema);
                        }

                    colapsa.appendChild(lista);

                itemH.appendChild(colapsa);

                // Portada
                let portada = document.createElement("div");
                portada.setAttribute("class","foto d-md-flex align-items-center px-2 px-md-4 my-3 col-12 col-lg-6");

                    let foto = document.createElement("img");
                    foto.setAttribute("src",`${element.portada}`);
                    foto.setAttribute("class","img-fluid pic");
                    foto.setAttribute("alt",`Portada de ${element.nombre}`);
                    portada.appendChild(foto);

                itemH.appendChild(portada);

            npl.appendChild(itemH);
        });

        // Botones Sumar al carrito
        const sumarCarritoBotones = document.querySelectorAll('.sumarCarrito');
        // Sumar al carrito
        sumarCarritoBotones.forEach((sumarCarritoBoton) => {
            sumarCarritoBoton.addEventListener('click',sumarCarritoClicked);
        });

    } else {

        npl.innerHTML = `<div class="error d-flex flex-column justify-content-center align-items-center">
                            <i class="m-5 fa-4x far fa-dizzy"></i>
                            <h2 class="m-1">Ha ocurrido un error!</h2>
                        </div>`;
    }

}

function sumarCarritoClicked(e){

    const botonSumar = e.target;

    // Item seleccionado
    const item = botonSumar.closest('.itemH');

    // Traer info del Item
    const itemPortada = item.querySelector('.pic').src;
    const itemNombre = item.querySelector('.name').textContent;
    const itemDuracion = Number(item.querySelector('.time').textContent.replace('min',''));
    const itemLista = item.querySelector('.lista').textContent;
    const itemFormato = item.querySelector('.format').textContent;

    // Traer carrito del localStorage
    let dbItemsCompra = JSON.parse(localStorage.getItem("carrito"));

    // Crear item elegido
    let itemElegido = new Playlist(itemNombre,itemFormato,itemDuracion,itemLista,itemPortada,);

    // Verificar si el carrito vino vacio o con info
    if(localStorage.getItem("carrito") != null){
        // Pushear al array que traje
        dbItemsCompra.push(itemElegido);
        // Sobrescribir con el nuevo carrito
        localStorage.setItem("carrito", JSON.stringify(dbItemsCompra));
    } else{
        // Pushear al array que cree
        carrito.push(itemElegido);
        // Guardarlo como carrito en el storage
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    // Animacion del icono carrito
    $('.carritoBoton').fadeOut('slow')
                        .fadeIn('fast')
                        .fadeOut('slow')
                        .fadeIn('fast');

    // Animacion del aviso Añadido!
    $(".aviso").slideDown("slow")
                .delay(900)
                .slideUp("slow");

    // Poner numero de items sobre el carrito
    mostrarCantidadCarrito();
}

// Para mostrar cantidad de items en el carrito
function mostrarCantidadCarrito(){
    // Traer Carrito del Local Storage
    const carritoItems = JSON.parse(localStorage.getItem("carrito"));
  
    // Traer ícono de carrito del DOM
    const iconoCart = $('.carritoBoton');
  
    // Inyectarlo al HTML
    $(".cantidadCarrito").remove();
    iconoCart.append(`<div class="position-absolute top-0 start-50 mt-1 ms-4 translate-middle cantidadCarrito">
                        <span>${carritoItems.length}</span>
                      </div>`);
}
// Fin Para mostrar cantidad de items en el carrito