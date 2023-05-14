// Write a function that calculates the factorial.
// The task is simple, but you need to understand what a factorial is in general.
// A factorial is a number multiplied by "self minus one", then "self minus two",
// and so on up to 1. The factorial of n is denoted as n!

// From here we can understand that the function must take 1 argument, which will be a number.
// It would be nice if you immediately write a check for
// the incoming value at the interview :) 
// Therefore, if a fractional number or not a number comes to our function,
// a string with any message of your choice is returned.
// If 0 or less, the number 1 is returned.

// The factorial itself with examples looks like this:

// n! = n * (n - 1) * (n - 2) * ...*1 is the general formula

// Example values for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// That is, calling our factorial(5) function returns the number 120

// factorial(4) => 24

// You need to solve the problem through recursion.

function factorial(n) {
    if (!Number.isInteger(n)) {
        return 'Error'
    } else if (n === 0 || n < 0) {
        return 1;
    } else if (n === 1) {
        return 1;
    } else {
        return n * factorial(n -1)
    }
    
}

console.log(factorial(5))