var userOne = {

    email: 'yagya@mail.com',
    name: 'Yagya',
    // login: function () { }

    login() {
        console.log(this.email, 'has logged in')
    },

    logout() { console.log(this.email, 'has logged out') }
};


/* accessing objects property and methods  with square bracket  */
// console.log(userOne['name']);
// console.log(userOne['login']());