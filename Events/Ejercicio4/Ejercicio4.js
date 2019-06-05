function dameColorAleatorio()
{ 
	hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
	colorAleatorio = "#"; 
	for (var i = 0; i < 6; i++)
	{ 
	   aux = Math.floor(Math.random() * hexadecimal.length) 
	   colorAleatorio += hexadecimal[aux] 
	}
	return colorAleatorio;
 }



var cambioColor = function(e)
{
    teclas = ["r", "a", "b", "@", "x", " ", "AltGraph", "Control", ";", "Shift", "F6", "Enter"]
    colores = ["red", "blue", "green", "orange", "purple", "yellow", "black", "grey", "pink", "brown", "aquamarine", dameColorAleatorio()]
    document.body.style.background = colores[teclas.indexOf(e.key)]


/*    switch(e.key)
    {
        case "r":
        document.body.style.background = "red"
        break

        case "a":
        document.body.style.background = "blue"
        break

        case "b":
        document.body.style.background = "green"
        break

        case "@":
        document.body.style.background = "orange"
        break

        case "x":
        document.body.style.background = "purple"
        break

        case " ":
        document.body.style.background = "yellow"
        break

        case "AltGraph": 
        document.body.style.background = "black"
        break

        case "Control":
        document.body.style.background = "grey"
        break

        case ";":
        document.body.style.background = "pink"
        break

        case "Shift":
        document.body.style.background = "brown"
        break

        case "F6":
        document.body.style.background = "aquamarine"
        break

        case "Enter":
        dameColorAleatorio()
        break
    }*/
    console.log(e.key)
}

var ponerBlanco = function()
{
    document.body.style.background = "white"
}

var activar = function()
{
    window.addEventListener("keydown", cambioColor);
    window.addEventListener("keyup", ponerBlanco);
}

var desactivar = function()
{
    window.removeEventListener("keydown", cambioColor);
    window.removeEventListener("keyup", ponerBlanco);
}
