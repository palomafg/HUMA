const URLJSON = "../data/nuestrasPlaylists.json";

$.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
            let nuestrasPlaylists = respuesta;
            console.log(nuestrasPlaylists);
        }
});