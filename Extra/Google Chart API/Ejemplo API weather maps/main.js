$(window).on("load", function() {
  $("#boton").on("click", function() {
    var datos = {
      q: $("#input").val() + ",es",
      lang:"es",
      APPID: "589ab5bc575273f0a45e8bde4ae5d6a5"
    };

    $.getJSON("http://api.openweathermap.org/data/2.5/weather", datos, function(
      respuesta
    ) {
      google.charts.load("current", { packages: ["corechart"] });
      
      function drawChart2() {
        var options = {
          title: "Temperatura en " + respuesta.name,
          width: 550,
          height: 400
        };

        var data = google.visualization.arrayToDataTable([
          [
            "Elemento",
            "Temperatura",
            "Temperatura Máxima",
            "Temperatura Mínima",
          ],
          ["Temperatura Máxima", 0, respuesta.main.temp_max - 273, 0],
          ["Temperatura Media", respuesta.main.temp -273,0, 0],
          ["Temperatura Mínima", 0, 0, respuesta.main.temp_min -273]
        ]);

        var chart2 = new google.visualization.BarChart(
          document.getElementById("contenedor2")
        );

        chart2.draw(data, options);
      }
      google.charts.setOnLoadCallback(drawChart2);

      console.log(respuesta);
      $("#contenedor1").html(
        "<p>Estamos en " + respuesta.name + " y la temperatura es: " + respuesta.main.temp + "</p>"
      ).append("<img class='weather-widget__img' src='https://openweathermap.org/img/w/" + respuesta.weather[0].icon + ".png' alt='Weather London , GB' width='50' height='50'>")
    });
  });
});
