/* eslint-disable no-unused-vars */
/**
 * https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/submissions/
 */
class CustomStack {
    maxSize: number;

    arr: number[];

    len:number;

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.arr = [];
        this.len = 0;
    }

    push(x: number): void {
        if (this.len < this.maxSize) {
            this.arr.push(x);
            this.len += 1;
        }
    }

    pop(): number {
        if (this.len === 0) return -1;
        this.len -= 1;
        return this.arr.pop();
    }

    increment(k: number, val: number): void {
        for (let i = 0; i < this.len && i < k; i++) {
            this.arr[i] += val;
        }
    }
}
