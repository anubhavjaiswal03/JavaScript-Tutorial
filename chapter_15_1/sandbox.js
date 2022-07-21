function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = function() {
        console.log(`${this.username} has logged in`);
    };
}

class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const userOne = new User('mario', 'mario@myemail.com');
const userTwo = new User('luigi', 'luigi@myemail.com');
const userThree = new Admin('shaun', 'shaun@myemail.com', 'black-built-Ninja');

let users = [userOne, userTwo, userThree];
console.log(users);

// userOne.login();
// userTwo.login();
// userTwo.logout();
// userOne.logout();

// userOne.login().incScore().incScore().logout();

userThree.deleteUser(userOne);
console.log(users);

// userOne.deleteUser();
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object 
// 3 - it calls the constructor function to 'build' the object