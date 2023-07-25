// ***** CLASE 34: EJERCICIOS DE LOGICA DE PROGRAMACION *****
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

// Ejercicio 1:
/* 
function contarCaracteres(cadena = "") {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
} */

const vamosAlaCancha = (cancha = "") =>
 (!cancha) 
  ? console.warn("Hoy no vas a la cancha") : console.info(`Mañana vamos a la cancha y esta frase tiene ${cancha.length} caracteres` );

vamosAlaCancha();
vamosAlaCancha("Hoy es domingo de futbol");

// Ejercicio 2:

const recortarTexto = (cadena = "", longitud = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste el texto")
        : console.info(cadena.slice(0, longitud));

recortarTexto("Hola mundo", 6);
recortarTexto();
recortarTexto("Hola que tal");

// inventado por mi
const comida = (nombre = "molleja", longitud = undefined) =>
    (!nombre)
        ? console.warn("Vos no vas a comer molleja")
        : console.log(nombre.slice(0,longitud))

comida("Vos vas a comer ñoquis", 15);
comida();

// Ejercicio 3:

const hacerUnArray = (cadenaDeTexto = "", separador = undefined) =>
    (!cadenaDeTexto)
     ? console.warn("No ingresaste una cadena de texto")
     : (separador === undefined)
      ? console.warn("No ingresaste el caracter separador")
      : console.info(cadenaDeTexto.split(separador));

hacerUnArray("Mañana vamos a la cancha de independiente", " ");

// Ejercicio 4:

const repetirTexto = (texto = "", veces = undefined) => { // si no se pasa el parametro es cadena vacia
    if(!texto) return console.warn("No ingresaste un texto"); // cuando if no tiene llaves es pq solo tiene una linea
    
    if (veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto");

    if (veces === 0) return console.error("El numero de veces no puede ser 0");

    if (Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");

    for (let i = 1; i < veces; i++) {
        console.info(`${texto}, ${i}`);
    }

} 

repetirTexto("Hola mundo", 4);
repetirTexto("Hola mundo", 0);
repetirTexto("Hola mundo", -10);
repetirTexto();
repetirTexto("Hola mundo");

console.clear();

// ***** CLASE 35: EJERCICIOS DE LOGICA DE PROGRAMACION *****

// Ejercicio 5: Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// Se pone (cadena = "") pq si el usuario no manda nada es una cadena de texto vacia. Si cadena es falsa entonces la parte verdadera es un console.warn, de lo contrario se invierte la cadena.
const invertirTexto = (cadena = "") => { 
    (!cadena)
     ? console.warn("No ingresaste un texto")
     : console.info(cadena.split("").reverse().join("")); //split divide la cadena, y join vacio es para q vuelva a ser una cadena
}

invertirTexto("No entiendo una mierda");

// Ejercicio 6: Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste texto"); //si la cadena esta vacia retorna el console warn.
    if (!texto) return console.warn("No ingresaste la palabra a evaluar");

    let i = 0,
        contador = 0;
    
    while (i !== -1) { // -1 pq si indexof no encuentra el texto, devuelve -1
        i = cadena.indexOf(texto, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`)
}

textoEnCadena();
textoEnCadena("No entiendo una mierda");
textoEnCadena("No entiendo una mierda. No entiendo porque curso esto", "entiendo");

// Ejercicio 7: Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra o frase");

    palabra = palabra.toLowerCase(); // convertir palabra a minuscula
    // se parte la palabra con split para generar un arreglo, dps reverse para revertirlo y con join se vuelve a unir
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ? console.info(`Si es palindromo, Palabra original ${palabra}, palabra al reves ${alReves}`)
    : console.info(`No es palindromo, Palabra original ${palabra}, palabra al reves ${alReves}`);
}

palindromo();
palindromo("hola Mundo");
palindromo("SaLas");

console.clear();


// Ejercicio 8: Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// usamos expresiones regulares. recibe el texto q quiero eliminar y el patron de busqueda
const eliminarCaracteres = (texto = "", patron = "") =>
(!texto) // si texto viene vacio ingresamos el warn
    ? console.warn("No ingresaste un texto")
    : (!patron) // si texto viene con algo hay que evaluar el patron y si patron es vacio va otro warn
      ? console.warn("No ingresaste un patron de caracteres")
      : console.info(texto.replace(new RegExp(patron, "ig"), ""))// cuando si ingrese un patron va la info. Replace es para reemplazar. "i" hace q no importe si es mayuscula o minuscula y g no se detiene en la primer coincidencia. RegExp es la expresion regular.

      eliminarCaracteres();
      eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
      eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
      eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy");
      eliminarCaracteres("Hola mundo", "o");

console.clear();

// ***** CLASE 37: EJERCICIOS DE LOGICA DE PROGRAMACION *****
// Ejercicio 9: Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500)); // math.round redondea y randome genera el aleatorio

aleatorio();

console.clear();


// Ejercicio 10: Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => { // numero = 0 es si el usuario no pasa nada
    if (!numero) return console.warn("No ingresaste un numero");

    // si el typeof de numero es diferente de la cadena de texto number se genera un error
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingreso NO es un numero`);
    
    // hay q convertir el numero a string para crear la variable alReves
    numero = numero.toString();
    let numeroAlReves = numero.split("").reverse().join("");

    return (numero === numeroAlReves)
    ? console.info(`Si es capicua, numero original ${numero}, numero al reves ${numeroAlReves}`)
    : console.info(`No es capicua, numero original ${numero}, palabra al reves ${numeroAlReves}`);
}

capicua();
capicua("5005");
capicua(5005);

console.clear();


// Ejercicio 11: Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
// no se puede sacar factorial de numeros negativos ni del 0.

const factorial = (number = undefined) => {
    // si el usuario no pasa un valor se genera el console.warn
    if (number === undefined) return console.warn("No ingresaste un numero");

    if (typeof number !== "number") return console.error(`El valor "${number}" ingresado NO es un numero`);

    if (number === 0) return console.error("El numero no puede ser 0"); // no se puede factoral de 0

    if (Math.sign(number) === -1) return console.error("El numero no puede ser negativo");
    
    let factorial = 1; // multiplicar desde 1 hasta el numero q pasa el usuario
    
    // si i es igual al numero q pasa el usuario, e i es mayor a 1, disminuye 1
    for (let i = number; i > 1; i--) {
        factorial *= i;
    } 

    return console.info(`El factorial de ${number} es ${factorial}`);
}

factorial();
factorial("5");
factorial([1, 2, 3]);
factorial(0);
factorial(-5);
factorial(5);
factorial(15);

console.clear();


// ***** CLASE 38: EJERCICIOS DE LOGICA DE PROGRAMACION *****

// Ejercicio 12: Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un numero`);

    if (numero === 0) return console.error("El numero no puede ser 0"); 

    if (Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

    let divisible = false;

    for(let i = 2; i < numero; i++) { // empieza con pq a partir de 2 se sabe si es divisible
        if((numero % i) === 0) // el modulo nos da el residuo, si es 0 es pq el numero se pudo dividir
        divisible = true;
        break;
    }

    return (divisible)
     ? console.log(`El numero ${numero}, no es primo`)
     : console.log(`El numero ${numero} si es primo`)
}

numeroPrimo();
numeroPrimo(300);
numeroPrimo(7);
numeroPrimo(535);

// Ejercicio 13: Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un numero`);

    return ((numero % 2) === 0)
     ? console.log(`El numero ${numero} si es par`)
     : console.log(`El numero ${numero} no es par`)
}

numeroParImpar(500);
numeroParImpar(3);

// Ejercicio 14: Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn("No ingresaste grados a convertir");

    if (typeof grados !== "number") return console.error(`El valor "${grados}" ingresado NO es un numero`);

    if (unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");

    if (typeof unidad !== "string") return console.error(`El valor "${unidad}" no es una cadena de texto`);

    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

    if (unidad === "C") {
        return console.info(`${grados}°C = ${Math.round(grados) * (9/5) + 32}°F`);
    } else if (unidad === "F") {
        return console.info(`${grados}°F = ${Math.round((grados - 32)) * (5/9)}°C`);
    }
}

convertirGrados();
convertirGrados("5");
convertirGrados(2);
convertirGrados(2,true);
convertirGrados(2,"Hola");
convertirGrados(2,"E");
convertirGrados(50,"C");
convertirGrados(60, "F");

console.clear()

// Ejercicio 15:  Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el numero a convertir");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero.`);

    if (base === undefined) return console.warn("No ingresaste la base a convertir");

    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado NO es un numero.`);

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    } else {
        return console.error("El tipo de dato a convertir no es valido");
    }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(101,2);

console.clear()

// Ejercicio 16:  Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => { // 0 pq si no pone nada no se aplica descuento
    if (monto === undefined) return console.warn("No ingresaste un monto");

    if (typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un numero.`);

    if (monto === 0) return console.error("El monto no puede ser 0");

    if (Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

    if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado NO es un numero.`);

    if (Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

    return console.info(`${monto} - ${descuento}% = ${monto - (monto * descuento)/100}`)
}

aplicarDescuento();
aplicarDescuento(0);
aplicarDescuento(-50);
aplicarDescuento(1000, 20);
aplicarDescuento(500, 20);

console.clear()

// Ejercicio 17:  Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => { 
    if (fecha === undefined) return console.warn("No ingresaste una fecha");

    if (!(fecha instanceof Date)) return console.error(`El valor que ingresaste no es una fecha valida`);

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365 // 1000 es 1 seg para JS
    let  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1) // con math.sign evaluamos si el N° es negativo
     ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
     : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

calcularAnios();
calcularAnios({});
calcularAnios(new Date());
calcularAnios(new Date(1988, 9, 11));
calcularAnios(new Date(2050, 9, 11));

console.clear()

// Ejercicio 18:  Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto");

    if (typeof cadena !== "string") return console.error(`El valor "${cadena} ingresado NO es una cadena de texto`);

    let vocales = 0
    let consonantes = 0

    cadena = cadena.toLocaleLowerCase(); // para q tome tanto minusculas coom mayusculas

    for (let letra of cadena) {
        if (/[aeiouáéíóú]/.test(letra)) { // la expresion regular test va a evaluar la letra
           vocales++; 
        }

        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
}
    return console.info ({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras();
contarLetras(3);
contarLetras("Hola mundo");
contarLetras("Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion devuelva Vocales: 4, Consonantes: 5");

console.clear();

// Ejercicio 19:  Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste un nombre");

    if (typeof nombre !== "string") return console.error(`El valor "${nombre} ingresado NO es una cadena de texto`); 

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return (expReg)
     ? console.info(`"${nombre}" es un nombre valido`)
     : console.warn(`"${nombre}" NO es un nombre valido`);
}

validarNombre();
validarNombre("Veronica");
validarNombre(45);
validarNombre("Veronica Strizinec");

console.clear();


// Ejercicio 20:  Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
    if (!email) return console.warn("No ingresaste un email valido");

    if (typeof email !== "string") return console.error(`El valor "${email} ingresado NO es una cadena de texto`); 

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email); // expresion regular para validar emails

    return (expReg)
     ? console.info(`"${email}" es un email valido`)
     : console.warn(`"${email}" NO es un email valido`);
}

validarEmail();
validarEmail(35);
validarEmail("verostrizinec@gmail.com");

// Ejercicio 21:   Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) { // esto se lee: por cada numero que venga en el arreglo
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
    }

    const newArr = arr.map(el => el * el); // recibe un elemento y se multiplica por el mismo

    return console.info(`Arreglo original: ${arr}.\nArreglo elevado al cuadrado: ${newArr}`);
}

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados([]);
devolverCuadrados(45);
devolverCuadrados([2, 8, 15]);

