// Definir funciones exportables
export function saludar(user) {
    console.log("Hola " + user);
}

export function despedirse(user) {
    console.log("Chao " + user);
}

export let date = "05/06/2024"

//Ternarios destructing spread
//Operador ternario (?) = if comprimido
let numero = 10

if (numero == 10) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}

let resultado = numero === 10 ? "Verdadero" : "Falso"
console.log(resultado)

//Ejemplo 2
let numero2 = 6
let esPar

if (numero2 % 2 === 0) {
    esPar = true
} else {
    esPar = false
}
console.log(esPar)

esPar = numero2 % 2 === 0 ? true : false

//Ejemplo 3 - Ternario anidado (No recomendado)
let numero3 = -5
let tipo = numero3 > 0 ? "Positivo" : numero3 < 0 ? "Negativo" : "El numero es cero"
console.log(tipo)

//Desestructuración
let array = [1, 2, 3, 4, 5]
let number1 = array[0]
let number2 = array[1]

console.log(number1)
console.log(number2)

let [a, b] = array

console.log(a)
console.log(b)

//Sintaxis extendida
let arrayOne = [1, 2, 3, 4, 5]
let arrayTwo = [6, 7, 8, 9, 10]

console.log(arrayOne.concat(arrayTwo))

let arrayCombinado = [arrayOne, arrayTwo]
console.log(arrayCombinado)

let arrayCombinadoSyntax = [...arrayOne, ...arrayTwo]
console.log(arrayCombinadoSyntax)

//Ejemplo 2
function sumar(a, b, c) {
    return a + b + c
}
let numeros = [1, 2, 3, 4, 5]
console.log(sumar(numeros[0], numeros[1], numeros[2]))

console.log(sumar(...numeros))

//Ejemplo 3
let personas = ["Paola", "Aaron", "Pepito"]

function separarPorComas(...elementos) {
    return elementos.join(", ")
}
console.log(separarPorComas(...personas))