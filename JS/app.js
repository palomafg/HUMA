/********************** Variables Globales **********************/

    /*Los productos estan en el JS de playlists*/

    // Tienda
    let tienda = document.getElementById("tienda");
    MostrarProductos(productos);

    // Carrito
    const carrito = [];

    // Recuadro Buscar playlist
    const busqueda = document.getElementById("busqueda");
    
    // Boton Cancelar filtros
    const cancelar = document.getElementById("cancelar");

    // Select Filtro por Duración
    const filtxDSelect = document.getElementById("fxD");

    // Select Ordenar por...
    const ordXSelect = document.getElementById("ordenar");

/********************** Fin Variables Globales **********************/


/********************** Eventos **********************/
    // Busqueda
    busqueda.addEventListener('keyup',Buscar);

    // Cancelar
    cancelar.addEventListener('click',Cancelar);

    // Filtrar por Duración
    filtxDSelect.addEventListener('change',FiltrarxDuracion);

    // Ordenar por...
    ordXSelect.addEventListener('change',OrdenarPor);
/********************** Fin Eventos **********************/

/********************** Funciones **********************/
    // Para eliminar childs
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    // Mostrar productos
    function MostrarProductos(prod){
        let productosMostrar = prod;

        if(productosMostrar != null){
            productosMostrar.forEach(element => {

                // Item
                let item = document.createElement("div");
                item.setAttribute("class","item position-relative col-11 col-md-5 col-lg-3 mx-3 my-4 p-2 row justify-content-center align-items-center");
                // Setear id para los productos especiales
                if(element.nombre === "DALE"){
                    item.setAttribute("id","daleItem");
                }
                if(element.nombre === "IT'S BRAINY, BITCH"){
                    item.setAttribute("id","itsBBItem");
                }
                if(element.nombre === "TOGAS"){
                    item.setAttribute("id","togasItem");
                }

                    // Portada
                    let foto = document.createElement('div');
                    foto.setAttribute('class','foto d-md-flex align-items-center col-12')
                        let port = document.createElement("img");
                        port.setAttribute("src",`${element.portada}`);
                        port.setAttribute("class","img-fluid pic");
                        port.setAttribute("alt","Portada");

                        if(element.nombre === "DALE"){
                            port.setAttribute("id","dalePic");
                        }
                        if(element.nombre === "IT'S BRAINY, BITCH"){
                            port.setAttribute("id","itsBBPic");
                        }
                        if(element.nombre === "TOGAS"){
                            port.setAttribute("id","togasPic");
                        }

                        foto.appendChild(port);

                    item.appendChild(foto);

                    // Datos
                    let datos = document.createElement("div");
                    datos.setAttribute("class","data p-3 col-12 align-self-end row justify-content-end");

                        // Precio
                        let precio = document.createElement("h4");
                        precio.setAttribute("class","precio price col-12 my-3 p-0");
                        precio.textContent = `$${element.precio}`;
                        datos.appendChild(precio);

                        // Nombre
                        let nombre = document.createElement("h4");
                        nombre.setAttribute("class","data__nombre name col-12 my-2 p-0 ps-2");
                        nombre.textContent = `${element.nombre}`;
                        datos.appendChild(nombre);

                        // Formato
                        if(element.formato != "Elegí formato"){
                            // Mostrar formato
                            let format = document.createElement("h5");
                            format.setAttribute("class","data__formato format col-12 my-2 p-0 ps-2");
                            format.textContent = `${element.formato}`;
                            datos.appendChild(format);
                        } else{
                            // Elegir formato
                            let form = document.createElement("form");
                            form.setAttribute('class','col-12 my-2 p-0');
                                let select = document.createElement("select");
                                select.setAttribute("class","data__formatoSelect format form-select rounded-pill");
                                select.setAttribute("aria-label","Elegí el formato...");
                                    let opt1 = document.createElement("option");
                                    opt1.setAttribute("value","0");
                                    opt1.textContent = "Elegí el formato...";
                                    select.appendChild(opt1);

                                    let opt2 = document.createElement("option");
                                    opt2.setAttribute("value","1");
                                    opt2.textContent = "CD";
                                    select.appendChild(opt2);

                                    let opt3 = document.createElement("option");
                                    opt3.setAttribute("value","2");
                                    opt3.textContent = "CASSETTE";
                                    select.appendChild(opt3);

                                    let opt4 = document.createElement("option");
                                    opt4.setAttribute("value","3");
                                    opt4.textContent = "VINILO";
                                    select.appendChild(opt4);

                                form.appendChild(select);

                            datos.appendChild(form);
                        }

                        // Duración
                        let duracion = document.createElement("h6");
                        duracion.setAttribute("class","data__duracion time col-12 my-2 p-0 ps-2");
                        duracion.textContent = `${element.duracion}min`;
                        datos.appendChild(duracion);
                        
                        // Añadir al carrito
                        let sumarCarrito = document.createElement("button");
                        sumarCarrito.setAttribute("class","btn btnHN rounded-circle sumarCarrito me-1 mb-1");
                        sumarCarrito.innerHTML = '<i class="fas fa-cart-plus"></i>';
                        datos.appendChild(sumarCarrito);

                        // Ver lista BOTON
                        let verMas = document.createElement("div");
                        verMas.setAttribute("class","col-12 m-2 p-0 d-flex justify-content-center");

                            let btnMas = document.createElement("button");
                            btnMas.setAttribute("class","btn verMas p-2");
                            btnMas.setAttribute("type","button");
                            btnMas.setAttribute("data-bs-toggle","collapse");
                            btnMas.setAttribute("data-bs-target",`#collapse${element.id}`);
                            btnMas.setAttribute("aria-expanded","false");
                            btnMas.setAttribute("aria-controls",`collapse${element.id}`);
                            
                                let verLista = document.createElement("span");
                                verLista.textContent = `+ VER LISTA`;
                                btnMas.appendChild(verLista);
                            
                            verMas.appendChild(btnMas);

                        datos.appendChild(verMas);

                        // Escuchar BOTON (te lleva a spotify/youtube)
                        let escuchar = document.createElement("button");
                        escuchar.setAttribute("class","btn escuchar");

                            let link = document.createElement("a");
                            link.setAttribute("href",element.link);
                            link.innerHTML = '<i class="fas fa-headphones"></i> ESCUCHAR';
                            escuchar.appendChild(link);

                        datos.appendChild(escuchar);

                    item.appendChild(datos);

                    // Lista
                    let colapsa = document.createElement("div");
                    colapsa.setAttribute("class","collapse container-fluid colapsaLista position-absolute bottom-0 start-0 col-12 p-3");
                    colapsa.setAttribute("id",`collapse${element.id}`);

                        let lista = document.createElement("div");
                        lista.setAttribute("class","lista");

                            for(i=0; i < element.lista.length; i++){
                                let tema = document.createElement("p");
                                tema.setAttribute("class","lista__info text-center");
                                tema.textContent = `${element.lista[i]}`;
                                lista.appendChild(tema);
                            }

                        colapsa.appendChild(lista);

                    item.appendChild(colapsa);

                tienda.appendChild(item);
            });

            // Botones Sumar al carrito
            const sumarCarritoBotones = document.querySelectorAll('.sumarCarrito');
            // Select Formato
            const formatoSelect = document.querySelectorAll(".format");

            // Sumar al carrito
            sumarCarritoBotones.forEach((sumarCarritoBoton) => {
                sumarCarritoBoton.addEventListener('click',sumarCarritoClicked);
            });
            // Elegir Formato
            formatoSelect.forEach((elegirFormato) => {
                elegirFormato.addEventListener('change',actualizarPrecio);
            });
            
        } else{

            tienda.innerHTML = `<div class="error d-flex flex-column justify-content-center align-items-center">
                            <i class="m-5 fa-4x far fa-dizzy"></i>
                            <h2 class="m-1">Ha ocurrido un error!</h2>
                        </div>`;

        }
    }
    // Fin Mostrar productos

    // Sumar al carrito cuando hace click
    function sumarCarritoClicked(e){
        const botonSumar = e.target;
        // Item seleccionado
        const item = botonSumar.closest('.item');
        // Traer info del Item
        const itemPortada = item.querySelector('.pic').src;
        const itemNombre = item.querySelector('.name').textContent;
        const itemDuracion = Number(item.querySelector('.time').textContent.replace('min',''));
        const itemLista = item.querySelector('.list');
        // Para obtener el formato del Select o del texto (dependiendo del producto)
        const formatoTexto = item.querySelector('.format').textContent;
        if(formatoTexto != 'CD' && formatoTexto != 'CASSETTE' && formatoTexto != 'VINILO'){
            const formatoElegidoValor = item.querySelector('.format').value;
            switch (formatoElegidoValor) {
                // CD
                case "1":
                    itemFormato = "CD";
                    sumarItemAlCarrito(itemPortada,itemNombre,itemFormato,itemDuracion,itemLista);
                    break;
                // CASSETTE
                case "2":
                    itemFormato = "CASSETTE";
                    sumarItemAlCarrito(itemPortada,itemNombre,itemFormato,itemDuracion,itemLista);
                    break;
                // VINILO
                case "3":
                    itemFormato = "VINILO";
                    sumarItemAlCarrito(itemPortada,itemNombre,itemFormato,itemDuracion,itemLista);
                    break;
            
                default:
                    alert('Tenes que elegir un formato!');
                    break;
            }
        } else {
            itemFormato = item.querySelector('.format').textContent;
            sumarItemAlCarrito(itemPortada,itemNombre,itemFormato,itemDuracion,itemLista);
        }
    }
    // Fin Sumar al carrito cuando hace click

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

    // Sumar item al Carrito (en localStorage)
    function sumarItemAlCarrito(itemPortada,itemNombre,itemFormato,itemDuracion,itemLista){

        // Traer carrito del localStorage
        let dbItemsCompra = JSON.parse(localStorage.getItem("carrito"));

        // Crear el item elegido
        let itemElegido = new Playlist(itemNombre,itemFormato,itemDuracion,itemLista,itemPortada);

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
    // Fin Sumar item al Carrito (en localStorage)

    // Buscar producto
    function Buscar(){
        filtxDSelect.value = 0;
        ordXSelect.value = 0;

        // Traigo lo que hay escrito en el recuadro
        let busqueda = document.getElementById("busqueda").value.toUpperCase();

        // Traigo del DOM los h4 con los nombres de cada Playlist
        let nombresProd = document.getElementsByClassName("name");

        for(i = 0; i < nombresProd.length; i++){

            let nombre = nombresProd[i].textContent;

            if(nombre.toUpperCase().indexOf(busqueda) > -1){
                let itemM = nombresProd[i].closest('.item');
                itemM.setAttribute("class","item position-relative col-11 col-md-5 col-lg-3 mx-3 my-4 p-2 row justify-content-center align-items-center");

            } else{
                let itemO = nombresProd[i].closest('.item');
                itemO.setAttribute('class','item d-none');
            }
        }
    }

    // Cancelar (mostrar todos los productos)
    function Cancelar(){

        busqueda.value = '';
        Buscar();

        filtxDSelect.value = 0;
        FiltrarxDuracion();

        ordXSelect.value = 0;
        OrdenarPor();

    }

    // Filtro por duración
    function FiltrarxDuracion(){
        busqueda.value = '';
        ordXSelect.value = 0;

        // Opcion seleccionada
        let activo = document.getElementById("fxD").value;

        let duracionProd = document.getElementsByClassName("time");

        switch (activo) {
            // Shortplay
            case "1":

                for(i = 0; i < duracionProd.length; i++){

                    let duracion = Number(duracionProd[i].textContent.replace('min',''));

                    if(duracion < 25){
                        let itemM = duracionProd[i].closest('.item');
                        itemM.setAttribute("class","item position-relative col-11 col-md-5 col-lg-3 mx-3 my-4 p-2 row justify-content-center align-items-center");

                    } else{
                        let itemO = duracionProd[i].closest('.item');
                        itemO.setAttribute('class','item d-none');
                    }
                }
                break;
        
            // Longplay
            case "2":

                for(i = 0; i < duracionProd.length; i++){

                    let duracion = Number(duracionProd[i].textContent.replace('min',''));

                    if(duracion > 25 && duracion < 50){
                        let itemM = duracionProd[i].closest('.item');
                        itemM.setAttribute("class","item position-relative col-11 col-md-5 col-lg-3 mx-3 my-4 p-2 row justify-content-center align-items-center");

                    } else{
                        let itemO = duracionProd[i].closest('.item');
                        itemO.setAttribute('class','item d-none');
                    }
                }
                break;

            // Extendedplay
            case "3":

                for(i = 0; i < duracionProd.length; i++){

                    let duracion = Number(duracionProd[i].textContent.replace('min',''));

                    if(duracion > 50){
                        let itemM = duracionProd[i].closest('.item');
                        itemM.setAttribute("class","item position-relative col-11 col-md-5 col-lg-3 mx-3 my-4 p-2 row justify-content-center align-items-center");

                    } else{
                        let itemO = duracionProd[i].closest('.item');
                        itemO.setAttribute('class','item d-none');
                    }
                }
                break;
            
            default:

                removeAllChildNodes(tienda);
                // Traer Productos del Local Storage
                const itemsSinFiltro = JSON.parse(localStorage.getItem("productos"));
                MostrarProductos(itemsSinFiltro);
                break;
        }
    }
    // Fin Filtro por duración

    // Ordenar por...
    function OrdenarPor(){
        busqueda.value = '';
        filtxDSelect.value = 0;

        removeAllChildNodes(tienda);
        let activo = document.getElementById("ordenar").value;
        let ordenado = [];

        switch(activo){
            // Por nombre
                /* A - Z */
                case "1":
                    let ordAZ = productos.sort((a,b) => (a.nombre.toLowerCase() > b.nombre.toLowerCase())  ? 1 : -1);
                    for(const pls of ordAZ){
                        ordenado.push(pls);
                    }
                    MostrarProductos(ordenado);
                    break;

                /* Z - A */
                case "2":
                    let ordZA = productos.sort ((a, b) => (a.nombre.toLowerCase() > b.nombre.toLowerCase())  ? -1 : 1);
                    for(const pls of ordZA){
                        ordenado.push(pls);
                    }
                    MostrarProductos(ordenado);
                    break;

            // Por duracion
                /* Menor a mayor */
                case "3":
                    let minD = productos.sort ((a, b) => a.duracion > b.duracion ? 1 : -1);
                    for(const pls of minD){
                        ordenado.push(pls);
                    }
                    MostrarProductos(ordenado);
                    break;

                /* Mayor a menor */
                case "4":
                    let maxD = productos.sort ((a, b) => a.duracion > b.duracion ? -1 : 1);
                    for(const pls of maxD){
                        ordenado.push(pls);
                    }
                    MostrarProductos(ordenado);
                    break;

                default:
                    // Traer Productos del Local Storage
                    const itemsDesorden = JSON.parse(localStorage.getItem("productos"));
                    MostrarProductos(itemsDesorden);
                    break;
        }
    }
    // Fin Ordenar por...

    // Actualizar Precio por cambio en Formato
    function actualizarPrecio(e){
        const selector = e.target;
        const selectorValor = e.target.value;
        const item = selector.closest('.item');

        const itemDuracion = Number(item.querySelector('.time').textContent.replace('min',''));
        let precio = itemDuracion * costoXmin;
        switch (selectorValor) {
            case "1":
                precio += cd;
                break;
        
            case "2":
                precio += cassette;
                break;
        
            case "3":
                precio += vinilo;
                break;
            
            default:
                precio = '  ';
                break;
        }

        const itemPrecio = item.querySelector('.price');
        itemPrecio.innerHTML = `$${precio}`;
    }
    // Fin Actualizar Precio por cambio en Formato
/********************** Fin Funciones **********************/