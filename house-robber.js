/*

198. House Robber
https://leetcode.com/problems/house-robber/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 
Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

// The time complexity of this code is O(n), where n is the length of the input nums array.
const rob = (nums) => {
  if (!nums || nums.length === 0) {
    return 0
  }

  const n = nums.length

  // Initialize the DP array with the base cases
  const dp = new Array(n).fill(0)
  dp[0] = nums[0]

  if (n > 1) {
    dp[1] = Math.max(nums[0], nums[1])
  }

  // Fill in the rest of the DP array
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  // Return the maximum value in the DP array
  return Math.max(...dp)
}

// House Robber code following the Functional Programming paradigm.
const robFP = (nums) => {
  if (!nums || nums.length === 0) {
    return 0
  }

  const n = nums.length

  // Define a function to calculate the DP value at the current index
  const calcDp = (dp, i) => {
    if (i === 0) {
      return nums[0]
    } else if (i === 1) {
      return Math.max(nums[0], nums[1])
    } else {
      return Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
  }

  // Initialize the DP array with the base cases
  const dp = Array.from({ length: n }, (_, i) => calcDp(dp, i))

  // Return the maximum value in the DP array
  return Math.max(...dp)
}

const a = [1, 2, 3, 1]
console.log(`rob(${a}): ${rob(a)}`) //4

const b = [2, 7, 9, 3, 1]
console.log(`rob(${b}): ${rob(b)}`) //12
