// A
// | \
// B  C
//  \ /
//   D
type Graph = Record<string, string[]>;

const graph: Graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'D'],
  D: ['B', 'C'],
};

// 1. DFS 深度优先遍历 A -> B -> D -> C

function dfsIterative(graph: Graph, start: string) {
  //栈 用于存储待访问的节点
  const stack: string[] = [start];
  // 记录已访问的节点，放置重复记录
  const visited: Set<string> = new Set();
  // 存储遍历顺序 或 直接打印
  const result: string[] = []

  // 主循环
  while (stack.length > 0) {
    const node = stack.pop()!; // 从栈顶取出起一个节点
    if(visited.has(node)) continue // 如果已访问过，则跳过
    visited.add(node) // 标记为已访问
    result.push(node) // 记录到结果

    // 关键：为什么 翻转？
    //     原因：
    // 图定义中 A: ['B', 'C'] 表示我们想要先访问 B，再访问 C
    // 但栈是后进先出，所以需要反转后再入栈
    // 这样 C 先入栈（在栈底），B 后入栈（在栈顶）
    // 下次 pop 时就会先取出 B ✅
    const neighbors = graph[node];
    if (neighbors) {
      [...neighbors].reverse().forEach((n) => {
        if(!visited.has(n)) {
          stack.push(n);
        }
      });
    }
  }
  return result;
}
console.log(dfsIterative(graph, 'A'))

// 2. BFS 广度优先遍历 A -> B -> C -> D

function bfsInterative(graph: Graph, start: string) {
  // 队列 存储待访问节点
  const queue: string[] = [start]
  // 记录已访问的节点
  const visited: Set<string> = new Set()
  // 存储遍历顺序
  const result: string[] = []
  while (queue.length) {
    const node = queue.shift()!
    if(visited.has(node)) {continue}

    visited.add(node)
    result.push(node)

    // 无需reverse
    const naighbors = graph[node]
    if(naighbors) {
     [...naighbors].forEach((n) => {
        if(!visited.has(n)) {
          queue.push(n)
       }
     })
    }
  }
  return result
}

console.log(bfsInterative(graph, 'A'))