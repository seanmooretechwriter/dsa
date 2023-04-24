/*

79. Word Search
https://leetcode.com/problems/word-search/

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
(See tree graphic/image on LeetCode website.)

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
(See tree graphic/image on LeetCode website.)

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

Follow up: Could you use search pruning to make your solution faster with a larger board?

*/

// The exist function has a time complexity of O(mn3^l), where m is the number of rows in the board, n is the number of columns in the board, and l is the length of the word. This is because we visit each cell in the board at most once, and for each cell, we explore up to three directions (not the direction we came from), and at each step, we check if the current character matches the next character in the word. The worst-case scenario is when we explore all possible paths, which is bounded by 3^l.
const exist = function (board, word) {
  const m = board.length
  const n = board[0].length

  const dfs = function (i, j, k) {
    if (k === word.length) {
      return true
    }

    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
      return false
    }

    const temp = board[i][j]
    board[i][j] = '*'

    const found =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1)

    board[i][j] = temp
    return found
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word = 'ABCCED'
console.log('exist(board, word): ', exist(board, word)) // true
