function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    const clockEl = document.getElementById('clock');
    clockEl.textContent = timeString;
    clockEl.setAttribute('datetime', now.toISOString());

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('dateDisplay').textContent = now.toLocaleDateString(undefined, options);
}

updateClock();
setInterval(updateClock, 1000);
