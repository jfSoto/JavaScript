//EJERCICIO CON JAVASCRIPT PURO. DESCOMENTAR EL EJERCICIO Y COMENTAR EL EJERCICIO CON JQUERY PARA PROBARLO.
/*window.addEventListener("load", function() 
{
    var boton1 = document.getElementById("boton1");
    var boton2 = document.getElementById("boton2");
    var input = document.getElementById("input");
    var contenedor = document.getElementById("contenedor");
    boton1.addEventListener("click", function() 
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                contenedor.innerHTML = this.responseText
            }
        }
        xhr.open("GET", "instrucciones.html", true);
        xhr.send();
    })

    boton2.addEventListener("click", function()
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                var miObjeto = JSON.parse(this.responseText)
                var plantilla = " <table border='1'><tr><th>Id</th><th>Nombre</th><th>Tipos</th></tr>"
                if(input.value == "")
                {
                    for(var i = 0; i < miObjeto.length; i++)
                    {
                        plantilla += "<tr>"
                        plantilla += "<td>" + miObjeto[i].id + "</td>" + "<td>" + miObjeto[i].name.english + "</td>" + "<td>" + 
                        miObjeto[i].type + "</td>"
                        plantilla += "</tr>"
                    }
                }
                else
                {
                    for(var i = 0; i < input.value; i++)
                    {
                        plantilla += "<tr>"
                        plantilla += "<td>" + miObjeto[i].id + "</td>" + "<td>" + miObjeto[i].name.english + "</td>" + "<td>" + 
                        miObjeto[i].type + "</td>"
                        plantilla += "</tr>"
                    }
                }
                contenedor.innerHTML = plantilla
            }
        }
        xhr.open("GET", "pokedex.json", true);
        xhr.send();
    })
})*/

//EJERCICIO CON JQUERY. COMENTAR EL EJERCICIO Y DESCOMENTAR EL EJERCICIO CON JAVASCRIPT PURO PARA PROBARLO.
$(window).ready(function()
{
    $("#boton1").on("click", function()
    {
        $.ajax({url: "instrucciones.html", success: function(resultado)
        {
            $("#contenedor").html(resultado);
        }})
    })

    $("#boton2").on("click", function()
    {
        $.ajax({url: "pokedex.json", success: function(resultado)
        {
            var plantilla = $("<table border='1'><tr><th>Id</th><th>Nombre</th><th>Tipos</th></tr>")
            if($("#input").val() == "")
            {
                $.each(resultado, function(i, value)
                {
                    plantilla.append("<tr><td>" + value.id + "</td>" + "<td>" + value.name.english + "</td>" + "<td>" + 
                    value.type + "</td></tr>")
                })
            }
            else
            {
                $.each(resultado, function(i, value)
                {
                    if(i < $("#input").val())
                    {
                        plantilla.append("<tr><td>" + value.id + "</td>" + "<td>" + value.name.english + "</td>" + "<td>" + 
                        value.type + "</td></tr>")
                    }
                })
            }
            $("#contenedor").html(plantilla);
        }})
    })
})

  
