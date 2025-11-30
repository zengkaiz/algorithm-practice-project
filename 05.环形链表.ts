// 快慢指针

function hasCycle1(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// 哈希表
function hasCyclew(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      // 一开始在这里存入的head.val,应该是将节点本身存入
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
}
