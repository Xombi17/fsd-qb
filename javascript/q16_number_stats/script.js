document.getElementById('generateBtn').addEventListener('click', function () {
    const count = parseInt(document.getElementById('count').value);
    if (!count || count < 1) {
        alert('Please enter a valid number.');
        return;
    }

    const container = document.getElementById('numberInputs');
    container.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const label = document.createElement('label');
        label.textContent = `Number ${i}:`;

        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'numEntry';
        input.placeholder = `Enter number ${i}`;
        input.required = true;

        container.appendChild(label);
        container.appendChild(input);
    }

    document.getElementById('numbersForm').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
});

document.getElementById('numbersForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('.numEntry');
    const numbers = Array.from(inputs).map(inp => parseFloat(inp.value));

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const avg = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;

    document.getElementById('max').textContent = max;
    document.getElementById('min').textContent = min;
    document.getElementById('avg').textContent = avg.toFixed(2);

    document.getElementById('result').classList.remove('hidden');
});
