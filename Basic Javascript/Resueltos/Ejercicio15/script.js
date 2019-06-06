var numero1 = prompt("Escribe un número")
var numero2 = prompt("Escribe un número")

document.getElementById('suma').onclick = function () 
{
    var nuevaVentana = window.open()
    var suma = numero1 + numero2

    nuevaVentana.document.write("La suma de " + numero1 + " y " + numero2 + " es " + (suma));
}
