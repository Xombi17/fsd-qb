let expression = '';

function appendToDisplay(value) {
    if (expression === 'Error') expression = '';
    expression += value;
    document.getElementById('display').textContent = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').textContent = '0';
}

function deleteLast() {
    if (expression === 'Error') {
        expression = '';
        document.getElementById('display').textContent = '0';
        return;
    }
    expression = expression.slice(0, -1);
    document.getElementById('display').textContent = expression || '0';
}

function calculate() {
    try {
        // Replace display symbols with JS operators
        const safeExpr = expression.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        const result = Function('"use strict"; return (' + safeExpr + ')')();
        expression = String(result);
        document.getElementById('display').textContent = expression;
    } catch (err) {
        document.getElementById('display').textContent = 'Error';
        expression = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', function (e) {
    if (e.key >= '0' && e.key <= '9') appendToDisplay(e.key);
    else if (['+', '-', '*', '/', '.', '%'].includes(e.key)) appendToDisplay(e.key);
    else if (e.key === 'Enter' || e.key === '=') calculate();
    else if (e.key === 'Backspace') deleteLast();
    else if (e.key === 'Escape') clearDisplay();
});
