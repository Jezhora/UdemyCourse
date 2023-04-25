'use strict'
// 1)Write a showFamily function that will accept an array of strings
// and return a message in the desired format.
// showFamily(family) => 'Family consists of: Peter Ann Alex Linda'
// Names are substituted automatically from the array. 
// If the array is empty, then the message 
// 'Family is empty' is displayed

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length === 0) {
        return 'Family is empty'
    }
    return `Family consist of: ${family.join(' ')}`
}

// 2)write a standardizeStrings function 
// that will take an array of strings
// and print these strings to
// the console in lower case.
// Example:
// standardizeStrings(favoriteCities) will print to the console
// Lisbon
// rome
// milan
// dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item){
        console.log(item.toLowerCase())
    })
   
}
standardizeStrings(favoriteCities);