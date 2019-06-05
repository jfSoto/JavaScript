var Zombi = function(nombre, puntosVida, potencia) 
{
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.maxVida = puntosVida;
    this.potencia = potencia;
}
Zombi.prototype.atacar = function(objetivo) 
{
    console.log(this.nombre + " ataca a " + objetivo + " y le causa " + this.potencia + " puntos de daño");
}
Zombi.prototype.mover = function(tipoTerreno) 
{
    if (tipoTerreno === "agua") 
    {
        console.log(this.nombre + " No se puede mover a través de este tipo de terreno");
    } 
    else 
    {
        console.log(this.nombre + " se mueve a través del " + tipoTerreno);
    }
}
var zombi = new Zombi('Bob', 2, 3);
zombi.atacar('Javi');
zombi.mover('bosque');

var monstruoAcuatico = new Zombi("Pepe", 4, 6)
monstruoAcuatico.atacar("Javi")
monstruoAcuatico.mover = function(tipoTerreno)
{
    if(tipoTerreno === "agua")
    {
        console.log(this.nombre + " nada a través del " + tipoTerreno);
    }
    else
    {
        console.log(this.nombre + " No se puede mover a través de este tipo de terreno");
    }
}
monstruoAcuatico.mover("agua")

var abominacion = new Zombi("Eustaquio", 8, 4)
abominacion.atacar = function(objetivo)
{
    for(var i = 0; i < 2; i++)
    {
        console.log(this.nombre + " ataca a " + objetivo + " y le causa " + this.potencia + " puntos de daño"); 
    }
}
abominacion.atacar("Javi")
abominacion.mover("agua")
