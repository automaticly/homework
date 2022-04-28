/**
 * Definition for a binary tree node.
 * 
 * 给你二叉树的根结点 root ，请你设计算法计算二叉树的 垂序遍历 序列。

对位于 (row, col) 的每个结点而言，其左右子结点分别位于 (row + 1, col - 1) 和 (row + 1, col + 1) 。树的根结点位于 (0, 0) 。

二叉树的 垂序遍历 从最左边的列开始直到最右边的列结束，按列索引每一列上的所有结点，形成一个按出现位置从上到下排序的有序列表。如果同行同列上有多个结点，则按结点的值从小到大进行排序。

返回二叉树的 垂序遍历 序列。
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

 function verticalTraversal(root: TreeNode | null): number[][] {
    const map = {};
    function _mapNode(node: TreeNode | null, row: number, col: number){
        if(!node) return;
        if (map[col]){
             const arr = map[col];
             arr.push({
                row,
                val: node.val
            });
             map[col] = arr;
        } else {
            map[col] = [{
                row,
                val: node.val
            }];
        }
        _mapNode(node.left, row+1, col-1);
        _mapNode(node.right, row+1, col+1)
    }
    _mapNode(root, 0, 0);

    const keys = Object.keys(map).sort((a,b) => +a-+b);
    const nodeArr = keys.map(key => {
        const values = map[key].sort((a,b) => {
            if(a.row === b.row) return a.val - b.val;
            return a.row -b.row
        });
        return values.map(value => value.val);
    })
    return nodeArr;
};