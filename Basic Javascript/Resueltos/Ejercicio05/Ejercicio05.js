// Escribe un algoritmo en JavaScript que pida tres números al usuario e indique
// cuál es el mayor, el menor y calcule la media.

var num1 = parseInt(prompt("Escribe el primero número"))
var num2 = parseInt(prompt("Escribe el segundo número"))
var num3 = parseInt(prompt("Escribe el tercer número"))
var mayor
var menor
var media = (num1 + num2 + num3) / 3

if (num1 >= num2 && num1 >= num3) 
{
    mayor = num1
} 
else if (num2 >= num1 && num2 >= num3) 
{
    mayor = num2
} 
else if (num3 >= num1 && num3 >= num2) 
{
    mayor = num3
}

if (num1 <= num2 && num1 <= num3) 
{
    menor = num1;
} 
else if (num2 <= num1 && num2 <= num3) 
{
    menor = num2
} 
else if (num3 <= num1 && num3 <= num2) 
{
    menor = num3
}

document.write("El mayor es " + mayor + "<br>")
document.write("El menor es " + menor + "<br>")
document.write("La media es " + media + "<br>")
