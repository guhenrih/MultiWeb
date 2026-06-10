document.addEventListener("DOMContentLoaded", () => {
    const inputConta = document.getElementById("valor-conta");
    const inputTaxa = document.getElementById("taxa-servico");
    const inputPessoas = document.getElementById("num-pessoas");
    const btnCalcular = document.getElementById("btn-calcular");
    const textoResultado = document.getElementById("texto-resultado");

    btnCalcular.addEventListener("click", () => {
        // Captura os valores e substitui vírgula por ponto (caso o usuário digite com vírgula)
        const valorConta = parseFloat(inputConta.value.replace(',', '.'));
        const taxaServico = parseFloat(inputTaxa.value.replace(',', '.')) || 0; // Se vazio, assume 0
        const numPessoas = parseInt(inputPessoas.value);

        // Validação simples
        if (isNaN(valorConta) || isNaN(numPessoas) || valorConta <= 0 || numPessoas <= 0) {
            textoResultado.innerText = "Por favor, informe valores válidos maiores que zero.";
            textoResultado.style.color = "#ef4444"; // Cor de erro (vermelho)
            return;
        }

        // Cálculos
        const valorGorjeta = valorConta * (taxaServico / 100);
        const valorTotal = valorConta + valorGorjeta;
        const valorPorPessoa = valorTotal / numPessoas;

        // Exibição do resultado
        textoResultado.innerHTML = `
            Total com taxa: <strong>R$ ${valorTotal.toFixed(2).replace('.', ',')}</strong><br><br>
            Fica <strong>R$ ${valorPorPessoa.toFixed(2).replace('.', ',')}</strong> para cada!
        `;
        textoResultado.style.color = "#0077b6"; // Usando sua var(--cor1) para destaque
    });
});