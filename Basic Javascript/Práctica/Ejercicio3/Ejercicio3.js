var nombre = document.cookie;
var array = nombre.split(", ")

function cargar() 
{
    if (array[0] == "rojo") 
    {
        document.getElementById("parrafo").style.color = "#FF0000"
    } 
    else if (array[0] == "azul") 
    {
        document.getElementById("parrafo").style.color = "#0000FF"
    }

    if (array[1] == "arial") 
    {
        document.getElementById("parrafo").style.fontFamily = "arial"
    } 
    else if (array[1] == "verdana") 
    {
        document.getElementById("parrafo").style.fontFamily = "verdana"
    }
}

function botonColor1() 
{
    array[0] = "rojo"
    document.cookie = array[0] + ", " + array[1]
    document.getElementById("parrafo").style.color = "#FF0000"
}

function botonColor2() 
{
    array[0] = "azul"
    document.cookie = array[0] + ", " + array[1]
    document.getElementById("parrafo").style.color = "#0000FF"
}

function botonFuente1() 
{
    array[1] = "arial"
    document.cookie = array[0] + ", " + array[1]
    document.getElementById("parrafo").style.fontFamily = "arial"
}

function botonFuente2() 
{
    array[1] = "verdana"
    document.cookie = array[0] + ", " + array[1]
    document.getElementById("parrafo").style.fontFamily = "verdana"
}
