var cambiarColor = function (nodo, tecla) 
{
    switch (tecla) 
    {
        case 'r':
            nodo.className = 'rojo';
            break;

        case 'a':
            nodo.className = 'amarillo';
            break;

        case 'b':
            nodo.className = 'blanco';
            break;
    }
}

var determinarColor = function (event) 
{
    var tecla = event.key || event.keyIdentifier;
    var nodo = document.getElementById('pruebas');

    cambiarColor(nodo, tecla);
}

var inicializar = function () 
{
    var element = document.getElementById('pruebas');
    
    element.focus();
    element.addEventListener('keypress', determinarColor);
}

inicializar();
