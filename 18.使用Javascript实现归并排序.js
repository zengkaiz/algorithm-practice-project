// 使用JavaScript实现归并排序

/** 
 * 
 * 分治三步曲：
    1. 分（Divide）：将数组从中间分成两半
    2. 治（Conquer）：递归地对两半进行排序
    3. 合（Combine）：将两个有序数组合并成一个有序数组
*/
function mergeSort(arr) {
    if(arr.length <=1) return arr

    //1. 分
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    // 2. 治:递归排序两半
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    // 3. 合：合并两个有序数组
    return merge(sortedLeft, sortedRight)
}

// 合并方法

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // 比较两个数组的元素，按顺序放入结果数组
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    // 将剩余元素加入结果
    while(i< left.length){
        result.push(left[i]);
        i++
    }

    while(j< right.length){
        result.push(right[j]);
        j++
    }

    return result
}

// 时间复杂度：O(n log n)