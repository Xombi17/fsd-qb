function updateClock() {
    let now = new Date();
    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent = h + ":" + m + ":" + s;
}

updateClock();
setInterval(updateClock, 1000);
