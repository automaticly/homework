/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a: any, b: any): boolean {
    // your code here
    if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
    }
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
    return a === b;
}
