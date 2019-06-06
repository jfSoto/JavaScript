document.getElementById('suma').onclick = function () 
{
    var numero1 = document.getElementById('num1').value
    var numero2 = document.getElementById('num2').value
    var nuevaVentana = window.open()
    var suma = parseInt(numero1) + parseInt(numero2)

    nuevaVentana.document.write("<p>La suma de " + numero1 + " y " + numero2 + " es " + suma + "</p>");
    nuevaVentana.document.write("<button onclick = window.close() > Cerrar ventana</button > ");
}

// El resto de métodos es igual
