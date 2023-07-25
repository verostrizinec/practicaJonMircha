// ***** Declarar variables *****

let saludar = "Hola mundo"

console.log(saludar)

// Un bloque en JS es lo que está separado con { }


// ***** Esto es un objeto 🔽 *****

let objeto = {
    nombre: "Veronica",
    edad: 34,
    sexo: "femenino",
}

console.log(objeto)

// Para crear una nueva propiedad solamente tengo que poner un punto

objeto.correo = "verostrizinec@gmail.com";

// ***** Esto es un array 🔽 *****

let colores = ["Negro", "Azul", "Amarillo"]

console.log(colores)

// Para crear una nueva propiedad al array solamente tengo que usar push

colores.push("marron");

// ***** Cadenas de Texto (Strings) *****

let nombre = "Veronica";
let apellido = "Strizinec";
let saludo = "Bienvenida a JS";
let lorem = "lorem ipsun lorem ipsun";

console.log(nombre,apellido,saludo);
console.log(nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("lorem")); // includes junto con un string entre parentesis sirve para saber si encuentra esa palabra

// CONCATENACIÓN: Es unir una cadena de texto con una variable
// Interpolacion de variables es poner una cadena de texto en una variable: para eso se usa Template String. Con `` y $ para llamar a la variable
let saludo2 = `Hola, mi nombre es ${nombre} ${apellido}`;
console.log(saludo2)

// Como agregar informacion en HTML con cadena de texto

let ul = `
<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>`;

console.log(ul);

// ***** CLASE 7: NUMBERS *****


let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a,b);
console.log(parseInt(c)); // lo convierte en un numero entero
console.log(parseFloat(c)); // lo muestra con decimales
console.log(typeof c, typeof d); // el typeof muestra que tipo de dato es
console.log(c + parseFloat(d)); //suma el decimal con la cadena de texto

// ***** CLASE 8: BOOLEANS *****

let verdadero = true;
let falso = false;

/* ***** CLASE 9: undefined, null, NaN *****

undefined no imprime ningun valor. Si creo una variable sin ningun valor es undefined. 
NaN significa que NO ES UN NUMERO*/

let noEsUnNumero = "Hola" * 5;
console.log(noEsUnNumero);

// ***** CLASE 10: FUNCIONES *****

/* Las funciones son bloques de codigo independientemente del ambito global. Se define una sola vez y se ejecuta las veces que sea necesario */

// Declaracion de función

