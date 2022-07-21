// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

const items =  document.querySelectorAll('li');

items.forEach(item => {
        // item.addEventListener('click', () => {
        //     // console.log(item.innerText, 'clicked');
        //     // console.log(event);            
        //     console.log(event.target);
        //     console.log(item);
        // });
        // Above works as addEventListner provides a parameter by default called 'event'

        item.addEventListener('click', e => {
            console.log(e.target);
            e.target.style.textDecoration = 'line-through';
        });
});