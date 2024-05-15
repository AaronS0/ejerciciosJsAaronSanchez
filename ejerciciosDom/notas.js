let titulo, texto, notas, contenedor, btnGuardar, btnBorrar
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

contenedor = document.getElementById("contenedorTarjetas")
titulo = document.getElementById("titulo")
texto = document.getElementById("nota")
btnGuardar = document.getElementById("botonGuardar")
btnBorrar = document.getElementById("botonBorrarNota")

function mostrarNotas(lista){
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

function borrarNota(index){
    notas.splice(index, 1)
    console.log(notas)
    contenedor.innerHTML = ""
    mostrarNotas(notas)
}

function agregarNota(titulo, texto){
    titulo.trim()
    texto.trim()
    let objeto
}
