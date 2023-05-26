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

//1) Regular function: this = window, but if 'use strict'- undefined
//2) The context for object methods is the object itself