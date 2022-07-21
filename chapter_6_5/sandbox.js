const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText += '\nninjas are awesome!';


const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ` ${Math.round(Math.random()*100)}`;
});

const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += `<h2>This is a new h2 ${Math.round(Math.random()*10)}</h2>`

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
})