//Solución en JavaScript

var semaforo = document.getElementById("semaforo")
var boton = document.getElementById("boton")

boton.addEventListener("click", function () 
{
    if (semaforo.classList.contains("rojo")) 
    {
        semaforo.classList.remove("rojo")
        semaforo.classList.add("verde")
    } 
    else if (semaforo.classList.contains("verde")) 
    {
        semaforo.classList.remove("verde")
        semaforo.classList.add("amarillo")
    } 
    else 
    {
        semaforo.classList.remove("amarillo")
        semaforo.classList.add("rojo")
    }
})

//Solución en jQuery

$(document).ready(function () 
{
    $("#boton").on("click", function () 
    {
        if ($("#semaforo").hasClass("rojo")) 
        {
            $("#semaforo").removeClass("rojo").addClass("verde")
        } 
        else if ($("#semaforo").hasClass("verde")) 
        {
            $("#semaforo").removeClass("verde").addClass("amarillo")
        } 
        else 
        {
            $("#semaforo").removeClass("amarillo").addClass("rojo")
        }
    })
})
