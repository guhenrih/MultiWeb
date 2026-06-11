document.addEventListener("DOMContentLoaded", () => {
    const menuHTML = `
        <div class="camada-escura" id="camada-escura"></div>
        <aside class="menu-lateral" id="menu-lateral">
            <div class="cabecalho-menu">
                <h2>Menu</h2>
                <button type="button" class="botao-fechar" id="botao-fechar">&times;</button>
            </div>
            <nav class="links-menu">
                <a href="sobre_projeto.html"><i class="fas fa-info-circle"></i> Sobre o Projeto</a>
                <a href="sobre_mim.html"><i class="fas fa-user"></i> Sobre o Criador</a>
                <a href="guia_ferramentas.html"><i class="fas fa-book"></i> Guia de Ferramentas</a>
            </nav>
        </aside>
    `;

    document.body.insertAdjacentHTML('beforeend', menuHTML);

    const botaoMenu = document.getElementById("botao-menu");
    const botaoFechar = document.getElementById("botao-fechar");
    const menuLateral = document.getElementById("menu-lateral");
    const camadaEscura = document.getElementById("camada-escura");

    function abrirMenu() {
        menuLateral.classList.add("aberto");
        camadaEscura.classList.add("ativo");
    }

    function fecharMenu() {
        menuLateral.classList.remove("aberto");
        camadaEscura.classList.remove("ativo");
    }

    if (botaoMenu) {
        botaoMenu.addEventListener("click", abrirMenu);
    }
    
    botaoFechar.addEventListener("click", fecharMenu);
    camadaEscura.addEventListener("click", fecharMenu);
});