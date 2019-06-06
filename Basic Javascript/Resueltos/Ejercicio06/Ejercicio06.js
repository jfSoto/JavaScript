// Haga un programa que imprima por pantalla todas las tablas de multiplicar.
// Utilice bucles anidados.

for (var i = 1; i <= 10; i++) 
{
    document.write("<b>Tabla del " + i + "</b><br>")

    for (var j = 1; j <= 10; j++) 
    {
        document.write(i + "x" + j + "=" + (i * j) + "<br>")
    }
    
    document.write("<br>")
}
