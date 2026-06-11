document.addEventListener("DOMContentLoaded", () => {
    const inputConta = document.getElementById("valor-conta");
    const inputTaxa = document.getElementById("taxa-servico");
    const inputPessoas = document.getElementById("num-pessoas");
    const botaoCalcular = document.getElementById("botao-calcular");
    const textoResultado = document.getElementById("texto-resultado");

    botaoCalcular.addEventListener("click", () => {
        const valorConta = parseFloat(inputConta.value.replace(',', '.'));
        const taxaServico = parseFloat(inputTaxa.value.replace(',', '.')) || 0; 
        const numPessoas = parseInt(inputPessoas.value);

        if (isNaN(valorConta) || isNaN(numPessoas) || valorConta <= 0 || numPessoas <= 0) {
            textoResultado.innerText = "Por favor, informe valores válidos maiores que zero.";
            textoResultado.style.color = "#ef4444"; 
            return;
        }

        const valorGorjeta = valorConta * (taxaServico / 100);
        const valorTotal = valorConta + valorGorjeta;
        const valorPorPessoa = valorTotal / numPessoas;

        textoResultado.innerHTML = `
            Total com taxa: <strong>R$ ${valorTotal.toFixed(2).replace('.', ',')}</strong><br><br>
            Fica <strong>R$ ${valorPorPessoa.toFixed(2).replace('.', ',')}</strong> para cada!
        `;
        textoResultado.style.color = "#0077b6"; 
    });
});