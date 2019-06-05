var persona = 
{
    nombre: "Javier", 
    ocupacion: "policía", 
    edad: 40, 
    "lugar de partida": "Sevilla",
    arma: 
    {
        nombre: "puñetazo",
        poder: 1,
        info: function(objetivo)
        {
            console.log(this.nombre + " pega un puñetazo a " + objetivo);
        }
    },

    saludar: function()
    {
        console.log("Hola, soy " + this.nombre + " tengo " + this.edad + " años y soy " + this.ocupacion)
    },
    atacar: function(objetivo)
    { 
        console.log(this.nombre + " pega un puñetazo a " + objetivo);
    },
    equipar: function()
    {

    },
    cambiarArma: function(nombreArma)
    { 
        this.arma = mochila.armas.find( a => a.nombre == nombreArma)
        this.atacar = this.arma.info
        console.log("Te has cambiado de arma a " + nombreArma)
    },
    recargar: function()
    {
        this.arma.municion = this.arma.municionMaxima
        console.log("Has recargado tu munición")
    }
}


var mochila = 
{
    armas:
    [
        {
            nombre: "granada",
            municion: 3,
            poder: 4,
            municionMaxima: 3,
            info: function(objetivo)
            {
                if(this.arma.municion == 0)
                {
                    console.log("Sin granadas")
                }
                else 
                {
                    console.log(this.nombre + " lanza una granada a " + objetivo);
                    this.arma.municion --
                }
            }
        },
        {
            nombre: "pistola",
            poder: 2,
            municion: 6,
            municionMaxima: 6,
            info: function(objetivo)
            {
                if(this.arma.municion == 0)
                {
                    console.log("Sin munición")
                }
                else 
                {
                    console.log(this.nombre + " pega un tiro a " + objetivo);
                    this.arma.municion --
                }
            }
        },
        {
            nombre: "puñetazo",
            poder: 1,
            info: function(objetivo)
            {
                console.log(this.nombre + " pega un puñetazo a " + objetivo);
            }
        }
    ]
}

//Ejercicio 6
//Delete arma.municion

/*var stuDOOM = {
    version:1.0,
    iniciar: function() {
        
    }
}*/

var Persona = function(nom, ed)
{
    this.nombre = nom
    this.edad = ed
    this.arma = puñetazo
}

Persona.prototype.saludar = function()
{
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.")
}

var Arma = function(nom, pot)
{
    this.nombre = nom
    this.potencia = pot
}

Arma.prototype.atacar = function(enemigo)
{
    if(enemigo == undefined)
    {
        console.log("¡Selecciona un objetivo!")
    }
    else
    {
        if(this.municion == undefined)
        {
            console.log("Has atacado a " + enemigo + " con " + this.nombre + " y le has hecho " + this.potencia + " de daño")
        }
        else
        {
            if(this.municion != 0)
            {
                this.municion --
                console.log("Has atacado a " + enemigo + " con " + this.nombre + " y le has hecho " + this.potencia + " de daño")
            }
            else
            {
                console.log("¡Recagar el arma!")
            }
        }  
    } 
}

Persona.prototype.equipar = function(ar)
{
    this.arma = ar
    console.log("Te has equipado " + ar.nombre)
}
var puñetazo = new Arma("Puñetazo", 1)
Persona.prototype.arma = puñetazo
var arma1 = new Arma("Bate de beisbol", 2)
var arma2 = new Arma("Granada", 7)

var ArmaConMunicion = function(nom, pot, munMax, mun)
{
    Arma.call(this, nom, pot)
    this.municionMaxima = munMax
    this.municion = mun
}
ArmaConMunicion.prototype = Object.create(Arma.prototype)

ArmaConMunicion.prototype.recargar = function ()
{
    if(this.municion == this.municionMaxima)
    {
        console.log("Tu arma esta recargada")
    }
    else
    {
        this.municion = this.municionMaxima
        console.log("Has recargado el arma. Tienes " + this.municion + " de munición")
    }
}

var escopetaRecortada = new ArmaConMunicion("recortada", 10, 6, 6)
escopetaRecortada.atacar = function(enemigo)
{
    if(enemigo == undefined)
    {
        console.log("¡Selecciona un objetivo!")
    }
    else
    {
        if(this.municion != 0)
        {
            this.municion -= 3
            console.log("Has atacado a " + enemigo + " con " + this.nombre + " y le has hecho " + (this.potencia * 3) + " de daño")
        }
        else
        {
            console.log("¡Recagar el arma!")
        }
    }
}

var jugador1 = new Persona("Soto", 27)
var jugador2 = new Persona("Álvaro", 28)
var jugador3 = new Persona("Jaime", 22)
var jugador4 = new Persona("Javi", 27)
