

// 错误解法  num -= node.val 无法准备知道何时回溯以及需要减去多少，如下面列子
  //     5
  //    / \
  //   4   8
  //  /     \
  // 11      4

// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//     if(!root) return false
//     let num = 0
//     const stack: TreeNode[] = [root];
//     while (stack.length > 0) {
//         let node = stack.pop();
//         if (node) {
//             num += node.val
//             node.right && stack.push(node.right);
//             node.left && stack.push(node.left);
//             if(!node.left && !node.right) {
//                 console.log(num)
//                 if(num === targetSum) {
//                     return true
//                 } else {
//                     num -= node.val
//                 }
//             }
//         }
//     }
//     return false;
// };


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(!root) return false

    const stack: [TreeNode, number][]= [[root, root.val]];
    while (stack.length > 0) {
      const [node, sum] = stack.pop()!;
        if(!node.left && !node.right) {
            if(sum === targetSum) {
              return true
            }
        }
        if (node) {
            node.right && stack.push([node.right, sum+node.right.val]);
            node.left && stack.push([node.left, sum+node.left.val]);

        }
    }
    return false;
};
