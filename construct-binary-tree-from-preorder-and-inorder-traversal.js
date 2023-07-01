/*

105. Construct Binary Tree from Preorder and Inorder Traversal
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

Given two integer arrays preorder and inorder where preorder is the preorder traversal 
of a binary tree and inorder is the inorder traversal of the same tree, construct and 
return the binary tree.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 
Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.

*/

function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// The runtime complexity of the buildTree function is O(n), where n is the total number of nodes in the binary tree.
const buildTree = function (preorder, inorder) {
  const buildSubTree = function (preorderStart, inorderStart, inorderEnd) {
    if (inorderStart > inorderEnd) {
      return null
    }

    const nodeVal = preorder[preorderStart]
    const node = new TreeNode(nodeVal)

    const inorderIndex = inorder.indexOf(nodeVal)

    const leftInorderStart = inorderStart
    const leftInorderEnd = inorderIndex - 1
    const rightInorderStart = inorderIndex + 1
    const rightInorderEnd = inorderEnd

    node.left = buildSubTree(
      preorderStart + 1,
      leftInorderStart,
      leftInorderEnd
    )
    node.right = buildSubTree(
      preorderStart + 1 + (leftInorderEnd - leftInorderStart + 1),
      rightInorderStart,
      rightInorderEnd
    )

    return node
  }

  return buildSubTree(0, 0, inorder.length - 1)
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]

console.log('buildTree(preorder, inorder): ', buildTree(preorder, inorder))
