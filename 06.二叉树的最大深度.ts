// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

// TreeNode 类定义（如果未在其他地方定义，请取消注释）
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

/**
 * 使用广度优先遍历（BFS）计算二叉树的最大深度
 *
 * 思路：
 * 1. 使用队列存储每一层的节点
 * 2. 逐层遍历，每遍历完一层，深度加1
 * 3. 当队列为空时，返回深度
 *
 * 时间复杂度：O(n)，n为节点数
 * 空间复杂度：O(w)，w为树的最大宽度
 */
function maxDepth(root: TreeNode | null): number {
  // 如果根节点为空，返回深度0
  if (!root) return 0;

  // 使用队列存储节点
  const queue: TreeNode[] = [root];
  let depth = 0;

  // 当队列不为空时，继续遍历
  while (queue.length > 0) {
    // 记录当前层的节点数
    const levelSize = queue.length;

    // 遍历当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      // 取出队列头部的节点
      const node = queue.shift()!;

      // 将左右子节点加入队列（如果存在）
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    // 当前层遍历完成，深度加1
    depth++;
  }

  return depth;
}
