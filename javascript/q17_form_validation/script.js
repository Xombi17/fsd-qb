function validate() {
    if (document.getElementById("name").value === "")
        document.getElementById("error").innerHTML = "Name required";

    else if (!document.getElementById("email").value.includes("@"))
        document.getElementById("error").innerHTML = "Invalid Email";

    else if (document.getElementById("pass").value.length < 6)
        document.getElementById("error").innerHTML = "Password too short";

    else
        document.getElementById("error").innerHTML = "Form Submitted";
}
