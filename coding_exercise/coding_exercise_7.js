// 1) Create a function that will calculate the volume and area of the full surface of a cube (also basic math, sometimes used in creating animations). This function takes an integer with the value of the length of the edge of the cube. Output the answer in the string format shown in the examples.
// If the function got the wrong argument or it is impossible to calculate the values, return the string "An error occurred during the calculation"
// DO NOT USE THE POWER OPERATOR ** - it does not work in an online browser environment and the tests will break. This is because this operator is from a newer standard than is available here.
// Examples:
// calculateVolumeAndArea(5) => 'Cube volume: 125, total surface area: 150'
// calculateVolumeAndArea(15) => 'Cube volume: 3375, total surface area: 1350'
// calculateVolumeAndArea(15.5) => 'An error occurred while calculating'
// calculateVolumeAndArea('15') => 'An error occurred while calculating'
// calculateVolumeAndArea(-15) => 'An error occurred while calculating'


function calculateVolumeAndArea(h) {
    if (h < 0 || typeof h !== 'number' || Number.isInteger(h) !== true) {
        return `ERROR`
    }

    const volume = Math.pow(h, 3),
          area = 6 * Math.pow(h, 2);

    return `Cube volume: ${volume}, total surface area ${area}`
}
console.log(calculateVolumeAndArea(5));


// Write a function that will determine the compartment number in the train by the seat number passed to it. The compartment has 4 seats.
// The function only accepts an integer between 1 and 36.
// If the passed argument is not a number, negative or fractional, a message is returned:
// "Error. Please check that the seat number you entered is correct"
// If the number is 0 or greater than 36, then the message: "There are no such seats in the car"
// Example:
// getCoupeNumber(33) => 9
// getCoupeNumber(300) => "There are no such places in the train!"
// getCoupeNumber(7.7) => "Error. Please check your seat number!"

function getCoupeNumber(n) {
    if (typeof n !== 'number' || n < 0 || Number.isInteger(n) !== true ) {
        return 'Error. Please check your seat number!'
    } else if (n === 0 || n > 36) {
        return 'There are no such places in the train!'
    }

    return Math.ceil(n / 4)
}
console.log(getCoupeNumber(37))


