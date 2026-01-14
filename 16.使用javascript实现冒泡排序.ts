// 使用JavaScript实现冒泡排序

let arr = [5, 3, 8, 4, 6];


function bubbleSort(arr: number[]) {
    const n = arr.length
    for(let i=0; i < n-1; i++) {
        let swapped = false;

        for(let j=0;j < n-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped= true
            }
        }

        if(!swapped) break
    }
    return arr
}

console.log(bubbleSort(arr));  // 输出：[3, 4, 5, 6, 8]
// 时间复杂度：O(n²)
/**
 * 为什么是 j < n-1-i？
 * 
 * 1. 为什么是 n-1？
 * 
 * for(let j = 0; j < n-1; j++) {
    if(arr[j] > arr[j+1]) {  // 访问 arr[j+1]
        //...
    }
}
我们比较的是 arr[j] 和 arr[j+1]
如果 j 能取到 n-1，那么 arr[j+1] 就是 arr[n]，越界了！
所以 j 最大只能到 n-2，即 j < n-1
 * 
 * 
 * 
 * 2. 为什么要 -i？（重要优化）
 * 
 * 每轮冒泡后，最大的元素已经就位，不需要再比较它了！
 * 
 * 
 */


// 核心总结
// 外层循环：控制要进行多少轮冒泡（n-1轮）
// 内层循环：每轮把当前最大值冒泡到末尾
// n-1：防止数组越界
// -i：已排序的元素不需要再比较，提高效率
// 这就是为什么需要两层循环，以及为什么内层是