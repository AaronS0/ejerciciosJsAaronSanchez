//Variables
let estatura, masa, resultadoImc, estaturaM2, boton, pesos, dolar, resultadoDivisa
estatura = document.getElementById("estatura")
masa = document.getElementById("masa")
boton = document.getElementById("boton")

pesos = document.getElementById("pesos")
dolar = document.getElementById("dolar")

//Eventos
boton.addEventListener("click", function () {
    estaturaM2 = (estatura.value / 100) * (estatura.value / 100)
    resultadoImc = masa.value / estaturaM2
    document.getElementById("resultado").value = resultadoImc.toFixed(3)
})

pesos.addEventListener("input", function myFunction() {
    resultadoDivisa = pesos.value * 0.0002567
    dolar.value = resultadoDivisa.toFixed(3)
})
dolar.addEventListener("input", function myFunction() {
    resultadoDivisa = dolar.value * 3892.52
    pesos.value = resultadoDivisa.toFixed(3)
})