const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.username.value);
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    if (usernamePattern.test(username)) {
        // console.log('good username');
        feedback.textContent='that username is valid!';
    } else {
        // console.log('bad username');
        feedback.textContent=`username must contain letters only & must be between 6 & 12 characters long`;
    }

});

// Regex
const username = '234shaunodn';
const pattern =/^[a-z]{6,}$/;

// const pattern =/^[a-z]{6,}$/;

// let result = pattern.test(username);
// // console.log(result);

// if (result) {
//     console.log('regex test passed :)');
// }else{
//     console.log('regex test failed.');
// }

let result =  username.search(pattern);
console.log(result);