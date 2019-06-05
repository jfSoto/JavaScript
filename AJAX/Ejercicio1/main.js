window.addEventListener("load", function() {
  var boton = document.getElementById("boton");
  var contenedor = document.getElementById("contenedor");

  boton.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 3) {
        contenedor.innerHTML = "<em>Cargando los datos</em>"
      }
      if (this.readyState == 4 && this.status == 200) {
        var estado = this
        setTimeout(function() {
          contenedor.innerHTML = estado.responseText;
        }, 1500);
      }
    };
    xhr.open("GET", "Ejercicio1.html", true);
    xhr.send();
  });
});
