const ejerciciosSpread = [
    // Concatenar arreglos
    {
        enunciado: "Concatenar arreglos",
        descripcion: "Dado dos arreglos arreglo1 y arreglo2, crea un nuevo arreglo que contenga todos los elementos de ambos arreglos utilizando el operador de propagación.",
        codigo: `
            let arreglo1 = [1, 2, 3];
            let arreglo2 = [4, 5, 6];
        `
    },
    // Clonar un objeto
    {
        enunciado: "Clonar un objeto",
        descripcion: "Dado un objeto original, crea una copia exacta del objeto utilizando el operador de propagación.",
        codigo: `
            let original = { nombre: 'Juan', edad: 30 };
        `
    },
    // Unir objetos
    {
        enunciado: "Unir objetos",
        descripcion: "Dados dos objetos objeto1 y objeto2, crea un nuevo objeto que contenga todas las propiedades de ambos objetos utilizando el operador de propagación.",
        codigo: `
            let objeto1 = { a: 1 };
            let objeto2 = { b: 2 };
        `
    },
    // Dividir un string
    {
        enunciado: "Dividir un string",
        descripcion: "Dado un string cadena, conviértelo en un arreglo de caracteres utilizando el operador de propagación.",
        codigo: `
            let cadena = 'Hola';
        `
    },
    // Agregar elementos a un arreglo
    {
        enunciado: "Agregar elementos a un arreglo",
        descripcion: "Dado un arreglo arreglo y un nuevo elemento nuevoElemento, crea un nuevo arreglo que contenga todos los elementos del arreglo original más el nuevo elemento, utilizando el operador de propagación.",
        codigo: `
            let arreglo = [1, 2, 3];
            let nuevoElemento = 4;
        `
    }
]

//SOLUCION
// Concatenar arreglos
console.log(ejerciciosSpread[0].enunciado)
let arreglo1 = [1, 2, 3]
let arreglo2 = [4, 5, 6]
let arrayCombinados = [...arreglo1, ...arreglo2]
console.log(arrayCombinados)

// Clonar un objeto
console.log(ejerciciosSpread[1].enunciado)
let original = { nombre: 'Juan', edad: 30 }
let copia = { ...original }
console.log(copia);

// Unir objetos
console.log(ejerciciosSpread[2].enunciado)
let objeto1 = { a: 1 }
let objeto2 = { b: 2 }
let objetosUnidos = { ...objeto1, ...objeto2 }
console.log(objetosUnidos)

// Dividir un string
console.log(ejerciciosSpread[3].enunciado)
let cadena = 'Hola'
let cadenaEnArreglo = [...cadena]
console.log(cadenaEnArreglo)

// Agregar elementos a un arreglo
console.log(ejerciciosSpread[4].enunciado)
let arreglo = [1, 2, 3]
let nuevoElemento = 4
let arregloMasElemento = [...arreglo, nuevoElemento]
console.log(arregloMasElemento)