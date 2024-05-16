let idGlobal, titulo, texto, notas, contenedor, btnGuardar, btnBorrar
notas = [
    {
        id: 1,
        titulo: "Sacar la basura",
        texto: "Mi mamá me va a retar si no lo hago",
        realizada: false
    },
    {
        id: 2,
        titulo: "Comer",
        texto: "Quedó comida de ayer",
        realizada: false
    }
]

idGlobal = 2
contenedor = document.getElementById("contenedorTarjetas")
titulo = document.getElementById("titulo")
texto = document.getElementById("nota")
btnGuardar = document.getElementById("botonGuardar")
btnBorrar = document.getElementById("botonBorrarNota")

function mostrarNotas(lista) {
    for (let i = 0; i < lista.length; i++) {
        let card = document.createElement("div")
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${lista[i].titulo}</h5>
                <p class="card-text">${lista[i].texto}</p>
                <a href="#" class="btn btn-danger" onclick="borrarNota(${i})">Borrar nota</a>
            </div>
        </div>`
        contenedor.appendChild(card)
    }
}
mostrarNotas(notas)

function agregarNota(titulo, texto, array) {
    titulo.trim()
    texto.trim()
    let objeto = {
        id: idGlobal++,
        titulo: titulo,
        texto: texto,
        realizada: false
    }
    array.push(objeto)
    contenedor.innerHTML = ""
    limpiar()
    mostrarNotas(notas)
}

btnGuardar.addEventListener("click", function () {
    agregarNota(titulo.value, texto.value, notas)
})

btnBorrar.addEventListener("click", function () {
    limpiar()
})

function borrarNota(index) {
    notas.splice(index, 1)
    console.log(notas)
    contenedor.innerHTML = ""
    mostrarNotas(notas)
}

function limpiar() {
    titulo.value = ""
    texto.value = ""
}