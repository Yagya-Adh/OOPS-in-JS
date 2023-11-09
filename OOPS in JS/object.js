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


// now updated name
// userOne.name = 'Ananda';



// we can use square bracket to call the property
// console.log(userOne['email']);
// console.log(userOne['name']);



console.log(userOne['login()']);

/* 
var prop = 'name';
console.log(userOne[prop]);
 */

/* 
userOne.age = 27; // to create new property 
console.log(userOne); 
*/

/* 
userOne.logInfo = function () { };
console.log(userOne);
 */
