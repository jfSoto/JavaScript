var numero1 = prompt("Escribe un número")
var numero2 = prompt("Escribe un número")

document.getElementById('suma').onclick = function () 
{
    var nuevaVentana = window.open()

    nuevaVentana.document.write("La suma de " + numero1 + " y " + numero2 + " es " + (numero1 + numero2));
}

// El resto de métodos es igual
