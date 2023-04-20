/*

102. Binary Tree Level Order Traversal
https://leetcode.com/problems/binary-tree-level-order-traversal/

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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
const levelOrder = (root) => {
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
    }

    result.push(levelValues)
  }

  return result
}
