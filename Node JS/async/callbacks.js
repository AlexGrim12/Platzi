function hola(nombre, miCallback) {
    console.log("Hola soy una función asincrónica");
    setTimeout(function() {
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios " + nombre);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso...");
hola("Alex", function(nombre) {
    adios(nombre, function() {
        console.log("Terminando proceso...");
    });
});

// hola("Alex", function() {});
// adios("Alex", function() {});