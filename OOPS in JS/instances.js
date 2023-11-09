/* methods channing  */


class User {


    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(this.email, ' is just logged in ');
        return this;
    }

    logout() {
        console.log(this.email, 'is just loggedout');
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.email, 'score is now ', this.score);
        return this;
    }
}



class Admin extends User {
    deletUser(user) {
        users = users.filter(u => {
            return u.email != user.email;  // true to keep and false to remove
        })
    }
}

// Created instance

var userOne = new User('yagya', 'yagya@mail.com');
var userTwo = new User('Ananda', 'ananda@mail.com');
//  created instance from inherit class
var admin = new Admin('Im Admin', 'Im@mail.com');


var users = [userOne, userTwo, admin];

// admin.deletUser(userOne);

userOne.deletUser(userTwo);

console.log(users);
