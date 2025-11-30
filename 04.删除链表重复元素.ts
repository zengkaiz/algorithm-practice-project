// 核心思路：是利用链表的 “有序性” —— 重复元素必然相邻，无需额外判断非相邻节点，只需遍历链表时跳过重复节点即可

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let current = head;
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
