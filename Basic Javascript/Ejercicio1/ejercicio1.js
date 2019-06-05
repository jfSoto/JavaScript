var productos = []
var ventas = []
//Ejercicio 1
function iniciar()
{  
        for(var i = 0; i < 10; i++)
        {
            productos[i] = Math.floor(Math.random()*100)
        }
}

iniciar()
//Ejercicio 2
function verStock()
{
    document.write("<ul>")
    for(var i = 0; i < productos.length; i++)
    {
        document.write("<li>Del producto "+(i+1)+" hay "+productos[i]+"</li>")
    }
    document.write("</ul>")
}

verStock()
//Ejercicio 3
function ampliarStock()
{
    productos = productos.concat(pedirProductos())
    document.write(productos)
}

ampliarStock()

function pedirProductos(num)
{
    var array = []
    if(num == undefined /*arguments.length == 0 */)
    {
      num = Math.floor(Math.random()*5)+1
    }
    for(var i = 0; i < num; i++)
        {
            array[i] = Math.floor(Math.random()*100)+1
        }
    return array
}
//Ejercicio 4
function nuevoProducto()
{
    productos.push(Math.floor(Math.random()*100))
}

function eliminarProducto()
{
    productos.pop()
}

//Ejercicio 5
function menorMayor (a, b)
{
    return a - b
}
function ordenarProductos()
{
    document.write(productos.sort(menorMayor)+"<br/>")//.reverse())
}

//Ejercicio 6
function comprar(numProducto)
{
    if (ventas [numProducto] == undefined)
    {
        ventas [numProducto] = 1
    }
    else
    {
        ventas [numProducto]++
    }
    productos [numProducto]--
    return ventas
}

/*
var comprar = function(numero)
{
    if(productos[numero] != undefined)
    {
        productos[numero] --
        if(productos[numero] != -1)
        {
            if(ventas[numero] == undefined)
            {
                ventas[numero] = 0
            }
            ventas[numero] ++
        }
        else
        {
            console.log("Ese producto no tiene stock")
            productos[numero] = 0
        }
        console.log(productos)
    }
    else
    {
        console.log("Ese producto no existe")
    }
}
*/

//Ejercicio 7
function ranking()
{
    var aux = []
    for(var i = 0; i < ventas.length; i++)
    {
        if(ventas[i] != undefined)
        {
            aux.push((i+1)+"-"+ventas[i])
        } 
    }
    
    aux = aux.sort( (a,b) => a.split("-")[1] - b.split("-")[1] ).reverse()
    
    console.log(aux)
    
    var res = "<ul>"
    for (var i = 0; i < aux.length; i++)
    {
        res += "<li>Del producto " + aux[i].split("-")[0] + " tengo " + aux[i].split("-")[1] + " unidades.</li>" 
    }
    res += "</ul>"
    document.write(res)
}
/*
function ordenarArrays(a,b)
{
        return a.split("-")[0] - b.split("-")[0]
}
*/

//Ejercicio 8
function nombreProducto(num)
{  
    ordenarProductos()
    for(var i=0; i < productos.length; i++)
    {
        if(productos[i] >= num)
        {
            document.write("El primer producto que tiene "+num+" unidades es "+(i+1)+"</br>")
            break
        }
    }
}
