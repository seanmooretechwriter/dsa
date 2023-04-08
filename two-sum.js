/*

1. Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

// The time complexity of the given code is O(n), where n is the length of the input numbers array.
function twoSumHT(numbers, target) {
  const ht = {}

  for (let i = 0; i < numbers.length; i++) {
    let comp = target - numbers[i]

    if (ht[comp] !== undefined) {
      return [ht[comp], i]
    }
    ht[numbers[i]] = i
  }
}

// The time complexity of the given code is O(n log n), where n is the length of the input nums array.
function twoSum(nums, target) {
  const sortedNums = nums.slice().sort((a, b) => a - b)
  let left = 0
  let right = sortedNums.length - 1

  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right]
    if (sum === target) {
      const leftIndex = nums.indexOf(sortedNums[left])
      const rightIndex = nums.lastIndexOf(sortedNums[right])
      return [leftIndex, rightIndex]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

console.log(`twoSum: ${twoSum([4, 8, 3, 1, 12], 7)}`)
