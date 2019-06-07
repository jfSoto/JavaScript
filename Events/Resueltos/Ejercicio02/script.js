var botonNombre = document.getElementById("bN")
var botonApellido = document.getElementById("bA")
var inputResultado = document.getElementById("resultado")

var escribirNombre = function () 
{
    inputResultado.value = "Javier"
}

var escribirApellido = function () 
{
    inputResultado.value = "Escudero"
}

botonNombre.addEventListener("click", escribirNombre)
botonApellido.addEventListener("click", escribirApellido)
