// ***** CLASE 27: OBJETO DATE  *****

console.log(Date());

let fecha = new Date(); // Variable fecha que tiene un nuevo objeto de tipo date
console.log(fecha);

console.log(fecha.getDate()); // esto muestra el dia del mes
console.log(fecha.getDay()); // muestra el dia de la semana: empieza a contar de 0
console.log(fecha.getMonth()); // esto muestra el mes: empieza a contar de 0
console.log(fecha.getFullYear()); // esto muestra el año
console.log(fecha.getHours()); // esto muestra la hora
console.log(fecha.getMinutes()); // muestra los minutos
console.log(fecha.getSeconds()); // muestra los segundos
console.log(fecha.toString()); // la muestra como cadena de texto
console.log(fecha.toDateString()); // muestra solo la fecha
console.log(fecha.toLocaleString()); // muestra la fecha y hora
console.log(fecha.toLocaleTimeString()); // muestra solo la hora

let cumpleVero = new Date(1988,7,11);
console.log(cumpleVero);

// ***** CLASE 28: OBJETO MATH. *****

console.log("OBJETO MATH PARA HACER OPERACIONES MATEMATICAS 👇👇👇👇👇👇👇👇");

console.log(Math);
console.log(Math.PI); // muestra el numero PI
console.log(Math.abs(15.6)); // muestra el valor absoluto de un numero
console.log(Math.abs(-15)); // muestra el valor absoluto de un numero, no importa si es negativo
console.log(Math.ceil(7.3)); // muestra el numero entero mayor
console.log(Math.floor(7.3)); // muestra el numero entero menor
console.log(Math.round(7.3)); // muestra el numero mas cercano
console.log(Math.sqrt(81)); // muestra la raiz cuadrada
console.log(Math.pow(2,5)); // muestra el numero elevado a la potencia: 2 a la quinta
console.log(Math.sign(5)); // indica si el numero es negativo, positivo o 0 (1, 0, -1)
console.log(Math.random()); // numero aleatorio entre 0 y 1
console.log(Math.random() * 1000); // numero aleatorio entre 0 y 1000
console.log(Math.round(Math.random() * 1000)); // numero aleatorio entre 0 y 1000 entero

// ***** CLASE 29: OPERADOR DE CORTOCIRCUITO *****
/*
Cortocircuito OR ||: Cuando el valor de la izquierda en la expresion siempre pueda valdar a true, es el valor que se cargará por defecto.

Cortocircuito AND &&: Cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargará por defecto.
*/

console.log("OPERADOR DE CORTOCIRCUITO. 👇👇👇👇👇👇👇👇");

function saludar (nombre) {
    nombre = nombre || "Desconocido"; // esto es un operador de cortocircuito. Si nombre no se define, va "desconocido"
    console.log(`Hola ${nombre}`);
}

console.log();

saludar("Vero");
saludar();

console.log(19 || "Valor de la derecha"); // cuando la izquierda valida true, se carga ese valor
console.log(null || "Valor de la derecha"); // cuando la izquierda valida false, se carga ese valor
console.log(null && "Valor de la derecha"); 

console.clear();
// ***** CLASE 30: alert, confirm, prompt. Cuelgan del objeto global window. *****

/* alert("Esto es una alerta!");
confirm("Esto es una confirmación");
prompt("El prompt permite que el usuario ingrese un valor"); */

let alerta = alert("Esto es una alerta!");
    confirmacion = confirm("Esto es una confirmación");
    aviso = prompt("El prompt permite que el usuario ingrese un valor");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);

// ***** CLASE 31: EXPRESIONES REGULARES *****
/*
Secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadena de caracteres. Sirve como para validar un DNI, o una tarjeta, etc.
*/

let cadena = "lorem ipsum dolor lorem ipsum";

let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/ig;

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));



