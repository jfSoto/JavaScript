function dameColorAleatorio()
{ 
	hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
	colorAleatorio = "#"; 
	for (var i = 0; i < 6; i++)
	{ 
	   aux = Math.floor(Math.random() * hexadecimal.length) 
	   colorAleatorio += hexadecimal[aux] 
	}
	document.getElementById("iframe").style.background=colorAleatorio;
 }

window.setInterval(dameColorAleatorio,1000);
