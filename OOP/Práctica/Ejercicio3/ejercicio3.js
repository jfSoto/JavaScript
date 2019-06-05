var Consumible = function(_nombre, _efecto) 
{
    this.nombre = _nombre;
    this.efecto = _efecto;
}
Consumible.prototype.consumir = function(personaje) 
{
    console.log(personaje.nombre + " consume " + this.nombre + " y " + this.efecto);
}
var manzana = new Consumible('Manzana', 'no tiene ningún efecto');
var ricardo = 
{
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function(consumible) 
    {
        consumible.consumir(this);
    }
}
ricardo.consumir(manzana);

var PlantaCurativa = function(_nombre, _efecto, _vidaRecuperada)
{
    Consumible.call(this, _nombre, _efecto)
    this.vidaRecuperada = _vidaRecuperada
}

PlantaCurativa.prototype = Object.create(Consumible.prototype)

PlantaCurativa.prototype.consumir = function(personaje) 
{
    if(personaje.puntosVida == personaje.maxPuntosVida)
    {
        console.log(personaje.nombre + " consume " + this.nombre + " y no sucede nada")
    }
    else
    {
        if((this.vidaRecuperada + personaje.puntosVida) > personaje.maxPuntosVida)
        {
            console.log(personaje.nombre + " consume " + this.nombre + " y " + this.efecto + " " + 
            (personaje.maxPuntosVida - personaje.puntosVida) + " puntos de vida.")
            personaje.puntosVida = personaje.maxPuntosVida
        }
        else
        {
            console.log(personaje.nombre + " consume " + this.nombre + " y " + this.efecto + " " + 
            this.vidaRecuperada + " puntos de vida.")
            personaje.puntosVida += this.vidaRecuperada
        }
    }
}
var plantaCurativaGrande = new PlantaCurativa("Planta Curativa Grande", "recupera", 10)
ricardo.consumir(plantaCurativaGrande)

var Pastilla = function(_nombre, _efecto, _efecto2, _potenciaPlus, _vidaMenos)
{
    Consumible.call(this, _nombre, _efecto)
    this.efecto2 = _efecto2
    this.potenciaPlus = _potenciaPlus
    this.vidaMenos = _vidaMenos
}

Pastilla.prototype = Object.create(Consumible.prototype)

Pastilla.prototype.consumir = function(personaje)
{
    personaje.potencia += this.potenciaPlus
    if(personaje.puntosVida >= (personaje.maxPuntosVida - this.vidaMenos))
    {
        personaje.maxPuntosVida -= this.vidaMenos
        personaje.puntosVida = personaje.maxPuntosVida
    }
    else
    {
        personaje.maxPuntosVida -= this.vidaMenos
    }
    console.log(personaje.nombre + " consume " + this.nombre + " y " + this.efecto + " " + 
    this.potenciaPlus + " y " + this.efecto2 + " " + this.vidaMenos)
}
var pastillaGrande = new Pastilla ("Pastilla Grande", "aumenta su potencia en", "disminuye su vida máxima en", 4, 1)
ricardo.consumir(pastillaGrande)
