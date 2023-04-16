// Create a function that will take one argument-
// positive integer. It should return a string
// in which the Fibonacci numbers will be displayed separated by a space.
// Moreover, their number must be equal to the passed argument.
// If the passed argument is not a number, return an empty string. Solve without recursion.
// Example:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"

function fib(n) {
    if (!Number.isInteger(n)|| n <= 0){
        return ''
    } else if (n === 1){
        return '0'
    } 
    let result = '0 1';
    let a = 0,
        b = 1;
    for (let i = 2; i < n; i++) {
        let summ = a + b;
        result += ' ' + summ;
        a = b;
        b = summ
    } 
    return result
}
console.log(fib(1));
