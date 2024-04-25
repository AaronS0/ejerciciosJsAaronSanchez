//METODOS STRING
//.toUpperCase convierte String a mayuscula
let texto = "Cualquier texto"
console.log(texto.toUpperCase())
console.log(texto)
//Volver fijo el cambio
texto = texto.toUpperCase()
console.log(texto)

//.toLowerCase convierte String a minuscula
let texto2 = "CUALQUIER TEXTO 2"
console.log(texto2.toLowerCase())
console.log(texto2)
//Volver fijo el cambio
texto2 = texto2.toLowerCase()
console.log(texto2)

//.trim elimina los espacios al inicio y al final del String. Se debe guardar el cambio
let texto3 = "   Cualquier texto 3   "
texto3 = texto3.trim()
console.log(texto3)

//.charAt solicita un caracter de la cadena de texto (String) como un array
let texto4 = "Cualquier texto 4"
console.log(texto4.charAt(0)+texto4.charAt(1)+texto4[2]+texto4[3])

//.slice solicita una parte de la cadena de texto (String) como un pequeño array
let texto5 = "Cualquier texto 5"
console.log(texto5.slice(0,9))

//.substring solicita una parte de la cadena de texto (String) como un pequeño array. No incluye caracter final
let texto6 = "Cualquier texto 6"
console.log(texto5.substring(10,15))

//.replace reemplaza una parte del string por otra cadena de texto
let texto7 = "Cualquier texto 7"
console.log(texto7.replace("Cualquier", "Lo que sea"))
console.log(texto7.replaceAll(" ", "-"))

//.split divide la cadena y la devuelve como una matriz
let texto8 = "Cualquier,texto,8,separado,por,comas"
console.log(texto8.split(","))

//.startsWith indica si un String comienza con un caracter concreto devolviendo boolean
let texto9 = "Cualquier texto 9"
console.log(texto9.startsWith("c"))

//Combinacion de metodos
let texto10 = "    CuAlQuIer tEXto 10    "
let texto11 = "    cUAlqUiEr OtRo TexTO 11    "
function capitalize(param){
    let normalize = param.trim().toLowerCase()
    // console.log(normalize)
    let firstLetter = normalize.charAt(0).toUpperCase()
    // console.log(firstLetter)
    let restOfWord = normalize.slice(1)
    // console.log(restOfWord)
    return firstLetter+restOfWord
}
console.log(capitalize(texto10))
console.log(capitalize(texto11))


//OBJETOS NUMBER AND MATH
//EPSILON el intervalo mas pequeño entre dos numeros representables
console.log(Number.EPSILON)

//MAX_SAFE_INTEGER el numero maximo representable en JS
console.log(Number.MAX_SAFE_INTEGER)

//parseInt, parseFloat
let num1 = "777"
console.log(num1)
console.log(parseInt(num1))

let num2 = "12.14"
console.log(num2)
console.log(parseFloat(num2))

//isNaN devuelve boolean para determinar si NO es un valor numerico
console.log(isNaN("A"))
console.log(isNaN(1))

//toFixed determina la cantidad de decimales a mostrar
let num3 = 23.2352345345
console.log(num3.toFixed(5))

//ceil redondea al numero mayor
let num4 = 3.45
console.log(Math.ceil(num4))

//round redondea
let num5 = 3.45
console.log(Math.round(num5))