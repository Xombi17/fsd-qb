function calculateConversion() {
    const tempInput = document.getElementById('tempValue').value;
    const convType = document.querySelector('input[name="convType"]:checked').value;
    let result;

    if (convType === 'CtoF') {
        result = (tempInput * 9/5) + 32; // Celsius to Fahrenheit
    } else {
        result = (tempInput - 32) * 5/9; // Fahrenheit to Celsius
    }

    document.getElementById('result').textContent = `Result: ${result.toFixed(2)}`;
}

document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    calculateConversion();
});