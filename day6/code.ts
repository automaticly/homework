/**
 *
arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。
输入: arr = [5,4,3,2,1]
输出: 1
解释:
将数组分成2块或者更多块，都无法得到所需的结果。
例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maxChunksToSorted(arr: number[]): number {
    const sortArr = [...arr];
    sortArr.sort((a, b) => a - b);
    let n = 0; let arrSum = 0; let
        sortSum = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        arrSum += arr[i];
        sortSum += sortArr[i];
        if (arrSum === sortSum) {
            n++;
            arrSum = 0;
            sortSum = 0;
        }
    }
    return n;
}
