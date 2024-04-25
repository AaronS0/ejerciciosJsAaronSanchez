console.log("---- Ejercicio 1 ----")

//Puntos 1 al 5
let miNombre = "Aaron"
let miApellido = "Sanchez"
let miEdad = 23
let miMascota = "Gaia"
let edadMascota = 6

//Punto 6
console.log("---- Variables declaradas ----")
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//Puntos 7 al 9
let nombreCompleto = miNombre + " " + miApellido
let textoPresentacion = "Hola mi nombre es " + nombreCompleto + " tengo " + miEdad + " años. Tambien una mascota llamada " + miMascota + " y tiene " + edadMascota + " años."
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

// //Punto 10
miNombre = prompt("Ingresa tu nombre:")
miApellido = prompt("Ingresa tu apellido:")
miEdad = parseInt(prompt("Ingresa tu edad:"))
miMascota = prompt("Ingresa el nombre de tu mascota:")
edadMascota = parseInt(prompt("Ingresa la edad de su mascota:"))
console.log("Los datos registrados son:")
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
console.log("---- Este es tu perfil ----")
console.log(nombreCompleto)
console.log(textoPresentacion)
console.log("Edades sumadas: ", sumaEdades);
console.log("Edades restadas: ", restaEdades);
console.log("Edades multiplicadas: ", productoEdades);
console.log("Edades divididas: ", divisionEdades);

//Punto 11
let alumno = { nombre: "Aaron", apellido: "Sanchez", edad: 23, ocupacion: "Estudiante", tieneMascota: true, }
console.table(alumno)
console.log("Datos registrados:")
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.ocupacion)
console.log(alumno.tieneMascota)

//Punto 12
let mascota = { nombreMascota: "Gaia", mascotaEdad: 6, raza: "Rottweiler", chip: true, esterilizado: true, }
console.table(mascota)
console.log("Datos registrados:")
console.log(mascota.nombreMascota)
console.log(mascota.mascotaEdad)
console.log(mascota.raza)
console.log(mascota.chip)
console.log(mascota.esterilizado)

//Punto 13
let frutas = ["Manzana", "Naranja", "Sandia", "Mango", "Fresa"]
console.log(frutas)
console.log("Frutas registradas:")
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//Punto 14
let numeros = ["Naturales", "Enteros", "Racionales", "Reales", "Irracionales"]
console.log(numeros)
console.log("Grupos de numeros:")
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//Punto 15
let familia = [
  { nombre: "Luz Dary", parentesco: "Abuela" },
  { nombre: "Glencora", parentesco: "Madre" },
  { nombre: "Mauricio", parentesco: "Padre" },
  { nombre: "Macor, Mar y Candy", parentesco: "Hermanos" },
  { nombre: "Gaia", parentesco: "mascota" }
]
console.log(familia)
console.log("Familia registrada:")
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//Punto 16
console.log("---- Algo aleatorio ----")
let textoAleatorio = "Tengo una " + frutas[1] + " en mi mochila para la clase de numeros " + numeros[3] + ". Pero llevare a mi " + familia[4] + " por lo que la tendremos que compartir."
console.log(textoAleatorio)

//Punto 17
edad1 = parseInt(prompt("Ingresa tu edad:"))
edad2 = parseInt(prompt("Ingresa la edad de tu compañero:"))
let edadIgual = edad1 == edad2
let edad1Mayor = edad1 > edad2
let edad1Menor = edad1 < edad2
console.log("---- ¡Comparemos las edades con tu compañero! ----")
console.log("¡Sus edades son iguales!: " + edadIgual)
console.log("Eres mayor que tu compañero: " + edad1Mayor)
console.log("Eres menor que tu compañero: " + edad1Menor)

//Punto 18
let soyMayorDeEdad = edad1 >= 18
console.log("---- Estos son tus datos -----")
console.log("Soy mayor de edad: " + soyMayorDeEdad)

//Punto 19
edadReq = parseInt(prompt("Ingresa tu edad:"))
estaturaReq = parseInt(prompt("Ingresa tu estatura en cm:"))
puedeSubir = edadReq >= 6 && estaturaReq >= 120
console.log("Puedes subir a la atracción: " + puedeSubir)

//Punto 20
pase = prompt("Ingresa tu pase: VIP, NORMAL o LIMITADO")
saldo = parseInt(prompt("Ingresa tu saldo en pesos sin puntos ni comas:"))
puedePasar = pase == "VIP" || saldo >= 1000
console.log("La persona puede pasar: " + puedePasar)