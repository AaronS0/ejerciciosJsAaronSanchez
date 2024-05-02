//Variables a utilizar
let num1, suma

//Punto 1
num1 = parseInt(prompt("Ingrese un número:"))
console.log("Su tabla de multiplicar es:")
for(let i = 1; i < 11; i++){
    console.log(num1 + "*" + i + " = " + num1 * i)
}

//Punto 2
num1 = parseInt(prompt("Ingrese un número:"))
suma = num1
while(num1!=0){
    num1 = parseInt(prompt("Ingrese un número:"))
    suma += num1
}
console.log("La acumulación de tus numeros ingresados suma un total de: " + suma)

//Punto 3
let numAdivinanza = 57
num1 = parseInt(prompt("Ingrese un número entre 1 y 100:"))
let intentos = 1
while(num1!=numAdivinanza){
    if(num1<numAdivinanza){
        console.log("El numero a adivinar es mayor, sigue intentando")
    }else{
        console.log("El numero a adivinar es menor, sigue intentando")
    }
    num1 = parseInt(prompt("Ingrese un número:"))
    intentos++
}
console.log("¡Genial, adivinaste el número! Lo hiciste en el intento " + intentos)

//Punto 4
num1 = parseInt(prompt("Ingrese un número:"))
// while(num1%2!=1){
// }

//Punto 5
num1 = parseInt(prompt("Ingrese un número:"))


//Punto 6
let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
for(let i = 0; i<array.length; i++){
    console.log(array[i])
}

//Punto 7
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i<array.length; i++){
    console.log(array[i*2])
}

//Punto 8
