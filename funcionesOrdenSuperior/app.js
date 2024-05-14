//Ejercicios funciones de orden superior

//Ejercicio 1
console.log("---- Nuevo array donde cada elemento sea el doble del elemento correspondiente ---")
const numeros = [1, 2, 3, 4, 5]
let dobleNumeros = []

console.log("-- Arreglo original --")
console.log(numeros)

dobleNumeros = numeros.map(num => num * 2)
console.log("-- Arreglo nuevo --")
console.log(dobleNumeros)

//Ejercicio 2
console.log("--- Nuevo array donde cada cadena sea convertida a  mayúsculas ---")
const palabras = ['hola', 'mundo', 'javascript']
let palabrasMayusculas = []

console.log("-- Arreglo original --")
console.log(palabras)

palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase())
console.log("-- Arreglo nuevo --")
console.log(palabrasMayusculas)

//Ejercicio 3
console.log("--- Nuevo array que contenga solo las edades de cada objeto ---")
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 40 }
]
let edades = []

console.log("-- Arreglo original --")
console.log(personas)

edades = personas.map(edad => edad.edad)
console.log("-- Arreglo nuevo --")
console.log(edades)

//Ejercicio 4
console.log("--- Combinar dos arrays existentes en un nuevo array ---")
const numeros4 = [1, 2, 3]
const letras = ['a', 'b', 'c']
let conjuntoArrays = []

console.log("-- Arreglo original --")
console.log(numeros4)

conjuntoArrays = numeros4.map((numero, letra) => numero + letras[letra])
console.log("-- Arreglo nuevo --")
console.log(conjuntoArrays)

//Ejercicio 5
console.log("--- Transformación a cada objeto en el array original ---")
const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
]
let descuentos = []

console.log("-- Arreglo original --")
console.log(productos)

descuentos = productos.map(producto => producto * 0.8)
console.log("-- Arreglo nuevo --")
console.log(descuentos)

