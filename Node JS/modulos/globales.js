let i = 0;
let intervalo = setInterval(function() {
    console.log("Hola");
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

// let Intervalo(function() {
//     console.log("Hola mundo");
// }, 1000);

setImmediate(function() {
    console.log("Hola inmediato");
});

console.log(__dirname);
console.log(__filename);

globalThis.miVariable = "El valor de mi variable";

console.log(miVariable);