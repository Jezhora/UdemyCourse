'use strict'

const inputUsd = document.querySelector('#usd');
const inputByn = document.querySelector('#byn');

inputByn.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass);
  request.open('GET', 'js/current.json');
  // request.open('GET', 'js1/current.json'); error
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  // status
  // statusText
  // response
  // readyState

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      console.log(request.response)
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputByn.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'error'
    }
  })
})