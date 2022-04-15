/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function race(promises) {
    // your code here
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
          promise().then(resolve, reject)
        
      })
    })
  }

  const promise41 = () =>new Promise(resolve=>{
    setTimeout(()=>{
        resolve(2);
    },100)
});
const promise51 = () => new Promise(resolve=>{
    setTimeout(()=>{
        resolve(3);
    },200)
});
const promise61 = () => new Promise(resolve=>{
    setTimeout(()=>{
        resolve(4);
    },300)
});

race([promise51, promise41, promise61]).then(e => console.log(e)).catch(err => console.log(err));