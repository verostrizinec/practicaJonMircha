// ***** CLASE 22: PROTOTIPOS *****

// Programación orientada a objetos
/* 
Clases: Es un modelo a seguir.
Objetos: Instancia de una clase. La instancia es la copia del modelo a seguir.
- Atributos: Es una caracteristica o propiedad del objeto. Los atributos son variables dentro de un objetos.
- Metodos: son las acciones que un objeto puede realizar. Son funciones dentro de un objeto.
*/

const animal = {
    nombre: "Morena",
    sonar() {
        console.log("Hago ruido porque estoy viva");
    }
}

const animal2 = {
    nombre: "Lola Bunny",
    sonar() {
        console.log("Hago ruido porque estoy viva");
    }
}


console.log(animal);
console.log(animal2);

// Funcion constructora
// De esta manera 👇 se hace una funcion constructora pero repetiria la funcion sonar MUCHAS veces

/* function Animal(nombre,genero) {
   this.nombre = nombre; // this.nombre va a ser igual a lo que el usuario pase por nombre. Son atributos.
   this.genero = genero;

   this.sonar = function() { //tanto los atributos como los metodos en funcion constructoras necesitan "this"
    console.log("Hago ruido porque estoy viva");
   }
}

const snoopy = new Animal("Snoopy","Macho"), // new permite crear un nuevo objeto
lolaBunny = new Animal("Lola Bunny","Hembra");

console.log(snoopy);
console.log(lolaBunny); */

// De esta manera 👇 se hace una funcion constructora con las funciones afuera de ella, asi no repite.
// Funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal.

function Animal(nombre,genero) {
    // atributos
   this.nombre = nombre; // this.nombre va a ser igual a lo que el usuario pase por nombre. Son atributos.
   this.genero = genero;
}

// metodos agregados al prototipo de la funcion constructora

Animal.prototype.sonar = function() { //tanto los atributos como los metodos en funcion constructoras necesitan "this"
console.log("Hago ruido porque estoy viva");
}

Animal.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
    
}

// ***** CLASE 23: HERENCIA PROTOTIPICA *****
function Perro (nombre,genero,tamanio) {
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

// Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura d emetodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
    console.log("Guauu guauu");
}

const snoopy = new Perro("Snoopy","Macho","Mediano"), // new permite crear un nuevo objeto
lolaBunny = new Animal("Lola Bunny","Hembra");

console.log(snoopy);
console.log(lolaBunny); 

snoopy.saludar();
lolaBunny.saludar();
snoopy.sonar();

// ***** CLASE 24: CLASES Y HERENCIA *****

class Animal1 { // las clases no reciben parametros. Simplifican la escritura.

constructor(nombre,genero) { //el parametro lo recibe el constructor
    this.nombre = nombre; 
    this.genero = genero;
}

   sonar() {
    console.log("Hago ruido porque vivo");
}

    saludar() {
    console.log(`Mi nombre es ${this.nombre}`);
}
}

class Perro1 extends Animal1 {
    constructor(nombre, genero, tamanio) {
        super(nombre,genero); // super manda a llamar al constructor padre
        this.tamanio = tamanio;
    }
    sonar() {
        console.log("Los perros ladramos");
    }

    ladrar() {
        console.log("guauu guauu");
    }

}


const mimi = new Animal1("Mimi","hembra"),
 scooby = new Perro1("Scooby","macho","Gigante");

console.log(mimi);
console.log(scooby);
scooby.sonar();
scooby.ladrar();

// ***** CLASE 25: METODOS ESTATICOS, GETTERS Y SETTERS  *****
// Un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase.

// Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.

// ***** CLASE 26: OBJETO CONSOLE  *****

console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que vengo estudiando");

console.clear(); // esto borra la consola
console.dir(document);

console.group("De esta manera armo un grupo 👇");
console.log("Lunes");
console.log("Martes");
console.log("Miercoles");
console.log("Jueves");
console.log("Viernes");
console.groupEnd();

// ejemplo de como hacer tabla con arrays u objetos

const numeros = [1,2,3,4,5];
    vocales = ["a","b","c","d","e"];

console.table(numeros);
console.table(vocales);

const dog = {
    nombre: "more",
    raza: "calle",
    color: "negra"
}
console.table(dog);
console.clear();

console.time("Cuanto tiempo tarda mi codigo");

const arreglo = Array(10000); // cantidad de posiciones

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i; // en la posicion i agrega el numero como valor
}

console.timeEnd("Cuanto tiempo tarda mi codigo") // es lo q tarda en ejecutarse el codigo en llenar esa cantidad de arreglo. El msj tiene q ser igual en timeEnd como en time.

console.log(arreglo); 

console.clear();

// como saber cuantas veces se ejecutó el codigo con console.count 👇

for (let i = 0; i <= 30; i++) {
    console.count("codigo for");
    console.log(i);
}

console.clear();

let x = 1,
y = 2,
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x<y, {x,y,pruebaXY}); // no pasa nada porque la prueba se ejecuta correctamente

x = 5,
y = 2,
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x<y, {x,y,pruebaXY});

