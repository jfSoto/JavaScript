// Hacer un algoritmo que muestre por pantalla todos los números primos
// comprendidos entre 1 y 10. (Utilice document.write() ).

for (var i = 2; i <= 10; i++) 
{
    var esPrimo = true;

    for (j = 2; j < i; j++) 
    {
        if (i % j == 0) 
        {
            esPrimo = false;
            break;
        }
    }
    
    if (esPrimo) 
    {
        document.write(i + "<br>");
    }
}
