var validar = function (event) 
{
    alert("Validando los datos...");

    event.preventDefault();
}

var inicializar = function () 
{
    var formulario = document.getElementById('contacto');
    
    formulario.addEventListener('submit', validar);
}

inicializar();
