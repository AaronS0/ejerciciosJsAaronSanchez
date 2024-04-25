console.log("---- Ejercicio 2 ----")
console.log("---- Resumen ----")

//Puntos 1 al 6
if (true) {
    console.log("True")
} else {
    console.log("False")
}
//Puntos 7 al 12
let varControl
switch (varControl) {
    case true: {
        console.log("True")
    } break
    case false: {
        console.log("false")
    } break
    default: {
        console.log("La respuesta debe ser true o false")
    }
}

//Ejercicios
//Puntos 1 al 4
num1 = prompt("Ingresa un numero:")
num2 = prompt("Ingresa otro numero:")
if (num1 > num2) {
    console.log(num1 + " es mayor a " + num2)
} else console.log(num1 + " no es mayor a " + num2)

num1 = prompt("Ingresa un numero:")
num2 = prompt("Ingresa otro numero:")
if (num1 == num2) {
    console.log("¡Los numeros digitados son iguales!")
} else console.log("Los numeros ingresados son diferentes")

num1 = prompt("Ingresa un numero:")
num2 = prompt("Ingresa otro numero:")
if (num1 > num2) {
    console.log(num1 + " es el numero mayor ingresado")
} else console.log(num2 + " es el numero mayor ingresado")
if (num1 == num2) {
    console.log("Los numeros digitados son iguales")
}

num1 = prompt("Ingresa un numero:")
num2 = prompt("Ingresa otro numero:")
num3 = prompt("Ingresa por favor otro numero:")
if (num1 < num2 && num1 < num3) {
    console.log(num1 + " es el numero menor ingresado")
}
if (num2 < num1 && num2 < num3) {
    console.log(num2 + " es el numero menor ingresado")
}
if (num3 < num1 && num3 < num2) {
    console.log(num3 + " es el numero menor ingresado")
}

//Punto 5
let persona1 = { nombre: "Aaron", edad: 23, altura: 168 }
let persona2 = { nombre: "Felipe", edad: 24, altura: 166 }
if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es mas alto que " + persona2.nombre)
} else console.log(persona2.nombre + " es mas alto que " + persona1.nombre)

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre)
} else console.log(persona2.nombre + " es mayor que " + persona1.nombre)

//Punto 6
nombre = prompt("Ingresa tu nombre:")
edad = parseInt(prompt("Ingresa tu edad:"))
altura = parseInt(prompt("Ingresa tu estatura:"))
vision = parseInt(prompt("Califica tu vision de 1 a 10:"))
if (edad >= 18 && altura >= 150 && vision >= 8) {
    console.log("¡Estas en condiciones de adquirir tu licencia!")
} else console.log("Lo siento, no cumples con las condiciones para adquirir tu licencia")

//Punto 7
nombre = prompt("Ingresa tu nombre:")
pase = prompt("Ingresa tu pase (VIP o NORMAL):")
entrada = confirm("¿Tienes entrada?")
if (nombre == "Aaron" || pase == "VIP") {
    console.log("Bienvenido al club MINDHUB")
} else if (entrada == true) {
    entrada1 = confirm("¿Deseas usar la entrada?")
    if (entrada1 == true) {
        console.log("Bienvenido al club MINDHUB")
    } else console.log("Te esperamos en otra oportunidad")
} else if (nombre != "Aaron" && pase != "VIP" && entrada != true) {
    compra = confirm("¿Deseas comprar la entrada?")
    if (compra == true) {
        dinero = parseInt(prompt("Ingresa tu dinero disponible:"))
        if (dinero >= 1000) {
            confirmarCompra = confirm("Confirma la compra de tu entrada")
            if (confirmarCompra == true) {
                console.log("Bienvenido al club MINDHUB")
            } else console.log("No se completo la compra. Te esperamos en otra oportunidad")
        } else console.log("Gracias por visitarnos, te esperamos en otra oportunidad")
    } else console.log("Gracias por visitarnos, te esperamos en otra oportunidad")
}

//Punto 8
let numeroIncognita = 7
let numeroIngresado
numeroIngresado = parseInt(prompt("Ingresa el numero a adivinar:"))

if (numeroIngresado == numeroIncognita) {
    console.log("¡Ganaste, haz adivinado el número!")
}
if (numeroIngresado > numeroIncognita) {
    console.log("El numero ingresado es mayor, vuelve a intentarlo")
    numeroIngresado = parseInt(prompt("Ingresa el numero a adivinar:"))
    if (numeroIngresado == numeroIncognita) {
        console.log("¡Ganaste, haz adivinado el número!")
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El numero ingresado es menor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("Ingresa el numero a adivinar:"))
        if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, has perdido")
        }
        if (numeroIngresado < numeroIncognita) {
            console.log("El numero ingresado es menor, has perdido")
        }
        if (numeroIngresado == numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!")
        }
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es mayor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("Ingresa el numero a adivinar:"))
        if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, has perdido")
        }
        if (numeroIngresado < numeroIncognita) {
            console.log("El numero ingresado es menor, has perdido")
        }
        if (numeroIngresado == numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!")
        }
    }
}
if (numeroIngresado < numeroIncognita) {
    console.log("El numero ingresado es menor, vuelve a intentarlo")
    numeroIngresado = parseInt(prompt("Ingresa el numero a adivinar:"))
    if (numeroIngresado == numeroIncognita) {
        console.log("¡Ganaste, haz adivinado el número!")
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es mayor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("Ingresa el numero a adivinar:"))
        if (numeroIngresado < numeroIncognita) {
            console.log("El numero ingresado es menor, has perdido")
        }
        if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, has perdido")
        }
        if (numeroIngresado == numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!")
        }
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El numero ingresado es menor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("Ingresa el numero a adivinar:"))
        if (numeroIngresado < numeroIncognita) {
            console.log("El numero ingresado es menor, has perdido")
        }
        if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, has perdido")
        }
        if (numeroIngresado == numeroIncognita) {
            console.log("¡Ganaste, haz adivinado el número!")
        }
    }
}

