// Lista donde guardaremos los nombres
let amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.querySelector("#amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        inputAmigo.value = "";
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarListaAmigos();
}

// Función para mostrar todos los amigos en pantalla
function mostrarListaAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.querySelector("#resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}
