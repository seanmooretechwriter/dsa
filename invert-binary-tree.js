/*

226. Invert Binary Tree
https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
(See tree graphic/image on LeetCode website.)

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// The time complexity of the invertTree function is O(n), where n is the number of nodes in the binary tree.
const invertTree = (root) => {
  if (!root) {
    return null
  }

  const temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)

  return root
}

const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
}

console.log('Original tree:', JSON.stringify(tree))
console.log('Inverted tree:', JSON.stringify(invertTree(tree)))