//Punto 9
edad = parseInt(prompt("Ingresa tu edad:"))
if (edad <= 12) {
    console.log("Eres un infante")
}
if (edad > 12 && edad < 18) {
    console.log("Eres un adolescente")
}
if (edad > 18 && edad < 45) {
    console.log("Eres un mayor joven")
}
if (edad > 45 && edad < 100) {
    console.log("Eres un anciano")
}
if (edad > 100) {
    console.log("¿Esa es tu edad real?")
}

//Punto 10
jugador1 = prompt("Jugador 1: Ingrese PIEDRA PAPEL o TIJERAS")
jugador2 = prompt("Jugador 2: Ingrese PIEDRA PAPEL o TIJERAS")
if (jugador1 == "PIEDRA" && jugador2 == "TIJERAS" || jugador1 == "PAPEL" && jugador2 == "PIEDRA" || jugador1 == "TIJERAS" && jugador2 == "PAPEL") {
    console.log("El jugador 1 ha ganado")
}
if (jugador2 == "PIEDRA" && jugador1 == "TIJERAS" || jugador2 == "PAPEL" && jugador1 == "PIEDRA" || jugador2 == "TIJERAS" && jugador1 == "PAPEL") {
    console.log("El jugador 2 ha ganado")
}
if (jugador1 == jugador2) {
    console.log("Es un empate")
}

//Punto 11
color = prompt("Ingrese un color:")
switch (color) {
    case "blanco": {
        console.log("Falta de color")
    } break
    case "negro": {
        console.log("Falta de color")
    } break
    case "verde": {
        console.log("El color de la naturaleza")
    } break
    case "azul": {
        console.log("El color del agua")
    } break
    case "amarillo": {
        console.log("El color del sol")
    } break
    case "rojo": {
        console.log("El color del fuego")
    } break
    case "marron": {
        console.log("El color de la tierra")
    } break
    default: {
        console.log("Excelente elección, no lo teníamos pensado")
    } break
}

//Punto 12
num1 = prompt("Ingresa el primer numero:")
num2 = prompt("Ingresa el segundo numero:")
operacion = prompt("Ingresa la operacion que deseas realizar (Suma, resta, multiplicacion o division):")
switch (operacion) {
    case "suma": {
        sumaNum = num1 + num2
        console.log("El resultado de tu suma es: " + sumaNum)
    } break
    case "resta": {
        restaNum = num1 - num2
        console.log("El resultado de tu resta es: " + restaNum)
    } break
    case "multiplicacion": {
        multiNum = num1 * num2
        console.log("El resultado de tu multiplicacion es: " + multiNum)
    } break
    case "division": {
        divNum = num1 / num2
        if (num2 == 0) {
            console.log("ERROR. No es posible dividir entre 0")
        } else console.log("El resultado de tu division es: " + divNum)
    } break
    default: {
        console.log("No tenemos esa operacion disponible aun")
    } break
}

//Punto 13
nombre = prompt("Ingresa tu nombre completo:")
numDocumento = parseInt(prompt("Ingresa tu numero de documento:"))
fechaNacimiento = prompt("Ingresa tu fecha de nacimiento:")
lugarNacimiento = prompt("Ingresa tu lugar de nacimiento:")
estatura = parseInt(prompt("Ingresa tu estatura:"))
rh = prompt("Ingresa tu RH:")
lugarExpedicion = prompt("Ingresa el lugar de expedicion de tu documento:")
sexo = prompt("Ingresa el sexo que aparece en tu documento (F o M):")
console.log("---- Datos registrados ----")
console.log("Documento: " + numDocumento + ". Fecha de nacimiento: " + fechaNacimiento + ". Lugar de nacimiento: " + lugarNacimiento + ". Estatura: " + estatura + "cm. RH: " + rh + ". Lugar de expedición: " + lugarExpedicion + ". Sexo: " + sexo)
datos = confirm("¿Los datos ingresados son correctos?")
if (datos == true) {
    let persona = { nombre, numDocumento, fechaNacimiento, lugarNacimiento, estatura, rh, lugarExpedicion, sexo }
    console.table(persona)
} else console.log("Vuelva a intentarlo en 1 mes")

