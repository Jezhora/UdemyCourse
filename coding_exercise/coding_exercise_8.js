// Create a function that takes an integer number of minutes and
// returns the time in the desired string format.
// (See example). 
// Pay attention to the end of the word "hour" -it changes depending on the number.
// If instead of the argument comes not a number, a fractional or negative number -
// the function returns the string "Error, check the data"

// Attention! Let's limit ourselves to a maximum of 600 minutes (10 hours) for now.
// Since checking for large numbers will bloat the code (33 hours, 31 hours, 11 hours, etc.).
// This will be enough and the code will check exactly this interval (1 - 10 hours).
// But you can also implement a complete script, it must also pass the tests.

// Example:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(min) {
    const hour = Math.floor(min / 60),
          minutes = min - (Math.floor(min / 60) *  60);

        if (min < 0 || typeof min !== 'number' || Number.isInteger(min) === false) {
            return `Error, check the data`
        } else if (hour === 1) {
            return `Это ${hour} час и ${minutes} минут`
        } else if (hour > 1 && hour < 5 ) {
            return `Это ${hour} часа и ${minutes} минут`
        } else if (hour === 0 || hour > 4 && hour <=10) {
            return `Это ${hour} часов и ${minutes} минут`
        }    
}

console.log(getTimeFromMinutes(15))

console.log(111 % 10)

// Write a function that accepts 4 numbers
// and returns the largest of them.
// If one of the arguments is not a number
// or less than 4 - returns 0.
// Fractional numbers are allowed.

function findMaxNumber(...args) {
    
    for(let i = 0; i < arguments.length; i++){
        if (arguments.length < 4 || typeof arguments[i] === 'string') {
            return 0
        }  
    }
    return Math.max(...args)
}
console.log(findMaxNumber(1, 5, 15, 'g'))