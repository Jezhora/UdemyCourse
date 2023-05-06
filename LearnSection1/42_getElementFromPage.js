'use strict'

// get element by id
const box = document.getElementById('box');
console.log(box)

// get element by tag name
const btns = document.getElementsByTagName('button');

console.log(btns[1])

// get element by class name
const circles = document.getElementsByClassName('circle');

console.log(circles);

// css selector
const hearts = document.querySelectorAll('.heart');


hearts.forEach(item => {
    console.log(item)
})

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);