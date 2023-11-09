/* this is how we emulate or, copy or, mimic a representation class */
/* we know every objects have proto type property */


function User(email, name) {

    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, ' has logged in');
}


User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, ' has logged out');
}



/* inherite from User */
function Admin(...args) {
    // admin
    // console.log(args);
    User.apply(this, args);
    this.role = 'super admin';
}

/* this is away to create object in javascript */
Admin.prototype = Object.create(User.prototype);

/* similarly, created a delete function */
Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {
        return user.email != u.email;
    })
}


var userOne = new User('yagya', 'yagya@mail.com');
var userTwo = new User('Ananda', 'ananda@mail.com');
var admin = new Admin('YAGYA_ADMIN', 'adminyagya@admin.com');
var users = [userOne, userTwo, admin];


admin.deleteUser(users[1]);

console.log(users);
