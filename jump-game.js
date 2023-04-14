/*

55. Jump Game
https://leetcode.com/problems/jump-game/

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105

*/

// The time complexity of the code is O(n), where n is the length of the input array a.
const isJumpable = (a) => {
  let maxJump = 0
  for (let i = 0; i < a.length; i++) {
    if (i > maxJump) {
      return false // cannot reach this position
    }
    maxJump = Math.max(maxJump, i + a[i])
    if (maxJump >= a.length - 1) {
      return true // can reach the end
    }
  }
  return true
}

const a = [2, 3, 1, 1, 4]
console.log(`isJumpable(${a}): ${isJumpable(a)}`)

const b = [3, 2, 1, 0, 4]
console.log(`isJumpable(${b}): ${isJumpable(b)}`)

const isJumpableFP = (a) => {
  const result = a.reduce(
    (acc, cur, i) => {
      if (i > acc.maxJump) {
        return { ...acc, canJump: false }
      }
      const maxJump = Math.max(acc.maxJump, i + cur)
      if (maxJump >= a.length - 1) {
        return { maxJump, canJump: true }
      }
      return { maxJump }
    },
    { maxJump: 0, canJump: false },
  )
  return result.canJump
}
