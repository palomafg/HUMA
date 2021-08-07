/*Variables Globales */
const productos = [];
localStorage.setItem("productos", JSON.stringify(productos));

// Costo por formato
const cd = Number(1000);
const cassette = Number(2300);
const vinilo = Number(3700);

// Costo por minuto
const costoXmin = Number(5);

/*Clases*/
class Playlist{
    constructor(nombre,formato,duracion,lista,portada){
        this.nombre = nombre;
        this.formato = formato;
        this.duracion = duracion;
        this.lista = lista;
        this.portada = portada;

        // Calculo precio
        let cxd = duracion * costoXmin;
        let precio = cxd;
        switch (formato.toUpperCase()) {
        
            case "CD":
                precio += cd;
                break;
        
            case "CASSETTE":
                precio += cassette;
                break;
        
            case "VINILO":
                precio += vinilo;
                break;
            
            default:
                precio = '  ';
                break;
        }
        this.precio = precio;
    }
}
/*Fin Clases*/

/*Funciones*/
function AgregarProducto(playlist){

    productos.push(playlist);
    localStorage.setItem("productos", JSON.stringify(productos));
    
}

/*Fin Funciones*/

/*Nuestras Producciones*/
// DALE
const listaDALE = [ ["Go","The Chemical Brothers / 4:21"],
                    ["Under the influence","The Chemical Brothers / 4:16"],
                    ["Extreme Ways","Moby / 3:57"],
                    ["Born Splippy","Underwold / 7:36"],
                    ["Is it always binary","Soulwax / 3:29"],
                    ["I see you baby","Groove Armada, Gramma Funk / 4:04"],
                    ["Made in China","Higher Brothers, DJ Snake / 2:51"],
                    ["You came to party","Meter Mobb, Too $hort / 3:46"],
                    ["Cop Drama","Clearside / 2:51"],
                    ["BANDZ","BIG MAKK / 3:44"],
                    ["Quema","Sotomayor / 3:26"],
                    ["We Don't Wanna Dance","Jane. / 3:30"]
]
const produccionDALE = new Playlist("DALE","CASSETTE",48,listaDALE,'https://res.cloudinary.com/dd2nenune/image/upload/v1626027915/Portadas/dale_qbhopk.png');
AgregarProducto(produccionDALE);

// Its Brainy, bitch
const listaItsBB = [ ["A Brain in a Bottle","Thom Yorke / 4:40"],
                    ["Insane in the Brain","Black Sunday / 3:28"],
                    ["Brain Damage","Pink Floyd / 3:46"],
                    ["Banana Brain","Die Antwoord / 4:48"],
                    ["Porcelain","Moby / 3:58"],
                    ["Teardrop","Massive Attack / 5:30"],
                    ["Brian Cycles","Radio Moscow / 3:23"],
                    ["Default","Atom For Peace / 5:15"],
                    ["Brain Washing","Mike Maldonado / 2:37"],
                    ["Fugu Kiss","Rone / 4:46"]
]
const produccionItsBB = new Playlist("IT'S BRAINY, BITCH","CD",38,listaItsBB,'https://res.cloudinary.com/dd2nenune/image/upload/v1626027915/Portadas/itsBB_v8jcd8.png');
AgregarProducto(produccionItsBB);

// TOGAS
const listaTOGAS = [ ["Smelly Cat","Friends / 1:03"],
                    ["Hey gata fina","Srita Bimbo / 2:13"],
                    ["Rock del gato","Ratones Paranoicos / 3:01"],
                    ["Born Splippy","Underwold / 7:36"],
                    ["Gatos los tres","Miau Trío, Irribaren / 2:32"],
                    ["Cool Cat","Queen / 3:28"]
]
const produccionTOGAS = new Playlist("TOGAS","VINILO",13,listaTOGAS,'https://res.cloudinary.com/dd2nenune/image/upload/v1626027914/Portadas/togas_q1wmjw.png');
AgregarProducto(produccionTOGAS);
/*Fin Nuestras Producciones*/

