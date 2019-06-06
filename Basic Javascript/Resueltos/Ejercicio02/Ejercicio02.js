// Escribe un algoritmo en JavaScript que pida al usuario un número entero, y nos
// diga el número de cifras que tiene (1, 2, 3 o mayor de 3).

var numero = prompt("Escribe un número entero");

if (numero.length > 3) 
{
    alert("El número tiene más de 3 cifras");
} 
else 
{
    alert("El número tiene " + numero.length + " cifras");
}
