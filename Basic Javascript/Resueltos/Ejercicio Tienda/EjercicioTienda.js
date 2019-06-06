// Se quiere tener registrado el stock de los productos de una tienda. De momento, es
// una tienda pequeña y sólo tienen diez productos, pero se venden mucho. Por eso
// tenemos que controlar el stock de cada uno de ellos para que siempre los tengamos
// disponibles.
//
// Comenzamos únicamente con el código JavaScript:

var productos = []

// 1. Crear una función llamada iniciar() que inicialice el array de productos con
//    10 productos cuyos valores sean números aleatorios entre 0 y 100.
//    Por ejemplo, [36, 81, 69, 20, 34, 59, 7, 80, 8, 85]

function iniciar() 
{
    for (x = 0; x < 10; x++) 
    {
        productos[x] = Math.floor((Math.random() * 100));
    }
};

// 2. Escribir una función llamada verStock() que escriba en el documento una
//    lista no ordenada con el stock de todos los productos.
//    Por ejemplo: El producto número 1 tiene 36 unidades.

function verStock() 
{
    var listado = "<ul>";

    for (x = 0; x < productos.length; x++) 
    {
        listado += "<li> El producto número " + (x + 1) + " tiene " +
            productos[x] + " unidades "
    }

    listado += "</ul>"

    document.write(listado)
}

// Queremos ampliar el número de productos de la tienda. Así que nuestro código debe
// ser capaz de ampliar el número de productos. Tanto el número de productos como el
// stock debe ser aleatorio.
//
//  3. Escribir una función llamada ampliarStock() que amplíe el stock de la tienda
//     de forma aleatoria entre 1 y 5. Para ello hay que servirse de una función auxiliar
//     llamada pedirProductos(num) que devuelve un array aleatorio de tamaño num
//     o de tamaño aleatorio entre 1 y 5 si no se le pasan parámetros.
//
// Pista: Para pedirProductos(num) se puede usar el objeto arguments .

function ampliarStock() 
{
    var nuevoStock = pedirProductos();

    productos = productos.concat(nuevoStock);
}

function pedirProductos(num) 
{
    if (arguments.length === 0) 
    {
        num = Math.floor((Math.random() * 5) + 1);
    }

    var p = [];

    for (x = 0; x < num; x++) 
    {
        p[x] = Math.floor((Math.random() * 100));
    }

    return p;
}

// Ahora queremos añadir algunas funcionalidades adicionales para hacer la tienda más
// interactiva. La idea es que se puedan comprar y vender productos y poder tener un
// ranking ordenado de los productos más vendidos.
//
//  4. Implementar la función nuevoProducto() y eliminarProducto() que añade o
//     elimina sólo un producto del catálogo de productos disponibles a la venta. El
//     producto que se añada tendrá un número de stock aleatorio y el producto que
//     se elimina es el último que se añadió.

function nuevoProducto() 
{
    productos.push(Math.floor((Math.random() * 100)));
}

function eliminarProducto() 
{
    productos.pop();
}

//  5. Crear la función ordenarProductos() que ordene los productos según el stock
//     que haya, de tal forma que los productos con poco stock aparezcan primero.

function sortNumber(a, b) 
{
    return a - b;
}

function ordenarProductos() 
{
    productos.sort(sortNumber);
}

//  6. Crear una función llamada comprar(numProducto) . Comprar un producto: el
//     comprador puede comprar un producto de los disponibles en el catálogo de
//     productos. Para guardar todas las ventas realizadas, crear un nuevo array
//     global llamado ventas .

var ventas = []

function comprar(numProducto) 
{
    if (productos[numProducto] != undefined) 
    {
        productos[numProducto]--;

        if (productos[numProducto] != -1) 
        {
            if (ventas[numProducto] == undefined) 
            {
                ventas[numProducto] = 0;
            }
            ventas[numProducto]++;
        }
        else 
        {
            productos[numProducto] = 0;
        }
    }
}

// 7. Crear la función ranking() que imprima por pantalla los productos ordenados
//     desde los más vendidos a los menos vendidos.
//     Pista: Para lograrlo se puede usar un array auxiliar que una los arrays productos
//     y ventas, de tal forma que se pueda implementar una ordenación alternativa.
//     Por ejemplo: Se han vendido 2 unidades del producto 4 .

function sortProducto(a, b) 
{
    var aa = a.split("-")[0];
    var bb = b.split("-")[0];

    return aa - bb;
}

function ranking() 
{
    var aux = [];

    for (var numproducto in ventas) 
    {
        aux.push(ventas[numproducto] + "-" + numproducto);
    }

    aux.sort(sortProducto).reverse();

    var listado = "<ul>";

    for (var index in aux) 
    {
        var arr = aux[index].split("-");

        listado += "<li>Se han vendido " + arr[0] + " unidades del producto " + arr[1] + "</li > ";
    }

    listado += "</ul>"

    document.write(listado)
}

//  8. Crear una función que averigüe cuál es el primer producto que tiene X unidades
//     de stock.

function primerProducto(unidades) 
{
    if (productos.indexOf(unidades) !== -1) 
    {
        console.log("El primer producto con " + unidades + " unidades es el " + productos.indexOf(unidades) + ".")
    }
    else 
    {
        console.log("No hay ningún producto con " + unidades + "unidades.")
    }
}

//  9. Análogamente crear otra función para saber el último producto que tiene X
//     unidades de stock.

function ultimoProducto(unidades) 
{
    if (productos.lastIndexOf(unidades) !== -1) 
    {
        console.log("El último producto con " + unidades + " unidades es el " + productos.lastIndexOf(unidades) + ".")
    }
    else 
    {
        console.log("No hay ningún producto con " + unidades + "unidades.")
    }
}

//  10. Crear una función que compruebe si todos los productos tienen más de 10
//      unidades de stocks usando la función every .

function checkDiezUnidades(unidades) 
{
    return unidades >= 10;
}

function minDiezUnidades() 
{
    return productos.every(checkDiezUnidades);
}

//  11. Crear una función que compruebe si algún producto tiene 0 unidades de stock
//      usando la función some .

function checkVacio(unidades) 
{
    return unidades == 0;
}

function sinStock() 
{
    return productos.some(checkVacio);
}

//  12. Crear una función para muestre por pantalla qué productos tienen 0 unidades
//      de stock.

function checkVacioSplit(unidades) 
{
    var a = unidades.split("-")[0];

    return parseInt(a) == 0;
}

function listadoProductosSinStock() 
{
    var listado = "No hay productos sin stock.";

    if (productos.some(checkVacio)) 
    {
        var aux = [];
        var arr = [];

        listado = "";

        for (var numproducto in productos) 
        {
            arr.push(productos[numproducto] + "-" + numproducto);
        }

        aux = arr.filter(checkVacioSplit);

        for (var index in aux) 
        {
            listado += "<li>El producto " + aux[index].split("-")[1] + " no tiene stock.</li>"
        }

        listado = "<ul>" + listado + "</ul>"

        document.write(listado)
    }
    else 
    {
        document.write(listado)
    }
}
