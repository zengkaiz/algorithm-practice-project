/**
 * ============================================
 * 二叉树遍历方式总结
 * ============================================
 *
 * 【深度优先遍历 (DFS - Depth First Search)】
 *
 * 特点：
 * - 沿着树的深度遍历节点，尽可能深地搜索树的分支
 * - 使用栈（Stack）数据结构（递归或显式栈）
 * - 先访问深层节点，再访问浅层节点
 *
 * 三种主要方式：
 * 1. 先序遍历（Pre-order）：根 -> 左 -> 右
 *    - 访问顺序：先访问根节点，再遍历左子树，最后遍历右子树
 *    - 应用场景：复制树结构、打印目录结构
 *
 * 2. 中序遍历（In-order）：左 -> 根 -> 右
 *    - 访问顺序：先遍历左子树，再访问根节点，最后遍历右子树
 *    - 应用场景：二叉搜索树中可以得到有序序列
 *
 * 3. 后序遍历（Post-order）：左 -> 右 -> 根
 *    - 访问顺序：先遍历左子树，再遍历右子树，最后访问根节点
 *    - 应用场景：删除树节点、计算目录大小
 *
 * 时间复杂度：O(n)，n为节点数
 * 空间复杂度：O(h)，h为树的高度（递归栈深度）
 *
 * ============================================
 *
 * 【广度优先遍历 (BFS - Breadth First Search)】
 *
 * 特点：
 * - 按层次逐层访问节点，先访问离根节点最近的节点
 * - 使用队列（Queue）数据结构
 * - 先访问浅层节点，再访问深层节点
 *
 * 遍历方式：
 * - 层序遍历（Level-order）：从上到下，从左到右逐层访问
 *    - 访问顺序：先访问第1层，再访问第2层，以此类推
 *    - 应用场景：打印树的层级结构、查找最短路径、树的序列化
 *
 * 时间复杂度：O(n)，n为节点数
 * 空间复杂度：O(w)，w为树的最大宽度（队列中最多节点数）
 *
 * ============================================
 *
 * 【对比总结】
 *
 * DFS vs BFS：
 * - DFS：适合查找是否存在某节点、路径问题、回溯问题
 * - BFS：适合查找最短路径、层级相关问题、树的序列化
 *
 * 实现方式：
 * - DFS：递归（隐式栈）或显式栈（迭代）
 * - BFS：队列（迭代）
 *
 * ============================================
 */

// 使用JavaScript/TypeScript实现树的先中后序遍历（不能使用递归）
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

// 根 -> 左 -> 右
function preOrderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const stack: TreeNode[] = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node) {
      result.push(node.val);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }
  }
  return result;
}

function inOrderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;

  // 中序遍历：左 -> 根 -> 右
  // 需要先一直向左走到底，然后访问节点，再处理右子树
  while (stack.length > 0 || current !== null) {
    // 一直向左走到底，将路径上的节点都入栈
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    // 弹出栈顶节点（最左节点）并访问
    current = stack.pop()!;
    result.push(current.val);
    // 转向右子树
    current = current.right;
  }
  return result;
}

function postOrderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const stack: TreeNode[] = [root];

  // 后序遍历：左 -> 右 -> 根
  // 方法：使用两个栈，先按 根->右->左 的顺序遍历，然后反转结果
  // 或者：先序遍历的变种（根->右->左），然后反转
  while (stack.length > 0) {
    const node = stack.pop()!;
    result.push(node.val);
    // 注意：先push左节点，再push右节点（因为栈是LIFO）
    // 这样右节点会先被弹出，实现 根->右->左 的顺序
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  // 反转结果，得到 左->右->根 的顺序
  return result.reverse();
}
