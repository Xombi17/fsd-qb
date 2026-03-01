function calculate(op) {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let ans;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").textContent = "Result: Enter valid numbers";
        return;
    }

    if (op === "+") {
        ans = a + b;
    } else if (op === "-") {
        ans = a - b;
    } else if (op === "*") {
        ans = a * b;
    } else if (op === "/") {
        if (b === 0) {
            document.getElementById("result").textContent = "Result: Cannot divide by zero";
            return;
        }
        ans = a / b;
    }

    document.getElementById("result").textContent = "Result: " + ans;
}
