//Solución en JavaScript

var boton = document.getElementById("boton")

boton.addEventListener("click", cargarDatos)

function cargarDatos() 
{
    httpRequest = new XMLHttpRequest();
    httpRequest.onload = procesarRespuesta;

    httpRequest.open('GET', 'alumnos.html', true);
    httpRequest.overrideMimeType('text/html');
    httpRequest.send(null);
}

function procesarRespuesta() 
{
    var respuesta = httpRequest.responseText;
    var contenido = document.createElement('div');

    contenido.innerHTML = respuesta;

    document.body.appendChild(contenido);
}

//Solución en jQuery

$(window).on("load", function () 
{
    $("#boton").on("click", function ()
    {
        $.get("alumnos.html", function (datos, status) 
        {
            $("#contenedor").html(datos)
        })
    })
})