console.clear();

// Ejercicio 22:   Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) { // esto se lee: por cada numero que venga en el arreglo
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
    }

    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}.\nValor menor: ${Math.min(...arr)}`); // \n genera una nueva linea
}

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2,5,7,9,11]);

// Ejercicio 23:   Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) { // esto se lee: por cada numero que venga en el arreglo
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    })
}

separarParesImpares();
separarParesImpares("hola");
separarParesImpares([2,5,9,13,14,18,24,30]);

// Ejercicio 24:  Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) { // esto se lee: por cada numero que venga en el arreglo
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(), // sort ordena ascendente
        desc: arr.map(el => el).sort().reverse()
    })

}

ordenarArreglo();
ordenarArreglo("heeeello");
ordenarArreglo([2,4,5,6,2,5,7]);

// Ejercicio 25:  Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicado = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacio");

    if (arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos");

    return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index) // self es el arreglo original
    })
}

eliminarDuplicado();
eliminarDuplicado({});
eliminarDuplicado(["X", 11, "x", 11, true, true]);

// Ejercicio 26:  Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacio");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" no es un numero`);
    }

    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num
            if(index === arr.length -1) {
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
            } else {
                return total;
            }
        })
    )
}

promedio();
promedio({});
promedio([]);
promedio([1,2,3,4,5,6,7,8,9])

