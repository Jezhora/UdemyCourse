// Place for the first task
// Using a loop, print the numbers from 5 to 10 to the console. 5 and 10 inclusive. Any loop can be used
function firstTask() {
    // Write solution here
    for (let i = 5; i < 11; i++){
        console.log(i)
    }
    
    
}

// Place for the second task
// Using a for loop, print the numbers from 20 to 10 to the console. In reverse order (20, 19, 18...). When the cycle reaches the number 13 - stop the whole cycle
function secondTask() {
    // Write solution here
    for (let i = 20; i >= 10; i--){
        if (i === 13){
            break;
        }
        console.log(i)
    }   
}

// Place for the third task
// Use the for loop to output even numbers from 2 to 10 inclusive
function thirdTask() {
    // Write solution here
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
    
    
}

// Place for the fourth task
// Rewrite the for loop with while. The result should remain exactly the same. Don't create an infinite loop! Otherwise, the browser may freeze.

// Loop to be rewritten:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
function fourthTask() {
    // Write solution here
    let i = 2;
    while ( i <= 16) {
        if (i % 2 !== 0) {
            console.log(i)
        }
        i++
    }
}

// Place for the fifth task
// Fill the array with numbers from 5 to 10 inclusive. Remember that array elements can be formed in the same way as accessing them: arr[0]
function fifthTask() {
    const arrayOfNumbers = [];
    // Write solution here
   for (let i = 0; i < 6; i++) {
        arrayOfNumbers[i] = 5 + i
    
   } 
    // Don't touch
    return arrayOfNumbers;
}