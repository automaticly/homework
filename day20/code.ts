// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
function topKFrequent(nums: number[], k: number): number[] {
    const map= {};
    const len = nums.length;
    for(let i = 0; i<len; i++){
        if( map[nums[i]]){
            let num = map[nums[i]];
            map[nums[i]] = num+1;
        } else {
            map[nums[i]] = 1
        }
    }
    const arr = Object.keys(map).map(item => +item);
    arr.sort((a,b)=> map[b] - map[a]);
    return arr.slice(0,k)

};