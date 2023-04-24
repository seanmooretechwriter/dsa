/*

371. Sum of Two Integers
https://leetcode.com/problems/sum-of-two-integers/

Given two integers a and b, return the sum of the two integers without using the operators + and -.

Example 1:

Input: a = 1, b = 2
Output: 3

Example 2:

Input: a = 2, b = 3
Output: 5

Constraints:

-1000 <= a, b <= 1000

*/

// The getSum function has a runtime complexity of O(log n), where n is the maximum number of bits in the input integers. This is because the while loop iterates a maximum of log n times, since the carry bits are shifted left by one bit each time. In practice, since the input integers are represented using a fixed number of bits (32 bits for JavaScript), the runtime complexity can be considered constant O(1).
function getSum(a, b) {
  while (b != 0) {
    let carry = (a & b) << 1
    a = a ^ b
    b = carry
  }

  return a
}

console.log('getSum(1, 2): ', getSum(1, 2)) // 3
console.log('getSum(10, -5): ', getSum(10, -5)) // 5
console.log('getSum(-7, -3): ', getSum(-7, -3)) // -10
