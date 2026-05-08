document.addEventListener("DOMContentLoaded", () => {
    const inputAlcool = document.getElementById("preco-alcool");
    const inputGasolina = document.getElementById("preco-gasolina");
    const btnCalcular = document.getElementById("btn-calcular");
    const textoResultado = document.getElementById("texto-resultado");

    btnCalcular.addEventListener("click", () => {
        const precoAlcool = parseFloat(inputAlcool.value.replace(',', '.'));
        const precoGasolina = parseFloat(inputGasolina.value.replace(',', '.'));

        if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
            textoResultado.innerText = "Por favor, informe preços válidos.";
            return;
        }

        const proporcao = precoAlcool / precoGasolina;
        const porcentagem = (proporcao * 100).toFixed(1);

        if (proporcao < 0.7) {
            textoResultado.innerHTML = `O álcool custa ${porcentagem}% da gasolina.<br><strong>Abasteça com ÁLCOOL!</strong>`;
            textoResultado.style.color = "#10b981"; 
        } else {
            textoResultado.innerHTML = `O álcool custa ${porcentagem}% da gasolina.<br><strong>Abasteça com GASOLINA!</strong>`;
            textoResultado.style.color = "#ef4444"; 
        }
    });
});