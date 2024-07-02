document.getElementById('calcularBtn').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    function formatNumber(num) {
        const formattedNum = num.toFixed(2);
        return formattedNum.endsWith('.0') ? num.toFixed(0) : formattedNum;
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Quantidades Necessárias</h2>
        <p>Carne Bovina: ${formatNumber(carneBovina / 1000)} kg</p>
        <p>Frango: ${formatNumber(frango / 1000)} kg</p>
        <p>Linguiça: ${formatNumber(linguica / 1000)} kg</p>
        <p>Refrigerante: ${formatNumber(refrigerante / 1000)} L</p>
        <p>Cerveja: ${formatNumber(cerveja / 1000)} L</p>
    `;
});


