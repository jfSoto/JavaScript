window.addEventListener("load", function() {
  var boton = document.getElementById("boton");
  var contenedor = document.getElementById("contenedor");

  boton.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) 
      {
            var miObjeto = JSON.parse(this.responseText)
            //console.log(miObjeto[0].nombre)
            /*var plantilla = `
            <h1>${miObjeto[0].nombre}</h1>
            `;*/
            //console.log(miObjeto[0].)
            var plantilla = " <table border='1'><tr>"
            for(var i = 0; i < Object.keys(miObjeto[0]).length; i++)
            {
                plantilla += "<th>" + Object.keys(miObjeto[0])[i] + "</th>"
            }
            for(var i = 0; i < miObjeto.length; i++)
            {
                plantilla += "<tr>"
                plantilla += "<td>" + miObjeto[i].nombre + "</td>" + "<td>" + miObjeto[i].apellido + "</td>" + "<td>" + miObjeto[i].nota + "</td>" + "<td>" + miObjeto[i].convocatoria + "</td>"
                plantilla += "</tr>"
            }
            contenedor.innerHTML = plantilla
            //contenedor.innerHTML = JSON.parse(this.responseText);
            /*miObjeto.forEach(e => 
            {
              console.log(e.nombre)  
            });*/
      } 
    };
    xhr.open("GET", "Ejercicio2.json", true);
    xhr.send();
  });
});
