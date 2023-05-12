/*

153. Find Minimum in Rotated Sorted Array
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 
Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.

*/

// The time complexity of this function is O(log n), where n is the length of the input array.
const findMin = (nums) => {
  let left = 0
  let right = nums.length - 1

  // The array is sorted, there is no need to run the algorithm.
  if (nums[0] < nums[right]) {
    return nums[0]
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }

    console.log(
      'mid: ',
      mid,
      'left',
      left,
      'right: ',
      right,
      'nums[mid]: ',
      nums[mid],
      'nums[right]: ',
      nums[right],
    )
  }
  console.log('nums: ', nums)
  return nums[left]
}

const a = [4, 5, 6, 7, 0, 1, 2]
//console.log(`findMin(a): ${findMin(a)}`)

const b = [5, 6, 7, 8, 9, 1, 2, 3]
//console.log(`findMin(b): ${findMin(b)}`)

const c = [1, 2, 3, 5, 6, 7, 8, 9]
console.log(`findMin(c): ${findMin(c)}`)

const findMinFP = (nums) => {
  const helper = (left, right) => {
    if (left >= right) {
      return nums[left]
    }
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      return helper(mid + 1, right)
    } else {
      return helper(left, mid)
    }
  }

  return helper(0, nums.length - 1)
}
