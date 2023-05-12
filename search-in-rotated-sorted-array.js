/*

33. Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot 
index k (1 <= k < nums.length) such that the resulting 
array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target 
if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

*/

// The time complexity of the search function is O(log n), where n is the length of the nums array.
const search = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  let iterator = 0

  while (left <= right) {
    iterator++

    const mid = Math.floor((left + right) / 2)

    console.log(
      `iterator: ${iterator}, left: nums[${left}]: ${nums[left]}, mid: nums[${mid}]: ${nums[mid]}, right: nums[${right}]: ${nums[right]}`,
    )

    let leftValue = nums[left]
    let midValue = nums[mid]
    let rightValue = nums[right]

    let isNumsLeftLessThanEqualNumsMid = leftValue <= midValue
    let isNumsLeftLessThanEqualTarget = leftValue <= target
    let isTargetLessThanNumsMid = target < midValue
    let isNumsMidLessThanTarget = midValue < target
    let isTargetLessThanEqualNumsRight = target <= rightValue

    if (nums[mid] === target) {
      return mid
    }

    if (isNumsLeftLessThanEqualNumsMid) {
      if (isNumsLeftLessThanEqualTarget && isTargetLessThanNumsMid) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (isNumsMidLessThanTarget && isTargetLessThanEqualNumsRight) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

const b = [13, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const t = 2
console.log(`search(${b}, ${t}): ${search(b, 2)}`)

const searchFP = (nums, target) => {
  const binarySearch = (left, right) => {
    if (left > right) {
      return -1
    }

    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        return binarySearch(left, mid - 1)
      } else {
        return binarySearch(mid + 1, right)
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        return binarySearch(mid + 1, right)
      } else {
        return binarySearch(left, mid - 1)
      }
    }
  }

  return binarySearch(0, nums.length - 1)
}
