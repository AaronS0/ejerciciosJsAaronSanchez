//Variables
let estatura, masa, resultadoImc, estaturaM2, pesos, dolar, resultadoDivisa
estatura = parseInt(document.getElementById("estatura"))
masa = parseInt(document.getElementById("masa"))
pesos = parseFloat(document.getElementById("pesos"))
dolar = parseFloat(document.getElementById("dolar"))
//Operaciones
estaturaM2 = (estatura / 100) * (estatura / 100)
resultadoImc = masa / estaturaM2
if (dolar == 0) {
    resultadoDivisa = pesos * 0.0002567
} else if (pesos == 0) {
    resultadoDivisa = dolar * 3892.52
}
//Eventos

