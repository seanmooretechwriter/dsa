/*

124. Binary Tree Maximum Path Sum
https://leetcode.com/problems/binary-tree-maximum-path-sum/

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the 
sequence has an edge connecting them. A node can only appear in the sequence at most once. 
Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:
(See tree graphic/image on LeetCode website.)

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

Constraints:

The number of nodes in the tree is in the range [1, 3 * 104].
-1000 <= Node.val <= 1000

*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// The runtime complexity of the maxPathSum function is O(n), where n is the number of nodes in the binary tree.
const maxPathSum = (root) => {
  let maxSum = -Infinity

  const dfs = (node) => {
    if (!node) return 0
    const leftSum = Math.max(dfs(node.left), 0)
    const rightSum = Math.max(dfs(node.right), 0)
    maxSum = Math.max(maxSum, node.val + leftSum + rightSum)
    return node.val + Math.max(leftSum, rightSum)
  }

  dfs(root)
  return maxSum
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log('maxPathSum(tree):', maxPathSum(tree)) // 6

// [-10,9,20,null,null,15,7]
const tree2 = new TreeNode(-10, new TreeNode(9), new TreeNode(3))
console.log('maxPathSum(tree2):', maxPathSum(tree2)) // 42
