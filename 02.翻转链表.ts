//反转的本质，就是把每个节点的 next 指针 从 “指向后一个节点” 改成 “指向前一个节点”。

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    const next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
