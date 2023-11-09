var userOne = {

    email: 'yagya@mail.com',
    name: 'Yagya',
    // login: function () { }

    login() {
        console.log(this.email, 'has logged in')
    },

    logout() { console.log(this.email, 'has logged out') }
};







// console.log(userOne.name);
// console.log(userOne.login());