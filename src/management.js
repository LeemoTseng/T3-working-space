// *---------------* //
//
// Index
//
// $0. HTML Template
// $1. Icon isHidden
//
// *---------------* //


// *---------------* //
// $0. HTML Template
// *---------------* //

// *---------------* //
// $1. Icon isHidden
// *---------------* //


if (document.querySelector('#login')) {

    // password input
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const hiddenIcon = document.querySelector('#hiddenIcon');
    const showIcon = document.querySelector('#showIcon');

    hiddenIcon.addEventListener('mousedown', function () {
        hiddenIcon.classList.toggle('hidden');
        showIcon.classList.toggle('hidden');
        showIcon.classList.add('text-primary')
        passwordInput.type = 'text';
    })

    showIcon.addEventListener('mouseup', function () {
        hiddenIcon.classList.toggle('hidden');
        showIcon.classList.toggle('hidden');
        passwordInput.type = 'password';

    })

    // error message
    const errorMessage = document.querySelector('#errorMessage');
    emailInput.addEventListener('input', function () {
        if (emailInput.value === '' || !emailInput.value.includes('@')) {
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
            console.log(emailInput.value);
        }
    })


    passwordInput.addEventListener('input', function () {
        if (passwordInput.value === '') {
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
            console.log(passwordInput.value);
        }
    })





} else {
    console.log('#login not found');
}



