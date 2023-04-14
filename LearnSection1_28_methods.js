'use strict';

const str = 'test';
      array = [1, 2, 3];

console.log(str.length);
console.log(array.length);

console.log(str.toUpperCase())

const fruit = 'some fruit';
//substring search indexOf()
console.log(fruit.indexOf('fruit'));

//string methods
const logg = 'Hello world';

console.log(logg.slice(2, 4))
console.log(logg.slice(3))

console.log(logg.slice(-5, -2))

console.log(logg.substring(1, 7))

const num = 12.2;
// rounds the value
console.log(Math.round(num));


const test = '12.2px';
// takes a string as an argument and returns 
// an integer according to the specified radix
console.log(parseInt(test));

// parses a string argument and returns 
// a floating point number
console.log(parseFloat(test));