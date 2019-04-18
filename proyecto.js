

function generatetable() {

    var head = ["APELLIDOS", "NOMBRES", "EDAD","mamama"];

    var data = [["susana", "martinez", 18], ["susa", "jose", 20,], ["susa", "mora", 20], ["susa", "morales", 20]];




    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");
    var div = document.createElement("div");
    div.className = 'table-responsive'
    table.className = 'table table-hover';
    var tblBody = document.createElement("tbody");
    var tblHead = document.createElement("thead");



    head.forEach(head => {
        var row = document.createElement("th")
        var cell = document.createElement("tr");
        var textcell = document.createTextNode(head);
        cell.appendChild(textcell);
        row.appendChild(cell);
        tblHead.appendChild(row);


    });

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {

            var row = document.createElement("td")
            var cell = document.createElement("tr");
            var textcell = document.createTextNode(data[i][j]);
            cell.appendChild(textcell);
            row.appendChild(cell);
            tblBody.appendChild(row);
        }

    }





    /*textcell = document.createTextNode(data[1]);
    cell = document.createElement("td");
    cell.appendChild(textcell);
    row.appendChild(cell);
    textcell = document.createTextNode(data[2]);
    cell = document.createElement("td");
    cell.appendChild(textcell);
    row.appendChild(cell);*/




    body.appendChild(div);
    body.appendChild(table);
    div.appendChild(table)
    table.appendChild(tblBody);
    table.appendChild(tblHead);
    table.setAttribute("border", "2");
}