console.clear();

/* Ejercicio 27:  Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

// Las clases son modelos a seguir y nos permite reutilizar codigos. *** REEVER ESTE EJERCICIO 20 VECES ***

class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) { 
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
    
        // ejecucion de metodos
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);

    }

    // - Crea un método estático que devuelva los géneros aceptados*. Creamos un atributo estatico de tipo Get:

    static get listageneros (){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados() {
        return console.info(`Los generos aceptados son: ${Pelicula.listageneros.join(", ")}`);
    }

// Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.

    validarCadena(propiedad, valor) {
      if (!valor) return console.warn(`${propiedad} "${valor}" está vacio`);

      if (typeof valor !== "string") return console.error(`${propiedad} "${valor} ingresado NO ES una cadena de texto`);

      return true;
    }

// Valida que el título no rebase los 100 caracteres.  - Valida que el director no rebase los 50 caracteres.

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.warn(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);
  
        return true;
      }

 // - Valida que el año de estreno sea un número entero de 4 dígitos.

      validarNumero(propiedad,valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacio`);

        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un numero`);

        return true;
      }

// - Valida que el país o paises sea introducidos en forma de arreglo.

      validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacio`);

        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado NO es un arreglo`);

        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

        for (let cadena of valor) { 
            if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado no es una cadena de texto`);
        }

        return true;
      }

// Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
    validarIMDB(id) {
        if (this.validarCadena("IMDB id",id)) 
         if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) // "Si NO se cumple la condición de que el 'id' coincida con un patrón que comienza con dos letras minúsculas seguidas de siete dígitos, entonces..."
            return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`);
}

// Valida que el título no rebase los 100 caracteres.  - Valida que el director no rebase los 50 caracteres.

validarTitulo(titulo) {
    if (this.validarCadena("Titulo",titulo)) 
     this.validarLongitudCadena("Titulo", titulo, 100); // 100 son los caracteres
}

validarDirector(director) {
    if (this.validarCadena("Director",director)) 
     this.validarLongitudCadena("Titulo", director, 50); // 50 son los caracteres
}

// - Valida que el año de estreno sea un número entero de 4 dígitos.
validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno",estreno)) 
     if (!(/^([0-9]){4}$/.test(estreno))) // No debe haber nada antes /.. no debe haber nada despues ^
        return console.error(`Año de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`);
}

// - Valida que el país o paises sea introducidos en forma de arreglo.

validarPais(pais) {
    this.validarArreglo("Pais", pais)
}

// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
        for (let genero of generos) {
            //console.log(genero, Pelicula.listageneros.includes(genero)); // esto es para saber si incluye los generos permitidos
            if (!Pelicula.listageneros.includes(genero)) {
                return console.error(`Genero(s) incorrectos "${generos.join(", ")}`);
                Pelicula.generosAceptados();
            }
        }
    }
}

// - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.

validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
     return (calificacion < 0 || calificacion > 10)
      ? console.error(`La calificacion tiene que estar en un rato entre 0 y 10`)
      : this.calificacion = calificacion.toFixed(1);

}

// - Crea un método que devuelva toda la ficha técnica de la película.
 fichaTecnica() {
    console.info(`Ficha tecnica:\nTitulo: "${this.titulo}"\nDirector:"${this.director}"\nAño: "${this.estreno}"n\Pais: "${this.pais.join("-")}\nGeneros: "${this.generos.join(", ")}\nCalificacion: "${this.calificacion}"\nIMDB Id: "${this.id}"`)
 }
}

Pelicula.generosAceptados();
const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Titulo de la peli",
    director: "director de la peli",
    estreno: 2020,
    pais: ["Argentina", "Brasil"],
    generos: ["Comedy", "Sport"],
    calificacion: 8,
});

peli.fichaTecnica();

//  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

const misPelis = [
    {
        id: "tt0758758",
        titulo: "Into the Wild",
        director: "Sean Penn",
        estreno: 2007,
        pais: ["USA"],
        generos: ["Adventure", "Biography", "Drama"],
        calificacion: 8.1
    },
    {
        id: "tt0479143",
        titulo: "Rocky Balboa",
        director: "Sylvester Stallone",
        estreno: 2006,
        pais: ["USA"],
        generos: ["Action", "Drama", "Sport"],
        calificacion: 7.1
    },
    {
        id: "tt0468569",
        titulo: "The Dark Knight",
        director: "Christopher Nolan",
        estreno: 2008,
        pais: ["USA", "UK"],
        generos: ["Action", "Crime", "Drama"],
        calificacion: 9.0
    }
 
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());

