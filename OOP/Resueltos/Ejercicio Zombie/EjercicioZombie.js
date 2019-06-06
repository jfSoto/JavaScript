// Vamos a realizar paso a paso el motor de un videojuego de zombis, StuDOOM .
// Tendremos que implementar la lógica detrás de las personas, zombis, equipamiento…
//
//  1. Crear un objeto JavaScript (JSON) que representa a una persona con los datos
//     siguientes. Mostrar por consola su nombre.

var persona = 
{
    'nombre': 'Javier',
    'ocupacion': 'Policía',
    'edad': 40,
    'lugar de partida': 'Sevilla'
};

console.log(persona.nombre);

//  2. Añadir al objeto persona una función de saludo, de tal forma que al invocar la
//     función aparezca en la consola: “Hola, me llamo Javier, tengo 40 años y soy
//     policía”.

var persona = 
{
    'nombre': 'Javier',
    'ocupacion': 'policía',
    'edad': 40,
    'lugar de partida': 'Sevilla',
    saludar: function () 
    {
        console.log('Hola, me llamo ' + this.nombre + ', tengo ' + this.edad + ' años y soy ' + this.ocupacion);
    }
}

persona.saludar();

//  3. Probar la actualización de propiedades en los objetos de JavaScript. Para ello
//     invocar la función saludar() , modificar algunas propiedades de persona y
//     volver a invocar saludar() , para ver cómo se han realizado las modificaciones.

console.log('Saludo original');

persona.saludar();
persona.nombre = 'Pedro';
persona.edad++;

console.log('Saludo después de modificar el objeto');

persona.saludar();

//  4. Añadir al objeto persona un método atacar, que por defecto propina un
//     puñetazo a un objetivo. Añadir también una función equipar(arma) que realice
//     el cambio de arma cuando se le pase un arma por parámetro.

var persona = 
{
    nombre: 'Javier',
    arma: 
    {
        nombre: "puñetazo",
        poder: 1
    },
    atacar: function (objetivo) 
    {
        console.log(this.nombre + " ataca a " + objetivo + " con " + this.arma.nombre);
    },
    equipar: function (arma) 
    {
        console.log("¡Ahora tenemos " + arma.nombre + "!") this.arma = arma;
    }
}

var pistola = 
{
    nombre: "pistola",
}

//  5. Se tiene un objeto arma , y se quiere aumentar su funcionalidad añadiendo una
//     propiedad y un método. Por un lado la munición del arma y por otro, una
//     función disparar(), que usa una bala disponible y avisa si no quedan más.

var arma = 
{
    nombre: 'Pistola'
}

var pistola = 
{
    nombre: "pistola",
    poder: 2,
    municion: 6,
    disparar: function () 
    {
        if (this.municion > 0) 
        {
            this.municion = this.municion - 1;

            console.log('¡Bang! quedan ' + this.municion + ' balas');
        } 
        else 
        {
            console.log('¡Click! munición agotada');
        }
    }
}

//  6. Escribir la instrucción para borrar la propiedad municion de un objeto arma .

delete arma.municion

// 7. Crear un objeto mochila que contenga un atributo armas donde almacene
// todas las armas que tiene el usuario. Actualizar el método equipar y crear un
// método cambiarArma(String nombreArma) para elegir como arma principal
// una de las de la mochila.

var granada = 
{
    nombre: 'granada',
    poder: 4
}

var mochila = 
{
    armas: [{
        nombre: "puñetazo",
        poder: 1
    }]
}

persona.cambiarArma = function (nombreArma) 
{
    var a = mochila.armas.find(a => a.nombre == nombreArma)

    if (a != undefined) 
    {
        this.arma = a
    } 
    else 
    {
        console.log("No se encuentra el arma en la mochila")
    }
}

persona.equipar = function (arma) 
{
    mochila.armas.push(arma)

    console.log("¡Ahora tenemos " + arma.nombre + "!")

    this.arma = arma;
}

//  8. Crear la funcion ordenarArmas() , que ordena las armas de la mochila por
//     orden de potencia.

function ordenarArmas() 
{
    mochila.armas.sort((a, b) => a.poder - b.poder)
}

//  9. Crear la función mostrarInventario(inventario) que reciba una mochila e
//     imprima por consola todos los atributos de todas las armas. Ojo, sólo los
//     atributos, no las funciones. Comprobar su funcionamiento antes y después de
//     eliminar el atributo alcance de la pistola.

var mostrarInventario = function (inventario) 
{
    for (var i = 0; i < inventario.armas.length; i++) 
    {
        var keys = Object.keys(mochila.armas[i])
        var vals = Object.values(inventario.armas[i])

        for (var j = 0; j < keys.length; j++) 
        {
            if (typeof (vals[j]) != "function") 
            {
                console.log(keys[j] + ': ' + vals[j])
            }
        }

        console.log('-'.repeat(10))
    }
}

console.log('Mostrando inventario:')

mostrarInventario(mochila)

delete mochila.armas[0].alcance

console.log('Mostrando inventario después de eliminar el alcance:')

mostrarInventario(mochila)

//  10. Con el fin de mejorar la depuración y la gestión de los objetos de la aplicación,
//      vamos a crear un espacio de nombres . Crea un espacio de nombres para
//      StuDOOM con un número de versión y una función inicializadora.

var StuDOOM = 
{
    version: 1,
    iniciar: function () { /* Inicialización de la aplicación */ }
};

//  11. Crear un constructor de Persona para el objeto que hemos construido
//      anteriormente. No es necesario que el constructor tenga los atributos
//      ocupación, edad ni lugar de partida. Crear un nuevo jugador y probar sus
//      métodos.

var Persona = function (nombre) 
{
    this.nombre = nombre;
};

