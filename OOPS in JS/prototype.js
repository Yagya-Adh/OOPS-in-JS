/* this is how we emulate or, copy or, mimic a representation class */
/* we know every objects have proto type property */


function User(email, name) {

    this.email = email;
    this.name = name;
    this.online = false;


    /*  this.login = function () {
         console.log(this.email, ' has logged in');
     } */
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, ' has logged in');
}


User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, ' has logged out');
}

User.prototype.hello = 'Hello';



var userOne = new User('yagya', 'yagya@mail.com');
var userTwo = new User('Ananda', 'ananda@mail.com');


// console.log(userOne)
// userTwo.login();