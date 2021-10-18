const peliculas = {
    "Peliculas": [
        {
            "id": "1",
            "img": "img/los-locos-adam.jpg",
            "nombre": "Los Locos Addams 2",
            "clasificacion": "A",
            "duracion": "95 min",
            "butacas": "Tradicionales",
            "Formatos": [
                {"Formato": "2D"},
                {"Formato": "3D"},
                {"Formato": "DOB"}
            ],
            "horarios": [
                {"Horario": "11:02"},
                {"Horario": "13:00"},
                {"Horario": "16:00"}
            ]
        },
        {
            "id": "2",
            "img": "img/Venom.jpg",
            "nombre": "Venom",
            "clasificacion": "B",
            "duracion": "100 min",
            "butacas": "VIP",
            "Formatos": [
                {"Formato": "2D"},
                {"Formato": "DOB"}
            ],
            "horarios": [
                {"Horario": "12:30"},
                {"Horario": "13:50"},
                {"Horario": "17:20"}
            ]
        },
        {
            "id": "3",
            "img": "img/El-regreso-de-la-llorona.jpg",
            "nombre": "El regreso de la llorona",
            "clasificacion": "C",
            "duracion": "75 min",
            "butacas": "Tradicionales",
            "Formatos": [
                {"Formato": "2D"},
                {"Formato": "3D"}
            ],
            "horarios": [
                {"Horario": "14:30"},
                {"Horario": "17:00"}
            ]
        },
        {
            "id": "4",
            "img": "img/sin-tiempo-para-morir.jpg",
            "nombre": "Sin Tiempo para morir",
            "clasificacion": "B",
            "duracion": "135 min",
            "butacas": "Tradicionales",
            "Formatos": [
                {"Formato": "2D"},
                {"Formato": "DOB"},
                {"Formato": "ESP"}
            ],
            "horarios": [
                {"Horario": "09:02"},
                {"Horario": "11:30"},
                {"Horario": "16:50"}
            ]
        }
    ]
}

var info = document.getElementById("movies");
pelis = peliculas.Peliculas;

var total = pelis.length;
var codigo = "";
for(var i = 0; i < total;i++){
    var valu = i + 1;
    codigo += "<div id='peli"+valu+"'>";
    codigo += "<img src='"+pelis[i].img+"' alt='Pelicula en cartelera' height='300px'>";
    codigo += "<div id='info"+valu+"'>";
    codigo += "<h1>"+pelis[i].nombre +"</h1>";
    codigo += "<p><strong>Clasificación:</strong> "+ pelis[i].clasificacion+" <strong>Duración:</strong> "+ pelis[i].duracion+"</p>";
    codigo += "<p><strong>Formatos disponibles:</strong> (";
    var horas = pelis[i].Formatos.length;
    for(var j = 0;j < horas;){
        codigo += pelis[i].Formatos[j].Formato;
        j++;
        if(j <horas){
            codigo += ", ";
        }
    }
    codigo += ") <strong>| Tipo de Butacas:</strong> "+ pelis[i].butacas;
    var horas = pelis[i].horarios.length;
    for(var k = 0;k < horas;k++){
        codigo += "<p>"+pelis[i].horarios[k].Horario+"</p>";
    }
    codigo += "</div></div><div id='form'><form  >";
    codigo += "<label for='cant'>Ingrese cantidad de Tickets</label>";
    codigo += "<input type='hidden' name='peli"+pelis[i].id+"' id='peli"+pelis[i].id+"' value='"+pelis[i].id+"'>";
    codigo += "<input type='number' name='cant"+pelis[i].id+"' id='cant"+pelis[i].id+"' min='1' step='1' placeholder='Cantidad de Tickets' value='10' required>";
    codigo += "<label for='horadis'>Seleccione el horario</label>";
    codigo += "<select id='horadis"+pelis[i].id+"' name='horadis"+pelis[i].id+"' required>";
    for(var k = 0;k < horas;k++){
        codigo += "<option>"+pelis[i].horarios[k].Horario+"</option>";
    }
    codigo += "</select>";
    codigo += "<input type='submit' id='enviar' name='enviar' value='Enviar'  onclick='guardar()'>"
    codigo += "</form></div>";
}
document.write(codigo);

function guardar(){
    for(let j=1;j<5;j++){
        var mid = "peli"+j;
        var peliid = document.getElementById(mid).value;
        if(peliid !=null){
            alert("si");
            var id = document.getElementById("peli"+j).value;
            var selection = document.getElementById("horadis"+j).value;
            var num = document.getElementById("cant"+j).value;
        }
    }
    if(num > 0){
        let i = 0;
        for(;i<5;){
            if(pelis[i].id==id){
                if(window.localStorage.getItem(pelis[i].id) === null){
                    let dato = " (" +selection+") " + num;
                    localStorage.setItem(id, dato);
                    selection = 0;
                    num = 0;
                    id = 0;
                    alert("Tu reservación se ha registrado con exito");
                    break;
                }else{
                    alert("Ya realizaste una reservación de esta pelicula");
                }
            }
            i++
        }
    }else{
        alert("valor no valido");
    }
}

// var codigo2 = document.getElementById("recibo");
// for(let i=0;i<5;i++){
    
//     if(window.localStorage.getItem(pelis[i].id) !== null){
//         var dato = window.localStorage.getItem(pelis[i].id);
//         document.write("<h1>"+dato+"</h1>");
//     }
// }