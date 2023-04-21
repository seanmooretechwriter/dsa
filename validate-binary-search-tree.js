/*

98. Validate Binary Search Tree
https://leetcode.com/problems/validate-binary-search-tree/

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:
(See tree graphic/image on LeetCode website.)

Input: root = [2,1,3]
Output: true

Example 2:
(See tree graphic/image on LeetCode website.)

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// The runtime complexity of the isValidBST function is O(n), where n is the number of nodes in the binary tree.
const isValidBST = (root) => {
  const isValid = (node, min, max) => {
    if (!node) return true

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false
    }

    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    )
  }

  return isValid(root, null, null)
}

// Example binary tree
//     5
//    / \
//   1   4
//      / \
//     3   6

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(5)
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(6)

console.log('isValidBST(root): ', isValidBST(root)) // false
