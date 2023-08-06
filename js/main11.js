// ***** CLASE 59: JSON *****

// Notacion de objeto Javascript, es un formato de intercambio de datos. Es como por ejemplo cuadndo compro en carrefour y me manda a mercadopago, una está hecha quizas en javascirpt y la otra en python.. JSON es quien hace que se entiendan.

const json = {
    cadena: "Vero",
    numero: 34,
    boleeano: true,
    arreglo: [
        "futbol",
        "programar",
        "comer"
    ],
    objeto: {
        instagram: "Verostrii",
        email: "verostrizinec@gmail.com"
    },
    nulo: null
}

// este objeto que cree arriba lo copio en datos.json y las propiedades tienen q ir con comillas. Tambien los numeros y boleanos.

console.log(JSON);

// parse analiza una cadena de tetxo y la convierte en un tipo de dato que js valide

console.log(JSON.parse("{}")); // esta cadena de texto la convierte en objeto
console.log(JSON.parse("[1,2,3]")); // esta cadena de texto la convierte en array
console.log(JSON.parse("true")); // esta cadena de texto la convierte en boleano

// stringify convierte un valor valido de javascript y lo convierte en cadena de texto

console.log(JSON.stringify({})); // stringify convierte el objeto en cadena de texto
console.log(JSON.stringify([1,2,3])); // stringify convierte el array en cadena de texto
console.log(JSON.stringify(json)); // stringify convierte el datos.json en cadena de texto

console.clear();
