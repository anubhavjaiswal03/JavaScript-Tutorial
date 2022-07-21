const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://valheim.badalpe.com');
link.innerText = 'Valheim Dedicated Server Status';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color:green;');