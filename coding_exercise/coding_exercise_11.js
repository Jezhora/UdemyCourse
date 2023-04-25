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

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
}