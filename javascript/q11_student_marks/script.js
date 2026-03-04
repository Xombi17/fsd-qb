function calculate() {
    let total =
        Number(document.getElementById("m1").value) +
        Number(document.getElementById("m2").value) +
        Number(document.getElementById("m3").value) +
        Number(document.getElementById("m4").value) +
        Number(document.getElementById("m5").value);

    let percentage = total / 5;
    let grade;

    if (percentage >= 75)
        grade = "Distinction";
    else if (percentage >= 60)
        grade = "First Class";
    else if (percentage >= 50)
        grade = "Second Class";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
        "Total: " + total +
        "<br>Percentage: " + percentage +
        "<br>Grade: " + grade;
}
