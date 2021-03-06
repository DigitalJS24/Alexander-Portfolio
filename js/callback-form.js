const callbackForm = document.querySelector('.callback-form-container');
const callbackModal = document.querySelector('#modal-callback');

const userName = document.querySelector('#callback-form-input-name');
const userEmail = document.querySelector('#callback-form-input-email');
const userPhone = document.querySelector('#callback-form-input-phone');

userPhone.addEventListener('click', function() {
    if (!userPhone.value.trim()) {
        userPhone.value = '+380';
    }
});

userPhone.addEventListener('blur', function() {
    if (userPhone.value === '+380') {
        userPhone.value = '';
    }
});

callbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let hasError = false;
    /* let userPhoneCorrectSet = userPhone.value.replace(/[\s\(\)\-]/g, ''); */

    if (!userName.value.trim()) {
        userName.classList.add('callback-form-input-error');
        hasError = true;
    } else {
        userName.classList.remove('callback-form-input-error');
    }

    if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
        userEmail.classList.add('callback-form-input-error');
        hasError = true;
    } else {
        userEmail.classList.remove('callback-form-input-error');
    }

    if (!userPhone.value.trim()) {
        userPhone.classList.add('callback-form-input-error');
        hasError = true;
    } else {
        userPhone.classList.remove('callback-form-input-error');
    }

    if (hasError) {
        return;
    }

    userName.value = '';
    userEmail.value = '';
    userPhone.value = '';

    callbackModal.classList.add('modal-active');

    setTimeout(function() {
        callbackModal.classList.remove('modal-active');
    }, 3000);
});

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}