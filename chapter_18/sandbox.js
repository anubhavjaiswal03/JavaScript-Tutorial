// rest parameter
console.log('Rest: ');
const numlist = (...nums) => {
  console.log(nums);
  return nums.map(n => n*2);
}

const result = numlist(1,2,3,4,5,6,7,8,9);
console.log(result);

// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun-li', 'luigi', ...people];

console.log('Spread in Arrays:\n',people, members);

// spread syntax (object)
const person = { name: 'shaun', age:30, job:'net ninja'};
const personClone = {...person, location: 'manchester'};

console.log('Spread in Objects:\n', person,personClone);

const namesArray = ['shaun', 'ryu', 'crystal', 'ryu'];
console.log('Sets:\n','Array:',namesArray);

// const namesSet = new Set(namesArray);
// console.log('Set: ', namesSet);
// const uniqueNames = [...namesSet];

const uniqueNames = [...new Set(namesArray)];
console.log('Unique Names:', uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(25);

console.log('ages:', ages, '\nages.size:',ages.size);
console.log('ages.has(30):', ages.has(30), '\nages.has(25):',ages.has(25));

ages.clear();
console.log(ages);

const ninjas = new Set([
  {name: 'shaun', age:30},
  {name: 'mario', age:25},
  {name: 'luigi', age:27}
]);

console.log('set:\n', ninjas,'\nforEach usage on set:');
ninjas.forEach(ninja => console.log(ninja.name, ninja.age));


// symbol syntax 
const symbolOne = Symbol('generic name');
const symbolTwo = Symbol('generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const ninja = {
};

ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'brown';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'ken';

console.log(ninja);