

function generartabla() {

    var cabeza = ["apellidos", "nombres", "edad"];

    var nombres = [["susana", "martinez", 18], ["susa", "jose", 20], ["susa", "mora", 20], ["susa", "morales", 20]];




    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    tabla.className=active;
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

    var hilera = document.createElement("td")
    var celda = document.createElement("tr");
    var textoCelda = document.createTextNode(cabeza[2]);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    tblBody.appendChild(hilera);

    nombres.forEach(nombres => {
        var hilera = document.createElement("tr")
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombres[0]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        textoCelda = document.createTextNode(nombres[1]);
        celda = document.createElement("td");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        textoCelda = document.createTextNode(nombres[2]);
        celda = document.createElement("td");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
    });

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}

/*if (document.createStyleSheet) {
    document.createStyleSheet('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
}
else {
    var styles = "@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');";
    var newSS = document.createElement('link');
    newSS.rel = 'stylesheet';
    newSS.href = 'data:text/css,' + escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}*/


