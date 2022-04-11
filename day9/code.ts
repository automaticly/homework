/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */

class ListNode1 {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number;

    left: TreeNode | null;

    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) return null;
    let slow = head;
    let fast = head;
    let preSlow = null;
    while (fast && fast.next) {
        preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    const root = new TreeNode(slow.val);
    if (preSlow) {
        preSlow.next = null;
        root.left = sortedListToBST(head);
    }
    root.right = sortedListToBST(slow.next);
    return root;
}
