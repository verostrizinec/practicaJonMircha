// ***** CLASE 46: CALLBACKS  *****

/* Una callback es una funcion que se ejecuta despues que otra lo haga. */
/*
function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random() * 100)
}

cuadradoCallback(0, (value, result) => {
    console.log("Inicia callback")
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                });
            });
        });
    });
});
*/
console.clear();

// ***** CLASE 47: PROMESAS  *****

function cuadradoPromise(value) {
    if (typeof value !== "number") {
         return Promise.reject(`Error, el valor "${value} " ingresado no es un numero`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve({
            value,
            result: value*value
           });
        }, 0 | Math.random() * 1000)
    });
}

cuadradoPromise(0)
.then((obj) => {
    // console.log(obj);
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("4");
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
})
.catch(err => console.error(err)); //catch captura el error del reject

// ***** CLASE 48: ASYNC - AWAIT ***** // evita seguir usando "then"
console.log("*******************************");

function cuadradoPromiseAsync(value) {
    if (typeof value !== "number") {
         return Promise.reject(`Error, el valor "${value} " ingresado no es un numero`);
    }
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve({
            value,
            result: value*value
           });
        }, 0 | Math.random() * 1000)
    });
}

async function funcionAsincronaDeclarada () { // con async le digo a JS que es asincrona
    try {
        console.log("Inicio de funcion asincrona");
        let obj = await cuadradoPromiseAsync(0); // await pide esperar el resultado antes de pasar a la siguiente linea
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromiseAsync(1)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    console.log("fin de async function");
    } catch (err) {

    }
}

funcionAsincronaDeclarada();

// asi seria la funcion expresada

const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio de funcion asincrona");
        let obj = await cuadradoPromiseAsync(2); // await pide esperar el resultado antes de pasar a la siguiente linea
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromiseAsync(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    console.log("fin de async function");
    } catch (err) {

    }
}

funcionAsincronaExpresada();