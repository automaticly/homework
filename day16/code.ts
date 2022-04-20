/**
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function findBottomLeftValue(root: TreeNode | null): number {
    if(!root) return 0;
    let arr1 = [root];
    let arr2 = [];
    while(arr1.length > 0){
        arr2 = [];
        for(let i=0; i<arr1.length; i++){
            const node = arr1[i];
            if(node.left) arr2.push(node.left);
            if(node.right) arr2.push(node.right);
        };
        if(arr2.length === 0){
            break;
        }
        arr1 = arr2;
    }
    return arr1[0].val;
};