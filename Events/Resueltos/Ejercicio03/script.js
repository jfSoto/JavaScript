var pantalla = document.getElementById("pantalla")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var bmas = document.getElementById("b+")
var bigual = document.getElementById("b=")
var bclear = document.getElementById("clear")
var resParcial = 0

bclear.addEventListener("click", function () 
{
    pantalla.value = 0
})

b1.addEventListener("click", function () 
{
    if (pantalla.value == "0") 
    {
        pantalla.value = "1"
    } 
    else
    {
        pantalla.value += "1"
    }
})

b2.addEventListener("click", function () 
{
    pantalla.value == 0 ? pantalla.value = "2" : pantalla.value += "2"
})

bmas.addEventListener("click", function () 
{
    resParcial += parseInt(pantalla.value)
    pantalla.value = 0
})

bigual.addEventListener("click", function () 
{
    pantalla.value = parseInt(pantalla.value) + resParcial
    resParcial = 0
})
