'use strict'




function isOpen(prop) {
    let answer = '';
    // prop ? answer = 'Close' : answer = 'Open';
    prop ? answer = 'Open' : answer = 'Close';

    // return anwser;
    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    // if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Price below average';
    } else {
        return 'Above average price';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // copy.waitors[0] = {name: 'Mike', age: 32};
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));

// You have an object with restaurant data. A beginner developer has created several functions
// that don't work properly and he can't figure out why.
// We need to fix the functions so that they always give the correct result.

// 1) The isOpen function doesn't want to work correctly.
// What we have not tried to substitute into it - the result is always wrong.
// Causes need to be found and corrected.

// 2) The isAverageLunchPriceTrue function should take the prices of any two dishes from the menu,
// add them up and compare them with the average bill (averageLunchPrice).
// Now the function works, but constantly gives the wrong result.
// Indeed, from the presented menu, the sum of any two prices will always be more than 20.
// It is necessary to find the cause and correct it.

// 3) The transferWaitors function was created in order to copy the data template
// and transfer it to another restaurant. Of course,
// in another restaurant there will be other dishes, other waiters, etc.
// Now this function is only at the beginning of development and should change the data about the waiters.
// But in its current form, we found that after its launch,
// not only the data copy contains new waiters, but also the main data!
// In restorantData, employee Alice disappears and is replaced by Mike!
// The cause must be found and corrected immediately so that the data is separated.