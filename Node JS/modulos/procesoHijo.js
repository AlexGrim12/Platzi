const { exec, spawn } = require("child_process");
const { stdout, stderr } = require("process");

// console.log("Este es el proceso original.");

// exec("node consola.js", (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log("Este es el proceso hijo:");
//     console.log(stdout);
// });

let proceso = spawn("dir");

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function(dato) {
    console.log("¿Está muerto?");
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on("exit", function() {
    console.log("el proeso terminó");
    console.log(proceso.killed);
});