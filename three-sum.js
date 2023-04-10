/*

15. 3Sum
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/

// The time complexity of the code is O(n^2), where n is the length of the input array nums.
const threeSum = (nums) => {
  nums.sort((a, b) => a - b)

  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      console.log(`i: ${i}, left: ${left}, right: ${right}`)
      console.log(
        `nums[i]: ${nums[i]}, nums[left]: ${nums[left]}, nums[right]: ${nums[right]}`,
      )

      const sum = nums[i] + nums[left] + nums[right]
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return result
}

const a = [5, 1, -7, -6, -5, 6, 0] //[-1, 0, 1, 2, -1, -4]
console.log('threeSum(a): ', threeSum(a))

console.log('threeSum(a, 0): ', threeSum(a, 0))
console.log('threeSum(a, 1): ', threeSum(a, 1))

function threeSumFP(nums) {
  const n = nums.length

  // Sort the input array
  const sortedNums = nums.slice().sort((a, b) => a - b)

  // Define a helper function to find all three sums that add up to 0
  const findThreeSums = (start, target) => {
    if (target === 0 && start.length === 3) {
      return [start]
    } else if (start.length < 3 || target < 0) {
      return []
    } else {
      const result = []
      for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i - 1]) {
          continue
        }
        const nextStart = start.concat(sortedNums[i])
        const nextTarget = target - sortedNums[i]
        const nextResult = findThreeSums(nextStart, nextTarget)
        result.push(...nextResult)
      }
      return result
    }
  }

  // Find all three sums that add up to 0
  const result = findThreeSums([], 0)

  return result
}
