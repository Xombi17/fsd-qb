function findStats() {
    let n = parseInt(prompt("How many numbers?"));

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    let numbers = [];

    for (let i = 0; i < n; i++) {
        let value = parseFloat(prompt("Enter number " + (i + 1) + ":"));

        if (isNaN(value)) {
            alert("Invalid input. Please try again.");
            return;
        }

        numbers.push(value);
    }

    let max = numbers[0];
    let min = numbers[0];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }

        if (numbers[i] < min) {
            min = numbers[i];
        }

        sum = sum + numbers[i];
    }

    let avg = sum / numbers.length;

    document.getElementById("out").innerHTML =
        "Maximum: " + max + "<br>" +
        "Minimum: " + min + "<br>" +
        "Average: " + avg.toFixed(2);
}
