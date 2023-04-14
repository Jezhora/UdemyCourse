// Create a function that will take 1 argument 
// with the person's name as input and return a string.


function sayHello(name) {
    return `Hello, ${name}`;
}
console.log(sayHello('Alex'));


// Create a function that takes 1 argument as an integer and returns 
// an array of three numbers: one less than 1, the argument itself, 
// and the number greater than 1.
// Example: calling the function returnNeighboringNumbers(5) 
// returns an array in the form [4, 5, 6].

function returnNeighboringNumbers(num) {
    let result = [];
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            result[i] = (num - 1);
        } else if (i === 1){
            result[i] = num;
        } else {
            result[i] = (num + 1);
        }
    }
    return result;
}
console.log(returnNeighboringNumbers(11))

function returnNeighboringNumbers1(num) {
    return [num - 1, num, num +1]
}
console.log(returnNeighboringNumbers1(18))

// Create a function that will take 2 arguments, both numbers. 
// The first number is the base, the second number is 
// how many times this number will need 
// to be repeated in progression. (See example below). 
// The function must return a string 
// (or a number in special cases, discussed below) 
// where these numbers are in order, 
// separated by three hyphens "---". 
// There shouldn't be any after the last number.
// If the second argument is not a number, equal to or less than zero, 
// then simply return the first argument. 
// (We check through the typeof operator)
// Examples:
// Calling the getMathResult(5, 3) function will give the answer 5---10---15

function getMathResult(num1, num2) { 
    if ( typeof num2 !== 'number' || num2 <= 0){
        return num1;
    }

    let result = '';

    for (let i = 1; i <= num2; i ++) { 
        if (i === num2) {
            result += (num1 * i);  
        } else {
            result += (num1 * i) + '---';
        }
    }
    return result;
}

console.log(getMathResult(7, 0))


