$(document).ready(function()
{
    var cambiarClase = function()
    {
        if($("#semaforo").hasClass("rojo"))
        {
            $("#semaforo").removeClass("rojo").addClass("amarillo")
        }
        else if($("#semaforo").hasClass("amarillo"))
        {
            $("#semaforo").removeClass("amarillo").addClass("verde")
        }
        else if($("#semaforo").hasClass("verde"))
        {
            $("#semaforo").removeClass("verde").addClass("rojo")
        }
    }
    $("#cambiar").on("click",cambiarClase)
})
