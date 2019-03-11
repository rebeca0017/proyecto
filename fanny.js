

function bb() {
    console.log("hola");
    var nombres1 = [["susana", "martinez", 18], ["susa", "martinez", 20]];
    for (var i = 0; i < nombres1; i++) {
        for (var j = 0; j < nombres1.length; j++) {
            var hilera = document.createElement("tr")
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(nombres1(1, 1));
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            tblBody.appendChild(hilera);
            var textoCelda = document.createTextNode(nombres1(0, 1));
            var celda = document.createElement("td");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }


    }
}


