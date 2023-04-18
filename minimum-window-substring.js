/*

76. Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 
Follow up: Could you find an algorithm that runs in O(m + n) time?

*/

//
const minWindow = (s, t) => {
  const frequencyMap = {} // frequency map to count the occurrences of each character in t
  let left = 0 // left index of the sliding window
  let right = 0 // right index of the sliding window
  let count = t.length // count of remaining characters to match in t
  let minSubstring = '' // minimum window substring found so far

  // create the frequency map for t
  for (let char of t) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1
  }

  // iterate over s using the sliding window approach
  while (right < s.length) {
    // if the current character is in t, decrement its frequency in the frequency map and decrement count
    if (frequencyMap[s[right]] !== undefined) {
      frequencyMap[s[right]]--
      if (frequencyMap[s[right]] >= 0) {
        count--
      }
    }
    right++

    // if all characters in t are matched, try to shrink the window
    while (count === 0) {
      // update the minimum window substring found so far
      if (minSubstring === '' || right - left < minSubstring.length) {
        minSubstring = s.substring(left, right)
      }

      // if the left character is in t, increment its frequency in the frequency map and increment count
      if (frequencyMap[s[left]] !== undefined) {
        frequencyMap[s[left]]++
        if (frequencyMap[s[left]] > 0) {
          count++
        }
      }
      left++
    }
  }

  return minSubstring
}

const s = 'ADOBECODEBANC'
const t = 'ABC'
console.log(`minWindow(${s}, ${t}): ${minWindow(s, t)}`) // "BANC"

const s2 = 'a'
const t2 = 'a'
console.log(`minWindow(${s2}, ${t2}): ${minWindow(s2, t2)}`) // "a"

const s3 = 'a'
const t3 = 'aa'
console.log(`minWindow(${s3}, ${t3}): ${minWindow(s3, t3)}`) // ""
