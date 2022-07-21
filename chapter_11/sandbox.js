const now = new Date();

console.log(now);
console.log(typeof now);

// years, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMintues:', now.getMinutes());
console.log('getSecond:', now.getSeconds());

console.log('getTime(timestamp):', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());