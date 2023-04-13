/*

1143. Longest Common Subsequence
https://leetcode.com/problems/longest-common-subsequence/

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

*/

// The runtime complexity of the longestCommonSubsequence function is O(n*m), where m and n are the lengths of the input strings text1 and text2.
const longestCommonSubsequence = function (text1, text2) {
  const n = text1.length
  const m = text2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[n][m]
}

const text1 = 'abcde',
  text2 = 'ace'
console.log(
  `longestCommonSubsequence(text1, text2): ${longestCommonSubsequence(
    text1,
    text2,
  )}`,
) // 3

const longestCommonSubsequenceFP = (text1, text2) => {
  const memo = new Map()

  const lcsHelper = (i, j) => {
    if (i < 0 || j < 0) {
      return 0
    }

    const memoKey = `${i},${j}`
    if (memo.has(memoKey)) {
      return memo.get(memoKey)
    }

    const result =
      text1[i] === text2[j]
        ? lcsHelper(i - 1, j - 1) + 1
        : Math.max(lcsHelper(i - 1, j), lcsHelper(i, j - 1))

    memo.set(memoKey, result)
    return result
  }

  return lcsHelper(text1.length - 1, text2.length - 1)
}
