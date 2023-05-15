const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('password_repeat');

repeatPasswordInput.addEventListener('input', () => {
    if (repeatPasswordInput.value !== passwordInput.value) {
        passwordInput.style.border = '2px solid red';
        repeatPasswordInput.style.border = '2px solid red';
    } else {
        passwordInput.style.border = '2px solid green';
        repeatPasswordInput.style.border = '2px solid green';
    }
});

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

function validateForm() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var passwordRepeatInput = document.getElementById("password_repeat");

    if (emailInput.value === "") {
        alert("Please enter your primary email");
        return false;
    }

    if (passwordInput.value === "") {
        alert("Please enter a password");
        return false;
    }

    if (passwordRepeatInput.value === "") {
        alert("Please re-type your password");
        return false;
    }

    // Если все поля заполнены, можно отправить форму
    document.querySelector(".form_registration").submit();
}
