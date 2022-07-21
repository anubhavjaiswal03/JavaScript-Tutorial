// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@mymail.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', ' 10 things to makew with marmite']

};

console.log(user);
console.log(user.name);
user.age = 35;
console.log(user.age);

console.log(user['location']);
user['name'] = 'chun-li';
console.log(user.name);

console.log(typeof user);