/*Playlists*/
//Tranki
const listaTranki = [ ["Careless Love","Etta Baker / 3:26"],
                    ["San Tropez","Pink Floyd / 3:43"],
                    ["Crazy Mama","J.J. Cale / 2:23"],
                    ["Dark Star","Grateful Dead / 2:43"],
                    ["Passionfruit","Drake / 4:59"],
                    ["Wasteland","Tierra Whack / 3:03"],
                    ["Bad Dream","Syd / 4:55"],
                    ["Only You","Steve Monite / 6:21"],
                    ["This must be the place","Talking Heads / 4:56"],
                    ["Strangers","Portishead / 3:58"],
                    ["Dreams","Fleetwood Mac / 4:18"],
                    ["Fumemos un cigarrillo","Piero / 2:51"],
                    ["Halo Lunar","Luis Alberto Spinetta / 5:34"]
]
const playlistTranki = new Playlist("TRANKI","Elegí formato",56,listaTranki,'https://res.cloudinary.com/dd2nenune/image/upload/v1626026862/Portadas/tranki_k7sfpv.jpg');
AgregarProducto(playlistTranki);

//WW
const listaWW = [   ["Self","Noname / 1:35"],
                    ["CLONES","Tierra Whack / 2:51"],
                    ["Venom","Little Simz / 2:35"],
                    ["Tomboy","Princess Nokia / 3:37"],
                    ["Give her some money","Maliibu Miitch / 2:51"],
                    ["Take your man","Mahogany Lox / 1:57"],
                    ["Doo Wop","Ms. Lauryn Hill / 5:20"],
                    ["Over","Syd, 6LACK / 3:11"],
                    ["Sientelo","Anier / 3:53"],
                    ["MOOOO!","Doja Cat / 4:45"],
                    ["Waste of Time","Snow Tha Product / 3:21"],
                    ["Daisy","Ashnikko / 2:27"],
                    ["My love for you","ESG / 2:55"],
                    ["Directa","MUGRE / 3:47"],
]
const playlistWW = new Playlist("WW","Elegí formato",49,listaWW,'https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/WW_ka3mmr.jpg');
AgregarProducto(playlistWW);

// Funkeala
const listaFunkeala = [ ["Justice","The Philharmonik / 4:44"],
                        ["Work Hard, REST","Deep Aztec / 3:21"],
                        ["Disco Dancer","Kiki Gyan / 6:57"],
                        ["Sexy M.F.","Prince / 5:26"],
                        ["Turn On, Tune In, Cop Out","Freak Power / 4:24"],
                        ["Virtual Insanity","Jamiroquai / 5:41"],
                        ["If you have to ask","Red Hot Chili Peppers / 3:37"],
                        ["We can funk","George Clinton, Prince / 5:28"],
                        ["My name is Prince","Prince / 6:38"],
                        ["Ring my bell","Anita Ward / 3:32"],
                        ["Abarajame","Illya Kuryaki & The Valderramas / 4:09"],
                        ["I'd rather be with you","Bootsy Collins / 4:57"],
                        ["P-Funk","Parliament / 7:41"],
                        ["Come Down","Anderson .Paak / 2:50"],
                        ["Beam Me Up","Midnight Magic / 5:22"],
                        ["Sabrosa","Beastie Boys / 3:33"],
                        ["Karmacoma","Massive Attack / 5:16"],
                        ["Superstition","Stevie Wonder / 4:26"],
                        ["My first car","Vulfpeck / 4:31"]
                    
]
const playlistFunkeala = new Playlist("FUNKEALA","Elegí formato",96,listaFunkeala,'https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/funkeala_kr3z75.jpg');
AgregarProducto(playlistFunkeala);

