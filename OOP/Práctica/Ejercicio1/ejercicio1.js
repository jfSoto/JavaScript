var Jugadores = function(nom, ape, ocu, niv, fac)
{
    this.nombre = nom
    this.apellido = ape
    this.ocupacion = ocu
    this.nivel = niv
    this.faccion = fac
}

Jugadores.prototype.toString = function jugadorToString() 
{
    var resultado = this.nombre + " " + this.apellido + " es " + this.ocupacion + ", su nivel es " + 
    this.nivel 
    if(this.faccion != undefined)
    {
        resultado += " y pertenece a los " + this.faccion;
    }
    return resultado;
}

jugadores = [new Jugadores("José Fco.", "Soto Camacho", "Estudiante", 10, "Piratas"), new Jugadores("Álvaro", "Sánchez Doncel", "Estudiante", 12, "Vaqueros")]

delete jugadores[1].faccion
