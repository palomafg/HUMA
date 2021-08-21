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
    constructor(nombre,formato,duracion,lista,link,portada){
        this.id = Math.random().toString(36).substr(2, 9);
        this.nombre = nombre;
        this.formato = formato;
        this.duracion = duracion;
        this.lista = lista;
        this.portada = portada;
        this.link = link;

        // Calculo precio en base al formato
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
const listaDALE = [ ["Go / The Chemical Brothers / 4:21"],
                    ["Under the influence / The Chemical Brothers / 4:16"],
                    ["Extreme Ways / Moby / 3:57"],
                    ["Born Splippy / Underwold / 7:36"],
                    ["Is it always binary / Soulwax / 3:29"],
                    ["I see you baby / Groove Armada, Gramma Funk / 4:04"],
                    ["Made in China / Higher Brothers, DJ Snake / 2:51"],
                    ["You came to party / Meter Mobb, Too $hort / 3:46"],
                    ["Cop Drama / Clearside / 2:51"],
                    ["BANDZ / BIG MAKK / 3:44"],
                    ["Quema / Sotomayor / 3:26"],
                    ["We Don't Wanna Dance / Jane. / 3:30"]
]
const produccionDALE = new Playlist("DALE","CASSETTE",48,listaDALE,'https://open.spotify.com/playlist/5TVlbMqlm1zdlLk9Ts1tr2?si=c52abc14860343ef','https://res.cloudinary.com/dd2nenune/image/upload/v1626027915/Portadas/dale_qbhopk.png');
AgregarProducto(produccionDALE);

// Its Brainy, bitch
const listaItsBB = [ ["A Brain in a Bottle / Thom Yorke / 4:40"],
                    ["Insane in the Brain / Black Sunday / 3:28"],
                    ["Brain Damage / Pink Floyd / 3:46"],
                    ["Banana Brain / Die Antwoord / 4:48"],
                    ["Porcelain / Moby / 3:58"],
                    ["Teardrop / Massive Attack / 5:30"],
                    ["Brian Cycles / Radio Moscow / 3:23"],
                    ["Default / Atom For Peace / 5:15"],
                    ["Brain Washing / Mike Maldonado / 2:37"],
                    ["Fugu Kiss / Rone / 4:46"]
]
const produccionItsBB = new Playlist("IT'S BRAINY, BITCH","CD",38,listaItsBB,'https://open.spotify.com/playlist/1sn1JrByQYmJwLLk3AIevn?si=560e960877984094','https://res.cloudinary.com/dd2nenune/image/upload/v1626027915/Portadas/itsBB_v8jcd8.png');
AgregarProducto(produccionItsBB);

// TOGAS
const listaTOGAS = [ ["Smelly Cat / Friends / 1:03"],
                    ["Hey gata fina / Srita Bimbo / 2:13"],
                    ["Rock del gato / Ratones Paranoicos / 3:01"],
                    ["Born Splippy / Underwold / 7:36"],
                    ["Gatos los tres / Miau Trío, Irribaren / 2:32"],
                    ["Cool Cat / Queen / 3:28"]
]
const produccionTOGAS = new Playlist("TOGAS","VINILO",13,listaTOGAS,'https://open.spotify.com/playlist/3bkP7PTpRQZLDwEIycgGDV?si=3e0be535f0364518','https://res.cloudinary.com/dd2nenune/image/upload/v1626027914/Portadas/togas_q1wmjw.png');
AgregarProducto(produccionTOGAS);
/*Fin Nuestras Producciones*/

/*Playlists*/
//Tranki
const listaTranki = [ ["Careless Love / Etta Baker / 3:26"],
                    ["San Tropez / Pink Floyd / 3:43"],
                    ["Crazy Mama / J.J. Cale / 2:23"],
                    ["Dark Star / Grateful Dead / 2:43"],
                    ["Passionfruit / Drake / 4:59"],
                    ["Wasteland / Tierra Whack / 3:03"],
                    ["Bad Dream / Syd / 4:55"],
                    ["Only You / Steve Monite / 6:21"],
                    ["This must be the place / Talking Heads / 4:56"],
                    ["Strangers / Portishead / 3:58"],
                    ["Dreams / Fleetwood Mac / 4:18"],
                    ["Fumemos un cigarrillo / Piero / 2:51"],
                    ["Halo Lunar / Luis Alberto Spinetta / 5:34"]
]
const playlistTranki = new Playlist("TRANKI","Elegí formato",56,listaTranki,'https://open.spotify.com/playlist/0D32V3gzmDyXFWlrQad1Pd?si=49518f9e58f546f5','https://res.cloudinary.com/dd2nenune/image/upload/v1626026862/Portadas/tranki_k7sfpv.jpg');
AgregarProducto(playlistTranki);

//WW
const listaWW = [   ["Self / Noname / 1:35"],
                    ["CLONES / Tierra Whack / 2:51"],
                    ["Venom / Little Simz / 2:35"],
                    ["Tomboy / Princess Nokia / 3:37"],
                    ["Give her some money / Maliibu Miitch / 2:51"],
                    ["Take your man / Mahogany Lox / 1:57"],
                    ["Doo Wop / Ms. Lauryn Hill / 5:20"],
                    ["Over / Syd, 6LACK / 3:11"],
                    ["Sientelo / Anier / 3:53"],
                    ["MOOOO! / Doja Cat / 4:45"],
                    ["Waste of Time / Snow Tha Product / 3:21"],
                    ["Daisy / Ashnikko / 2:27"],
                    ["My love for you / ESG / 2:55"],
                    ["Directa / MUGRE / 3:47"],
]
const playlistWW = new Playlist("WW","Elegí formato",49,listaWW,'https://open.spotify.com/playlist/3QKYoPKyYazjvb5iEheIJr?si=ff5c9c3720f04b3e','https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/WW_ka3mmr.jpg');
AgregarProducto(playlistWW);

// Funkeala
const listaFunkeala = [ ["Justice / The Philharmonik / 4:44"],
                        ["Work Hard, REST / Deep Aztec / 3:21"],
                        ["Disco Dancer / Kiki Gyan / 6:57"],
                        ["Sexy M.F. / Prince / 5:26"],
                        ["Turn On, Tune In, Cop Out / Freak Power / 4:24"],
                        ["Virtual Insanity / Jamiroquai / 5:41"],
                        ["We can funk / George Clinton, Prince / 5:28"],
                        ["My name is Prince / Prince / 6:38"],
                        ["Ring my bell / Anita Ward / 3:32"],
                        ["I'd rather be with you / Bootsy Collins / 4:57"],
                        ["P-Funk / Parliament / 7:41"],
                        ["Come Down / Anderson .Paak / 2:50"],
                        ["Beam Me Up / Midnight Magic / 5:22"],
                        ["Sabrosa / Beastie Boys / 3:33"],
                        ["Karmacoma / Massive Attack / 5:16"],
                        ["Superstition / Stevie Wonder / 4:26"],
                        ["My first car / Vulfpeck / 4:31"]
                    
]
const playlistFunkeala = new Playlist("FUNKEALA","Elegí formato",88,listaFunkeala,'https://open.spotify.com/playlist/3lKZ1gObcFGqpZGfhsIfqu?si=2febace090b84828','https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/funkeala_kr3z75.jpg');
AgregarProducto(playlistFunkeala);

// Cafecito
const listaCafecito = [ ["Evil Ways / Willie Bobo / 2:39"],
                        ["I'd Rather Go Blind / Etta James / 2:34"],
                        ["I Though About You / Plays For Lovers / 5:20"],
                        ["Liquid Spirit / Gregory Porter / 3:36"],
                        ["Manhattan / Ella Fitzgerald / 2:51"],
                        ["Old Devil Moon / Chet Baker / 2:58"],
                        ["Speak Low / Billie Holiday / 4:29"],
                        ["Para machuchar meu corazao / Stan Getz, João Gilberto / 5:07"],
                        ["Go Down Moses / Louis Armstrong / 3:41"],
                        ["I get along without you very well / Chet Baker / 3:00"],
                        ["In a sentimental mood / Duke Ellington / 4:18"]

]
const playlistCafecito = new Playlist("CAFECITO","Elegí formato",42,listaCafecito,'https://open.spotify.com/playlist/1k2hR1CxtUwMxoS6baaTHl?si=bb6e45cb8a0d4ef4','https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/cafecito_piii3i.jpg');
AgregarProducto(playlistCafecito);

// Luna
const listaLuna = [     ["Fly me to the moon / Frank Sinatra / 2:27"],
                        ["Shoot the moon / Norah Jones / 3:57"],
                        ["Money / Pink Floyd / 6:23"],
                        ["Walking on the moon / The Police / 5:01"],
                        ["Life is simple in the moon / The Strokes / 4:15"]
                    
]
const playlistLuna = new Playlist("LUNA","Elegí formato",22,listaLuna,'https://open.spotify.com/playlist/3nhOacE24pmtoQ0ieiJtdl?si=123e466ddf4c4e9b','https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/luna_ijeqnw.jpg');
AgregarProducto(playlistLuna);

// Me pongo trapera
const listaTrapera = [  ["OUKE / CA7RIEL, Paco Amoroso / 2:58"],
                        ["CANGURO / WOS / 2:56"],
                        ["Rain / Trueno / 3:10"],
                        ["Igual te quiero / Kiddo Toto, Malena Villa / 3:03"],
                        ["Cono hielo / CA7RIEL, Paco Amoroso / 2:24"],
                        ["Loca / KHEA, Cazzu / 4:06"],
                        ["Mucha Data / Cazzu / 2:34"],
                        ["Oasis / Delfina Dib / 3:09"],
                        ["Amor Amor / Clara Cava / 4:16"]
                    
]
const playlistTrapera = new Playlist("ME PONGO TRAPERA","Elegí formato",28,listaTrapera,'https://open.spotify.com/playlist/7vVrSfHiSnR7Xgz9wBgAP2?si=1b2621f2a8304ce7','https://res.cloudinary.com/dd2nenune/image/upload/v1626026862/Portadas/mePongoTrapera_t7nfng.jpg');
AgregarProducto(playlistTrapera);

// Mudcito
const listaMudcito = [  ["Is that enough / Martin Gaye / 7:48"],
                        ["Day Dreaming / Aretha Franklin / 4:00"],
                        ["Soon never comes / Stimulator Jones / 4:08"],
                        ["Sex Jam / Woo Park / 8:35"],
                        ["Fashion Drunk / Otis Stacks / 3:26"],
                        ["Withorwithout / Parcels / 3:25"],
                        ["The Look / Metronomy / 4:38"],
                        ["Ghost Ship / Blur / 4:59"],
                        ["No Romance / Tirzah / 3:57"],
                        ["Moving Men / Myd, Mac DeMarco / 2:47"]
                    
]
const playlistMudcito = new Playlist("MUDCITO","Elegí formato",47,listaMudcito,'https://open.spotify.com/playlist/2A4W5o8LBgFoUPnoBt7GjZ?si=b90f13a2534a4954','https://res.cloudinary.com/dd2nenune/image/upload/v1626026861/Portadas/mudcito_ptgip3.jpg');
AgregarProducto(playlistMudcito);

// Voy
const listaVoy = [      ["Perdida / Biig Piig / 3:01"],
                        ["House of Cards / Radiohead / 5:28"],
                        ["Pink Elephant / Chicano Batman / 3:12"],
                        ["Policy of Truth / Depeche Mode / 4:54"],
                        ["Just the two of us / Kauai45, Sweet Cocoa / 1:57"],
                        ["Daffodils / Mark Ronson, Kevin Parker / 4:58"],
                        ["Promises, promises / Naked Eyes / 3:51"]                    
]
const playlistVoy= new Playlist("VOY","Elegí formato",47,listaVoy,'https://open.spotify.com/playlist/6sayjj8oSt4tw8iHoS3RFh?si=571c4890915849e3','https://res.cloudinary.com/dd2nenune/image/upload/v1626496809/Portadas/voy_qm8bsy.jpg');
AgregarProducto(playlistVoy);

// Zalpikada
const listaZalpikada = [    ["Naptime / Mark Lettieri / 4:18"],
                            ["Cory Wong / Vulfpeck / 4:06"],
                            ["Delpo / Javier Malosetti / 8:11"],
                            ["Disco Yes / Tom Misch, Poppy Ajudha / 4:40"],
                            ["Jax / Cory Wong / 4:12"],
                            ["Sugah Daddy / D'Angelo / 5:02"],
                            ["DX7 / Dabeull, Holybrune / 4:04"],
                            ["Polyesterday / GusGus / 4:52"],
                            ["Hey Arnold Theme / Kidstime Party Band / 0:52"],
                            ["Trade It All / Cory Henry / 6:50"],
                            ["Sham Time / Medeski Scofield Martin & Wood / 5:39"],
                            ["Work It Out / Cory Wong, Antwaun Stanley / 5:39"],
                            ["Feed The Fire / SG Lewis, Lucky Daye / 4:05"]                    
]
const playlistZalpikada= new Playlist("ZALPIKADA","Elegí formato",63,listaZalpikada,'https://open.spotify.com/playlist/26vejBF6C7Ri59OB5ToPKT?si=39ec737246dd4149','https://res.cloudinary.com/dd2nenune/image/upload/v1629132973/Portadas/zalpikada_okvzfj.jpg');
AgregarProducto(playlistZalpikada);

// Sometimes
const listaSometimes = [    ["Nicolino / Kjjjjjjjjj / 5:13"],
                            ["Peace / Chon / 3:32"],
                            ["Sports Between Trenches / Murphy Radio / 3:55"],
                            ["Breathe / Intervals / 1:56"],
                            ["Another Year / Animals As Leaders / 3:50"],
                            ["Bubble Dream / Chon / 2:52"],
                            ["Paper Moon / Plini / 8:32"],
                            ["Elm / Clever Girl / 5:28"],
                            ["Emo / Malviaje / 2:38"]                    
]
const playlistSometimes = new Playlist("SOMETIMES","Elegí formato",38,listaSometimes,'https://open.spotify.com/playlist/5txB7ANbs61IycwwfUniYP?si=0fe726eebd1a4239','https://res.cloudinary.com/dd2nenune/image/upload/v1629133606/Portadas/sometimes_vbuyne.jpg');
AgregarProducto(playlistSometimes);

// Caminar y Limpiar
const listaCaminarLimpiar = [   ["23 / Maluma / 3:40"],
                                ["Killa / Cazzu / 3:33"],
                                ["Bodak Yellow / Cardi B / 3:43"],
                                ["Believe / Cher / 3:59"],
                                ["YMCA / Village People / 3:22"],
                                ["Gloria / Laura Branigan / 4:55"],
                                ["Karma Chameleon / Culture Club / 4:01"],
                                ["Cachita / Ricardo Montaner / 5:39"],
                                ["Suave / Luis Miguel / 4:49"],
                                ["No Podras / Cristian / 4:00"],
                                ["Ahora Te Puedes Marchar / Luis Miguel / 3:11"],
                                ["Yo no sé mañana / Luis Enrique / 4:19"],
                                ["Cuando Calienta El Sol / Luis Miguel / 3:14"],
                                ["La Quiero A Morir / DLG / 5:02"],
                                ["Footloose / Kenny Loggins / 3:46"],
                                ["Wake Me Up Before You Go-Go / Wham! / 3:51"],
                                ["Let's Twist Again / Chubby Checker / 2:17"],
                                ["Stayin Alive / Bee Gees / 4:45"],
                                ["Take On Me / a-ha / 3:45"],
                                ["I'm Coming Out / Diana Ross / 5:20"],
                                ["Heart Of Glass / Blondie / 4:35"],
                                ["California Dreamin' / The Mamas & The Papas / 2:42"]
]
const playlistCaminarLimpiar = new Playlist("CAMINAR Y LIMPIAR","Elegí formato",86,listaCaminarLimpiar,'https://open.spotify.com/playlist/35pg055vuVme6b7InOCmvY?si=627c9dcc37a24f67','https://res.cloudinary.com/dd2nenune/image/upload/v1629134762/Portadas/caminarLimpiar_ftr79p.jpg');
AgregarProducto(playlistCaminarLimpiar);

// Fiestaposta
const listaFiestaposta = [      ["Fist of the Lion / Shaolin Temple Defenders / 3:10"],
                                ["Please Stay / Milk Flud / 2:56"],
                                ["Oh, Loretta! / Sex on Toast / 4:29"],
                                ["Jungle Boogie / Kool & The Gang / 3:06"],
                                ["I Don't Know / Mokaad / 6:05"],
                                ["Have Some Love / Childish Gambino / 3:44"]
]
const playlistFiestaposta = new Playlist("FIESTAPOSTA","Elegí formato",23,listaFiestaposta,'https://open.spotify.com/playlist/2wrBf5AQ2hjmnOWhLkinSo?si=0b6348c6b7e4411d','https://res.cloudinary.com/dd2nenune/image/upload/v1629135422/Portadas/fiestaposta_zgxgwy.jpg');
AgregarProducto(playlistFiestaposta);

// Viejx Trolx
const listaViejxTrolx = [       ["Twist of Fate / Olivia Newton-John / 3:37"],
                                ["Modern Love / David Bowie / 4:48"],
                                ["Lay All Your Love On Me / ABBA / 4:34"],
                                ["Believe / Cher / 3:59"],
                                ["Girls Just Want to Have Fun / Cyndi Lauper / 3:58"],
                                ["Never Gonna Give You Up / Rick Astley / 3:33"],
                                ["Cloudbusting / Kate Bush / 5:10"],
                                ["Like a Prayer / Madonna / 5:42"],
                                ["I Don't Feel Like Dancin' / Scissor Sisters / 4:48"],
                                ["Can't Get You out of My Head / Kylie Minogue / 3:50"],
                                ["Hungry Like the Wolf / Duran Duran / 3:40"],
                                ["I'm Every Woman / Whitney Houston / 4:45"],
                                ["Wake Me Up Before You Go-Go / Wham! / 3:51"],
                                ["I'm Coming Out / Diana Ross / 5:25"],
                                ["Holding Out for a Hero / Bonnie Tyler / 5:48"]
]
const playlistViejxTrolx = new Playlist("VIEJX TROLX","Elegí formato",70,listaViejxTrolx,'https://open.spotify.com/playlist/5l98SYtGHtVpqupSwmb26G?si=8ba09e994f1b41da','https://res.cloudinary.com/dd2nenune/image/upload/v1629135838/Portadas/viejxTrolx_ivcxyd.jpg');
AgregarProducto(playlistViejxTrolx);

// dsA
const listaDSA = [      ["Sound Tracker / Gamelan / 8:46"],
                        ["Que mañana rara / Trio Fontova / 4:35"],
                        ["Floating / Julee Cruise / 4:55"],
                        ["Broken Music Composition / Milan Knizak / 3:29"],
                        ["etude aux chemins de fer / Pierre Schaeffer / 2:54"],
                        ["Violencia / La polla records / 2:01"]
]
const playlistDSA = new Playlist("DSA","Elegí formato",26,listaDSA,'https://www.youtube.com/playlist?list=PL4GDhljnEzVG52AjcZgu815jcalbP3PL1','https://res.cloudinary.com/dd2nenune/image/upload/v1629136997/Portadas/dsa_iyirb0.jpg');
AgregarProducto(playlistDSA);

// Lo que sea
const listaLQS = [      ["Tie Your Mother Down / Queen / 4:48"],
                        ["Basket Case / Green Day / 3:13"],
                        ["ALMA DINAMITA / WOS / 2:54"],
                        ["Instant Crush / Daft Punk, Julian Casablancas / 5:40"],
                        ["Polvo / CA7RIEL / 3:43"],
                        ["Fatal / Paco Amoroso / 2:34"],
                        ["Chica del Verano / Isla de Caras, Clara Clava / 3:42"],
                        ["BUENOS AIRES / Nathy Peluso / 4:10"],
                        ["A mí / Rels B / 3:54"],
                        ["La Declaración / El Zar / 4:18"],
                        ["Sin Señal / Bandalos Chinos / 4:43"],
                        ["There Is a Light That Never Goes Out / The Smiths / 4:05"],
                        ["Love My Way / The Psychedelic Furs / 3:32"]
]
const playlistLQS = new Playlist("LO QUE SEA","Elegí formato",53,listaLQS,'https://www.youtube.com/playlist?list=PLNqA_AZ3KSJgFTYBslzwN2Eim62D1-ndt','https://res.cloudinary.com/dd2nenune/image/upload/v1629500615/Portadas/loQueSea_we3tbl.jpg');
AgregarProducto(playlistLQS);

// Cumbiambas
const listaCumbiambas = [   ["El Pescador / Totó La Momposina / 4:07"],
                            ["Cumbia del Pueblo / Gildardo Montoya / 2:52"],
                            ["Fuego De Cumbia / Los Gaiteros de San Jacinto / 5:26"],
                            ["Cumbia Campesina / Calixto Ochoa, Los Corraleros De Majagual / 3:00"],
                            ["Esperando a Patricia / Plutarco Urrutia / 5:22"],
                            ["Que Se Quema el Monte / Etelvina Maldonado / 3:47"],
                            ["Marbella / Pedro Ruiz / 2:47"]
]
const playlistCumbiambas = new Playlist("CUMBIAMBAS","Elegí formato",27,listaCumbiambas,'https://open.spotify.com/playlist/7Kf0J4H4HMMbwdcAiNqfR6?si=305f11d5d8ff4dff','https://res.cloudinary.com/dd2nenune/image/upload/v1629501718/Portadas/cumbiambas_cc5at6.jpg');
AgregarProducto(playlistCumbiambas);

// FINA Y ELEGANTE
const listaFinaEleg = [     ["Salgo Pa' la Calle / Daddy Yankee, Randy / 4:27"],
                            ["Yo Voy / Zion & Lennox / 3:52"],
                            ["Gasolina / Daddy Yankee / 3:12"],
                            ["Dile / Don Omar / 3:24"],
                            ["No Es Culpa Mía / Daddy Yankee / 1:47"],
                            ["Perdóname / La Factoria, Eddy Lover / 4:02"],
                            ["Rakata / Wisin & Yandel / 2:52"],
                            ["Pobre Diabla / Don Omar / 4:14"],
                            ["Siente El Boom / Tito El Bambino, Randy / 3:08"],
                            ["Igual Que Ayer / R.K.M & Ken-Y / 3:52"],
                            ["Frikitona / Plan B / 3:03"],
                            ["Noche De Sexo / Wisin & Yandel, Romeo Santos / 3:25"],
                            ["Ven Bailalo / Angel Y Khriz / 4:12"],
                            ["Prrrrum / Cosculluela / 3:58"],
                            ["Tu Príncipe / Daddy Yankee, Zion & Lennox / 3:25"],
                            ["Si No Le Contesto / Plan B / 3:41"],
                            ["La Pregunta / J Alvarez / 4:31"],
                            ["Llorarás Por Mi / Chapa C / 3:36"],
                            ["Besos Mojados / Wisin & Yandel / 4:24"],
                            ["Te Quiero / Flex / 3:18"]
]
const playlistFinaEleg = new Playlist("FINA Y ELEGANTE","Elegí formato",70,listaFinaEleg,'https://open.spotify.com/playlist/1tRSWW83PheMXsUZ5k6FbA?si=7ba8b8157841415f','https://res.cloudinary.com/dd2nenune/image/upload/v1629502786/Portadas/finaElegante_ajmojq.jpg');
AgregarProducto(playlistFinaEleg);

// Chill
const listaChill = [    ["Hell N Back / Bakar / 3:33"],
                        ["Tadow / Masego, FKJ / 5:01"],
                        ["Redbone / Childish Gambino / 5:26"],
                        ["Navajo / Masego / 3:14"],
                        ["Small Town Girl / Bakar / 3:05"],
                        ["Casio / Jungle / 3:54"],
                        ["Dreams / Fleetwood Mac / 4:17"],
                        ["Cumbia del Olvido / Nicola Cruz / 3:36"],
                        ["Sunday Best / Surfaces / 2:38"],
                        ["Dancing in My Room / 347aidan / 3:00"],
                        ["Just the Two of Us / Grover Washington, Jr. / 7:23"],
                        ["Music Sounds Better with You / NEIL FRANCES / 3:18"],
                        ["Blue World / Mac Miller / 3:29"],
                        ["Let It Happen / Tame Impala / 3:36"]
]
const playlistChill = new Playlist("CHILL","Elegí formato",54,listaChill,'https://open.spotify.com/playlist/6yOB4NdAF25gQHJytkRjR6?si=45b98e075dc14e3e','https://res.cloudinary.com/dd2nenune/image/upload/v1629503874/Portadas/chill_eh96pf.jpg');
AgregarProducto(playlistChill);


// triste
const listaTriste = [   ["Never Not / Lauv / 3:28"],
                        ["Lay Me Down / Sam Smith, John Legend / 3:39"],
                        ["When We Were Young / Adele / 4:50"],
                        ["The Scientist / Coldplay / 5:09"],
                        ["Little Do You Know / Alex & Sierra / 3:05"],
                        ["Sad Song / We The Kings, Elena Coats / 3:46"],
                        ["Talking to the Moon / Bruno Mars / 3:37"],
                        ["i hate u, i love u / gnash, Olivia O'Brien / 4:11"],
                        ["Fix You / Coldplay / 4:55"]
]
const playlistTriste = new Playlist("TRISTE","Elegí formato",37,listaTriste,'https://open.spotify.com/playlist/7Ee4jXvKmgQ6tQ96hQhoJf?si=28da6c5e9f604d6e','https://res.cloudinary.com/dd2nenune/image/upload/v1629504454/Portadas/triste_lhajs0.jpg');
AgregarProducto(playlistTriste);

// Joyas Musicales
const listaJoyasMusic = [   ["Vete De Mi / Bola De Nieve / 2:31"],
                            ["Naila / Lila Downs / 3:12"],
                            ["Y Nos Dieron las Diez / Joaquín Sabina / 5:02"],
                            ["Piensa en Mí / Natalia Lafourcade, Vicentico / 3:56"],
                            ["Crímenes Perfectos / Andrés Calamaro / 4:22"],
                            ["Hacia la Vida / Miguel Poveda / 4:10"],
                            ["Se Me Olvidó Otra Vez / Juan Gabriel / 2:58"],
                            ["Besame Mucho / Cesária Evora / 4:55"]
]
const playlistJoyasMusic = new Playlist("JOYAS MUSICALES","Elegí formato",30,listaJoyasMusic,'https://open.spotify.com/playlist/5QvlEQObvTAIcSuU9lGwLQ?si=efba0f4df3dc42ad','https://res.cloudinary.com/dd2nenune/image/upload/v1629505220/Portadas/joyasMusicales_axy2os.jpg');
AgregarProducto(playlistJoyasMusic);

// aspene
const listaAspene = [   ["Eyes Without a Face / Billy Idol / 4:59"],
                        ["Smalltown Boy / Bronski Beat / 4:04"],
                        ["Pet Sematary / Ramones / 3:29"],
                        ["Eye In The Sky / The Alan Parsons Project / 4:36"],
                        ["Hung Up / Maddona / 5:37"]
]
const playlistAspene = new Playlist("ASPENE","Elegí formato",23,listaAspene,'https://open.spotify.com/playlist/37HZTZY82CamFkqnknJglo?si=40c34328643e4d24','https://res.cloudinary.com/dd2nenune/image/upload/v1629505765/Portadas/aspene_m0mhta.jpg');
AgregarProducto(playlistAspene);

// morder tiza
const listaMorderTiza = [   ["telepatía / Kali Uchis / 2:40"],
                            ["After Hours / The Weekend / 6:01"],
                            ["My Love / maye / 3:59"],
                            ["Dolerme / ROSALÍA / 2:23"],
                            ["Viernes / Molok0 / 3:11"]
]
const playlistMorderTiza = new Playlist("MORDER TIZA","Elegí formato",18,listaMorderTiza,'https://open.spotify.com/playlist/5ikxpJH6lq97F9HEswHssb?si=b4d53595c6d748f6','https://res.cloudinary.com/dd2nenune/image/upload/v1629506099/Portadas/morderTiza_hqhl6z.jpg');
AgregarProducto(playlistMorderTiza);

// gruNsh
const listaGrunsh = [   ["Heavy / Collective Soul / 2:54"],
                        ["Rusty Cage / Soundgarden / 4:26"],
                        ["Learn to Fly / Foo Fighters / 3:55"],
                        ["Shine / Collective Soul / 5:06"],
                        ["Go / Pearl Jam / 3:13"],
                        ["Come As You Are / Nirvana / 3:38"],
                        ["Slave / Silverchair / 3:55"],
                        ["Like a Stone / Audioslave / 4:53"],
                        ["Ritual / Ghost / 4:28"]
]
const playlistGrunsh = new Playlist("GRUNSH","Elegí formato",36,listaGrunsh,'https://open.spotify.com/playlist/6zXcKhE4DhtMyK0XVgVw7o?si=6c464de7fb864ad6','https://res.cloudinary.com/dd2nenune/image/upload/v1629507434/Portadas/grunsh_dgdh6n.jpg');
AgregarProducto(playlistGrunsh);

// Acustiñoño
const listaAcustinono = [   ["Salvapantallas / Jorge Drexler / 4:32"],
                            ["Canción de Bañar la Luna / Ainda / 2:53"],
                            ["Brasil / Eliane Elias / 4:39"],
                            ["Ríe Chinito / Perotá Chingó / 5:09"],
                            ["Songbird / Oasis / 2:07"],
                            ["So Good / Louisa / 3:06"],
                            ["Hermoza From Heaven / Illya Kuryaki & The Valderramas / 3:54"],
                            ["Cherry Wine / Hozier / 4:00"],
                            ["Slide / Jake Bugg / 3:08"]
]
const playlistAcustinono = new Playlist("ACUSTIÑOÑO","Elegí formato",33,listaAcustinono,'https://open.spotify.com/playlist/5FsyuaSLkJjmaOHTksVQdh?si=c47f3b315e844c61','https://res.cloudinary.com/dd2nenune/image/upload/v1629507642/Portadas/acustinono_wxnu54.jpg');
AgregarProducto(playlistAcustinono);

// Puro Sentimiento
const listaPuroSent = [     ["La Incondicional / Luis Miguel / 4:17"],
                            ["Amiga mía / Alejandro Sanz / 4:50"],
                            ["Vuelve / Ricky Martin / 5:07"],
                            ["Y tú te vas / Chayanne / 4:45"],
                            ["Cosas del amor / Enrique Iglesias / 4:27"]
]
const playlistPuroSent = new Playlist("PURO SENTIMIENTO","Elegí formato",23,listaPuroSent,'https://open.spotify.com/playlist/6aDIKbKYg4x4FJstFdZX8D?si=ef3c10ceeb834074','https://res.cloudinary.com/dd2nenune/image/upload/v1629508087/Portadas/puroSentimiento_noyyzg.jpg');
AgregarProducto(playlistPuroSent);

// Sentite Sexy
const listaSentSexy = [     ["It's Gonna Be Lonely / Prince / 5:27"],
                            ["Versace on the Floor / Bruno Mars / 4:21"],
                            ["De Nuevo / Hipnotica / 2:59"],
                            ["PALMERAS / LOUTA / 3:07"],
                            ["Hace Calor / Juan Ingaramo / 4:10"],
                            ["imagine / Ariana Grande / 3:32"],
                            ["Demasiado / Bandalos Chinos / 3:45"],
                            ["Luxurious / Gwen Stefani / 4:24"],
                            ["wish you were gay / Billie Eilish / 3:41"],
                            ["Loner / Kali Uchis / 3:32"],
                            ["Let Me Love You / Mario / 4:16"],
                            ["Cosas Dulces / Marilina Bertoldi / 3:00"],
                            ["Martes / Feli Colina / 4:07"]
]
const playlistSentSexy = new Playlist("SENTITE SEXY","Elegí formato",48,listaSentSexy,'https://open.spotify.com/playlist/1p6d124D48WzdZRLPPhNNy?si=8b6613493bfe4699','https://res.cloudinary.com/dd2nenune/image/upload/v1629508618/Portadas/sentiteSexy_k4drgt.jpg');
AgregarProducto(playlistSentSexy);

// A nivel espiritual
const listaEspiritual = [   ["Say So / Doja Cat / 3:58"],
                            ["Killer Queen / Queen / 2:59"],
                            ["LoveGame / Lady Gaga / 3:36"],
                            ["Cheek To Cheek / Tony Bennett, Lady Gaga / 2:50"],
                            ["Vogue / Madonna / 4:24"],
                            ["Unfaithful / Rihanna / 3:46"],
                            ["I Want It That Way / Backstreet Boys / 3:34"],
                            ["God is a woman / Ariana Grande / 3:18"],
                            ["Te Aviso, Te Anuncio / Shakira / 3:26"]
]
const playlistEspiritual = new Playlist("A NIVEL ESPIRITUAL","Elegí formato",27,listaEspiritual,'https://music.youtube.com/playlist?list=PLR1DIt0Pd67h4RyC6sSJazWg9mpMmeEtu','https://res.cloudinary.com/dd2nenune/image/upload/v1629509177/Portadas/espiritual_xm6zvr.jpg');
AgregarProducto(playlistEspiritual);

/*Fin Playlists*/