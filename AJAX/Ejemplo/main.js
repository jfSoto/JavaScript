window.addEventListener("load", function()
{
    var boton = document.getElementById("boton")
    var contenedor = document.getElementById("contenedor")

    boton.addEventListener("click", function()
    {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                contenedor.innerText = this.responseText
            }
        }
        xhr.open("GET", "mensaje.txt", true)
        xhr.send()
    }) 
})