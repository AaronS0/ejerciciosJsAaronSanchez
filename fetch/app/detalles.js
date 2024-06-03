const urlBase = "https://api-colombia.com"

let contenedorDetalles = document.getElementById("detalles")
let idDetalles = window.location.href
idDetalles = new URL(idDetalles).searchParams.get("value")
let urlDepartamentos = urlBase + "/api/v1/Department/" + idDetalles
let urlCiudades = urlDepartamentos + "/cities"
let urlAreas = urlDepartamentos + "/naturalareas"

fetch(urlDepartamentos).then(respuesta => respuesta.json())
    .then(departamento => {
        let nuevoContenedorDetalles = document.createElement("div")
        nuevoContenedorDetalles.innerHTML = `
            <div class="card-body d-flex flex-column justify-content-around align-items-center" style="height: 80vh">
                <h3 class="card-title">DEPARTAMENTO DE ${departamento.name.toUpperCase()}</h3>
                <p class="card-text">${departamento.description}</p>
                <p>Capital: ${departamento.cityCapital.name}</p>
                <p>Población: ${departamento.population}</p>
                <p>Prefijo: ${departamento.phonePrefix}</p>
                <p>Superficie: ${departamento.surface} km2</p>
            </div>`
        contenedorDetalles.appendChild(nuevoContenedorDetalles)
    })

let ciudadesPorId = []
fetch(urlCiudades).then(respuesta => respuesta.json())
    .then(ciudades => {
        ciudadesPorId = ciudades.sort((a, b) => a.id - b.id)
        pintarTarjetas(ciudadesPorId, contenedorTarjetas)
    })

let areasPorId = []
fetch(urlAreas).then(respuesta => respuesta.json())
    .then(areas => {
        areas[0].naturalAreas.forEach(filtrar => {
            if (!areasPorId.includes(filtrar.name)) {
                areasPorId.push(filtrar.name)
            }
        })
        areasPorId = areasPorId.sort((a, b) => a.id - b.id)
        pintarTarjetas(areasPorId, contenedorTarjetas)
    })

contenedorTarjetas = document.getElementById("contenedorTarjetas")
function pintarTarjetas(info, contenedor) {
    for (let i = 0; i < info.length; i++) {
        crearTarjeta(contenedor, info[i])
    }
}

function crearTarjeta(contenedor, info) {
    let nuevaTarjeta = document.createElement("div")
    nuevaTarjeta.className = "card"
    nuevaTarjeta.innerHTML = `
            <div class="card-body d-flex flex-column justify-content-around align-items-center">
                <h5 class="card-title">${info.name == undefined ? info : info.name}</h5>
            </div>
            `
    contenedor.appendChild(nuevaTarjeta)
}
