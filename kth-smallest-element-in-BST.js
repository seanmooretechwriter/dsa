/*

230. Kth Smallest Element in a BST
https://leetcode.com/problems/kth-smallest-element-in-a-bst/

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:
(See tree graphic/image on LeetCode website.)

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
 

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// The runtime complexity of the kthSmallest function is O(h + k), where h is the height of the binary search tree.
const kthSmallest = function (root, k) {
  const stack = []
  let current = root

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    k--

    if (k === 0) {
      return current.val
    }

    current = current.right
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.left.right = new TreeNode(2)

console.log('kthSmallest(root, 1): ', kthSmallest(root, 1)) // 1
console.log('kthSmallest(root, 2): ', kthSmallest(root, 2)) // 2
console.log('kthSmallest(root, 3): ', kthSmallest(root, 3)) // 3
console.log('kthSmallest(root, 4): ', kthSmallest(root, 4)) // 4
