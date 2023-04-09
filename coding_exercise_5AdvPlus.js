// you need to write a code that, using asterisks (*) in the console, draws the following figure:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Hint: there is a line break \n at the end of the figure, which is also taken into account in the tests. There are NO SPACES AT THE END OF EACH LINE, ONLY WHENE)
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let k = 0; k < lines - i; k++){
        result += ' ';
    }
    for (let l = 0; l < 2 * i + 1; l++ ) {
        result += '*';
    }

    result += '\n';
}
console.log(result)