/*

268. Missing Number
https://leetcode.com/problems/missing-number/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the 
range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing 
number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing 
number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 
Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

*/

// The missingNumber function has a runtime complexity of O(n), where n is the length of the input array nums. This is because the function iterates once over the input array to compute the sum of its elements. The space complexity of the function is O(1), since it only uses a constant amount of extra space to store the sum and the loop counter.
function missingNumber(nums) {
  const n = nums.length
  let sum = (n * (n + 1)) / 2

  for (let i = 0; i < n; i++) {
    sum -= nums[i]
  }

  return sum
}

console.log('missingNumber([0, 1, 3]): ', missingNumber([0, 1, 3])) // 2
console.log('missingNumber([0, 1, 2, 4, 5]): ', missingNumber([0, 1, 2, 4, 5])) // 3
console.log('missingNumber([1]): ', missingNumber([1])) // 0

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

/*
Yes, we can modify the previous implementation to use constant extra space complexity by computing the XOR of all numbers from 0 to n, and then XORing it with all the numbers in the input array nums. The result will be the missing number.
The modified missingNumber function has a runtime complexity of O(n), where n is the length of the input array nums, and a space complexity of O(1), since it only uses a constant amount of extra space to store the missing number and the loop counter.
*/

function missingNumberOptimized(nums) {
  let missing = nums.length

  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i]
  }

  return missing
}

console.log(
  'missingNumberOptimized([0, 1, 3]): ',
  missingNumberOptimized([0, 1, 3]),
) // 2
console.log(
  'missingNumberOptimized([0, 1, 2, 4, 5]): ',
  missingNumberOptimized([0, 1, 2, 4, 5]),
) // 3
console.log('missingNumberOptimized([1]): ', missingNumberOptimized([1])) // 0
