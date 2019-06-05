/* Constructor de armas */
var Arma = function(nombre, potencia) 
{
  this.nombre = nombre;
  this.potencia = potencia;
}
Arma.prototype.atacar = function(objetivo) 
{
	if(objetivo.vida != 0) 
    {
		console.log('¡Zas! ' + this.personaje.nombre + ' ataca con ' + this.nombre + ' y causa ' + this.potencia + ' puntos de daño a ' + objetivo.nombre);
		objetivo.vida = objetivo.vida - this.potencia
    	if(objetivo.vida <= 0) 
    	{
			
			console.log("¡¡" + objetivo.nombre + " ha muerto!!")
			objetivo.vida == 0;
		}
	}
	else 
    {
		console.log(objetivo.nombre + " está muerto.");
	}
}
 
var ArmaConMunicion = function(nombre, potencia, maxMunicion) 
{
	Arma.call(this, nombre, potencia)
	this.maxMunicion = maxMunicion
	this.municion = maxMunicion
}
ArmaConMunicion.prototype = Object.create(Arma.prototype);
ArmaConMunicion.prototype.constructor = ArmaConMunicion.constructor;
ArmaConMunicion.prototype.atacar = function(objetivo) 
{
    if (this.municion > 0) 
    {
        if(objetivo.vida != 0) 
        {
			this.municion--
			console.log('¡Bang! ' + this.nombre + ' causa ' + this.potencia + ' puntos de daño a ' + objetivo.nombre)
			objetivo.vida = objetivo.vida - this.potencia
            if(objetivo.vida <= 0) 
            {
				console.log("¡¡" + objetivo.nombre + " ha muerto!!")
				objetivo.vida == 0;
			}			
        } 
        else 
        {
			console.log(objetivo.nombre + " está muerto.");
		}
    } 
    else 
    {
		console.log('¡Click! ¡No queda munición!')
	}
}
ArmaConMunicion.prototype.recargar = function() 
{
	if(this.municion == this.maxMunicion)
	{
		console.log(this.nombre + " ya está al máximo de munición.")
	}
	else
	{
		this.municion = this.maxMunicion
		console.log(this.nombre + ' recargada')
	}
}
 
 
/* Clase criatura */
var Criatura = function(nombre)
{
	this.nombre = nombre,
	this.vida = 100
}
 
/* Constructor persona */
var Persona = function (nombre) 
{
	Criatura.call(this, nombre)
}
Persona.prototype = Object.create(Criatura.prototype);
Persona.prototype.constructor = Persona.constructor;
Persona.prototype.atacar = function(objetivo) 
{
    if(this.arma) 
    {
		this.arma.atacar(objetivo);
    } 
    else
    {
		console.log('¡No se puede atacar porque no hay ningún arma equipada!')
	}
}
Persona.prototype.saludar = function () 
{
	console.log('Hola, me llamo ' + this.nombre);
}
Persona.prototype.equipar = function(arma) 
{
	console.log('Se ha equipado ' + arma.nombre)
	this.arma = arma
	mochila.armas.push(arma)
	arma.personaje = this
}
 
/* Constructor zombi */
var Zombi = function () 
{
	Criatura.call(this, "Zombi")
}
Zombi.prototype = Object.create(Criatura.prototype);
Zombi.prototype.constructor = Zombi.constructor;
Zombi.prototype.saludar = function () 
{
	console.log('Agggggg');
}
 
/* Mochila */
var mochila = 
{
  armas: []
}



var jugador = new Persona('Javier');
var z = new Zombi();
 
var granada = new Arma('Granada',20)
var pistola = new ArmaConMunicion('Pistola',10,6);
console.log("Bienvenido a StuDOOM v1.0");

var granadaClick = document.getElementById("granada")
granadaClick.addEventListener("click", () => jugador.equipar(granada))

var pistolaClick = document.getElementById("pistola")
pistolaClick.addEventListener("click", () => jugador.equipar(pistola))

var eventoAtacar = function(e)
{
	if(e.key == "d")
	{
		jugador.atacar(z)
	}
}

window.addEventListener("keydown", eventoAtacar)

var eventoRegargar = function(e)
{
	if(e.key == "r")
	{
		if(jugador.arma)
		{
			if(jugador.arma.nombre == "Pistola")
			{
				jugador.arma.recargar()
			}
			else
			{
				console.log(jugador.arma.nombre + " No se puede recargar.")
			}	
		}
		else
		{
			console.log("No hay equipada ningún arma.")
		}
	}
		
}

window.addEventListener("keydown", eventoRegargar)
