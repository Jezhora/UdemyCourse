'use strict'
// es5
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`)
//     };

// }

// User.prototype.exit = function() {
//     console.log(`user ${this.name} leave`)
// }

// const ivan = new User('Ivan', 28);
// const alex = new User ('Alex', 20);
// ivan.exit();

// console.log(ivan);
// alex.hello();
// ivan.hello();

// es6

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`)
    }
    exit(){
        console.log(`user ${this.name} leave`)
    }
    
    
}




