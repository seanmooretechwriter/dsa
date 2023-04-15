/*

139. Word Break
https://leetcode.com/problems/word-break/

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.

*/

const wordBreak = (s, wordDict) => {
  const wordSet = new Set(wordDict)
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]
}

const s = 'leetcode'
const wordDict = ['leet', 'code']
console.log(`wordBreak(${s}, ${wordDict}): ${wordBreak(s, wordDict)}`) // true

const s2 = 'catsandog'
const wordDict2 = ['cats', 'dog', 'sand', 'and', 'cat']
console.log(`wordBreak(${s2}, ${wordDict2}): ${wordBreak(s2, wordDict2)}`) // false

const wordBreakFP = (s, wordDict) => {
  const wordSet = new Set(wordDict)
  const dp = Array.from({ length: s.length + 1 }, (_, i) => i === 0)
  return Array.from({ length: s.length }, (_, i) =>
    Array.from(
      { length: i + 1 },
      (_, j) => dp[j] && wordSet.has(s.slice(j, i + 1)),
    ).some(Boolean)
      ? (dp[i + 1] = true)
      : false,
  )[s.length]
}
