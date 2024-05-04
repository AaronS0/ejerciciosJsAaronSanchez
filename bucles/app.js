//Variables a utilizar
let num1, suma, divisor

//Punto 1
num1 = parseInt(prompt("Ingrese un número:"))
console.log("Su tabla de multiplicar es:")
for(let i = 1; i < 11; i++){
    console.log(num1 + "*" + i + " = " + num1 * i)
}

//Punto 2
num1 = parseInt(prompt("Ingrese un número: (Ingrese 0 para finalizar)"))
suma = num1
while(num1!=0){
    num1 = parseInt(prompt("Ingrese un número: (Ingrese 0 para finalizar)"))
    suma += num1
}
console.log("La acumulación de tus numeros ingresados suma un total de: " + suma)

//Punto 3
let numAdivinanza = 57
num1 = parseInt(prompt("Ingrese un número entre 1 y 100 para adivinar:"))
let intentos = 1
while(num1!=numAdivinanza){
    if(num1<numAdivinanza){
        console.log("El numero a adivinar es mayor, sigue intentando")
    }else{
        console.log("El numero a adivinar es menor, sigue intentando")
    }
    num1 = parseInt(prompt("Ingrese un número entre 1 y 100 para adivinar:"))
    intentos++
}
console.log("¡Genial, adivinaste el número! Lo hiciste en el intento " + intentos)

//Punto 4
num1 = parseInt(prompt("Ingrese un número para verificar si es número primo:"))
divisor = 1
let contador = 0
while (divisor <= num1) {
    if (num1 % divisor == 0) {
        contador += 1
    }
    divisor += 1
}
if (contador == 2) {
    console.log("El numero " + num1 + " es primo.")
}else{
    console.log("El numero " + num1 + " NO es primo.")
}

//Punto 5
num1 = parseInt(prompt("Ingrese un número para obtener sus divisores:"))
divisor = 1
while (divisor <= num1) {
    if (num1 % divisor == 0) {
        console.log("Uno de los divisores del numero " + num1 + " es: " + divisor)
    }
    divisor += 1
}

//Punto 6
console.log("---- Elementos del arreglo ----")
let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
for(let i = 0; i<array.length; i++){
    console.log(array[i])
}

//Punto 7
console.log("---- El doble de los elementos del arreglo ----")
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i<arrayNum.length; i++){
    console.log(arrayNum[i]*2)
}

//Punto 8
let abuela = {
    nombre: "Luz",
    edad: 65,
    hobbie: "pintar",
    colorCabello: "castaño"
}
let madre = {
    nombre: "Glencora",
    edad: 45,
    hobbie: "entrenar mascotas",
    colorCabello: "rubio"
}
let padre = {
    nombre: "Mauricio",
    edad: 48,
    hobbie: "el arte",
    colorCabello: "negro"
}
let hermana = {
    nombre: "Candy",
    edad: 25,
    hobbie: "el teatro",
    colorCabello: "rubio"
}
let hermano = {
    nombre: "Macor",
    edad: 28,
    hobbie: "los videojuegos",
    colorCabello: "castaño"
}
let arrayObjetos = [abuela, madre, padre, hermana, hermano]
for (let i = 0; i < arrayObjetos.length; i++) {
    console.log("Mi nombre es " + arrayObjetos[i].nombre + " tengo " + arrayObjetos[i].edad + " años de edad. Me gusta " + arrayObjetos[i].hobbie + " y mi color de cabello es " + arrayObjetos[i].colorCabello)
}

//Punto 9
console.log("---- Números impares del arreglo ----")
let arrayNum2 = [1, 2, 3, 4, 5, 16, 27, 38, 43, 50]
for (let i = 0; i < arrayNum2.length; i++) {
    if (arrayNum2[i] % 2 == 0) {
        console.log(arrayNum2[i])
    }
}

//Punto 10
let sumaPares = 0
let sumaImpares = 0
do {
    num1 = parseInt(prompt("Ingrese un número: (Ingrese 0 para finalizar)"))
    if (num1 % 2 == 0) {
        sumaPares += num1
    } else {
        sumaImpares += num1
    }
} while (num1 != 0){
    console.log("La suma de los numeros pares ingresados es: " + sumaPares)
    console.log("La suma de los numeros impares ingresados es: " + sumaImpares)
}

//Punto 11 y 12
let arrayNum3 = [10, 16, 20, 27, 30, 40, 50, 38, 43, 55]
console.log("El numero mayor del array es: " + Math.max(...arrayNum3))
console.log("El numero menor del array es: " + Math.min(...arrayNum3))

//Punto 13
let mano1, mano2
let nombre1 = prompt("Jugador 1, por favor ingresa tu nombre:")
let nombre2 = prompt("Jugador 2, por favor ingresa tu nombre:")
do {
    mano1 = prompt(nombre1 + ", ingresa tu jugada PIEDRA, PAPEL o TIJERAS:").toUpperCase().trim()
    mano2 = prompt(nombre2 + ", ingresa tu jugada PIEDRA, PAPEL o TIJERAS:").toUpperCase().trim()
    if (mano1 == "PIEDRA" && mano2 == "TIJERAS" || mano1 == "PAPEL" && mano2 == "PIEDRA" || mano1 == "TIJERAS" && mano2 == "PAPEL") {
        console.log("¡" + nombre1 + " has ganado!")
    } else if (mano2 == "PIEDRA" && mano1 == "TIJERAS" || mano2 == "PAPEL" && mano1 == "PIEDRA" || mano2 == "TIJERAS" && mano1 == "PAPEL") {
        console.log("¡" + nombre2 + " has ganado!")
    } else if (mano1 == mano2) {
        console.log("Es un empate, vuelvan a jugar")
    }
} while (mano1 == mano2)

//Punto 14 y 15
console.log("---- Triangulo  ----")
let asterisco = ""
for (let i = 0; i < 5; i++) {
    asterisco += "  * "
    console.log(asterisco)
}
console.log("---- Triangulo invertido ----")
console.log(asterisco)
for (let i = 1; i < 5; i++) {
    asterisco = asterisco.replace(" * ", " ")
    console.log(asterisco)
}

//Punto 16
console.log("---- Array ordenado ----")
let arrayNum4 = [7, 12, 24, 8, 3, 99, 1, 15, 10, 6]
let nuevoArray
for (let i = 0; i < arrayNum4.length; i++) {
    for (let j = 1; j < (arrayNum4.length - i); j++) {
        if (arrayNum4[j - 1] > arrayNum4[j]) {
            nuevoArray = arrayNum4[j - 1]
            arrayNum4[j - 1] = arrayNum4[j]
            arrayNum4[j] = nuevoArray
        }
    }
} console.log(arrayNum4.toString(nuevoArray))
