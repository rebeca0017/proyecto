

function generartabla() {

    var cabeza = ["apellidos", "nombres"];
    var nombres = {
        "Susana": "Martinez",
        "Monica": "Gomez",
        "Ximena": "Gutierrez",
        "rebeca": "riofrio",
       "ee":"ee",
       "ii":"ii",
       "qq":"qq"
        
    };
    var nombres1 = [["susana","martinez",18], ["susa","martinez",20]];



    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");


    var hilera = document.createElement("td")
    var celda = document.createElement("tr");
    var textoCelda = document.createTextNode(cabeza[1]);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    tblBody.appendChild(hilera);


    var hilera = document.createElement("td")
    var celda = document.createElement("tr");
    var textoCelda = document.createTextNode(cabeza[0]);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    tblBody.appendChild(hilera);

    for (nombre in nombres) {
        var hilera = document.createElement("tr")
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        var textoCelda = document.createTextNode(nombres[nombre]);
        var celda = document.createElement("td");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);


    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}




