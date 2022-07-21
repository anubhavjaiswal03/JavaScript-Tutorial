function User(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
};
User.prototype.isScore = function(){
    this.score++;
    console.log(`${this.username} has scored ${this.score}`);
    return this;
}



function Admin(username, email, title) {
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => u.username !== user.username);
};

const userOne = new User('mario', 'mario@myemail.com');
const userTwo = new User('luigi', 'luigi@myemail.com');
const userThree = new Admin('shaun', 'shaun@myemail.com');

let users = [userOne, userTwo, userThree];

console.log(users);
userOne.login().isScore().isScore().logout();

// returning this on meethods alows chaining function calls
userThree.deleteUser(userTwo);
console.log(users);
