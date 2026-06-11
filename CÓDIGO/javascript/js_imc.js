document.addEventListener("DOMContentLoaded", () => {
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");
    const botaoCalcular = document.getElementById("botao-calcular");
    const textoResultado = document.getElementById("texto-resultado");

    botaoCalcular.addEventListener("click", () => {
        const peso = parseFloat(inputPeso.value.replace(',', '.'));
        const altura = parseFloat(inputAltura.value.replace(',', '.'));

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            textoResultado.innerText = "Por favor, informe um peso e altura válidos.";
            textoResultado.style.color = "#ef4444"; 
            return;
        }

        const imc = peso / (altura * altura);
        let classificacao = "";
        let corDestaque = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
            corDestaque = "#f59e0b"; 
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
            corDestaque = "#10b981"; 
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
            corDestaque = "#f59e0b"; 
        } else {
            classificacao = "Obesidade";
            corDestaque = "#ef4444"; 
        }

        textoResultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(1).replace('.', ',')}</strong><br><br>Classificação: <strong>${classificacao}</strong>`;
        textoResultado.style.color = corDestaque;
    });
});