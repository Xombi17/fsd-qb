function press(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let exp = document.getElementById("display").value;

    if (exp === "") {
        return;
    }

    try {
        let ans = eval(exp);
        document.getElementById("display").value = ans;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
