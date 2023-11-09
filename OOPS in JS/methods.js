
class User {


    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(this.email, ' is just logged in ');
    }

    logout() {

        console.log(this.email, 'is just loggedout');

    }

}


// the 'new' keyword
// - create a new elsempty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method


var userOne = new User('yagya', 'yagya@mail.com');
var userTwo = new User('Ananda', 'ananda@mail.com');


// console.log(userOne);
// console.log(userTwo);


// console.log(userOne.login());
// console.log(userTwo.logout());

userOne.login();
userTwo.logout();