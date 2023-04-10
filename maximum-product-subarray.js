/*

152. Maximum Product Subarray
https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

// The time complexity of the given code is O(n), where n is the length of the input array nums.
const maxProductSubarray = (nums) => {
  let maxSoFar = nums[0]
  let maxEndingHere = nums[0]
  let minEndingHere = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]

    // update the maximum and minimum ending here
    const previousMaxEndingHere = maxEndingHere
    maxEndingHere = Math.max(num, num * maxEndingHere, num * minEndingHere)
    minEndingHere = Math.min(
      num,
      num * previousMaxEndingHere,
      num * minEndingHere,
    )

    // update the maximum so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

console.log(
  `maxProductSubarray([1, 2, 3, 4, 5, 0]: ${maxProductSubarray([
    1,
    2,
    3,
    4,
    5,
    0,
  ])}`,
)

console.log(`maxProductSubarray([0]: ${maxProductSubarray([0, -1, -12, 4, 6])}`)
console.log(`maxProductSubarray([0]: ${maxProductSubarray([0, 2, -3, 7, -1])}`)

const a = [1, 2, 3, 4, 5, 0]
console.log(`maxProduct(${a}): ${maxProduct(a)}`) // should be 120

const findMaxProductSubarrayFP = (a) => {
  const maxProduct = a.reduce(
    (acc, curr) => {
      const maxEndingHere = (acc.maxEndingHere || 1) * curr
      console.log(`maxEndingHere: ${maxEndingHere}`)
      console.log(`curr: ${curr}`)
      console.log(`acc.maxSoFar: ${acc.maxSoFar}`)
      return {
        maxEndingHere: maxEndingHere === 0 ? 1 : maxEndingHere,
        maxSoFar: Math.max(acc.maxSoFar, maxEndingHere),
      }
    },
    { maxSoFar: a[0] },
  )

  return maxProduct.maxSoFar
}
