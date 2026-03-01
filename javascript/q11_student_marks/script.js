document.getElementById('marksForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let sub1 = Number(document.getElementById('sub1').value);
    let sub2 = Number(document.getElementById('sub2').value);
    let sub3 = Number(document.getElementById('sub3').value);
    let sub4 = Number(document.getElementById('sub4').value);
    let sub5 = Number(document.getElementById('sub5').value);

    let marks = [sub1, sub2, sub3, sub4, sub5];

    for (let i = 0; i < 5; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            alert('Each subject mark must be between 0 and 100.');
            return;
        }
    }

    let total = 0;
    for (let i = 0; i < 5; i++) {
        total = total + marks[i];
    }

    let percentage = (total / 500) * 100;

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
