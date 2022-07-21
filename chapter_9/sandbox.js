// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//     return score > 20;
// });

// console.log(filteredScores);

// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true},
// ];

// const premiumUsers = users.filter( user => user.premium);
// console.log(premiumUsers);


// //map method
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];
// const salePrices = prices.map(price => price /2);

// console.log(salePrices);

// const products = [
//     {name: 'gold-star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50},
// ];

// const saleProducts = products.map((product) => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price/2}
//     }else{
//         return product
//     }
// });

// console.log(saleProducts);

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, cur) => {
//     if (cur > 50) {
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

// const scores = [
//     {player: 'mario', score:50},
//     {player: 'yoshi', score:30},
//     {player: 'mario', score:70},
//     {player: 'crystal', score:60},
//     {player: 'mario', score:40},
//     {player: 'crystal', score:60},
//     {player: 'mario', score:80},
//     {player: 'crystal', score:60},
//     {player: 'mario', score:20},
//     {player: 'crystal', score:60},
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if (curr.player === 'mario') {
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log(marioTotal);


// find method

// const scores = [10, 20, 60, 40, 70, 0, 30, 80];
// const firstHighScore = scores.find((score) => {
//     return score > 50;
// })

// console.log(firstHighScore);

// Sort Method 
// example 1 - sorting strings 

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
console.log(names);
names.reverse();
console.log(names);


// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort();
scores.sort((a,b) => b-a);
console.log(scores);


// example 3 - sorting objects
const players = [
    {player: 'mario', score:20},
    {player: 'yoshi', score:10},
    {player: 'chun-li', score:50},
    {player: 'luigi', score:30},
    {player: 'shaun', score:70},

];

// players.sort((a,b)=> {
//     if (a.score > b.score) {
//         return -1;        
//     } else if (a.score < b.score) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

players.sort((a,b) => b.score - a.score);

console.log(players);
