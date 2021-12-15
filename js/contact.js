const validation = document.querySelector(".validation")
const form = document.querySelector("form");

const fullName = document.querySelector("#fullname");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validateContactForm() {
    event.preventDefault();

    if (checkValue(fullName.value, 3)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkValue(subject.value, 5)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkValue(message.value, 15)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (checkValue(fullName.value, 3) && validateEmail(email.value) && checkValue(subject.value, 5) && checkValue(message.value, 15)) {
        submitContactForm();
    }


}


form.addEventListener("submit", validateContactForm);



/* Validation */

function submitContactForm() {
    validation.style.display = "block";
    validation.innerHTML = `<p>Thanks!<br>Your message has been sent.</p>`;

    form.reset();

    setTimeout(function() {
        validation.style.display = "none";
    }, 2500);
}

function checkValue(value, length) {
    if (value.length >= length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const testEmail = reg.test(email);
    return testEmail;
}