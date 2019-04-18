

var cabeza = ["apellido", "nombres"];
var nombres = { "Susana": "Martinez", "Monica": "Gomez", "Ximena": "Gutierrez", "rebeca": "riofrio" };

function agregarNombres() {
   

for(nombre in nombres){
    (document.getElementById('tabla').tBodies[0].rows[0].cells[1].innerHTML)=nombres[nombre];
    (document.getElementById('tabla').tBodies[0].rows[1].cells[0].innerHTML)=nombre;
    (document.getElementById('tabla').tBodies[0].rows[1].cells[1].innerHTML)=nombres[nombre];
    (document.getElementById('tabla').tBodies[0].rows[0].cells[0].innerHTML)=nombres[nombre];

}
    
}

