/*

647. Palindromic Substrings
https://leetcode.com/problems/palindromic-substrings/

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string. 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.

*/

// The runtime complexity of the countSubstrings function is O(n^2), where n is the length of the input string s.

const countSubstrings = s => {
  const n = s.length
  const dp = [...Array(n)].map(() => Array(n).fill(false))
  let count = 0
  // Base case: single letter substrings
  for (let i = 0; i < n; i++) {
    dp[i][i] = true
    count++
  }

  // Base case: double letter substrings
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1]
    dp[i][i + 1] && count++
  }

  // substrings longer than 2 chars
  for (let len = 3; len <= n; len++) {
    let start = 0,
      end = start + len - 1

    while (end < n) {
      dp[start][end] = dp[start + 1][end - 1] && s[start] === s[end]
      dp[start][end] && count++
      start++
      end++
    }
  }
  return count
}

const s = 'abc'
console.log(`countSubstrings:(${s}) ${countSubstrings(s)}`) // 3

const s2 = 'aaa'
console.log(`countSubstrings:(${s2}) ${countSubstrings(s2)}`) // 6

// Alternative code solution

function countPalindromicSubstrings (s) {
  let count = 0

  // Helper function to expand around centers
  function expandAroundCenter (left, right) {
    console.log('s[left]: ', s[left])
    console.log('s[right]: ', s[right])
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++
      left--
      right++
    }
  }

  // Iterate through each character as potential center
  for (let i = 0; i < s.length; i++) {
    // Expand around center when length is odd
    expandAroundCenter(i, i)

    // Expand around center when length is even
    expandAroundCenter(i, i + 1)
  }

  return count
}

// Example usage:
console.log('countPalindromicSubstrings(a)', countPalindromicSubstrings(s)) // Output: 3

console.log('countPalindromicSubstrings(b)', countPalindromicSubstrings(s2)) // Output: 6
