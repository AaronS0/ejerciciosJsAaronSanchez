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
        departamentos.sort((a, b) => a.id - b.id).forEach(filtrar => {
            departamentosPorId.push(filtrar)
        })
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
            <a href="./detalles.html?value=${info.id}" class="btn btn-light">Detalles</a>
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

// function filtrarCheck(arregloDepartamentos, arreglo) {
//     arregloDepartamentos = Array.from(arregloDepartamentos)
//     arregloDepartamentos = arregloDepartamentos.map(checkbox => checkbox.value)
//     let departamentosFiltrados = arreglo.filter(regiones => {
//         arregloDepartamentos.includes(regiones)
//         console.log(arregloDepartamentos);

//         console.log(regiones);
//         console.log(checkFiltro);
//     })
//     console.log(departamentosFiltrados);
//     return departamentosFiltrados
// }

// contenedorCheck.addEventListener('change', () => {
//     let departamentosFiltrados = departamentosPorId
//     let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")

//     if (checkboxChecked.length != 0) {
//         departamentosFiltrados = filtrarCheck(checkboxChecked, checkFiltro)
//     }

//     if (texto != "") {
//         departamentosFiltrados = filtrarText(texto, checkFiltro)
//     }
//     pintarTarjetas(departamentosFiltrados, contenedorTarjetas)
// })

function filtrarText(texto, arreglo) {
    let departamentosFiltrados = arreglo.filter(departamentos => departamentos.name.toLowerCase().includes(texto.toLowerCase()))
    return departamentosFiltrados
}

let texto = document.getElementById("busqueda").value
let buscar = document.getElementById("busqueda")
buscar.addEventListener('input', (filtroBusqueda) => {
    let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")
    let departamentosFiltrados = filtrarText(texto, departamentosPorId)

    if (checkboxChecked.length != 0) {
        departamentosFiltrados = filtrarCheck(checkboxChecked, departamentosFiltrados)
    }
    if (filtroBusqueda.target.value != "" && departamentosFiltrados != "") {
        pintarTarjetas(departamentosFiltrados, contenedorTarjetas)
    }
    if (filtroBusqueda.target.value == "") {
        pintarTarjetas(departamentosPorId, contenedorTarjetas)
    }
    if (departamentosFiltrados.length === 0) {
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