$(window).on("load", function() 
{
  $("#read").on("click", function() 
  {
    $.getJSON("pagina.php", function(miObjeto)
    {
        var plantilla = " <table border='1'><tr>"
        for(var i = 0; i < Object.keys(miObjeto[0]).length; i++)
        {
            plantilla += "<th>" + Object.keys(miObjeto[0])[i] + "</th>"
        }
        plantilla += "</tr>"
        for(var i = 0; i < miObjeto.length; i++)
        {
            plantilla += "<tr>"
            plantilla += "<td>" + miObjeto[i].idAlumno + "</td>" + "<td>" + miObjeto[i].nombreAlumno + "</td>" + "<td>" + miObjeto[i].apellidosAlumno + "</td>" + "<td>" + miObjeto[i].notaAlumno + "</td>"
            plantilla += "</tr>"
        }
        plantilla += "</table>"
        $("#contenedor").html(plantilla)
    })
  });

  $("#create").on("click", function()
  {
      $.post("pagina.php", {nombreCampo : "nombreAlumno", valorCampo: "Soto"} , function(miObjeto)
      {
        $("#contenedor").text(miObjeto)
      })
  })
});