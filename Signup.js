(function () {
    'use strict'
    var form = document.getElementById('signupForm');
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
})();

// Password visibility toggle
document.getElementById('togglePassword').addEventListener('click', function () {
    const password = document.getElementById('password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

// Password strength meter
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const strengthMeter = document.querySelector('.password-strength');
    const strength = calculatePasswordStrength(password);
    
    strengthMeter.style.width = strength + '%';
    if (strength < 33) {
        strengthMeter.style.backgroundColor = '#dc3545';
    } else if (strength < 66) {
        strengthMeter.style.backgroundColor = '#ffc107';
    } else {
        strengthMeter.style.backgroundColor = '#28a745';
    }
});

function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]+/)) strength += 25;
    if (password.match(/[A-Z]+/)) strength += 25;
    if (password.match(/[0-9]+/)) strength += 25;
    return strength;
}