/* eslint-disable no-undef */
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null;
    let aHead = headA;
    let bHead = headB;
    while (aHead !== bHead) {
        aHead = aHead !== null ? aHead.next : headB;
        bHead = bHead !== null ? bHead.next : headA;
    }
    return aHead;
}
