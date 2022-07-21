const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value,form.q4.value];
    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score ++;
        }
    });
    // console.log(score*25);
    // const resultvalue=`${score*25}%`;
    // result.classList.remove('d-none');
    // result.lastElementChild.lastElementChild.lastElementChild.innerText = resultvalue;
    window.scrollTo(0,0);
    result.querySelector('span').textContent = `${score*25}%`;
    result.classList.remove('d-none');

});

// window object (global object)

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('.quiz-form'));
// console.log(window.document.querySelector('.quiz-form'));

// alert('hello');
// window.alert('hello');
// setTimeout(() => {
//     alert('hello, ninjas');
// }, 3000);