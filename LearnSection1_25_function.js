'use strict';

// function declaration
let num = 20;

function showFirstMessage(text){
    console.log(text);
    let num = 10;
    console.log(num)
}

showFirstMessage('Hello World');
console.log(num)


function calc (a, b) {
    return (a + b);
}
console.log(calc (4, 6));
console.log(calc (7, 11));
console.log(calc (2, 9));


function ret() {
    let num = 50;
    return num
}

const anotherNum = ret();
console.log(ret())


// function expression
const logger = function () {
    console.log('Hello');
};
logger();


// arrow function

const calc = (a, b) => a + b;
const calc = (a, b) => {return a + b};


//More about function

const usdCurr = 28;
const euroCurr = 59;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}


function promotion (result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);

promotion (res);


function test () {
    for (let i = 0; i < 5; i++){
        console.log(i);
        if (i === 3) {
            return;
        }
    }
    console.log('done')
    //console.log('done') is not visible, because the return ended the function
}
test();


function doNothing () {};
console.log(doNothing() === undefined);