// ***** CLASE 32: FUNCIONES ANONIMAS EJECUTABLES *****

// Funcion anonima autoejecutable
// alert("Hola") ; alert seria el nombre de la funcion

(function () { // la funcion anonima va entre parentesis
    console.log("Mi primer funcion anonima autoejecutada");
})();

(function (d, w, c) { 
    console.log("Mi segunda funcion anonima autoejecutada");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log");
})(document, window, console);

// 4 formas de escribir una funciona anonima autoejecutable 👇

// clasica
(function () {
    console.log("version clasica");
})();

// La Crockford
((function () {
    console.log("Version Crockford")
})());

//Unaria
+function () {
    console.log("Version unaria");
}();

// Facebook
!function () {
    console.log("version facebook");
}();

console.clear();

// ***** CLASE 33: MODULOS (IMPORT / EXPORT) *****
// El codigo javascript se pone antes del </body> en html

/* Como hacer para exportar un archivo js? Si yo tengo un archivo por ejemplo: constantes.js y otro modulos.js tengo que hacer lo siguiente:

en constantes.js poner(ejemplo): export const PI = Math().PI;
en modulos.js lo importo de esta manera: import {PI} from "./constantes.js" (siempre va ./) (Entre llaves va el nombre de la variable que cree)

- Para exportar una funcion por defecto hay que poner: export y default

*/

