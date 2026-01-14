// 使用JavaScript实现快速排序

/**
 *  1. 选基准（Pivot）：从数组中选一个元素作为基准
    2. 分区（Partition）：比基准小的放左边，比基准大的放右边
    3. 递归：对左右两部分分别递归快排
 * 
 */


function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        // 分区，获取基准的最终位置
        const pivotIndex = partition(arr, left, right)
        // 递归左右两部分
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right)
    }      
    return arr
}

// 分区函数
function partition(arr, left, right) {
    // 选择最右边的元素作为基准
    const pivot = arr[right]

    let i = left - 1;

    // 遍历 left 到 right - 1
    for(let j = left; j < right; j++) {
        if(arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    // 将基准放到正确位置
    [arr[i+1], arr[right]] = [arr[right], arr[i+1]]

    return i + 1;
}

// 测试
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr));  // [1, 1, 2, 3, 6, 8, 10]