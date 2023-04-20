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

// The time complexity of the isSubtree function in the given solution is O(mn), where m and n are the numbers of nodes in the input trees s and t, respectively.

function isSubtree(s, t) {
  if (!s) {
    return false
  }
  if (isSameTree(s, t)) {
    return true
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isSameTree(s, t) {
  if (!s && !t) {
    return true
  }
  if (!s || !t || s.val !== t.val) {
    return false
  }
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
}

const s = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: null,
  },
}

const t = {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
}

console.log('isSubtree(s, t): ', isSubtree(s, t)) // true

const t2 = {
  val: 4,
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
}

console.log('isSubtree(s, t2): ', isSubtree(s, t2)) // false
