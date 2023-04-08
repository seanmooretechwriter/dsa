/*

217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

const containsDuplicateSet = (a) => {
  let arrayContainsDuplicates = false
  const map = new Set()
  for (let element of a) {
    map.add(element)
  }
  if (map.size < a.length) {
    arrayContainsDuplicates = true
  }
  return arrayContainsDuplicates
}

// The time complexity of this code is O(n), where n is the length of the input nums array.
const containsDuplicate = (nums) => {
  const map = {}
  for (const num of nums) {
    // If we have seen this num before return true
    if (map[num]) return true
    map[num] = true
  }
  return false
}

const containsDup = (a) => {
  for (let i = 2; i < a.length; i++) {
    if (a[i - 1] === a[i - 2]) {
      return true
    }
  }
  return false
}

const containsDupFP = (a) => {
  return a.reduce((acc, cur, i) => {
    if (i >= 2 && cur === a[i - 1] && cur === a[i - 2]) {
      return true
    }
    return acc
  }, false)
}

const a = [1, 2, 3, 4, 4, 5]
console.log(`containsDuplicate: ${containsDuplicate(a)}`)

const b = [1, 2, 3, 4, 4, 5]
console.log(`containsDup: ${containsDup(b)}`)

const c = [1, 2, 3, 4, 5]
console.log(`containsDup: ${containsDup(c)}`)
