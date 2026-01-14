// 示例 1：
// 输入：nums = [1,1,1,2,2,3], k = 2
// 输出：[1,2]

// 方法一：排序法
// 时间复杂度：O(n log n)
// 空间复杂度：O(n)
function topKFrequent(nums: number[], k: number): number[] {
    // 步骤1：统计每个元素的出现频率
    const map = new Map<number, number>()
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    // 步骤2：将 Map 转换为数组 [[元素, 频率], ...]
    // 例如：Map {1 => 3, 2 => 2, 3 => 1} → [[1, 3], [2, 2], [3, 1]]
    const arr = Array.from(map.entries())

    // 步骤3：按频率降序排序
    arr.sort((a, b) => b[1] - a[1])  // b[1] - a[1] 表示按频率从大到小

    // 步骤4：取前 k 个元素（只要元素，不要频率）
    return arr.slice(0, k).map(item => item[0])
};

// 测试用例
console.log(topKFrequent([1,1,1,2,2,3], 2))
// 期望输出: [1, 2]
// 解释：1出现3次，2出现2次，3出现1次 → 前2个高频元素是 [1, 2]

console.log(topKFrequent([1], 1))
// 期望输出: [1]

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))
// 期望输出: [-1, 2] 或 [2, -1]
// 解释：-1出现2次，2出现2次，都是最高频


// 正确应该用桶排序 或者  最小堆去做后期在做吧 
// to do