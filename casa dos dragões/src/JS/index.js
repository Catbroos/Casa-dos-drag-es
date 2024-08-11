const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBoatoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoesAtiva(indice);
    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoesAtiva(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes .ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBoatoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

