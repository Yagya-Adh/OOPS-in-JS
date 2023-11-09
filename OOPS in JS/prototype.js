/* this is how we emulate or, copy or, mimic a representation class */

function User(email, name) {

    this.email = email;
    this.name = name;
    this.online = false;


    this.login = function () {
        console.log(this.email, ' has logged in');
    }
}



var userOne = new User('yagya', 'yagya@mail.com');
var userTwo = new User('Ananda', 'ananda@mail.com');

console.log(userOne);
userTwo.login();

