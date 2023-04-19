/*

100. Same Tree
https://leetcode.com/problems/same-tree/

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
(See tree image on LeetCode website.)

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
(See tree image on LeetCode website.)

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
(See tree image on LeetCode website.)

Input: p = [1,2,1], q = [1,1,2]
Output: false
 
Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Determines whether two binary trees are identical.
 *
 * @param {TreeNode} p - The root node of the first binary tree.
 * @param {TreeNode} q - The root node of the second binary tree.
 * @returns {boolean} - True if the trees are identical, false otherwise.
 */
// The runtime complexity of the isSameTree function is O(n), where n is the total number of nodes in both trees.
const isSameTree = (p, q) => {
  // If both trees are empty, they are identical
  if (!p && !q) {
    return true
  }

  // If one tree is empty but the other is not, they are not identical
  if (!p || !q) {
    return false
  }

  // If the values of the root nodes are not equal, the trees are not identical
  if (p.val !== q.val) {
    return false
  }

  // Recursively check the left and right subtrees for equality
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const TreeNode = (val, left, right) => {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(isSameTree(tree1, tree2)) // Outputs true

const tree3 = new TreeNode(1, new TreeNode(2), null)
const tree4 = new TreeNode(1, null, new TreeNode(2))
console.log(isSameTree(tree3, tree4)) // Outputs false
