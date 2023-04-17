/*

424. Longest Repeating Character Replacement
https://leetcode.com/problems/longest-repeating-character-replacement/

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

*/

// The runtime complexity of the characterReplacement function is O(n), where n is the length of the input string s.
const characterReplacement = (s, k) => {
  let maxCount = 0 // max count of any single character in the sliding window
  let start = 0 // start index of the sliding window
  let maxLength = 0 // max length of the repeating substring found so far
  const frequencyMap = {} // frequency map to count the occurrences of each character

  for (let end = 0; end < s.length; end++) {
    frequencyMap[s[end]] = (frequencyMap[s[end]] || 0) + 1 // increment the frequency of the current character
    maxCount = Math.max(maxCount, frequencyMap[s[end]]) // update the max count of any single character

    // if the length of the sliding window minus the max count of any single character is greater than k, we need to shrink the window
    if (end - start + 1 - maxCount > k) {
      frequencyMap[s[start]]-- // decrement the frequency of the character at the start of the window
      start++ // move the start of the window forward
    }

    maxLength = Math.max(maxLength, end - start + 1) // update the max length of the repeating substring found so far
  }

  return maxLength
}

const s = 'ABAB'
const k = 2
console.log(`characterReplacement(${s}, ${k}): ${characterReplacement(s, k)}`) // 4

const s2 = 'AABABBA'
const k2 = 1
console.log(
  `characterReplacement(${s2}, ${k2}): ${characterReplacement(s2, k2)}`,
) // 4
