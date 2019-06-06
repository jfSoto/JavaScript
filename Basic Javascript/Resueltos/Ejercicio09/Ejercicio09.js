// Crea una página Web que lea una cadena de texto mediante el método prompt()
// y genere un array con las palabras que contiene. Posteriormente, mostrar la
// siguiente información:
//
//  a. Número de palabras.
//  b. Primera y última palabra.
//  c. Las palabras colocadas en orden inverso.
//  d. Las palabras ordenadas de la a a la z.
//  e. Las palabras ordenadas de la z a la a.

var cadena = prompt("Escribe una cadena de texto")

cadenaComoArray = cadena.split(" ")

console.log("Número de palabras: " + cadenaComoArray.length)
console.log("Primera palabra: " + cadenaComoArray[0])
console.log("Última palabra: " + cadenaComoArray[cadenaComoArray.length - 1])

cadenaComoArray.sort()

console.log("Palabras ordenadas de la a la z: " + cadenaComoArray)

cadenaComoArray.reverse()

console.log("Palabras ordenadas de la z la a: " + cadenaComoArray)
