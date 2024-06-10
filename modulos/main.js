// Importar funciones una por una
import { date, despedirse, saludar } from "./funciones.js"

saludar("Aaron")
despedirse("Aaron")
console.log(date)

// Importar todas las funciones, asignar nombre, se pueden repetir funciones sin conflicto
import * as funcionesGlobales from "./funciones.js"
funcionesGlobales.saludar("Aaron")
funcionesGlobales.despedirse("Aaron")
console.log(funcionesGlobales.date)