
class User {


    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


// the 'new' keyword
// - create a new elsempty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method


var userOne = new User('yagya', 'yagya@mail.com');
var userTwo = new User('Ananda', 'ananda@mail.com');


console.log(userOne);
console.log(userTwo);