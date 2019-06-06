// Crea una página web que solicite al usuario un título. A continuación se abrirá
// una nueva ventana cuyo contenido será un encabezado con el título
// introducido.

var texto = prompt("Ingresa un título para la nueva ventana: ");
var ventanaNueva = window.open();

ventanaNueva.document.write("<h1>" + texto + "</h1>");
