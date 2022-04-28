/**
 * 
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    return ser(root, '');
};
function ser(root:TreeNode | null, str: string): string{
    if (!root) return str += 'null,';
    str += `${root.val},`;
    str = ser(root.left, str);
    str = ser(root.right, str);
    return str;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const dataList = data.split(',');
    return de(dataList);
};
function de(dataList: string[]): TreeNode | null {
    const data = dataList.shift();
    if(data === 'null'){
        return null;
    }
    const root = new TreeNode(+data);
    root.left = de(dataList);
    root.right = de(dataList);
    return root;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */