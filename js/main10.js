// ***** CLASE 56: PROPIEDADES DINAMICAS DE LOS OBJETOS *****
// sirve para agregar nuevos objetos dinamicamente

let aleatorio = Math.round(Math.random() *100 + 5); // vamos a crear un id aleatorio y usamos round para redondear

const objUsuarios = {
    propiedad: "Valor",
    [`id_${aleatorio}`]: "Valor Aleatorio" 
};
console.log(objUsuarios);

const usuarios = ["Vero", "Maxi", "Luci", "Susi", "Danko"];

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);
// yo quiero q id_1 se genere dinamicamente. [] nos permite crear de manera dinamica los nombres de las propiedades de nuestro objeto. Lo igualo a usuarios para q el nombre sea igual al usuario
console.log(objUsuarios);

console.clear();

// ***** CLASE 57: THIS *****
// This: hace referencia al objeto en cuestion para invocar propiedades o metodos.

console.log(this); // this hace referencia al objeto global (window)
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global"; // asi creo una variable al window
console.log(this.nombre);

// creo una funcion para imprimir el nombre

function imprimir() {
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre: "Contexto objeto",
    imprimir: function () {
        console.log(this.nombre);
    }
}

obj.imprimir(); // imprime contexto objeto pq la funcion se hizo dentro de obj

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir // hace referencia a la funcion anterior imprimir
}

obj2.imprimir();

const obj3 = {
    nombre: "Contexto objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    }
}

obj3.imprimir(); // la arrow function hace la referencia del padre del objeto q se creo, por eso devuelve "contexto global", por eso es mejor no usar arrow function con this

function Persona(nombre) { // funcion constructora q crea su propio scope
    this.nombre = nombre;
    return console.log(this.nombre);
}

let vero = new Persona("Vero");

console.clear();

// ***** CLASE 58: CALL, APPLY, BIND *****

this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "Maxi");

const objeto = {
    lugar: "Contexto objeto"
}

saludar.call(objeto, "Hola", "Vero"); // el metodo call llama a un nuevo this, por ejemplo "contexto objeto"
saludar.apply(objeto, ["Adios", "Strizinec"]); // apply utiliza arreglo

// BIND (enlace)

const persona = {
    nombre: "Jon",
    saludar: function() {
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar();

const otraPersona = {
  //  saludar: persona.saludar // con esta prop saludar hacemos referencia al objeto persona anterior
    saludar: persona.saludar.bind(persona) // asi enlaza el nombre de persona anterior
}

otraPersona.saludar();
