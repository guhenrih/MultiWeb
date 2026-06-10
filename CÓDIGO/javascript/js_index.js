document.addEventListener("DOMContentLoaded", () => {
    // 1. Cria a estrutura HTML do menu e do overlay
    const menuHTML = `
        <div class="overlay" id="menu-overlay"></div>
        <aside class="menu-lateral" id="menu-lateral">
            <div class="menu-cabecalho">
                <h2>Menu</h2>
                <button type="button" class="btn-fechar" id="btn-fechar-menu">&times;</button>
            </div>
            <nav class="menu-links">
                <a href="sobre_projeto.html">Sobre o Projeto</a>
                <a href="https://github.com/guhenrih" target="_blank">Sobre o Criador</a>
                <a href="#"> Sugerir Ferramenta </a>
                <a href="#"> Contato </a>
            </nav>
        </aside>
    `;

    // 2. Injeta o HTML no final do <body>
    document.body.insertAdjacentHTML('beforeend', menuHTML);

    // 3. Agora que o HTML existe na página, pegamos os elementos
    const btnMenu = document.getElementById("btn-menu");
    const btnFechar = document.getElementById("btn-fechar-menu");
    const menuLateral = document.getElementById("menu-lateral");
    const overlay = document.getElementById("menu-overlay");

    // 4. Funções para abrir e fechar
    function abrirMenu() {
        menuLateral.classList.add("aberto");
        overlay.classList.add("ativo");
    }

    function fecharMenu() {
        menuLateral.classList.remove("aberto");
        overlay.classList.remove("ativo");
    }

    // 5. Eventos de clique (verifica se o btnMenu existe na página atual antes de adicionar o evento)
    if (btnMenu) {
        btnMenu.addEventListener("click", abrirMenu);
    }
    
    btnFechar.addEventListener("click", fecharMenu);
    overlay.addEventListener("click", fecharMenu);
});