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
    const hiddenPassword = document.querySelector('#hiddenPassword');
    const showPassword = document.querySelector('#showPassword');

    hiddenPassword.addEventListener('click',function(){
        showPassword.classList.toggle('hidden');
        hiddenPassword.classList.toggle('hidden');
    })

} else {
    console.log('#login not found');
}



