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
let notasFiltradas = []

function mostrarNotas(lista) {
    contenedor.innerHTML = ""
    for (let i = 0; i < lista.length; i++) {
        let card = document.createElement("div")
        card.innerHTML = `
        <div class="card" style="width: 18rem; margin: 1vw;">
            <div class="card-body">
            <input type="checkbox" ${lista.realizada ? "checked" : ""}>
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
    if (titulo && texto != "") {
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
    }else{
        alert("Ingrese titulo y texto para poder guardar la nota")
    }
}

btnGuardar.addEventListener("click", function () {
    agregarNota(titulo.value, texto.value, notas)
})

btnBorrar.addEventListener("click", function () {
    limpiar()
})

function borrarNota(index) {
    notas.splice(index, 1)
    contenedor.innerHTML = ""
    mostrarNotas(notas)
    if (notas == 0) {
        contenedor.innerHTML = "No hay notas que mostrar"
    }
}

function limpiar() {
    titulo.value = ""
    texto.value = ""
}

let buscar = document.getElementById("realizadas")
buscar.addEventListener('input', (evento) => {
    notasFiltradas = notas.filter(nota => nota.titulo.toLowerCase().includes(evento.target.value.toLowerCase()))
    if (evento.target.value != "") {
        mostrarNotas(notasFiltradas)
    } else {
        mostrarNotas(notas)
    }
})

let btnRealizadas = document.getElementById("mostrarRealizadas")
btnRealizadas.addEventListener('click', (evento) => {
    notasFiltradas = notas.filter(nota => nota.realizada == evento.target.realizada)
    console.log(evento.realizada);

    if (evento.target.value != "") {
        mostrarNotas(notasFiltradas)
    } else {
        mostrarNotas(notas)
    }
})