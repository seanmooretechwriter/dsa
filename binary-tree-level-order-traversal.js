/*

102. Binary Tree Level Order Traversal
https://leetcode.com/problems/binary-tree-level-order-traversal/

Given the root of a binary tree, return the level order traversal of its nodes' 
values. (i.e., from left to right, level by level).

Example 1:
(See tree graphic/image on LeetCode website.)

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: [] 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

*/

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// The runtime complexity of the levelOrder function is O(n), where n is the number of nodes in the binary tree.
const levelOrder = root => {
  if (!root) {
    return []
  }

  const queue = [root]
  const result = []

  while (queue.length > 0) {
    const levelSize = queue.length
    const levelValues = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      levelValues.push(node.val)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
      console.log('queue: ', queue)
      console.log('levelValues: ', levelValues)
      console.log('result: ', result)
    }

    result.push(levelValues)
  }

  return result
}

const tree1 = null
console.log('levelOrder(tree1): ', levelOrder(tree1)) // []

const tree2 = { val: 1, left: null, right: null }
console.log('levelOrder(tree2): ', levelOrder(tree2)) // [[1]]

const tree3 = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
}
console.log('levelOrder(tree3): ', levelOrder(tree3)) // [[3], [9, 20], [15, 7]]

function levelOrderTraversal (root) {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length != 0) {
    let subarr = []
    const n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      subarr.push(node.val)
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(subarr)
  }
  return result
}

console.log('levelOrderTraversal(tree3): ', levelOrderTraversal(tree3)) // [[3], [9, 20], [15, 7]]
