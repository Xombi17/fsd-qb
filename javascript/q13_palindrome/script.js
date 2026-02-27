document.getElementById('palindromeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const input = document.getElementById('inputStr').value.trim();
    const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');

    const resultEl = document.getElementById('result');
    resultEl.classList.remove('hidden', 'palindrome', 'not-palindrome');

    if (cleaned === reversed) {
        resultEl.textContent = `"${input}" is a Palindrome!`;
        resultEl.classList.add('palindrome');
    } else {
        resultEl.textContent = `"${input}" is NOT a Palindrome.`;
        resultEl.classList.add('not-palindrome');
    }
});
