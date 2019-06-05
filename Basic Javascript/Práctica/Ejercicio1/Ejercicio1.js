var cad = "GrupoStudium"

String.prototype.separar_caracteres = function(cadena)
{
    var array1 = this.split("")
    var array2 = []
    for (var i=0; i < this.length -1; i++) 
    {
        array2 += array1[i] + cadena
    }
    array2 += array1[i]
    return array2
}

console.log(cad.separar_caracteres("*"))
