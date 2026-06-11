document.addEventListener("DOMContentLoaded", () => {
    const trilho = document.getElementById("trilho-carrossel");
    const botaoAnterior = document.getElementById("botao-anterior");
    const botaoProximo = document.getElementById("botao-proximo");
    
    if (!trilho || !botaoAnterior || !botaoProximo) return;

    let indiceAtual = 0;
    const totalItens = document.querySelectorAll(".item-carrossel").length;

    function atualizarCarrossel() {
        trilho.style.transform = `translateX(-${indiceAtual * 100}%)`;
    }

    botaoProximo.addEventListener("click", () => {
        indiceAtual = (indiceAtual + 1) % totalItens;
        atualizarCarrossel();
    });

    botaoAnterior.addEventListener("click", () => {
        indiceAtual = (indiceAtual - 1 + totalItens) % totalItens;
        atualizarCarrossel();
    });
});