function convert() {
    let t = Number(document.getElementById("temp").value);
    let type = document.getElementById("type").value;

    let ans;

    if (type === "c")
        ans = (t * 9 / 5) + 32;
    else
        ans = (t - 32) * 5 / 9;

    document.getElementById("result").innerHTML = "Result: " + ans;
}