// Cafecito
const listaCafecito = [ ["Evil Ways","Willie Bobo / 2:39"],
                        ["I'd Rather Go Blind","Etta James / 2:34"],
                        ["I Though About You","Plays For Lovers / 5:20"],
                        ["Liquid Spirit","Gregory Porter / 3:36"],
                        ["Manhattan","Ella Fitzgerald / 2:51"],
                        ["Old Devil Moon","Chet Baker / 2:58"],
                        ["Speak Low","Billie Holiday / 4:29"],
                        ["Para machuchar meu corazao","Stan Getz, João Gilberto / 5:07"],
                        ["Go Down Moses","Louis Armstrong / 3:41"],
                        ["I get along without you very well","Chet Baker / 3:00"],
                        ["In a sentimental mood","Duke Ellington / 4:18"]

]
const playlistCafecito = new Playlist("CAFECITO","Elegí formato",42,listaCafecito,'https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/cafecito_piii3i.jpg');
AgregarProducto(playlistCafecito);

// Luna
const listaLuna = [     ["Fly me to the moon","Frank Sinatra / 2:27"],
                        ["Shoot the moon","Norah Jones / 3:57"],
                        ["Money","Pink Floyd / 6:23"],
                        ["Walking on the moon","The Police / 5:01"],
                        ["Life is simple in the moon","The Strokes / 4:15"]
                    
]
const playlistLuna = new Playlist("LUNA","Elegí formato",22,listaLuna,'https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/luna_ijeqnw.jpg');
AgregarProducto(playlistLuna);

// Me pongo trapera
const listaTrapera = [  ["OUKE","CA7RIEL, Paco Amoroso / 2:58"],
                        ["CANGURO","WOS / 2:56"],
                        ["Rain","Trueno / 3:10"],
                        ["Igual te quiero","Kiddo Toto, Malena Villa / 3:03"],
                        ["Cono hielo","CA7RIEL, Paco Amoroso / 2:24"],
                        ["Loca","KHEA, Cazzu / 4:06"],
                        ["Mucha Data","Cazzu / 2:34"],
                        ["Oasis","Delfina Dib / 3:09"],
                        ["Amor Amor","Clara Cava / 4:16"]
                    
]
const playlistTrapera = new Playlist("ME PONGO TRAPERA","Elegí formato",28,listaTrapera,'https://res.cloudinary.com/dd2nenune/image/upload/v1626026862/Portadas/mePongoTrapera_t7nfng.jpg');
AgregarProducto(playlistTrapera);

// Mudcito
const listaMudcito = [  ["Is that enough","Martin Gaye / 7:48"],
                        ["Day Dreaming","Aretha Franklin / 4:00"],
                        ["Soon never comes","Stimulator Jones / 4:08"],
                        ["Sex Jam","Woo Park / 8:35"],
                        ["Fashion Drunk","Otis Stacks / 3:26"],
                        ["Withorwithout","Parcels / 3:25"],
                        ["The Look","Metronomy / 4:38"],
                        ["Ghost Ship","Blur / 4:59"],
                        ["No Romance","Tirzah / 3:57"],
                        ["Moving Men","Myd, Mac DeMarco / 2:47"]
                    
]
const playlistMudcito = new Playlist("MUDCITO","Elegí formato",47,listaMudcito,'https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/mudcito_ptgip3.jpg');
AgregarProducto(playlistMudcito);

// Voy
const listaVoy = [      ["Perdida","Biig Piig / 3:01"],
                        ["House of Cards","Radiohead / 5:28"],
                        ["Pink Elephant","Chicano Batman / 3:12"],
                        ["Policy of Truth","Depeche Mode / 4:54"],
                        ["Just the two of us","Kauai45, Sweet Cocoa / 1:57"],
                        ["Daffodils","Mark Ronson, Kevin Parker / 4:58"],
                        ["Promises, promises","Naked Eyes / 3:51"]                    
]
const playlistVoy= new Playlist("VOY","Elegí formato",47,listaVoy,'https://res.cloudinary.com/dd2nenune/image/upload/v1626496809/Portadas/voy_qm8bsy.jpg');
AgregarProducto(playlistVoy);

/*Fin Playlists*/