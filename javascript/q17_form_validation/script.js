document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    document.getElementById("nameErr").textContent = "";
    document.getElementById("emailErr").textContent = "";
    document.getElementById("passErr").textContent = "";
    document.getElementById("msg").textContent = "";

    let ok = true;

    if (name === "") {
        document.getElementById("nameErr").textContent = "Name is required";
        ok = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailErr").textContent = "Enter valid email";
        ok = false;
    }

    if (password.length < 6) {
        document.getElementById("passErr").textContent = "Password must be 6+ chars";
        ok = false;
    }

    if (ok) {
        document.getElementById("msg").textContent = "Form submitted successfully";
        this.reset();
    }
});
