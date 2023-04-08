/**
 * Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null
  }

  const visited = new Map() // Map<originalNode, clonedNode>

  const cloneNode = (originalNode) => {
    if (!visited.has(originalNode)) {
      const clonedNode = new Node(originalNode.val)
      visited.set(originalNode, clonedNode)
      clonedNode.neighbors = originalNode.neighbors.map(cloneNode)
      return clonedNode
    }
    return visited.get(originalNode)
  }

  return cloneNode(node)
}
