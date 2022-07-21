const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach( (child) => {
//     child.classList.add('article-element');
// });

const title = document.querySelector('p');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
// console.log(title.nextSibling);
console.log(title.previousElementSibling);
console.log(title.previousElementSibling.parentElement.children);