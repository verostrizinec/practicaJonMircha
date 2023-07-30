// ***** CLASE 49: SYMBOLS *****

// Nuevos tipo de datos en JavaScript
/*
Symbol es un tipo de dato primitivo. Con symbol no se usa "new". Los symbol crean identificador unico.
*/

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2); // aunque fueran iguales valida a falso
console.log(id, id2)
console.log(typeof id, typeof id2) // esto retorna el tipo de dato, symbol.

// los symbol son identificadores y no se deben cambiar, por eso se crean con const. Las const se escriben en mayuscula. Asi se crea un symbol 👇

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludo");

const persona = {
    [NOMBRE] : "Vero",
}

console.log(persona);

persona.NOMBRE = "VERO STRIZINEC" // aca cree una propiedad
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]); // me da el valor de la referencia de ese symbol

persona[SALUDAR] = function () {
    console.log(`Hola`);
}

console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona) { // voy a recorrer las propiedades que están dentro del objeto persona
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona)); // Esto me da la lista de symbol en arreglo

console.clear();

// ***** CLASE 50: SETS *****

// SETS es un nuevo tipo de dato desde 2015. Set solo acepta valores unicos, de valores primitivos.

const SET = new Set([1,2,3,3,4,5,true,false,false,{}, {}, "hola", "HOLA"]);
console.log(SET);
console.log(SET.size); // size es para saber el tamaño de un set

// otro set
const SET2 = new Set();
SET2.add(1);
SET2.add(2);
SET2.add(2);
SET2.add(3);
SET2.add(true);
SET2.add(false);
SET2.add(true);
SET2.add({});

console.log(SET2);
/*
console.log("Recorriendo set");

for (item of SET) {
    console.log(item);
}

console.log("Recorriendo set");
SET2.forEach(item => console.log((item))); // imprime cada item y mandalo a la consola
*/

let arr = Array.from(SET); // convierte en un iterable de tipo arreglo
console.log(arr);
console.log(arr[3]); // imprime la posicion 3

SET.delete("HOLA"); // para eliminar lo que le pido
console.log(SET);

console.log(SET.has("hola")); // has es para saber si existe el dato o no

SET2.clear(); // esto es para borrar un set
console.log(SET2);

console.clear();

// ***** CLASE 51: MAP *****

// Es un tipo de dato que es un objeto, sirve para almacenar un conjunto de valores asociados. Se puden agregar elementos con "set"

const mapa = new Map(); // trabaja similara los getters y setters de objetos
mapa.set("nombre", "Vero");
mapa.set("apellido", "Strizinec");
mapa.set("edad", 34);

// en los mapas podemos generar llaves que no son cadenas de texto

mapa.set(19, "diecinueve");
mapa.set(false, "falso");

console.log(mapa);
console.log(mapa.has("Nombre"));
mapa.set("nombre", "Vero Strizinec"); // asi cambiamos la propiedad
console.log(mapa.get("nombre")); // asi cambiamos la propiedad

// con un for of recorremos un mapa

for (let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}

// nuevo mapa

const mapa2 = new Map([
    ["nombre", "Morena"],
    ["edad", 10],
    ["animal", "perro"],
]);

console.log(mapa2);

// almacenar como arreglo toda la lista de llaves y valores con destructuracion

const llavesMapa2 = [...mapa2.keys()]; // del mapa 2 almacena las llaves
const valoresMapa2 = [...mapa2.values()]; // del mapa 2 almacena los valores

console.log(llavesMapa2);
console.log(valoresMapa2);