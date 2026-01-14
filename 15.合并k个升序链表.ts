
//  Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


/**
 * 最小堆解法
 * 时间复杂度：O(N*logK) N是总节点数，K是链表数量
 * 空间复杂度：O(K) 堆的大小
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 最小堆类
    class MinHeap {
        private heap: ListNode[] = [];

        // 获取父节点索引
        private parent(i: number): number {
            return Math.floor((i - 1) / 2);
        }

        // 获取左子节点索引
        private left(i: number): number {
            return 2 * i + 1;
        }

        // 获取右子节点索引
        private right(i: number): number {
            return 2 * i + 2;
        }

        // 交换两个节点
        private swap(i: number, j: number): void {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        // 向上调整（插入时使用）
        private heapifyUp(i: number): void {
            while (i > 0 && this.heap[i].val < this.heap[this.parent(i)].val) {
                this.swap(i, this.parent(i));
                i = this.parent(i);
            }
        }

        // 向下调整（删除时使用）
        private heapifyDown(i: number): void {
            let minIndex = i;
            const l = this.left(i);
            const r = this.right(i);

            if (l < this.heap.length && this.heap[l].val < this.heap[minIndex].val) {
                minIndex = l;
            }

            if (r < this.heap.length && this.heap[r].val < this.heap[minIndex].val) {
                minIndex = r;
            }

            if (minIndex !== i) {
                this.swap(i, minIndex);
                this.heapifyDown(minIndex);
            }
        }

        // 插入节点
        push(node: ListNode): void {
            this.heap.push(node);
            this.heapifyUp(this.heap.length - 1);
        }

        // 弹出最小节点
        pop(): ListNode | null {
            if (this.heap.length === 0) return null;
            if (this.heap.length === 1) return this.heap.pop()!;

            const min = this.heap[0];
            this.heap[0] = this.heap.pop()!;
            this.heapifyDown(0);
            return min;
        }

        // 堆的大小
        size(): number {
            return this.heap.length;
        }
    }

    // 创建最小堆
    const minHeap = new MinHeap();

    // 将所有链表的头节点加入堆
    for (const list of lists) {
        if (list !== null) {
            minHeap.push(list);
        }
    }

    // 虚拟头节点
    const dummy = new ListNode(0);
    let current = dummy;

    // 不断从堆中取出最小节点
    while (minHeap.size() > 0) {
        const minNode = minHeap.pop()!;
        current.next = minNode;
        current = current.next;

        // 如果该节点有下一个节点，将下一个节点加入堆
        if (minNode.next !== null) {
            minHeap.push(minNode.next);
        }
    }

    return dummy.next;
};