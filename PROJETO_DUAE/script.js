function nextStep(stepId) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

    setTimeout(() => {
        document.getElementById(stepId).classList.add('active');
    }, 100);
}

function showLoading() {
    const btn = event.target;
    const input = document.getElementById("ans-q1").value.trim();

    if (!input) {
        alert("Preencha sua resposta antes de continuar.");
        return;
    }

    btn.innerText = "ANALISANDO...";
    btn.disabled = true;
    btn.style.opacity = "0.5";

    setTimeout(() => {
        generateResult(input);
        nextStep('step-result');
    }, 1800);
}

function generateResult(input) {
    const resultElement = document.getElementById("result-type");

    let result;

    if (input.length < 20) {
        result = "AJUSTE SIMPLES";
    } else if (input.length < 60) {
        result = "CORE IDENTITY";
    } else {
        result = "MASTER DIRECTION";
    }

    resultElement.innerText = result;
}

function goToWhatsApp() {
    const result = document.getElementById("result-type").innerText;

    const message = encodeURIComponent(
        Olá! Fiz o diagnóstico da DUAE e meu resultado foi: ${result}. Quero entender os próximos passos.
    );

    const url = https://wa.me/5511983013177?text=${message};

    window.open(url, "_blank");
}