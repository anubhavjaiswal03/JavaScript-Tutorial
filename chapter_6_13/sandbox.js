const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('My Content is Copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX}, y pos - ${e.offsetY}`
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});