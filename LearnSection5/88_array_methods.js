'use strict'

// ***** filter

// const names = ['Ivan', 'Alex', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => name.length < 5);
// console.log(shortNames);


// ***** map

// const answers = ['IvaN', 'ANNa', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// let answers = ['IvaN', 'ANNa', 'Hello'];

// anwers = answers.map(item => item.toLowerCase());

// console.log(result)


// ***** every / some (bool)

// const some = [4, 'wdwd', 'gregerer'];

// console.log(some.some(item => typeof(item) === 'number'))
// console.log(some.every(item => typeof(item) === 'number'))


// ***** reduce

// const arr = [4, 5, 1, 3, 7, 9];

// const summ = arr.reduce((acc, num) => acc + num)
// console.log(summ)

// const arr = ['apple', 'beer', 'banana', 'cheese'];


// const summ = arr.reduce((acc, current) => `${acc}, ${current}`)
// console.log(summ)


const obj = {
  ivan: 'person',
  ann: 'person',
  dog: 'animal',
  cat: 'animal'
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);


