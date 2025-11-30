// 层序遍历
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 层序遍历：广度优先遍历
function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return []
    const res: number[][]= []
    const queue = [root]
    while(queue.length) {
      let size = queue.length
      res.push([])
      while(size--) {
        const node = queue.shift()
        if(node) {
          res[res.length - 1].push(node.val)
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
        }
      }
    }
    return res
};
// 时间复杂度： O(n)
// 空间复杂度：O(n)

