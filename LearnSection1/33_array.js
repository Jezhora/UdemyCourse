'use strict'



// Don't do that!
// arr[99] = 0;

// removes the last element from an array
// arr.pop();

// method adds the specified elements to the end of an array 
// and returns the new length of the array
// arr.push(10)

// console.log(arr)

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
const arr = [1, 2, 3, 4, 11 ]

// use forEach method in most cases
arr.forEach(function(item, index, arr){
    console.log(`${index}: ${item}  in array ${arr}`);
});



// If we use for/of we can use "break" & "continue"
// for (let value of arr) {
//     console.log(value)
// }


// .split()
// takes a pattern and divides a String into an ordered list
//  of substrings by searching for the pattern, 
//  puts these substrings into an array, and returns the array.

// .join()
// method creates and returns a new string by concatenating all 
// of the elements in an array

// .sort()
// method sorts the elements of an array in place 
// and returns the reference to the same array, now sorted. 
// The default sort order is ascending, built upon converting
//  the elements into strings, then comparing their sequences
//   of UTF-16 code units values.
function compareNum(a, b) {
    return a - b;
}


const str = prompt('','');
const products = str.split(', ');
console.log(products.join('; '));