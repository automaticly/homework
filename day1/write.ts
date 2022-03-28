/**
 * 
    手写 函数柯里化
    function curry(func) {
    //此处补全
    }
    function sum(a, b, c) {
    return a + b + c;
    }

    let curriedSum = curry(sum);

    alert(curriedSum(1, 2, 3)); // 6, still callable normally
    alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
    alert(curriedSum(1)(2)(3)); // 6, full currying
 */
    type Func<T> = (...args: T[])=> any

    function curry<T>(func: Func<T>) {
        return function curried(...args: T[]) {
            if (args.length >= func.length) {
                return func.apply(null, args) 
            } else {
                return function (...args2: T[]) {
                    return curried.apply(null, args.concat(args2))
                }
            }
        }
    }

    function sum(a: number, b: number, c: number) {
        return a + b + c;
    }

    const curriedSum = curry(sum);
    console.log(curriedSum(1)(2,3));