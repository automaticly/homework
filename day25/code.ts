/**
 * Definition for singly-linked list.
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
    如果有两个中间结点，则返回第二个中间结点。
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function middleNode(head: ListNode | null): ListNode | null {
    let low = head;
    let fast = head;
    while(fast && fast.next){
        low = low.next;
        fast = fast.next.next
    }
    return low;
};