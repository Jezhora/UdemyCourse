const num = 51;

switch (num) {
    case 49:
        console.log('error')
        break;
    case 100:
        console.log('error')
        break;
    case 50:
        console.log('Yes!')
        break
    default:
        console.log('Not this time!')
        break

}


// const hamburger = 3,
//       fries = 1,
//       coke = 0;


// if (hamburger === 3 && fries && coke) {
//     console.log("I'm full")
// } else {
//     console.log("I'm hungry!")
// };


const hamburger = 3,
      fries = 3,
      coke = 0,
      nugggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nugggets === 2) {
    console.log("I'm full")
} else {
    console.log("I'm hungry!")
};


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


// Exercise
console.log( NaN || 2 || undefined ); 
// 2
console.log( NaN && 2 && undefined );
// NaN
console.log( 1 && 2 && 3 );
// 3
console.log( !1 && 2 || !3 );
// false
console.log( 25 || null && !3 );
// 25
console.log( NaN || null || !3 || undefined || 5);
// 5
console.log( NaN || null && !3 && undefined || 5);
// 5
console.log( 5 === 5 && 3 > 1 || 5);
// true 


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// true

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
// true

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// false



