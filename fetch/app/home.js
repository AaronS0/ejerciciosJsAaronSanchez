const urlBase = "https://api-colombia.com"
const urlDescripcion = urlBase + "/api/v1/Country/Colombia"
const urlDepartamentos = urlBase + "/api/v1/Department"
const urlRegion = urlBase + "/api/v1/Region"

fetch(urlDescripcion).then(respuesta => respuesta.json())
    .then(info => {
        let descripcion = info.description
        mostrarTexto(descripcion, contenedorDescripcion)
    })

contenedorDescripcion = document.getElementById("contenedorDescripcion")
function mostrarTexto(texto, contenedor) {
    contenedor.innerHTML = texto
}

let departamentosPorId = []
fetch(urlDepartamentos).then(respuestaD => respuestaD.json())
    .then(departamentos => {
        departamentosPorId = departamentos.sort((a, b) => a.id - b.id)
        pintarTarjetas(departamentosPorId, contenedorTarjetas)
    })

contenedorTarjetas = document.getElementById("contenedorTarjetas")
function pintarTarjetas(info, contenedor) {
    fetch(urlRegion).then(respuestaR => respuestaR.json()).then(region => {
        contenedor.innerHTML = ""
        for (let i = 0; i < info.length; i++) {
            for (let j = 0; j < region.length; j++) {
                if (info[i].regionId == region[j].id) {
                    crearTarjeta(contenedorTarjetas, info[i], region[j])
                }
            }

        }
    })
}

function crearTarjeta(contenedor, info, region) {
    let nuevaTarjeta = document.createElement("div")
    nuevaTarjeta.className = "card"
    nuevaTarjeta.innerHTML = `
        <div class="card-body d-flex flex-column justify-content-around align-items-center">
            <h5 class="card-title">${info.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Región: ${region.name}</h6>
            <p class="card-text">Poblacion: ${info.population}</p>
            <p class="card-text">${info.description.slice(0, 220)}...</p>
            <a href="#" class="btn btn-light">Detalles</a>
        </div>
        `
    contenedor.appendChild(nuevaTarjeta)
}

let checkFiltro = []
fetch(urlRegion).then(respuestaR => respuestaR.json()).then(regiones => {
    regiones.forEach(filtrar => {
        if (!checkFiltro.includes(filtrar.name)) {
            checkFiltro.push(filtrar.name)
        }
    })
    pintarCheck(checkFiltro, contenedorCheck)
})

let contenedorCheck = document.getElementById("contenedorCheck")
function pintarCheck(arregloCheck, contenedorCheck) {
    contenedorCheck.innerHTML = "Regiones: "
    for (let i = 0; i < arregloCheck.length; i++) {
        crearCheck(contenedorCheck, arregloCheck[i])
    }
}

function crearCheck(contenedor, regiones) {
    let nuevoContenedorCheck = document.createElement("li")
    nuevoContenedorCheck.innerHTML = `
        <input type="checkbox" value="${regiones}">
        <label for="cbox">${regiones}</label>`
    contenedor.appendChild(nuevoContenedorCheck)
}

