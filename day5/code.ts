/**
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/submissions/
 */
class MyQueue {
    inArr: number[];

    outArr:number[];

    constructor() {
        this.inArr = [];
        this.outArr = [];
    }

    push(x: number): void {
        this.inArr.push(x);
    }

    inToOut() {
        while (this.inArr.length) {
            this.outArr.push(this.inArr.pop());
        }
    }

    pop(): number {
        if (!this.outArr.length) {
            this.inToOut();
        }
        return this.outArr.pop();
    }

    peek(): number {
        if (!this.outArr.length) {
            this.inToOut();
        }
        return this.outArr[this.outArr.length - 1];
    }

    empty(): boolean {
        return this.outArr.length === 0 && this.inArr.length === 0;
    }
}
