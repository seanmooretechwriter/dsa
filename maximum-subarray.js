/*

53. Maximum Subarray

Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

// The time complexity of the given code is O(n), where n is the length of the input array a.
const maxSubArray = (a) => {
  let maxSoFar = a[0]
  let maxEndingHere = a[0]

  for (let i = 1; i < a.length; i++) {
    maxEndingHere = Math.max(a[i], maxEndingHere + a[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

const b = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(`maxSubArray: ${maxSubArray(b)}`)

const maxSubArrayFP = (nums) => {
  const maxSum = nums.reduce(
    (acc, num) => {
      const sum = Math.max(num, acc.sum + num)
      return { max: Math.max(sum, acc.max), sum }
    },
    { max: nums[0], sum: nums[0] },
  )

  return maxSum.max
}
