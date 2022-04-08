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

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    const first = new ListNode(0, head.next);
    let preview = new ListNode(0, head);
    while (head && head.next) {
        preview.next = head.next;
        const tem = head;

        head = head.next;
        let next = null;
        if (head.next) {
            next = head.next;
        }
        tem.next = next;
        head.next = tem;
        preview = tem;
        head = next;
    }
    return first.next;
}
