const ul = document.querySelector('ul');
const items =  document.querySelectorAll('li');
const button = document.querySelector('button');


// ADD:
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `todo #${Math.round(Math.random()*100)}`;
    ul.prepend(li);
});


// REMOVE:
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('evenet in LI');
//         e.stopPropagation();
//         e.target.remove();
//     });
// });
// adding too many event handlers is expensive computationally hence event delegation is used

ul.addEventListener('click', e => {
    // console.log('evenet in UL');
    // console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})