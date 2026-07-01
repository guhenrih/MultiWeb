document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("nome-usuario");
    const inputEmail = document.getElementById("email-usuario");
    const inputSenha = document.getElementById("senha-usuario");
    const botaoEntrar = document.getElementById("botao-entrar");
    const areaResultado = document.getElementById("area-resultado");
    const textoResultado = document.getElementById("texto-resultado");

    botaoEntrar.addEventListener("click", () => {
        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value;

        // 1. Validação do Campo Nome
        if (nome === "") {
            mostrarErro("Por favor, informe seu nome de usuário.");
            return;
        }

        // 2. Validação do E-mail (Formato padrão contendo @ e .)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mostrarErro("Insira um endereço de e-mail válido.");
            return;
        }

        // 3. Validação da Senha
        // (?=.*[A-Za-z]) garante pelo menos uma letra
        // (?=.*\d) garante pelo menos um número
        // .{6,} garante o tamanho mínimo de 6 caracteres
        const regexSenha = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        if (!regexSenha.test(senha)) {
            mostrarErro("A senha precisa ter no mínimo 6 dígitos e conter letras e números.");
            return;
        }

        // Se todas as regras forem validadas com sucesso, monta o objeto de persistência
        const dadosUsuario = {
            nome: nome,
            email: email,
            logado: true
        };
        
        localStorage.setItem("usuarioMultiWeb", JSON.stringify(dadosUsuario));

        // Redirecionamento automático para a página principal
        window.location.href = "index.html";
    });

    // Função auxiliar para exibir as mensagens de erro na interface
    function mostrarErro(mensagem) {
        areaResultado.style.display = "block";
        textoResultado.innerText = mensagem;
        textoResultado.style.color = "#ef4444"; // Alinhado com o padrão de erros das calculadoras
    }
});