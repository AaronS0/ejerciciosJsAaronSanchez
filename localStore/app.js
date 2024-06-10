let nombre = "Hanabi"
let edad = 980
let habilidades = ["q", "e", "r", 1, 2, 3]
let build = {
    itemPrincipal: "Inspirar",
    botas: "Cazador",
    itemSecundario: "Robo de vida"
}
let cazador = true

//stringfy lo convierte de variable a formato JSON
console.log(nombre);
console.log(JSON.stringify(nombre));
console.log(edad);
console.log(JSON.stringify(edad));
console.log(habilidades);
console.log(JSON.stringify(habilidades));
console.log(build);
console.log(JSON.stringify(build));
console.log(cazador);
console.log(JSON.stringify(cazador));

//parse lo convierte de formato JSON a variable
let habilidadesTexto = JSON.stringify(habilidades)
console.log(habilidadesTexto);
console.log(JSON.parse(habilidadesTexto));

//Local storage
localStorage.setItem("habilidades", habilidadesTexto)
localStorage.setItem("buildSinJSON", build) //Lo guarda como un objeto pero no el objeto al ser build una variable
let buildTexto = JSON.stringify(build)
localStorage.setItem("build", buildTexto) //Muestra el objeto por ser builTexto formato JSON
localStorage.removeItem("buildSinJSON") //Eliminar datos del locale storage

let buildNueva = localStorage.getItem("build") //Obtiene el value del locale storage con la key
buildNueva = JSON.parse(buildTexto)
console.log(buildNueva);

localStorage.clear()//Elimina todos los datos