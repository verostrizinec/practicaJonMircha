// ***** CLASE 60: WEB APIs *****

// llegamos a la interaccion con html

// API Sirve para interactuar con lo que tiene que ver con el navegador.

// DOM es una interfaz estendarizada. Es la API que tiene JS para manipular el HTML.

// BOM

console.log(window);

// ***** CLASE 61: DOM Introducción *****

console.log("**********ELEMENTOS DEL DOCUMENTO***********");
// Como agregar cosas al HTML desde el DOM
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 1000);
document.write("<h2>Hola mundo desde el DOM</h2>");

// ***** CLASE 62: DOM: Nodos, Elementos, Selectores *****

// los elementos son las etiquetas HTML
// Hay distintos tipos de de NODOS (12): un comentio, un div, un p, un texto, etc.

console.log(document.getElementsByTagName("li")) // traeme los elementos por nombre de etiquetas, por ejemplo LI.
console.log(document.getElementsByClassName("card")) // trae por nombre de clase
console.log(document.getElementsByName("nombre")); // coleccion donde encuentra la propiedad nombre
console.log(document.getElementById("menu")); // trae por ID - ESTO SE USA

// getElementsByTagName, getElementsByClassName y getElementsByName fueron reemplazados por querySelector 👇

console.log(document.querySelector("#menu")); // trae cualquier selector de html (hay q poner si es id o clase)
console.log(document.querySelector("a")); // trae el primer enlace del html
console.log(document.querySelectorAll("a")); // trae todos los enlaces del html

console.log(document.querySelector(".card")); // trae la primer .card  del html
console.log(document.querySelector(".card")[2]); // trae el segundo .card  del html
console.log(document.querySelectorAll("#menu li")); // trae los li que hay en #menu


