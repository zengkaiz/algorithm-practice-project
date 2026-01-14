// 使用JavaScript实现插入排序
// 插入排序就像整理扑克牌一样，每次从未排序部分取一张牌，插入到已排序部分的正确位置。

let array = [12, 11, 13, 5, 6];

function insertionSort(arr) {
    let n = arr.length
    // 从第二个元素开始，第一个默认是已排序的。
    for(let i = 1; i < n; i++) {
        const current = arr[i];
        let j = i - 1;
        while( j >=0 && arr[j] > current) {
            arr[j+1] = arr[j]
            j--
        } 

        // 插入到正确位置
        arr[j+1] = current
    }

    return arr

}

console.log("Sorted array is:", insertionSort(array));