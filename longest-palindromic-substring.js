/*

5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/

// The time complexity of the longestPalindrome function is O(n^2), where n is the length of the input string s.
const longestPalindrome = (s) => {
  let start = 0,
    end = 0

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i)
    const len2 = expandAroundCenter(s, i, i + 1)
    const len = Math.max(len1, len2)

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }

  return s.slice(start, end + 1)
}

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }

  return right - left - 1
}
