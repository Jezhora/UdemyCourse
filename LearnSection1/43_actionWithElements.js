'use strict'

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('heart');


// console.dir(box);
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 300px';

btns[2].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Wow');

div.classList.add('black');

document.body.append(div);
// document.querySelector('.wrapper').append(div);

// wrapper.append(div);
// wrapper.prepend(div);
// wrapper.appendChild(div); -->deprecate method


// // hearts[1].before(div);
// hearts[1].after(div);

// wrapper.insertBefore(div, hearts[0]) ->> deprecate method

// circles[0].remove();
// wrapper.removeChild(hearts[1]); ->> deprecate method

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); ->> deprecate method

div.innerHTML = '<h1>Hello World</h1>';

// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend' , '<h2>Hello</h2>');