Persona.prototype.saludar = function () 
{
    console.log('Hola, me llamo ' + this.nombre);
};

var jugador = new Persona('Javier');

jugador.saludar();

//  12. Crear un constructor de Arma que genere las instancias de los objetos de ese
//      tipo y aumentar su prototipo con dos métodos: atacar y equipar (mostrar por
//      consola Se ha equipado X ). Crear una instancia de Arma con el operador new
//      e invocar los métodos para comprobar que funciona correctamente.

// Constructor de armas
var Arma = function (nombre) 
{
    this.nombre = nombre
    this.potencia = 1
}

// Se añaden los métodos que serán compartidos por todas las armas
Arma.prototype.atacar = function (objetivo) 
{
    console.log(this.nombre + ' causa ' + this.potencia + ' puntos de daño a ' + objetivo)
}

var mochila = 
{
    armas: [new Arma("Puñetazo")]
}

// Se añade a persona el método equipar
Persona.prototype.equipar = function (ar) 
{
    mochila.armas.push(ar)

    this.arma = ar

    console.log('Se ha equipado ' + ar.nombre)
}

// Se instancia una nueva granada
var granada = new Arma('Granada')

// Se comprueba que, efectivamente, se ha agregado el método atacar
jugador.equipar(granada);
jugador.arma.atacar('Zombi');

//  13. Añadir un tipo especializado de armas, las armas con munición , que sólo
//      pueden atacar mientras quede munición. Para ello hay crear una clase
//      heredada de Arma con dos propiedades adicionales, maxMunicion y municion .
//      Actualizar convenientemente el método atacar e implementar el método
//      recargar para volver a la munición máxima. De esta forma, las armas sólo
//      tienen las propiedades y métodos de Arma , mientras que las armas con
//      munición tienen los de Arma y ArmaConMunicion .
//      Constructor para un tipo especializado de armas

var ArmaConMunicion = function (nombre, maxMunicion) 
{
    /* Se debe llamar a la clase padre, pasando como contexto this y el
    nombre del arma como parámetro */
    Arma.call(this, nombre);

    // Se agregan o modifican las propiedades necesarias
    this.potencia = 2;
    this.maxMunicion = maxMunicion;
    this.municion = maxMunicion;
};

// Se establece como prototipo el prototipo de Arma
ArmaConMunicion.prototype = Object.create(Arma.prototype);

/* Se corrige el constructor del prototipo para que apunte al de este
constructor */
ArmaConMunicion.prototype.constructor = ArmaConMunicion.constructor;

// Añadimos un nuevo método al prototipo
ArmaConMunicion.prototype.atacar = function (objetivo) 
{
    if (this.municion > 0) 
    {
        this.municion--;

        console.log('¡Bang! causa ' + this.potencia + ' puntos de daño a ' + objetivo);
    } 
    else 
    {
        console.log('¡Click! no queda munición!');
    }
};

ArmaConMunicion.prototype.recargar = function () 
{
    this.municion = this.maxMunicion

    console.log(this.nombre + ' recargada')
};

var pistola = new ArmaConMunicion('Pistola', 6);

jugador.equipar(pistola);
jugador.arma.atacar('Zombi');

//  14. Crear un nuevo objeto, escopetaRecortada , que instancie a
//      ArmaConMunicion . Sobreescribir el método atacar para que ataque el triple que
//      las otras armas con munición. La modificación ha de hacerse sobre el objeto,
//      no sobre el prototipo.

var escopetaRecortada = new ArmaConMunicion('Escopeta con cañones recortados', 2)

escopetaRecortada.atacar = function (objetivo) 
{
    console.log('¡Boom! causa ' + this.potencia * 3 + ' puntos de daño a ' + objetivo)
}

//  15. Implementar la siguiente cadena de prototipos.Actualizar convenientemente
//      los métodos de ataque para que vaya reduciendo la vida de las criaturas.

/* Constructor de armas */
var Arma = function (nombre, potencia) {
    this.nombre = nombre;
    this.potencia = potencia;
}
Arma.prototype.atacar = function (objetivo) {
    console.log('¡Zas! ' + this.personaje.nombre + ' ataca con ' +
        this.nombre + ' y causa ' + this.potencia + ' puntos de daño a ' +
        objetivo.nombre);
    objetivo.vida = objetivo.vida - this.potencia
    if (objetivo.vida <= 0) {
        console.log("¡¡" + objetivo.nombre + " ha muerto!!")
    }
}
var ArmaConMunicion = function (nombre, potencia, maxMunicion) {
    Arma.call(this, nombre, potencia)
    this.maxMunicion = maxMunicion
    this.municion = maxMunicion
}
ArmaConMunicion.prototype = Object.create(Arma.prototype);
ArmaConMunicion.prototype.constructor = ArmaConMunicion.constructor;
ArmaConMunicion.prototype.atacar = function (objetivo) {
    if (this.municion > 0) {
        this.municion--
        console.log('¡Bang! ' + this.nombre + ' causa ' +
            this.potencia + ' puntos de daño a ' + objetivo.nombre)
        objetivo.vida = objetivo.vida - this.potencia
        if (objetivo.vida <= 0) {
            console.log("¡¡" + objetivo.nombre + " ha muerto!!")
        }
    } else {
        console.log('¡Click! ¡No queda munición!')
    }
}
ArmaConMunicion.prototype.recargar = function () {
    this.municion = this.maxMunicion
    console.log(this.nombre + ' recargada')
}
/* Clase criatura */
var Criatura = function (nombre) 
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
Persona.prototype.atacar = function (objetivo) 
{
    if (this.arma) 
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

Persona.prototype.equipar = function (arma) 
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
var granada = new Arma('Granada', 20)
var pistola = new ArmaConMunicion('Pistola', 10, 6);
