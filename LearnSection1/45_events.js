const btn = document.querySelector('.button');
// don't do this
// btn.onclick = function() {
//     alert('Click')
// };


// addEventListener
btn.addEventListener('click', () => {
    alert('click')
});

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement)
    }
}

btn.addEventListener('click', (event) => {
    console.log(event.target)

});
// btn.removeEventListener('click', deleteElement);




// cancel default browser behavior
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
})

// apply one handler to multiple selectors
const btns = document.querySelectorAll('.button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true})
})
