// Crear una web que abra una nueva ventana y en esa ventana secundaria
// aparezca un cuadro de diálogo pidiendo una dirección web. La ventana
// secundaria se redireccionará automáticamente hacia la dirección introducida.

var ventana = window.open()
var direccion = ventana.prompt("Escribe una url")

ventana.location.replace("https://" + direccion)
