/*

269. Alien Dictionary
https://leetcode.com/problems/alien-dictionary/

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"

Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"
Example 3:

Input:
[
  "z",
  "x",
  "z"
] 

Output: "" 

Explanation: The order is invalid, so return "".
Note:

You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.

*/

// The alienOrder function has a time complexity of O(C), where C is the total number of
// characters in the input array. The initialization of the inDegree and graph maps
// takes O(C) time. Building the graph takes O(C) time, since each character is processed
// at most twice. Topological sorting using Kahn's algorithm takes O(C) time, since each
// character is visited at most once, and each edge is visited at most once. Therefore,
// the overall time complexity is O(C).

function alienOrder(words) {
  const inDegree = new Map()
  const graph = new Map()

  // Initialize the inDegree and graph maps
  for (const word of words) {
    for (const char of word) {
      inDegree.set(char, 0)
      graph.set(char, new Set())
    }
  }

  // Build the graph
  for (let i = 1; i < words.length; i++) {
    const word1 = words[i - 1]
    const word2 = words[i]
    let j = 0

    while (j < word1.length && j < word2.length) {
      if (word1[j] !== word2[j]) {
        const char1 = word1[j]
        const char2 = word2[j]
        if (!graph.get(char1).has(char2)) {
          graph.get(char1).add(char2)
          inDegree.set(char2, inDegree.get(char2) + 1)
        }
        break
      }
      j++
    }
    if (j === word2.length && j < word1.length) {
      return ''
    }
  }

  // Topological sort using Kahn's algorithm
  const queue = []
  for (const [char, degree] of inDegree) {
    if (degree === 0) {
      queue.push(char)
    }
  }

  let result = ''
  while (queue.length) {
    const char = queue.shift()
    result += char
    for (const neighbor of graph.get(char)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1)
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor)
      }
    }
  }

  if (result.length !== inDegree.size) {
    return ''
  }

  return result
}

const words = ['wrt', 'wrf', 'er', 'ett', 'rftt']
console.log('alienOrder(words): ', alienOrder(words)) // "wertf"
