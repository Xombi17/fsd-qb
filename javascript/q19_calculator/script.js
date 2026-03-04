function add() {
    document.getElementById("result").innerHTML =
        Number(document.getElementById("a").value) + Number(document.getElementById("b").value);
}

function sub() {
    document.getElementById("result").innerHTML =
        document.getElementById("a").value - document.getElementById("b").value;
}

function mul() {
    document.getElementById("result").innerHTML =
        document.getElementById("a").value * document.getElementById("b").value;
}

function div() {
    document.getElementById("result").innerHTML =
        document.getElementById("a").value / document.getElementById("b").value;
}
