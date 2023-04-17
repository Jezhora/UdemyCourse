'use strict'

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('test');
    }
};
options.makeTest();

const {border,bg} = options.colors;

console.log(bg);

// console.log(Object.keys(options).length)

// console.log(options['colors'])

// delete options.name;  

// let key in object
// let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} matters ${options[key][i]}`)
        }
    } else {
        console.log(`Property ${key} matters ${options[key]} `)
        // counter++
    }
    
}
console.log(counter)


