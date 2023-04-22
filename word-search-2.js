/*

212. Word Search II
https://leetcode.com/problems/word-search-ii/

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Example 2:
(See tree graphic/image on LeetCode website.)

Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.

*/

// The runtime complexity of the findWords function is O(NM*4^K), where K is the maximum length of a word in words.
// This is because we do a DFS for each cell on the board, and for each DFS, we can have up to 4 recursive calls
// (one for each neighbor cell), and we do this for each prefix of each word in words.
const findWords = function (board, words) {
  const result = []
  const trie = buildTrie(words)

  const dfs = (i, j, node, word) => {
    if (node.word) {
      result.push(node.word)
      node.word = null
    }
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
      return
    }
    const char = board[i][j]
    const nextNode = node[char]
    if (!nextNode) {
      return
    }
    board[i][j] = '#'
    dfs(i + 1, j, nextNode, word + char)
    dfs(i - 1, j, nextNode, word + char)
    dfs(i, j + 1, nextNode, word + char)
    dfs(i, j - 1, nextNode, word + char)
    board[i][j] = char
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, trie, '')
    }
  }

  return result
}

// The runtime complexity of the buildTrie function is O(NM), where N is the number of words and M is the maximum length of a word.
const buildTrie = (words) => {
  const root = {}
  for (let word of words) {
    let node = root
    for (let char of word) {
      node[char] = node[char] || {}
      node = node[char]
    }
    node.word = word
  }
  return root
}
const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
]
const words = ['oath', 'pea', 'eat', 'rain']
console.log('findWords(board, words): ', findWords(board, words)) // [ 'oath', 'eat' ]
