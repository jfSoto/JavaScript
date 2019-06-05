var boton1 = document.getElementById("nombre");
var boton2 = document.getElementById("apellido");
var cambiarValor = document.getElementById("text");

/*var nombre = function()
{
    cambiarValor.value = "José Francisco"
}

var apellido = function()
{
    cambiarValor.value = "Soto"
}*/

boton1.addEventListener("click", () => {cambiarValor.value = "José Francisco"});
boton2.addEventListener("click", () => {cambiarValor.value = "Soto"});
