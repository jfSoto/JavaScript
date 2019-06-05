$(window).on("load", function() 
{
  $("#boton").on("click", function() 
  {
    var datos = {
      q: $("#input").val() + ",es",
      lang:"es",
      APPID: "589ab5bc575273f0a45e8bde4ae5d6a5"
    };

    $.getJSON("http://api.openweathermap.org/data/2.5/weather", datos, function(respuesta) 
    {
      console.log(respuesta);
    });
  });
});
