/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 * Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的
 */
function any(promises) {
    // your code here
    return new Promise((resolve, reject) => {
  
      const len = promises.length;
      const errArr = []
      function handleErr(err){
        errArr.push(err);
        if(errArr.length === len){
          reject(errArr);
        }
      }
        promises.forEach((promise) => {
          setTimeout(()=>{
            promise().then(res => resolve(res)).catch(err => {
              handleErr(err);
            })
          })
        })
    })
  }

const promise4 = () => Promise.reject(new Error('fdsa'));
const promise5 = () => Promise.reject(new Error('ghfg'));
const promise6 = () => Promise.reject(new Error('3212'));

any([promise4, promise5, promise6]).then(e => console.log(e)).catch(err => console.log(err));