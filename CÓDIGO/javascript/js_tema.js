document.addEventListener("DOMContentLoaded", () => {
    const botaoTema = document.getElementById("botao-tema");
    const corpo = document.body;

    const temaSalvo = localStorage.getItem("tema");
    
    if (temaSalvo === "escuro") {
        corpo.classList.add("modo-escuro");
    }

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            corpo.classList.toggle("modo-escuro");
            
            if (corpo.classList.contains("modo-escuro")) {
                localStorage.setItem("tema", "escuro");
            } else {
                localStorage.setItem("tema", "claro");
            }
        });
    }
});