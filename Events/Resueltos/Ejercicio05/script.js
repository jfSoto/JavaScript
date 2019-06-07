// Parte 1
window.addEventListener("keydown", function () 
{
    document.body.style.background = "red";
});

// Parte 2
window.addEventListener("keydown", function () 
{
    document.body.style.background = "red";
});

window.addEventListener("keyup", function () 
{
    document.body.style.background = "";
});

// Parte 3
window.addEventListener("keydown", function (event) 
{
    if (event.key == "r") 
    {
        document.body.style.background = "red";
    }
});

window.addEventListener("keyup", function (event) 
{
    if (event.key == "r") 
    {
        document.body.style.background = "";
    }
});

// Parte 4
function iniciar() 
{
    var bA = document.getElementById("botonActivar")
    var bD = document.getElementById("botonDesactivar")

    bA.addEventListener("click", function () 
    {
        window.addEventListener("keydown", cambiarColor)
        window.addEventListener("keyup", limpiarCambio)
    })

    bD.addEventListener("click", function () 
    {
        window.removeEventListener("keydown", cambiarColor)
        window.removeEventListener("keyup", limpiarCambio)
    })

    function limpiarCambio(e) 
    {
        document.body.style.background = ""
    }

    function cambiarColor(e) 
    {
        var color = ""

        switch (e.key) 
        {
            case "r":
                color = "red"
                break

            case "a":
                color = "blue"
                break

            case "b":
                color = "green"
                break

            case "@":
                color = "orange"
                break

            case "x":
                color = "purple"
                break

            case " ":
                color = "yellow"
                break

            case "AltGraph":
                color = "black"
                break

            case "Control":
                color = "grey"
                break

            case ";":
                color = "pink"
                break

            case "Shift":
                color = "brown"
                break

            case "F6":
                color = "aquamarine"
                break

            case "Enter":
                color = randomColor()
        }

        document.body.style.background = color
    }
}

function randomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

window.onload = iniciar
