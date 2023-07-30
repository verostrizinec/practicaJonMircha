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

// ***** CLASE 50:  *****
