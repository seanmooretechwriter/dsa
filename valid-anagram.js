/*

242. Valid Anagram
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

// The runtime complexity of the isAnagram function is O(n), where n is the length of the input strings s and t.
const isAnagram = (s, t) => {
  // If the lengths of the strings are different, they can't be anagrams
  if (s.length !== t.length) {
    return false
  }

  // Create a frequency map for each string
  const frequencyMapS = {}
  const frequencyMapT = {}

  for (let i = 0; i < s.length; i++) {
    frequencyMapS[s[i]] = (frequencyMapS[s[i]] || 0) + 1
    frequencyMapT[t[i]] = (frequencyMapT[t[i]] || 0) + 1
  }

  // Compare the frequency maps
  for (let key in frequencyMapS) {
    if (frequencyMapS[key] !== frequencyMapT[key]) {
      return false
    }
  }

  return true
}

const s = 'anagram'
const t = 'nagaram'
console.log(`isAnagram(${s}, ${t}): ${isAnagram(s, t)}`) // true

const s2 = 'cat'
const t2 = 'rat'
console.log(`isAnagram(${s2}, ${t2}): ${isAnagram(s2, t2)}`) // false
