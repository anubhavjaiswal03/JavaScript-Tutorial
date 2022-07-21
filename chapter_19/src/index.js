import { styleBody, addTitle, contact } from './dom';
import users, { getPremUser } from './data';

console.log('index file');
addTitle('Test 2');
styleBody();

console.log(contact);

console.log(users);

const premUsers = getPremUser(users);
console.log('users:\n', users, '\npremium users:\n', premUsers);

console.log('test 3');
