var idTemporizador, actual;

var agregarObjetivo = function (id) 
{
    var node = document.getElementById(id);

    node.className = 'objetivo';
    
    node.addEventListener('click', ganar);
}

var eliminarObjetivo = function (id) 
{
    var node = document.getElementById(id);

    node.className = '';

    node.removeEventListener('click', ganar);
}

var ganar = function ()
{
    eliminarObjetivo(actual);

    clearTimeout(idTemporizador);

    alert("¡Has ganado!");
}

function getEnteroAleatorio(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}

var cambiarCirculo = function () 
{
    if (actual > 0) 
    {
        eliminarObjetivo(actual);
    }

    actual = getEnteroAleatorio(1, 9)

    agregarObjetivo(actual);

    idTemporizador = setTimeout(cambiarCirculo, 500);
}

var inicializar = function () 
{
    cambiarCirculo();
}

inicializar();
