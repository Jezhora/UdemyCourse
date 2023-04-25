'use strict'
// 1)Interview task. Write a reverse function
// that takes a string and returns that string in reverse order.
// Example:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// The function can be applied to any string.
// If the function does not receive a string, return the message "Error!"

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Error'
    } else {
        return str.split('').reverse().join('')
    }
}
console.log(reverse(someString))

// 2)Imagine such a real situation.
// You have an ATM that dispenses money from two different banks
// in different currencies. One main bank with base currencies,
// the second additional with other currencies:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// You need to create the main ATM function availableCurr,
// which takes two arguments: the first is an array
// with all available currencies from two banks at once
// (for now, imagine that they cannot be repeated),
// the second is an optional argument that specifies the currency
// that is currently out of ATM. If the array in the first argument is empty,
// then the function returns the string 'No currencies available'.
// The function returns a string in the required form.
// Example:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Will return a string:
// Available currencies:
// USD
// RUB
// Note:
// - CNY (yuan) has disappeared from the list of currencies, so this currency is over
// - After the currency: there is a line break \n, and after each currency too.
// This is important for tests.
// - The data for the first argument must come from two banks at once,
// and first baseCurrencies, then additionalCurrencies in order.


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    const currencies = [...arr];
    let result = 'Доступные валюты:\n';
    if (currencies.length === 0) {
        return 'Нет доступных валют';
    } else {
        currencies.forEach(curr => {
            if (curr !== missingCurr) {
                result += `${curr}${'\n'}`
            }
        })
    }
    return result
}
console.log(availableCurr([], 'CNY'))