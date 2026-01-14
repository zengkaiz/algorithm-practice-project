// 使用JavaScript实现选择排序

//选择排序的核心思想：每次从未排序部分中"选择"最小（或最大）的元素，放到已排序部分的末尾。

const arr = [5, 3, 2, 4, 1];

function selectionSort(arr: number[]) {
    const n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        // 内层循环，
        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        // 如果找到最小值的值，就交换 i
        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]

