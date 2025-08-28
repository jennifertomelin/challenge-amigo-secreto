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
    console.log(amigos)
}

//Limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById("amigo").value = ""
}
