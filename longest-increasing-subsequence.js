/*

300. Longest Increasing Subsequence
https://leetcode.com/problems/longest-increasing-subsequence/

Given an integer array nums, return the length of the longest strictly increasing 
subsequence.

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 
Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

*/

// The runtime complexity of the given algorithm is O(n log n), where n is the length of the input array nums.
const lengthOfLIS = (nums) => {
  if (!nums || nums.length === 0) {
    return 0
  }

  const piles = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    let left = 0
    let right = piles.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (piles[mid][piles[mid].length - 1] < num) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    if (left === piles.length) {
      piles.push([num])
    } else {
      piles[left].push(num)
    }
  }

  return piles.length
}

console.log(
  `lengthOfLIS([10,9,2,5,3,7,101,18]): ${lengthOfLIS([
    10,
    9,
    2,
    5,
    3,
    7,
    101,
    18,
  ])}`,
) // expected output: 4

// The runtime complexity of the given code is O(n^2), where n is the length of the input array nums.
const lengthOfLISDP = (nums) => {
  if (!nums || nums.length === 0) {
    return 0
  }

  const n = nums.length
  const dp = Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

const lengthOfLISFP = (nums) => {
  if (!nums || nums.length === 0) {
    return 0
  }

  const piles = nums.reduce((piles, num) => {
    const { left, right } = piles.reduce(
      ({ left, right }, pile, index) => {
        const top = pile[pile.length - 1]
        return top < num ? { left: index + 1, right } : { left, right: index }
      },
      { left: 0, right: piles.length - 1 },
    )

    return left === piles.length
      ? [...piles, [num]]
      : piles.map((pile, index) => (index === left ? [...pile, num] : pile))
  }, [])

  return piles.length
}
