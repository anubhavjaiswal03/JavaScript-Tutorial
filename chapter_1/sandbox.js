// console.log(1);
// console.log(2); 
// console.log(10/3);

// for (let i = 0; i < 5; i++) {
//    console.log('in loop:', i);
// }
// console.log('Loop Finished')

// const names = ['sahun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     // console.log(' name at index:', i , 'is', names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html, typeof html);
// }

// greet();

// function greet(){
//     console.log('hello world!');
// }

// const speak = function(name = 'User', time = 'day'){
//     console.log(`good ${time}!, ${name}`);
// };

// speak();
// speak('shawn');
// speak('mario', 'night');

// const calcArea = function(radius){
//     return  3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);


// Arrow Functions:
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// const calcArea = radius => 3.14 * radius**2;

// console.log(calcArea(5));

// const greet = () => 'hello, world';

// console.log(greet());

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10, 15,30], 0.2));

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// // people.forEach(function(person){
// //     console.log(person);
// // });

// // people.forEach(((person, index ) => {console.log(index, person)}));

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);


// Callback Functions in Action

const ul = document.querySelector('.people');
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach((person) => {
    // create html template
    html += `<li style="color: red">${person}</li>`;
});

// console.log(html);
ul.innerHTML = html;