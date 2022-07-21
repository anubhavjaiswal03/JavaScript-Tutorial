// Primitve & Reference Types

// Primitive Types                  |                  Reference Types
// - Numbers                        |                  - all types of object
// - Strings                        |                      - object literals
// - Booleans                       |                      - arrays
// - null                           |                      - functions
// - undefined                      |                      - dates
// - symbols                        |                      - all other objects
// - stored in Stack                |                      - stored in Heap


//primitve values

let scoreOne = 50;
let scoreTwo =  scoreOne;
scoreTwo = 75;
console.log( `scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

userOne = {name: 'ryu', age: 30};
userTwo = userOne;

console.log(userOne, userTwo);
userOne.age = 35;
console.log(userOne, userTwo);