document.addEventListener("DOMContentLoaded", function () {
    fetch("/componentes/menu.js") // Caminho para o arquivo menu.html
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});
