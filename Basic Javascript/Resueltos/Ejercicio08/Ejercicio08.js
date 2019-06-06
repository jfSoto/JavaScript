// Escribe un programa que defina un array con 5 notas de un alumno y que
// muestre la mayor, la menor y la media.

var notas = []

for (var i = 0; i < 5; i++) 
{
    var nota = Math.random() * 10
    notas.push(Math.round(nota))
}

console.log(notas)

suma = 0;
menor = 10;
mayor = 0;

for (var i = 0; i < notas.length; i++) 
{
    suma += notas[i]

    if (notas[i] < menor) 
    {
        menor = notas[i]
    }

    if (notas[i] > mayor) 
    {
        mayor = notas[i]
    }
}

media = suma / notas.length

document.write("La nota mayor es " + mayor + "<br>")
document.write("La nota menor es " + menor + "<br>")
document.write("La nota media es " + media)

/* OTRAS FORMAS MÁS CORTAS
El operador ...array permite usar los elementos de un array como
parámetros, entre otros usos. Es lo que se denomina sintaxis spread.
La función reduce aplica una función a todos los elementos del array
de izquierda a derecha para reducirlo a un único valor.

menor = Math.min(...notas)
mayor = Math.max(...notas)
media = notas.reduce((a, b) => a + b, 0) / notas.length */
