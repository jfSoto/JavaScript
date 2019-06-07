var mostrarMensaje = function () 
{
    alert('Se ha puesto en pausa el reproductor');
}

var inicializar = function () 
{
    var reproductor = document.getElementById('reproductor');
    
    reproductor.addEventListener('pause', mostrarMensaje);
}

inicializar();
