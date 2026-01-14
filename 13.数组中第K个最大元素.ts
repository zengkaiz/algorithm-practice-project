

// 方法一：排序法
// 时间复杂度：O(n log n)
// 空间复杂度：O(1) - sort是原地排序
function findKthLargest(nums: number[], k: number): number {
    if(!nums.length) return 0

    // 降序排序：从大到小
    nums.sort((a, b) => b - a)

    // 第k个最大的元素，索引就是 k-1
    // 例如：[6,5,4,3,2,1]，第2大 → 索引1
    return nums[k - 1]
};


// 方法二：最小堆 会超出限制 （超出时间限制）

// 其实这里可以写个真正的最小堆
function findKthLargest1(nums: number[], k: number): number {
    const minHeap: number[] = [] // 大小为k的最小堆

    for(const num of nums) {
        if(minHeap.length < k) {
            minHeap.push(num)
            // minHeap.sort((a,b) => a - b) // 每次都排序
        } else {

            if(minHeap.length === k) {
                minHeap.sort((a,b) => a - b) // 只在刚满k个时排一次
            }

            if(num > minHeap[0]) {
                minHeap[0] = num 
                minHeap.sort((a,b) => a - b) // 每次都排序
            }
        }
    }
    minHeap.sort((a,b) => a - b)
    return minHeap[0]
};

// 空间复杂度： O(k)
// 时间复杂度：O(n × k log k)

// 用真正的堆：
// heapifyUp(index)  // O(log k)
// heapifyDown(index)  // O(log k)

// 最佳方案：快速选择算法（Quick Select）

function findKthLargest3(nums: number[], k: number): number {
    // 第k大 = 从大到小排序后的第k-1个索引
    // = 从小到大排序后的第 nums.length - k 个索引
    const targetIndex = nums.length - k
    
    function quickSelect(left: number, right: number): number {
        // 随机选择pivot可以避免最坏情况
        const pivotIndex = partition(left, right)
        
        if (pivotIndex === targetIndex) {
            return nums[pivotIndex]
        } else if (pivotIndex < targetIndex) {
            return quickSelect(pivotIndex + 1, right)
        } else {
            return quickSelect(left, pivotIndex - 1)
        }
    }
    
    function partition(left: number, right: number): number {
        const pivot = nums[right]
        let i = left
        
        for (let j = left; j < right; j++) {
            if (nums[j] < pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++
            }
        }
        
        [nums[i], nums[right]] = [nums[right], nums[i]]
        return i
    }
    
    return quickSelect(0, nums.length - 1)
}