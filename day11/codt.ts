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
 * 返回环的第一个元素
 */

 function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return null;
    let slow = head;
    let fast = head;
    while(fast !== null){
        if(fast.next === null) return null;
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            fast = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};