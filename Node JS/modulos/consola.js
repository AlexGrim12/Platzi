var tabla = [{
        a: 1,
        b: "Z",
    },
    {
        a: 2,
        b: "Otra",
    },
];

console.table(tabla);

console.group("Conversación");
console.log("Hola");
console.group("bla");
console.log("Bla bla bla..");
console.log("Bla bla bla..");
console.log("Bla bla bla..");
console.groupEnd("bla");
console.log("Adios");
console.groupEnd("Conversación");

console.log("Otra cosa de otra función");

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");