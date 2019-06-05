var boton = document.getElementById("cambiar");
var elemento = document.getElementById("semaforo")

var cambiarClase = function()
{
    if(elemento.classList.contains("rojo"))
    {
        elemento.classList.remove("rojo")
        elemento.classList.add("amarillo")
    }
    else if(elemento.classList.contains("amarillo"))
    {
        elemento.classList.remove("amarillo")
        elemento.classList.add("verde")
    }
    else if(elemento.classList.contains("verde"))
    {
        elemento.classList.remove("verde")
        elemento.classList.add("rojo")
    }
}

boton.addEventListener("click", cambiarClase);
