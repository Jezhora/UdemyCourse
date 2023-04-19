'use strict'

let a = 5,
    b = a;

b = b + 5;
console.log(a, b);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //Link to obj

copy.a = 10;

console.log(copy, obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

// const num = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y:4
//     }
// };

const numbers = copy(num);
numbers.a = 10;
console.log(numbers);

console.log(num);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(num, add))

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'Wow'
console.log(newArray);

// spread
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];
console.log(internet);
           
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);

