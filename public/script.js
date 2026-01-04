// Seleciona todos os cards de jogadores
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    // Elementos dentro de cada card
    const btnAvaliar = card.querySelector(".btn-avaliar");
    const estrelas = card.querySelector(".estrelas");
    const resultado = card.querySelector(".resultado");

    // Proteção: se o card não tiver algum desses elementos, ignora
    if (!btnAvaliar || !estrelas || !resultado) return;

    // Clique no botão AVALIAR
    btnAvaliar.addEventListener("click", () => {
        estrelas.classList.remove("escondido"); // mostra estrelas
        btnAvaliar.style.display = "none";      // esconde botão
        resultado.style.display = "none";      // esconde resultado anterior
    });

    // Clique em uma estrela
    estrelas.addEventListener("click", (event) => {
        const estrela = event.target.closest("span");
        if (!estrela) return;

        const nota = estrela.dataset.valor;

        // Mostra o resultado
        resultado.textContent = `Avaliação: ${nota}⭐`;
        resultado.style.display = "block";

        // Esconde estrelas e mostra botão novamente
        estrelas.classList.add("escondido");
        btnAvaliar.style.display = "block";
    });
});
