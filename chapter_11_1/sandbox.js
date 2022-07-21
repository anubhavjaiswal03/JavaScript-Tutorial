// timestamps

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000/ 60);
const hours = Math.round(diff / 1000/ 60 /60);
const days = Math.round(diff / 1000/ 60 /60 / 24);

console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects

const timestamp = 168719451415
console.log(new Date(timestamp));