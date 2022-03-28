/**
 * 
    整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。

    例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
    给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

    例如：
    输入：num = [1,2,0,0], k = 34
    输出：[1,2,3,4]
    解释：1200 + 34 = 1234
 */

function addToArrayForm(num: number[], k: number): number[] {
    const res = [];
    const len = num.length;
    for(let i = len -1; i >= 0; i--){
        const val  = num[i] + k%10;
        res.push(val % 10);
        k = Math.floor(k / 10);
        if (val >= 10) {
            k = k +1;
        }
    }
    while (k>0) {
        res.push(k%10);
        k=Math.floor(k/10);
    }
    return res.reverse();
};

const a = addToArrayForm([2,1,5], 806);
console.log(a);  // [ 1, 0, 2, 1 ]