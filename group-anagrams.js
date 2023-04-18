/*

49. Group Anagrams
https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

// The runtime complexity of the groupAnagrams function is O(n * k * log(k)), where n is
// the length of the input array strs, and k is the length of the longest string in strs.
const groupAnagrams = (strs) => {
  const anagramsMap = new Map()
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('')
    if (!anagramsMap.has(sortedStr)) {
      anagramsMap.set(sortedStr, [])
    }
    anagramsMap.get(sortedStr).push(str)
  }
  return Array.from(anagramsMap.values())
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log('groupAnagrams(', strs, '): ', groupAnagrams(strs)) // [["bat"],["nat","tan"],["ate","eat","tea"]]

const strs2 = ['']
console.log('groupAnagrams(', strs2, '): ', groupAnagrams(strs2)) // [[""]]

const strs3 = ['a']
console.log('groupAnagrams(', strs3, '): ', groupAnagrams(strs3)) // [["a"]]
