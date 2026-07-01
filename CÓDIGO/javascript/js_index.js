document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Puxa os dados de login salvos no navegador
    const usuarioSalvo = localStorage.getItem("usuarioMultiWeb");
    const usuario = usuarioSalvo ? JSON.parse(usuarioSalvo) : null;

    let saudacaoHTML = "";
    let linkLoginLogout = "";

    // 2. Verifica se o usuário existe e está logado
    if (usuario && usuario.logado) {
        // Usuário logado: Exibe saudação e botão de Sair
        saudacaoHTML = `
            <div style="padding: 1.5rem; background-color: var(--cor3); color: var(--cor1); border-bottom: 1px solid var(--cor5);">
                <h3 style="margin: 0; font-size: 1.3rem;">Olá, ${usuario.nome}! 👋</h3>
            </div>
        `;
        linkLoginLogout = `<a href="#" id="link-sair"><i class="fas fa-sign-out-alt"></i> Sair da Conta</a>`;
    } else {
        // Usuário não logado: Exibe botão de Fazer Login
        linkLoginLogout = `<a href="login.html"><i class="fas fa-sign-in-alt"></i> Fazer Login</a>`;
    }

    // 3. Estrutura HTML do Menu Lateral
    const menuHTML = `
        <div class="camada-escura" id="camada-escura"></div>
        <aside class="menu-lateral" id="menu-lateral">
            <div class="cabecalho-menu">
                <h2>Menu</h2>
                <button type="button" class="botao-fechar" id="botao-fechar">&times;</button>
            </div>
            
            ${saudacaoHTML}

            <nav class="links-menu">
                ${linkLoginLogout}
                <a href="sobre_projeto.html"><i class="fas fa-info-circle"></i> Sobre o Projeto</a>
                <a href="sobre_mim.html"><i class="fas fa-user"></i> Sobre o Criador</a>
                <a href="guia_ferramentas.html"><i class="fas fa-book"></i> Guia de Ferramentas</a>
            </nav>
        </aside>
    `;

    // 4. Injeta o menu criado no final do body
    document.body.insertAdjacentHTML('beforeend', menuHTML);

    // 5. Captura os elementos recém-criados para adicionar os eventos de clique
    const botaoMenu = document.getElementById("botao-menu");
    const botaoFechar = document.getElementById("botao-fechar");
    const menuLateral = document.getElementById("menu-lateral");
    const camadaEscura = document.getElementById("camada-escura");

    // Funções de abrir e fechar o menu
    function abrirMenu() {
        menuLateral.classList.add("aberto");
        camadaEscura.classList.add("ativo");
    }

    function fecharMenu() {
        menuLateral.classList.remove("aberto");
        camadaEscura.classList.remove("ativo");
    }

    // Adiciona os eventos de clique ao menu e camada escura
    if (botaoMenu) {
        botaoMenu.addEventListener("click", abrirMenu);
    }
    botaoFechar.addEventListener("click", fecharMenu);
    camadaEscura.addEventListener("click", fecharMenu);

    // 6. Configura o evento do botão de "Sair da Conta" (Logout)
    const botaoSair = document.getElementById("link-sair");
    if (botaoSair) {
        botaoSair.addEventListener("click", (event) => {
            event.preventDefault(); // Evita que a página role para o topo ao clicar no link
            
            // Remove o usuário da memória
            localStorage.removeItem("usuarioMultiWeb"); 
            
            // Recarrega a página para atualizar o menu (a saudação some e volta o botão de login)
            window.location.reload(); 
        });
    }
});