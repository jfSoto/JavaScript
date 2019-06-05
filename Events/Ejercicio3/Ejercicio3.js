var inputNumeros = document.getElementById("numeros");
var botonNumUno = document.getElementById("numUno");
var botonNumDos = document.getElementById("numDos");
var botonSuma = document.getElementById("suma");
var botonResta = document.getElementById("resta");
var botonMultiplicacion = document.getElementById("multiplicacion");
var botonDivision = document.getElementById("division");
var botonIgual = document.getElementById("igual");
var botonReset = document.getElementById("reset");

var actualizar = function(numero)
{
    //otra forma de poner if else
    inputNumeros.value == 0 ? inputNumeros.value = numero : inputNumeros.value += numero
}

//innerHTML coge lo que está dentro de la etiqueta html
botonNumUno.addEventListener("click", () => actualizar(botonNumUno.innerHTML));
botonNumDos.addEventListener("click", () => actualizar(botonNumDos.innerHTML));

/*var uno = function ()
{
    if(inputNumeros == 0)
    {
        inputNumeros.value = 1
    }
    else
    {
        inputNumeros.value += 1
    }
}

var dos = function ()
{
    if(inputNumeros == 0)
    {
        inputNumeros.value = 2
    }
    else
    {
        inputNumeros.value += 2
    }
}*/

var resultado = 0
var operacion = ""

var suma = function() 
{
    operacion = "suma"
    resultado = parseFloat(inputNumeros.value)
    inputNumeros.value = 0
}

var resta = function()
{
    operacion = "resta"
    resutlado = parseFloat(inputNumeros.value)
    inputNumeros.value = 0
}

var multiplicacion = function()
{
    operacion = "multiplicacion"
    resutlado = parseFloat(inputNumeros.value)
    inputNumeros.value = 0
}

var division = function()
{
    operacion = "division"
    resutlado = parseFloat(inputNumeros.value)
    inputNumeros.value = 0
}

var igual = function()
{
    switch(operacion)
    {
        case "suma":
        resultado += parseInt(inputNumeros.value)
        inputNumeros.value = resultado
        break
        
        case "resta":
        resultado -= parseInt(inputNumeros.value)
        inputNumeros.value = resultado
        break

        case "multiplicacion":
        resultado *= parseInt(inputNumeros.value)
        inputNumeros.value = resultado
        break

        case "division":
        resultado /= parseInt(inputNumeros.value)
        inputNumeros.value = resultado
        break
    }
}

botonSuma.addEventListener("click", suma);
botonResta.addEventListener("click", resta);
botonMultiplicacion.addEventListener("click", multiplicacion);
botonDivision.addEventListener("click", division);
botonIgual.addEventListener("click", igual);

botonReset.addEventListener("click", () => inputNumeros.value = 0);
