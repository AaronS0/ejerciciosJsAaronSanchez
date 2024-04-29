let carro = {
    marca: "BMW",
    color: "Verde"
}
console.log(carro)

//Agregar 6 propiedades
carro.modelo = "Z4"
carro.carroceria = "Cabrio"
carro.año = 2025
carro.asientos = 2
carro.precioUsd = 60000
carro.velocidadMax = 250

//Agregar cantidadLlantas, cantidadSillas, 4x4, ventaLatam
carro.cantidadLlantas = 4
carro.cantidadSillas = 4
carro.traccion4x4 = false
carro.ventaLatam = true
console.log(carro)

//Cambiar marca
carro.marca = "Mercedes"
console.log(carro)

//Cambiar color
carro.color = "Rojo"
console.log(carro)

//Eliminar 2 propiedades
delete carro.carroceria
delete carro.cantidadLlantas
console.log(carro)

//Eliminar 4x4
delete carro.traccion4x4
console.log(carro)

//Arreglo de todas las propiedades
let arreglo = Object.keys(carro)
console.log(arreglo)

//Existe la propiedad altura
let propiedades = Object.values(carro)
console.log(propiedades.includes("altura"))

//Existe la propiedad marca
console.log(propiedades.includes("marca"))

//Arreglo de todos los valores
console.log(propiedades);

//Existe el valor verde
console.log(propiedades.includes("verde"))

//Existe el valor 2024
console.log(propiedades.includes("2024"))