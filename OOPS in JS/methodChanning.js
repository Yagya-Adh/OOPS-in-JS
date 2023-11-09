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

// Created instance

var userOne = new User('yagya', 'yagya@mail.com');
var userTwo = new User('Ananda', 'ananda@mail.com');

// userOne.login();
// userOne.logout();
// userOne.updateScore();


userOne.login().updateScore().updateScore().logout();


