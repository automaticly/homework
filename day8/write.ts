/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
    // your code here
    if (typeof proto !== 'object' || proto === null) {
        throw new Error('not object');
    }
    function Fn() {}
    Fn.prototype = proto;
    const obj = new Fn();
    return obj;
}
