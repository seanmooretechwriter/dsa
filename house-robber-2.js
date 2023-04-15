/*

213. House Robber II
https://leetcode.com/problems/house-robber-ii/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
 
Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000

*/

// The runtime complexity of the rob function is O(n), where n is the length of the input array nums.
const rob = (nums) => {
  if (nums.length === 1) {
    return nums[0]
  }
  return Math.max(
    robHelper(nums, 0, nums.length - 2),
    robHelper(nums, 1, nums.length - 1),
  )
}

const robHelper = (nums, start, end) => {
  let prevMax = 0,
    currMax = 0
  for (let i = start; i <= end; i++) {
    let temp = currMax
    currMax = Math.max(prevMax + nums[i], currMax)
    prevMax = temp
  }
  return currMax
}

const robAlt = (nums = []) => {
  const memo = {}
  const aux = (index = 0, right = nums.length - 1) => {
    memo[index] = memo[index] || {}
    if (memo[index][right] !== undefined) {
      return memo[index][right]
    }
    if (index >= right + 1) {
      return 0
    }
    memo[index][right] = Math.max(
      aux(index + 2, index === 0 ? right - 1 : right) + nums[index],
      aux(index + 1, right),
    )
    return memo[index][right]
  }
  return aux()
}

const a = [2, 3, 2]
console.log(`rob(${a}): ${rob(a)}`) // 3

const b = [1, 2, 3, 1]
console.log(`rob(${b}): ${rob(b)}`) // 4

const robFP = (nums) => {
  if (nums.length === 1) {
    return nums[0]
  }

  const max1 = robHelperFP(nums, 0, nums.length - 2)
  const max2 = robHelperFP(nums, 1, nums.length - 1)

  return Math.max(max1, max2)
}

const robHelperFP = (nums, start, end) =>
  nums.slice(start, end + 1).reduce(
    (acc, curr) => {
      const [prevMax, currMax] = acc
      return [currMax, Math.max(prevMax + curr, currMax)]
    },
    [0, 0],
  )[1]
