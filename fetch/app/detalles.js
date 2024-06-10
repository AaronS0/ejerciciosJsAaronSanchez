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
        ciudades.sort((a, b) => a.id - b.id).forEach(filtrar => {
            ciudadesPorId.push(filtrar)
        })
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

function filtrarCiudades(texto, arreglo) {
    let ciudadesFiltradas = arreglo.filter(ciudades => ciudades.name.toLowerCase().includes(texto.toLowerCase()))
    return ciudadesFiltradas
}

function filtrarAreas(texto, arreglo) {
    let areasFiltradas = arreglo.filter(areas => areas.toLowerCase().includes(texto.toLowerCase()))
    return areasFiltradas
}

// function filtrarCheck(arregloCiudades, arreglo) {
//     arregloCiudades = Array.from(arregloCiudades)
//     arregloCiudades = arregloCiudades.map(checkbox => checkbox.value)
//     let departamentosFiltrados = arreglo.filter(regiones => arregloCiudades.includes(regiones))
//     return departamentosFiltrados
// }

// contenedorCheck.addEventListener('change', () => {
//     let ciudadesFiltradas = ciudadesPorId
//     let areasFiltradas = areasPorId
//     let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")

//     if (checkboxChecked.length != 0) {
//         ciudadesFiltradas = filtrarCheck(checkboxChecked, checkFiltro)
//     }
//     let texto = document.getElementById("busqueda").value
//     if (texto != "") {
//         ciudadesFiltradas = filtrarText(texto, checkFiltro)
//     }
//     pintarTarjetas(ciudadesFiltradas, contenedorTarjetas)
// })

let buscar = document.getElementById("busqueda")
buscar.addEventListener('input', (filtroBusqueda) => {
    let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")
    let texto = document.getElementById("busqueda").value
    let ciudadesFiltradas = filtrarCiudades(texto, ciudadesPorId)
    let areasFiltradas = filtrarAreas(texto, areasPorId)

    if (checkboxChecked.length != 0) {
        ciudadesFiltradas = filtrarCheck(checkboxChecked, ciudadesFiltradas)
        areasFiltradas = filtrarCheck(checkboxChecked, areasFiltradas)
    }
    if (filtroBusqueda.target.value != "" && ciudadesFiltradas != "") {
        contenedorTarjetas.innerHTML = ""
        pintarTarjetas(ciudadesFiltradas, contenedorTarjetas)
        pintarTarjetas(areasFiltradas, contenedorTarjetas)
    }
    if (filtroBusqueda.target.value != "" && areasFiltradas != "") {
        contenedorTarjetas.innerHTML = ""
        pintarTarjetas(ciudadesFiltradas, contenedorTarjetas)
        pintarTarjetas(areasFiltradas, contenedorTarjetas)
    }
    if (filtroBusqueda.target.value == "") {
        contenedorTarjetas.innerHTML = ""
        pintarTarjetas(ciudadesPorId, contenedorTarjetas)
        pintarTarjetas(areasPorId, contenedorTarjetas)
    }
    if (ciudadesFiltradas.length === 0 && areasFiltradas.length === 0) {
        alerta("No se encontraron coincidencias con la búsqueda")
    }
})

function alerta(mensaje) {
    contenedorTarjetas.innerHTML = ""
    const alert = document.createElement("div")
    alert.className = "alert alert-info p-4 my-5"
    alert.setAttribute("role", "alert")
    alert.innerText = mensaje
    contenedorTarjetas.appendChild(alert)
}