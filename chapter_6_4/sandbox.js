console.log('Getting All paragraphs: <p>');
const allParas = document.querySelectorAll('p');
console.log(allParas);

// get an element by ID
console.log('Getting Element by ID: \'page-title\'');
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
console.log('Getting Element by ClassName: \'error\'');
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
console.log('Getting Element by TagName: \'p\'');
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[0]);