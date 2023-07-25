// ***** CLASE 44: TEMPORIZADORES (setTimeout & setInterval) *****

/* console.log("inicio");
setTimeout(() => {
    console.log("Ejecutando un setTimeOut, esto se ejecuta una sola vez");
}, 1000); // el console.log se ejecuta despues de 1 segundo pq dice 1000

setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejectura indefinidamente cada cierto intervalo de tiempo");
}, 1000); */


/* setInterval(() => {
    console.log(new Date().toLocaleTimeString()); // asi se muestra el paso de segundos, sirve para poner un reloj
}, 1000);

*/

// Para poder cancelar un setTimeOut hay que guardarlo en una variable 👇

/* let temporizador = setTimeout(() => {
    console.log(new Date().toLocaleDateString());
}, 1000);

clearTimeout(temporizador);
console.log("Despues del clearTimeOut"); */

/*
let temporizador = setInterval(() => {
    console.log(new Date().toLocaleDateString());
}, 1000);

clearInterval(temporizador);
console.log("Despues del clearInterval"); */

// ***** CLASE 45: ASINCRONIA Y EL EVENT LOOP  *****

/*
- Procesamiento Single Thread (un sólo subproceso o hilo (single thread), lo que significa que sólo puede ejecutar una cosa a la vez) y Multi Thread (varios hilos):

    Un hilo la unidad básica de ejecución de un proceso, cada que abres un programa como el navegador o tu editor de código, se levanta un proceso en tu computadora e internamente este puede tener uno o varios hilos (threads) ejecutándose para que el proceso funcione.

- Operaciones de CPU y Operaciones de I / O (entrada y salida)
    Operaciones CPU: Aquellas que pasan el mayor tiempo consumiendo Procesos del CPU, por ejemplo, la escritura de ficheros.
    Operaciones de Entrada y Salida: Aquellas que pasan la mayor parte del tiempo esperando la respuesta de una petición o recurso, como la solicitud a una API o BD.

- Operaciones Concurrentes (varias tareas progresan al mismo tiempo) y Paralelas (varias tareas ocurren al mismo tiempo, pero arrancan al mismo tiempo tb)

    Concurrencia: cuando dos o más tareas progresan simultáneamente.
    Paralelismo: cuando dos o más tareas se ejecutan, al mismo tiempo.

- Operaciones Bloqueantes y No Bloqueantes

    Bloqueante: Son operaciones que no devuelven el control a nuestra aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.
    No Bloqueante: Son operaciones que devuelven inmediatamente el control a nuestra aplicación, independientemente del resultado de esta. En caso de que se haya completado, devolverá los datos solicitados. En caso contrario (si la operación no ha podido ser satisfecha) podría devolver un código de error.

- Operaciones Sincronas y Asincronas

    Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.
    Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.


Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).

Gracias a esta solución, Javascript es áltamente concurrente a pesar de emplear un sólo hilo.
*/


/* Código síncrono y bloqueante */
(() => {
console.log("Inicio");

function dos() {
  console.log("Dos");
}

function uno() {
  console.log("Uno");
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");

})();
/* Código asíncrono y no bloquenate*/
(() => {
console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");

})();