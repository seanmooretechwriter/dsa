/*

91. Decode Ways
https://leetcode.com/problems/decode-ways/

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).

*/

// The runtime complexity is O(n), where n is the length of the input string s.
const numDecodings = function (s) {
  const n = s.length
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] !== '0' ? 1 : 0

  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s.substring(i - 1, i))
    const twoDigits = parseInt(s.substring(i - 2, i))

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1]
    }
    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[n]
}

console.log(`numDecodings(12): ${numDecodings(12)}`) //2

const numDecodingsFP = (s) => {
  const memo = new Map()

  const decode = (i) => {
    if (i === s.length) return 1
    if (s[i] === '0') return 0

    if (memo.has(i)) return memo.get(i)

    let ways = decode(i + 1)

    if (i + 1 < s.length && parseInt(s.substring(i, i + 2)) <= 26) {
      ways += decode(i + 2)
    }

    memo.set(i, ways)
    return ways
  }

  return decode(0)
}
