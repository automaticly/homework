// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。
// 回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。
// 返回平面上所有回旋镖的数量。

function numberOfBoomerangs(points: number[][]): number {
    let ans = 0;
    for(const p of points){
        const map = new Map();
        for(const q of points){
            const dis = Math.pow(p[0]-q[0],2) + Math.pow(p[1]-q[1],2);
            map.set(dis, (map.get(dis) || 0) + 1 );
        }
        for(const count of map.values()){
            ans += count * (count -1);
        }
    }
    return ans;
};