document.addEventListener("DOMContentLoaded", () => {
    const btnTema = document.getElementById("btn-tema");
    const body = document.body;

    // 1. Verifica se o usuário já havia escolhido o modo escuro antes
    const temaSalvo = localStorage.getItem("tema");
    
    // Se estava escuro, aplica a classe assim que a página carrega
    if (temaSalvo === "escuro") {
        body.classList.add("dark-mode");
    }

    // 2. Evento de clique no botão
    if (btnTema) {
        btnTema.addEventListener("click", () => {
            // Alterna a classe dark-mode no body (se não tem, coloca. se tem, tira)
            body.classList.toggle("dark-mode");
            
            // 3. Salva a escolha atual no navegador
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("tema", "escuro");
            } else {
                localStorage.setItem("tema", "claro");
            }
        });
    }
});