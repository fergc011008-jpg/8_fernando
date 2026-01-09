//soy un comentario en JavaScript
// alert('prueba de código');
var mensaje = 'hola mundo quetal';
console.log(mensaje);
console.log(document);
console.log(localStorage);
var esViernes = true;
console.log('esViernes y queremos irnos: ' + esViernes);
debugger
if (esViernes == true) {
console.log('es viernes, nos vamos de fiesta');
}
console.log('el nombre del usuario es: ' + nombreUsuario);
var nombreUsuario = document.getElementById('nombre').value;
document.write("<h1>"+ nombreUsuario + "</h1>");
function comprobarFormulario() {
   var pass1 = document.getElementById('pass1').value;
   var pass2 = document.getElementById('pass2').value;
   return pass1 === pass2;
}


function enviarfolmulario(){
   console.log('enviando formulario...');
    var dic = document.getElementById('mensajes');




   if (comprobarFormulario) {
       var nombre = document.getElementById('nombre').value;
       div.innerHTML = nombre + "Password Ok";
       div.style.backgroundColor = "green";      
       //document.write("<h1>" + nombre + "</h1>");
       //document.write("<p>Password Ok</p>");
   } else {
       div.innerHTML = "Password ko";
       div.style.backgroundColor = "red";
}
}
function cambiarColor(color){
    var div = document.getElementById("mensajes")
    div.style.backgroundColor = color;
}