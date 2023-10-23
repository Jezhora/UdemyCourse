'use strict'
 
const person = {
  name:'Alex',
  tel: '+375297777777',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};

// console.log(JSON.stringify(person))
// console.log(JSON.parse(JSON.stringify(person)))

// clone object
const clone = JSON.parse(JSON.stringify(person));