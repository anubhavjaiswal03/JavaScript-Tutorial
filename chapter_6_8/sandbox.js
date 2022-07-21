// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');
// innerText only shows Visibile Text whereas textCOntent will show the entire text

paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    else if(para.textContent.includes('success')){
        para.classList.add('success');
    }
    else{
        // console.log(para.innerHTML);
        para.classList.add('default');
    }
});

const title = document.querySelector(".title");

title.classList.toggle('test');
title.classList.toggle('test');