// Select form and input elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting before validation

    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();

    // If all validations pass, submit the form
    if (validateName() && validateEmail() && validatePhone() && validatePassword() && validateConfirmPassword()) {
        alert('Form submitted successfully!');
        // Perform form submission actions here (e.g., send data to server)
    }
});

// Validation functions
function validateName() {
    const nameValue = fullName.value.trim();
    if (nameValue.length < 5) {
        nameError.innerText = 'Name must be at least 5 characters long';
        return false;
    } else {
        nameError.innerText = '';
        return true;
    }
}

function validateEmail() {
    const emailValue = email.value.trim();
    if (!emailValue.includes('@')) {
        emailError.innerText = 'Enter a valid email address';
        return false;
    } else {
        emailError.innerText = '';
        return true;
    }
}

function validatePhone() {
    const phoneValue = phone.value.trim();
    if (phoneValue === '123456789' || phoneValue.length !== 10 || isNaN(phoneValue)) {
        phoneError.innerText = 'Enter a valid 10-digit phone number';
        return false;
    } else {
        phoneError.innerText = '';
        return true;
    }
}

function validatePassword() {
    const passwordValue = password.value.trim();
    if (passwordValue.length < 8 || passwordValue.toLowerCase() === 'password' || passwordValue.toLowerCase() === fullName.value.toLowerCase()) {
        passwordError.innerText = 'Password is too weak';
        return false;
    } else {
        passwordError.innerText = '';
        return true;
    }
}

function validateConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value.trim();
    if (confirmPasswordValue !== password.value.trim()) {
        confirmPasswordError.innerText = 'Passwords do not match';
        return false;
    } else {
        confirmPasswordError.innerText = '';
        return true;
    }
}
