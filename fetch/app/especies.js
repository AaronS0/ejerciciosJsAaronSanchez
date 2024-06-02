const urlBase = "https://api-colombia.com"
const urlEspecies = urlBase + "/api/v1/Invasivespecie"

fetch(urlEspecies).then(respuesta => respuesta.json())
    .then(especies => {
        pintarTabla(especies)
    })

function pintarTabla(arrayEspecies) {
    contenedorFilas.innerHTML = `
        <colgroup span="3" class="columns"></colgroup>
            <div>
                <tr>
                    <th>Nombre</th>
                    <th>Nombre Cientifico</th>
                    <th>Impacto</th>
                    <th>Manejo</th>
                    <th>Nivel de riesgo</th>
                    <th>Imagen</th>
                </tr>
            </div>
        `
    for (let i = 0; i < arrayEspecies.length; i++) {
        crearFila(contenedorFilas, arrayEspecies[i])
    }
}

contenedorFilas = document.getElementById("contenedorTabla")
function crearFila(padreTabla, info) {
    let nuevaFila = document.createElement("tr")
    nuevaFila.innerHTML = `
        <tr>
            <td>${info.name}</td>
            <td>${info.scientificName}</td>
            <td>${info.impact}</td>
            <td>${info.manage}</td>
            <td>${info.riskLevel}</td>
            <td><img src="${info.urlImage}" alt="${info.name}"></td>
        </tr>
        `
    if (info.riskLevel == 1) {
        nuevaFila.className = "azul"
    } else nuevaFila.className = "verde"
    padreTabla.appendChild(nuevaFila)
}