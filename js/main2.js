// ***** CLASE 16: MANEJO DE ERRORES *****

try {
    console.log("En el Try se agrega el codigo a evaluar");
    noExiste;
} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try");    //aparece este mensaje porque la variable nestá declarada
} finally {
    console.log("el bloque finally se ejecutara siempre al final de un bloque try-catch");
}

// ejemplo

try {
    let numero = "y";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un numero");
    }

    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}

// ***** CLASE 17: BREAK & CONTINUE *****

// este ejemplo recorre todos los numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
console.log(numeros[i]);

}

// este ejemplo recorre todos los numeros hasta que i sea igual a 5

console.log("RECORRE LOS NUMEROS HASTA 5 Y PARA 👇")
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}

// este ejemplo recorre todos los numeros hasta que i sea igual a la quinta posicion y continua

console.log("RECORRE LOS NUMEROS HASTA EL QUINTO Y CONTINUA 👇")
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numeros[i]);
}

// ***** CLASE 18: DESTRUCTURACIÓN *****

// Es una nueva forma de asignar valores a arreglos u objetos

// sin destructuracion
let numerosD = [1, 2, 3];

let uno = numerosD[0],
    dos = numerosD[1],
    tres = numerosD[2];

    console.log(uno, dos, tres);

// con destructuracion

const [one, two, three] = numerosD;
console.log(one, two, three);

// ejemplo

const persona = {
    nombre: "Vero",
    apellido: "Strizinec",
    edad: 34
}

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);

// ***** CLASE 19: OBJETOS LITERALES: los definimos en una variables *****

let nombre1 = "Morena",
    edad1 = 10;

const perro = {
    nombre: nombre1,
    edad: edad1,
    ladrar: function () {
        console.log("guauu guauu!!")
    }
}

console.log(perro);
perro.ladrar();

// agilizar el proceso de escritura

const dog = {
    nombre1,
    edad1,
    raza: "callejero",
    ladrar() { // nueva forma de declarar metodo en objetos
    console.log("guauu guaauu guauuu!");
    }
}
console.log(dog)
dog.ladrar();

// ***** CLASE 20: PARAMETROS REST & OPERADOR SPREAD *****

// Parametros rest son una forma de agregar parametros infinitos a una variable. Se usan los ...  NO ENTENDI, REEVER!!

function sumar (a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) { 
        resultado += n
    });

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));

// SPREAD OPERATOR: Permite almacenar multiples argumentos o elementos.

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

const arr3 = [...arr1, ...arr2]; // con los ... JUNTO ambos arreglos en uno.
console.log(arr3);

// ***** CLASE 21: ARROW FUNCTIONS *****

// Las arrow functions sirve para escribir mejor una función. Para definir funciones anonimas expresadas. Una funcion expresada se genera cuando a una variable le asignar una funcion anonima.

const saludar = function () {
    console.log(`Bueeeeeeen dia`);
}

saludar();

/* Una funcion declarada seria lo siguiente:

function saludar () {
    console.log(`Bueeeeeeen dia`);
} en este caso llamar a la funcion puede estar antes o despues. 

En las funciones expresadas solamente despues de expresar la funcion. */

// Esto es una arrow function 👇

const saludo = () => console.log(`Buen diaaa`);
saludo ();

// Ejemplo. Entre parentesis va el paramentro. En este caso quiero que salude a Vero 👇

const saludar2 = nombre => console.log(`Hola ${nombre}`);
saludar2(`Vero`);

// cuando una funcion flecha no recibe un parametro siempre hay que poner ().. si recibe UN SOLO parametro se pueden omitir los parentesis.

const suma = (a,b) => a+b;

console.log(suma(8,9));


// Ejemplo

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();

// Ejemplo: como iterar cada numero de este arreglo e imprimirlos en pantalla. THIS no funciona con arrow function, tira window.

const numbers = [1,2,3,4,5];

numbers.forEach((el, index) => console.log(`${el} está en la posición ${index}`));


const Perro = {
    nombre: "More",
    ladrar: function() {
        console.log(this)
    }
}

Perro.ladrar();


