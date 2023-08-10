// ***** CLASE 63: DOM: Atributos y Data-Attributes *****

// como interactuar con los atributos html 👇

console.log(document.documentElement.lang); // para acceder a lang del html
console.log(document.documentElement.getAttribute("lang")); // para acceder a lang del html. Esto solo trae el atributo
console.log(document.querySelector(".link-dom").href); // muestra la url de liveserver
console.log(document.querySelector(".link-dom").getAttribute("href")); // muestra la url dom-html

document.documentElement.lang = "en"; // asi cambio el atributo
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-AR");
console.log(document.documentElement.lang);

// como guardar en variables elementos del dom 👇

const $linkDOM = document.querySelector(".link-dom"); // los arreglos y los objetos es mejor const, para elementos del dom tb. Cuando guardas elementos del DOM es buena practica poner $ al nombre

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.google.com"); // esto cambia el atributo en el html
console.log($linkDOM.hasAttribute("rel")); // esto es para saber si tiene el atributo rel
$linkDOM.removeAttribute("rel"); // de esta manera lo elimino
console.log($linkDOM.hasAttribute("rel")); // esto es para saber si tiene el atributo rel

// Data Attributes: 
console.log($linkDOM.getAttribute("data-description")); // muestra Document Object Model
console.log($linkDOM.dataset); // muestra el objeto
console.log($linkDOM.dataset.description);  // muestra el valor de data-description
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.getAttribute("data-description")); // muestra Document Object Model
$linkDOM.dataset.description = "podes googlearlo"; // asi cambio la descripcion
console.log($linkDOM.dataset.description);

// ***** CLASE 64: DOM: Estilos y Variables CSS *****

// const $linkDOM = document.querySelector(".link-DOM"); (lo comento porque ya está declarado antes)
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none"); // como cambiar los estilos
$linkDOM.style.setProperty("display","block"); // como cambiar los estilos
$linkDOM.style.width = "50%"; // como cambiar los estilos
$linkDOM.style.textAlign = "center"; // como cambiar los estilos
$linkDOM.style.marginLeft = "auto"; // como cambiar los estilos
$linkDOM.style.marginRight = "auto"; // como cambiar los estilos
$linkDOM.style.padding = "1rem"; // como cambiar los estilos
$linkDOM.style.borderRadius = ".5rem"; // como cambiar los estilos

console.log($linkDOM.style);

// Variables CSS - Custom Properties CSS

const $html = document.documentElement, // esto representala etiqueta HTML
 $body = document.body;

 let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

  console.log(varDarkColor, varYellowColor); // accedimos a las variables

  $body.style.backgroundColor = varDarkColor; // asi las modifico
  $body.style.color = varYellowColor;

  $html.style.setProperty("--dark-color", "gray"); // esto establece el valor en el html, pero no lo modifica
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); // asi lo modifico

$body.style.setProperty("background-color", varDarkColor); // asi lo modifico

// ***** CLASE 65: DOM: Clases CSS *****

// le di stylos en dom.html
// se usa className y classList para modificar las clases

const $card = document.querySelector(".card"); // traigo la primer card que existe en el documento

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45")); // contains devuelve un booleano para saber si tenemos o no la clase que le indicamos. Esto da false pq no existe rotate-45
$card.classList.add("rotate-45"); // de esta manera agregamos la clase
console.log($card.classList.contains("rotate-45")); // Ahora da true porque existe rotate-45

$card.classList.remove("rotate-45"); // de esta manera eliminamos la clase!!
$card.classList.toggle("rotate-45"); // toggle funciona como interruptor. Si no está la agrega, si está la elimina. Esto es muy util con el dark-mode!!!
$card.classList.replace("rotate-45", "rotate-135"); // esto reemplaza de uno en uno. Reemplaza 45 por 135.
$card.classList.add("opacity-80", "sepia"); // Esto se lee: a card, en su lista de clase, agregale opacity-80 y sepia. Remove y toggle funcionan igual

// ***** CLASE 66: DOM: Texto y HTML *****

// como interactuar con el contenido textual y del html

const $whatIsDOM = document.getElementById("que-es"); // aca interactuamos con el ID #que-es del html

let text = `
    <p>
    El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HMTL y XML.
    </p>
    <p>
    Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
    </p>
`;

$whatIsDOM.innerText = text; // sirve para agregar contenido, pero innerText fue creada para internet explorer. innerText no reconoce las etiquetas html, las agrega como texto
$whatIsDOM.textContent = text; // sirve para agregar contenido, pero tampoco interpreta las etiquetas html. Usarlo cuando queres insertar solo texto.
$whatIsDOM.innerHTML = text; // sirve para agregar contenido, E INTERPRETA LAS ETIQUETAS HTML. USAR ESTE!!

$whatIsDOM.outerHTML = text; // outerHTML es reemplazar el elemento del DOM (whatIsDOM) por el contenido (text)

console.clear();

// ***** CLASE 67: DOM: Traversing: Recorriendo el DOM *****
// Traversing es una serie de propiedades que nos da el API del DOM para recorrer diferentes elementos.

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); // muestra los hijos de cards
console.log($cards.children[2]); // muestra el segundo hijo de cards
console.log($cards.parentElement); 
console.log($cards.firstChild); // muestra el primer hijo
console.log($cards.firstElementChild); // muestra la primer tarjeta
console.log($cards.lastElementChild); // muestra la ultima tarjeta
console.log($cards.previousSibling); // muestra el hermano anterior
console.log($cards.previousElementSibling); // muestra el hermano anterior
console.log($cards.nextElementSibling); // muestra el hermano posterior
console.log($cards.closest("div")); // es un metodo que busca el ancestro mas cercano del tipo de selector que le demos. En este caso da null porque no hay div
console.log($cards.closest("body")); 
console.log($cards.children[3].closest("section"));  // tomando como referencia el tercer hijo cual es la section mas cercana