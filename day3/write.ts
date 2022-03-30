/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */

function allSettled(promises) {
    // your code here
    return new Promise((resolve) => {
        const result = [];
        let len = 0;

        function handleJudge(val) {
            result.push(val);
            len++;
            if (len === promises.length) {
                resolve(result);
            }
        }

        promises.forEach((promise) => {
            setTimeout(() => {
                promise().then((value) => {
                    handleJudge({
                        status: 'fulfilled',
                        value,
                    });
                }).catch((err) => {
                    handleJudge({
                        status: 'rejected',
                        reason: err,
                    });
                });
            });
        });
    });
}

const promise1 = () => Promise.resolve('123');
const promise2 = () => Promise.resolve('12356');
const promise3 = () => Promise.reject(new Error('3212'));

const promises = [promise1, promise2, promise3];

allSettled(promises).then((val) => { console.log(val); });