function estoEsUnaFuncion () {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

estoEsUnaFuncion(); // Asi se ejectura la función

function unaFuncionQueDevuelveValor() {
    console.log("Devuelve valor!");
    return "La funcion ha retornado una cadena de texto";
}

unaFuncionQueDevuelveValor();

// Como hacer que una funcion reciba valores

function saludar2(nombre,edad) { //nombre y edad son parametros
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar2("Veronica", 34);

// Funciones declaradas vs Funciones Expresadas

funcionDeclarada(); // Esto aparece en la consola aunque sea declarada antes de crear la funcion, pq JS ordena primero variables y funciones 

function funcionDeclarada() {
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada.");
}

funcionDeclarada();

// Funcion anonima - la asignamos como valor a una variable

const funcionExpresada = function () { 
    console.log("Esto es una funcion expresada, es decir una funcion que se ha asignado como valor a una variable. Si invocamos esta funcion antes de su definicion JS da error.")
}

funcionExpresada();

// ***** CLASE 11: ARRAYS [] ***** Es preferible declararlo con const. Es una colección de elementos.

const array = [];
const array2 = [1, true, "hola", ["A", "B", "C"]];
console.log(array);
console.log(array2);
console.log(array2[2]); // esto imprime solo la palabra "hola"
console.log(array2[3][2]); // esto muestra solo la letra "C" del array

const descuento = Array(100).fill(false); //esto se puede usar para aplicar el mismo descuento a por ejemplo 100 productos
console.log(descuento);

const colores2 = ["Rojo", "Verde", "Azul"];
console.log(colores2);

colores2.push("Negro"); // esto agrega el color negro al final del array
console.log(colores2);

colores2.forEach(function (el, index) { 
    console.log(`<li id="${index}">${el}</li>`);
})

// ***** CLASE 12: OBJETOS {} *****
// Se recomienda siempre usar const en los objetos
/* dentro de un objeto a las variables se les va a llamar atributos/propriedades y a
las funciones se les llama metodos. */

const vero = {
    nombre: "Veronica",
    apellido: "Strizinec",
    edad: 34,
    soltera: true,
    pasatiempos: ["Comer", "Dormir", "Programar"],
    contacto: {
        email: "verostrizinec@gmail.com",
        twitter: "@verostri",
        instagram: "@verostrii",
    },
    mensaje: function () {
        console.log(`Bienvenido!`)
    },
    decirMiNombre: function () {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}.`) // con this hago referencia al nombre y/o apellido
    }

}
console.log(vero);
console.log(vero["nombre"]);
console.log(vero["pasatiempos"]);
console.log(vero.pasatiempos[1]);
console.log(vero.contacto.instagram);
vero.decirMiNombre(); // de esta forma llamo a la funcion decirMiNombre

// ***** CLASE 13: TIPOS DE OPERADORES {} *****

/* Aritmeticos: + - * / % () 

El modulo (%) nos devuelve el residuo de una división. */

let modulo = 5 % 2;
console.log(modulo);

/* Relacionales: >, <, >=, <=, ==, ===m !=, !== */

console.log(8 > 9);
console.log(7 < 7);
console.log(20 !== 10);

/* Incremento Derecemento */

let incremento = 1;

incremento = incremento + 2;
console.log(incremento);

incremento += 3;
console.log(incremento);

// operador unario

incremento++; //esto soma 1 al valor de incremento
console.log(incremento);

/* operador logico: ! - not: lo que es verdadero lo vuelve falso y viceversa.
|| or: cuando tengo 2 o mas condiciones, con q una se cumpla se ejecuta.
&& and: para que una condicion se cumpla, todas tienen q ser verdaderas */

console.log(!true);
console.log(9 === 9) || ("9" === 9);
console.log(8 === 10) && (9 === 9); 

// ***** CLASE 14: CONDICIONALES {} *****

/* IF - ELSE: */

let edad = 19;

if (edad >= 18) {
    console.log("Sos mayor de edad");
} else {
    console.log("Sos menor de edad");
}

if (edad < 18) {
    console.log("Sos menor de edad");
} else {
    console.log("Sos mayor de edad");
}

/* IF - ELSE IF - ELSE: */

/* Buenos dias 6hrs - 12hrs
Buenas tardes 13hs - 19hs
Buenas noches 20hs - 24hs
Dejame dormir 1hs - 5hs */

let hora = 2;

if (hora >= 0 && hora <= 5) {
    console.log("Dejame dormir");

} else if (hora >= 6 && hora <= 12) {
    console.log("Buenos dias");
} else if (hora >= 13 && hora <= 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

/* operador ternario: (condicion) ? verdadero: falsa. Solo se puede ejecutar
una linea de codigo */

let sosMayor = (edad >= 18) 
? "Sos mayor de edad"
: "Sos menor de edad";
console.log(sosMayor); // da mayor de edad porque arriba defini edad = 19, linea 235

/* switch - case = se usa cuando tenemos diferentes valores para una misma variable.

Por ejemplo:
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sabado - 6

Se pone la variable definida entre parentesis ()*/

let dia = 4;

switch (dia) {
    case 0:
    console.log("Domingo");    
    break;
    case 1:
    console.log("Lunes");
    break;
    case 2:
    console.log("Martes");
    break;
    case 3:
    console.log("Miercoles");
    break;
    case 4:
    console.log("Jueves");
    break;
    case 5:
    console.log("Viernes");
    break;
    case 6:
    console.log("Sabado");

    default:
        console.log("No hay dias")
        break;
}

// ***** CLASE 15: CICLOS (LOOPS) *****

/* Los ciclos o bucles ejecutan ciertas lineas de codigo hasta que se cumpla una condición.
WHILE SIGNIFICA MIENTRAS*/

let contador = 2;

while (contador < 10) {
    console.log(contador);
    contador++; //esto es para no entrar en un bucle infinito
}

// do while: SIEMPRE se ejecuta por primera vez todo el bloque que está en el "do"

do {
    console.log("Se ejecuta siempre por primera vez " + contador);
    contador++;
} while (contador < 10);

/* el ciclo mas utilizado es FOR.

for (inicializacion de variable; condicion; decremento o incremento) {
    sentencia que ejecuta el for
    sentencia que ejecuta el for
    sentencia que ejecuta el for*/

for (let i = 0; i < 10; i++) {
    console.log("for" + i);
    
}

// EJEMPLO

let numerosFor = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numerosFor.length; i++) { //poniendo .length pido todo el arreglo
    console.log(numerosFor[i]);
}

// tambien se puede hacer eligiendo cierta cantidad de numeros del array

for (let i = 0; i < 5; i++) {
    console.log("Aca imprime solo 5 numeros: " + numerosFor[i]);
}

// el "for in" es para iterar todas las propriedades que tenga un objeto, por ejemplo:

const veroo = {
    nombre: "Veronica",
    apellido: "Strizinec",
    edad: 34
}

for (const propriedad in veroo) {
    console.log(`Key: ${propriedad}, Value: ${veroo[propriedad]}`);
}

// el "for of" nos permite recorrer todos los elementos de cualquier elemento iterable

for (const elemento of numerosFor) { // aca pido q recorra cualquier elemento dentro de numerosFor
    console.log(elemento);
}
