document.getElementById('marksForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const ids = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
    const marks = ids.map(id => Number(document.getElementById(id).value));

    // Validate each mark is 0–100
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            alert('Each subject mark must be between 0 and 100.');
            return;
        }
    }

    const total = marks.reduce((sum, m) => sum + m, 0);
    const percentage = (total / 500) * 100;

    let grade;
    if (percentage >= 75) {
        grade = 'Distinction';
    } else if (percentage >= 60) {
        grade = 'First Class';
    } else if (percentage >= 50) {
        grade = 'Second Class';
    } else {
        grade = 'Fail';
    }

    document.getElementById('total').textContent = total;
    document.getElementById('percentage').textContent = percentage.toFixed(2);
    document.getElementById('grade').textContent = grade;

    document.getElementById('result').classList.remove('hidden');
});
