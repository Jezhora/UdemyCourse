'use strict'

// console.log('Request data...');

// const req = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     console.log('data perepare')
  
//     const product = {
//       name: 'TV',
//       price: 2000
//     }
    
//     resolve(product)
    
//   }, 2000)
// });

// // req.then((product) => {
// //   setTimeout(() => {
// //     product.status = 'order';
// //     console.log(product)+
// //   }, 2000);
// // }) 
// req.then(product => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product)
//       // reject();
//   }, 2000);
//   }).then(data => {
//     data.modify = true;
//     return data
//   }).then(data => {
//     console.log(data);
//   })
// }).catch(() => {
//   console.error('ERROR')
// }).finally(()=> {
//   console.log('Finally')
// })


const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })
}

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// if done all promises => then do something
Promise.all([test(1000), test(2000)]).then(() => {
  console.log('All')
})

// if done first promise => then do somesthing
Promise.race([test(1000), test(2000)]).then(() => {
  console.log('Race')
})