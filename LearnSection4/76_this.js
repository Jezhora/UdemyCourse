'use strict'

// function showThis() {
//     console.log(this);
// }
// showThis(); //behaves differently depending on the mode ('use strict')

// function showThis(a, b) {
//         console.log(this);
//     function sum() {
//         console.log(this);
//         return  a + b;
//     }
//     console.log(sum());

// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this)
//     //     function shout() {
//     //         console.log(this)
//     //     }
//     //     shout();
//     // }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//     console.log('Hello ' + this.name)}
// }
// let ivan = new User('Ivan', 23);
// let daryna = new User('Daryna', 34);

// console.log(ivan.id)
// console.log(ivan.human)
// ivan.hello()

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };


// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(4);
// console.log(double(3));
// console.log(double(13));


// 1) Regular function: this = window, but if 'use strict'- undefined
// 2) The context for object methods is the object itself
// 3) In constructors and classes this. It's a new instance of the object
// 4) Manual binding this. : call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     // console.log(this);
//     this.style.backgroundColor = 'red';   //the same bellow
// });

btn.addEventListener('click', (e) => {
    // console.log(this);
    e.target.style.backgroundColor = 'red';
});

// btn.addEventListener('click', () => {
//     // console.log(this);
//     this.style.backgroundColor = 'red';  //undefined if arrow function
// });

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        }

        say();
    }
};

obj.sayNumber();

const double = a =>  a * 2;
const calc = (a, b) =>  a * b;

console.log(double(5));
console.log(calc(5, 7));
