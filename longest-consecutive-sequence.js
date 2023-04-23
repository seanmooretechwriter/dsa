/*

128. Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// The longestConsecutive function has a time complexity of O(n), where n is the number of
// elements in the input array. The first loop creates a set from the input array, which
// takes O(n) time. The second loop visits each element in the set at most once, and for
// each element, it checks if its predecessor is in the set
// (which takes O(1) time with a set), and if not, it iterates through the consecutive
// sequence starting from that element (which takes O(k) time, where k is the length of
// the consecutive sequence). Since each element is visited at most once, and each
// consecutive sequence is visited at most once, the overall time complexity is O(n).

function longestConsecutive(nums) {
  const set = new Set(nums)
  let longestStreak = 0

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num
      let currentStreak = 1

      while (set.has(currentNum + 1)) {
        currentNum++
        currentStreak++
      }

      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
}

const nums = [100, 4, 200, 1, 3, 2]
console.log('longestConsecutive(nums): ', longestConsecutive(nums)) // 4
