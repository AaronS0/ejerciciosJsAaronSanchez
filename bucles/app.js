// //Variables a utilizar
// let num1, suma

// //Punto 1
// num1 = parseInt(prompt("Ingrese un número:"))
// console.log("Su tabla de multiplicar es:")
// for(let i = 1; i < 11; i++){
//     console.log(num1 + "*" + i + " = " + num1 * i)
// }

// //Punto 2
// num1 = parseInt(prompt("Ingrese un número:"))
// suma = num1
// while(num1!=0){
//     num1 = parseInt(prompt("Ingrese un número:"))
//     suma += num1
// }
// console.log("La acumulación de tus numeros ingresados suma un total de: " + suma)

// //Punto 3
// let numAdivinanza = 57
// num1 = parseInt(prompt("Ingrese un número entre 1 y 100:"))
// let intentos = 1
// while(num1!=numAdivinanza){
//     if(num1<numAdivinanza){
//         console.log("El numero a adivinar es mayor, sigue intentando")
//     }else{
//         console.log("El numero a adivinar es menor, sigue intentando")
//     }
//     num1 = parseInt(prompt("Ingrese un número:"))
//     intentos++
// }
// console.log("¡Genial, adivinaste el número! Lo hiciste en el intento " + intentos)

// //Punto 4
// num1 = parseInt(prompt("Ingrese un número:"))
// // while(num1%2!=1){
// // }

// //Punto 5
// num1 = parseInt(prompt("Ingrese un número:"))


// //Punto 6
// let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
// for(let i = 0; i<array.length; i++){
//     console.log(array[i])
// }

// //Punto 7
// let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i<arrayNum.length; i++){
//     console.log(arrayNum[i]*2)
// }

//Punto 8


// //Punto 9
// let arrayNum2 = [1, 2, 3, 4, 5, 16, 27, 38, 43, 50]
// for (let i = 0; i < arrayNum2.length; i++) {
//     if (arrayNum2[i] % 2 == 0) {
//         console.log(arrayNum2[i])
//     }
// }

// //Punto 10
// let sumaPares = 0
// let sumaImpares = 0
// do {
//     num1 = parseInt(prompt("Ingrese un número:"))
//     if (num1 % 2 == 0) {
//         sumaPares += num1
//     } else {
//         sumaImpares += num1
//     }
// } while (num1 != 0){
//     console.log("La suma de los numeros pares ingresados es: " + sumaPares)
//     console.log("La suma de los numeros impares ingresados es: " + sumaImpares)
// }

//Punto 11 y 12
let arrayNum3 = [10, 16, 20, 27, 30, 40, 50, 38, 43, 55]
console.log(Math.max(...arrayNum3))
console.log(Math.min(...arrayNum3))

//Punto 13
let mano1, mano2
let nombre1 = prompt("Jugador 1, por favor ingresa tu nombre:")
let nombre2 = prompt("Jugador 2, por favor ingresa tu nombre:")
do {
    mano1 = prompt(nombre1 + ", ingresa tu jugada PIEDRA, PAPEL o TIJERAS:").toUpperCase()
    mano2 = prompt(nombre2 + ", ingresa tu jugada PIEDRA, PAPEL o TIJERAS:").toUpperCase()
    if (mano1 == "PIEDRA" && mano2 == "TIJERAS" || mano1 == "PAPEL" && mano2 == "PIEDRA" || mano1 == "TIJERAS" && mano2 == "PAPEL") {
        console.log("¡" + nombre1 + " has ganado!")
    } else if (mano2 == "PIEDRA" && mano1 == "TIJERAS" || mano2 == "PAPEL" && mano1 == "PIEDRA" || mano2 == "TIJERAS" && mano1 == "PAPEL") {
        console.log("¡" + nombre2 + " has ganado!")
    } else if (mano1 == mano2){
        console.log("Es un empate, vuelvan a jugar")
    }
} while (mano1 == mano2)

//Punto 14
