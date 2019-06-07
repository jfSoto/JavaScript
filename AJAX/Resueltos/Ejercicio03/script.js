//Solución en JavaScript

window.addEventListener("load", function () 
{
    document.getElementById("boton").addEventListener("click", function () 
    {
        var xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                var objetoJSON = JSON.parse(this.responseText)
                var tabla = document.createElement("table")

                tabla.innerHTML = "<thead><tr><th>Nombre</th><th>Apellidos</th><th>Nota</th><th>Convocatoria</th></tr></thead>"

                for (var i = 0; i < objetoJSON.length; i++) 
                {
                    var fila = tabla.insertRow()

                    fila.insertCell().innerText = objetoJSON[i].nombre
                    fila.insertCell().innerText = objetoJSON[i].apellido
                    fila.insertCell().innerText = objetoJSON[i].nota
                    fila.insertCell().innerText = objetoJSON[i].convocatoria
                }

                document.getElementById("contenedor").innerHTML = tabla.outerHTML
            }
        }

        xhr.open("GET", "alumnos.json", true)
        xhr.send()
    })
})

//Solución en jQuery

$(window).on("load", function () 
{
    $("#boton").on("click", function () 
    {
        $.getJSON("alumnos.json", function (datos) 
        {
            $("#contenedor")
                .html($("<table>")
                    .append($("<tr>")
                        .append($("<th>").text("Id"),
                            $("<th>").text("Nombre"),
                            $("<th>").text("Apellido"),
                            $("<th>").text("Nota"),
                            $("<th>").text("Convocatori"))))

            $.each(datos, function (i, alumno) 
            {
                $("<tr>")
                    .append($("<td>").text(i + 1),
                        $("<td>").text(alumno.nombre),
                        $("<td>").text(alumno.apellido),
                        $("<td>").text(alumno.nota),
                        $("<td>").text(alumno.convocatoria))
                    .appendTo($("table"))
            })
        })
    })
})
