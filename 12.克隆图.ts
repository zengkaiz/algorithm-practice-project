
// Definition for _Node.
class _Node {
  val: number
  neighbors: _Node[]
  
  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}



function cloneGraph(node: _Node | null): _Node | null {
  if(!node) return null

  // 1. 创建起始节点的克隆
  const clonedStart = new _Node(node.val)

  // 2. Map: 原节点 → 克隆节点
  const map: Map<_Node, _Node> = new Map()
  map.set(node, clonedStart)

  // 3. 栈存储原节点
  const stack: _Node[] = [node]

  while(stack.length) {
    // A. 取出原节点
    const originalNode = stack.pop()!

    // B. 获取对应的克隆节点
    const clonedNode = map.get(originalNode)!

    // C. 遍历原节点的所有邻居
    for (const neighbor of originalNode.neighbors) {
      // D. 判断邻居是否已克隆
      if (!map.has(neighbor)) {
        // 未克隆：创建新节点
        const clonedNeighbor = new _Node(neighbor.val)
        // 存入map
        map.set(neighbor, clonedNeighbor)
        // 原邻居入栈（后续还要处理它的neighbors）
        stack.push(neighbor)
      }

      // E. 将克隆的邻居添加到克隆节点的neighbors中
      const clonedNeighbor = map.get(neighbor)!
      clonedNode.neighbors.push(clonedNeighbor)
    }
  }

  // 返回起始节点的克隆
  return map.get(node)!
};


function bfsCloneGraph(node: _Node | null): _Node | null{
  if(!node) return null

  const clonedStart = new _Node(node.val)

  const map: Map<_Node, _Node> = new Map()
  map.set(node,clonedStart)

  const queue: _Node[] = [node]

  while(queue.length) {
    const originalNode = queue.shift()!

    const clonedNode = map.get(originalNode)!

    for(const neighbor of originalNode.neighbors) {
      if(!map.has(neighbor)) {
        const clonedNeighbor = new _Node(neighbor.val)
        map.set(neighbor, clonedNeighbor)
        queue.push(neighbor)
      } 
      const clonedNeighbor = map.get(neighbor)!
      clonedNode.neighbors.push(clonedNeighbor)
    }


  }

  return map.get(node)!
}