// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo donde se almacenarán los nombres de los amigos
let amigos = []

// Capturar el valor del campo de entrada y actualizar el array de amigos
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value
//Validar que el campo no esté vacío
    if (amigo.trim() === "") {
        alert("Por favor, ingresa un nombre.")
        return
    }

    amigos.push(amigo)
    document.getElementById("amigo").value = ""
    actualizarLista()
    // console.log(amigos)
}

//Limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById("amigo").value = ""
}

// Implementar funcion para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("lista-amigos")
    lista.innerHTML = ""

    amigos.forEach(function(amigo) {
        let li = document.createElement("li")
        li.textContent = amigo
        lista.appendChild(li)
    })
}

// Implementar funcion para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para sortear un amigo secreto.")
        return
    }

    let indice = Math.floor(Math.random() * amigos.length)
    let amigoSecreto = amigos[indice]


// Mostrar resultado en la pagina
let resultado = document.getElementById("resultado")
resultado.innerHTML = "" 
let li = document.createElement("li")
li.textContent = `Tu amigo secreto es: ` + amigoSecreto
resultado.appendChild(li)

}