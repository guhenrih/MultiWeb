document.addEventListener("DOMContentLoaded", () => {
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");
    const btnCalcular = document.getElementById("btn-calcular");
    const textoResultado = document.getElementById("texto-resultado");

    btnCalcular.addEventListener("click", () => {
        // Tratando vírgulas e convertendo para float
        const peso = parseFloat(inputPeso.value.replace(',', '.'));
        const altura = parseFloat(inputAltura.value.replace(',', '.'));

        // Validação
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            textoResultado.innerText = "Por favor, informe um peso e altura válidos.";
            textoResultado.style.color = "#ef4444"; 
            return;
        }

        // Cálculo do IMC: Peso / (Altura * Altura)
        const imc = peso / (altura * altura);
        let classificacao = "";
        let corDestaque = "";

        // Regras de classificação
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
            corDestaque = "#f59e0b"; // Amarelo/Laranja de alerta
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
            corDestaque = "#10b981"; // Verde de sucesso
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
            corDestaque = "#f59e0b"; // Amarelo/Laranja de alerta
        } else {
            classificacao = "Obesidade";
            corDestaque = "#ef4444"; // Vermelho de perigo
        }

        // Exibição
        textoResultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1).replace('.', ',')}</strong><br><br>Classificação: <strong>${classificacao}</strong>`;
        textoResultado.style.color = corDestaque;
    });
});