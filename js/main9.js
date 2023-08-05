// ***** CLASE 53: ITERABLES & ITERATOS *****
/*
Los elementos iterables guardan algunas caracteristicas.

Los iteradores es el mecanismo que recorre los elementos.
*/

/*
Tipos de datos iterables:

const iterable = "Hola mundo";
const iterable = new Set([1,2,3,3,4,5]);
const iterable = new Map([["nombre", "jon"],["edad", 35]]);
*/

const iterable = [1,2,3,4,5];

const iterador = iterable[Symbol.iterator](); // para acceder al iterable del iterador accedemos mediante symbol

console.log(iterable);
console.log(iterador);
/*
console.log(iterador.next()); // next devuelve un objeto
console.log(iterador.next()); 
console.log(iterador.next()); 
console.log(iterador.next()); 
console.log(iterador.next()); 
console.log(iterador.next()); 

Para no crear un next por cada dato del arreglo se puede hacer de la siguiente manera:
*/

let next = iterador.next();

while (!next.done) { // se lee: mientras next.done sea falto imprime:
    console.log(next.value);
    next = iterador.next();
}

// ***** CLASE 54: GENERATORS *****
/*
Es una funcion que nos permite trabajar mejor con los iteradores.
*/

function* iterable2 () { // el * indica que es un generador
    yield "hola"; // un yield es como un return
    console.log("Hola consola");
    yield "hola 2";
    console.log("Seguimos explicando el codigo");
    yield "hola 3";
    yield "hola 4";
}

let iterador2 = iterable2();
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());

// lo anterior tambien se puede hacer con un for
/*
for (let y of iterador2) { // por cada y que haya en iterador2
    console.log(y);
}
*/

const arr = [...iterable2()]; // guardo en un array
console.log(arr);

// trabajar asincronia con generadores

function cuadrado(valor) {
    setTimeout(() => {
       console.log({valor,resultado: valor*valor}) 
    }, Math.random() * 1000);
    return { 
        valor,
        resultado: valor * valor
    }
}

function* generador() {
    console.log("Inicia generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina generator");
}

let gen = generador();

for (let y of gen) {
    console.log(y);
}

console.clear();

// ***** CLASE 55: PROXIES *****

// El proxie es un mecanismo que permite crear un objeto basado en un objeto literal inicial.

const persona = {
    nombre: "",
    apellido: "",
    edad: 0,
}

const manejador = {
    set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) { // ESTO EVALUA QUE EXISTA LA PROPIEDAD TWITTER, si devuelve -1 es pq no existe la propiedad en el objeto persona 
            return console.error(`La propiedad ${prop} no existe en el objeto persona.`);
        }
        obj[prop] = valor;
    }
}

const jon = new Proxy(persona, manejador);

jon.nombre = "Vero";
jon.apellido = "Mircha";
jon.edad = 35;
jon.twitter = "@jonmircha";

console.log(jon);
console.log(persona);

