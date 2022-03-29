/**
 * 
给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

例如：
输入：s = "aaab", c = "b"
输出：[3,2,1,0]
 */

function shortestToChar(s: string, c: string): number[] {
    const res = []
    const len = s.length
    let prev = -Infinity;
    for(let i =0; i<len; i++) {
        if (s[i] === c) prev = i;
        res.push(i-prev);
    }
    prev = Infinity;
    for(let i=len-1; i>=0; i--) {
        if (s[i] === c) prev = i;
        res[i] = Math.min(res[i], prev-i);
    }
    return res;
};

