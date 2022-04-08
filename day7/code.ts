/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;

    // eslint-disable-next-line no-use-before-define
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;
    const first = head;
    let node = head;
    let len = 1;
    let tem = null;
    while (node.next) {
        len++;
        node = node.next;
    }
    node = first;
    const n = k % len;
    if (n === 0) return node;
    for (let i = 1; i < len - n; i++) {
        node = node.next;
    }
    tem = node.next;
    node.next = null;
    node = tem;
    while (tem.next) {
        tem = tem.next;
    }
    tem.next = first;
    return node;
}
