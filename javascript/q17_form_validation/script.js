document.getElementById('regForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    // Clear previous errors
    [name, email, password].forEach(el => el.classList.remove('invalid'));
    [nameError, emailError, passwordError].forEach(el => el.textContent = '');
    document.getElementById('successMsg').classList.add('hidden');

    // Validate Name
    if (name.value.trim() === '') {
        nameError.textContent = 'Name cannot be empty.';
        name.classList.add('invalid');
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        email.classList.add('invalid');
        isValid = false;
    }

    // Validate Password
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        password.classList.add('invalid');
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMsg').classList.remove('hidden');
        this.reset();
    }
});
