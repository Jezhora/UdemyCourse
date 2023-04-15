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



function getCoupeNumber() {

}