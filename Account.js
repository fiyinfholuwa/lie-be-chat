//EYE SECURITY
document.getElementById('togglePassword').addEventListener('click', function () {
            const password = document.getElementById('password');
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });


        //VALIDATION
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    if (password.length < 8) {
        this.setCustomValidity('Password must be at least 8 characters long.');
    } else {
        this.setCustomValidity('');
    }
});