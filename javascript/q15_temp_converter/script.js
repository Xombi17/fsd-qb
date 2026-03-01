function calculateConversion() {
    let tempInput = parseFloat(document.getElementById('tempValue').value);
    let radios = document.getElementsByName('convType');
    let convType = 'CtoF';
    let result;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            convType = radios[i].value;
            break;
        }
    }

    if (convType === 'CtoF') {
        result = (tempInput * 9 / 5) + 32;
    } else {
        result = (tempInput - 32) * 5 / 9;
    }

    document.getElementById('result').textContent = 'Result: ' + result.toFixed(2);
}

document.getElementById('tempForm').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateConversion();
});