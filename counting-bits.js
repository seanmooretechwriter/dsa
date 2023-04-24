/*

338. Counting Bits
https://leetcode.com/problems/counting-bits/

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

Constraints:

0 <= n <= 105

*/

// The countBits function has a runtime complexity of O(n), where n is the input number, since it needs to iterate over all numbers from 0 to n to compute the number of bits set to 1 in their binary representation.
function countBits(n) {
  const bits = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1)
  }

  return bits
}

console.log('countBits(2): ', countBits(2)) // [0, 1, 1]
console.log('countBits(5): ', countBits(5)) // [0, 1, 1, 2, 1, 2]

/*

Follow up:

It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?

*/

/*
Yes, we can solve the Counting Bits problem in linear time O(n) and in a single pass using bit manipulation.
Here's an implementation that uses bit manipulation to count the number of set bits in each number from 0 to n:
*/

function countBitsOptimized(n) {
  const bits = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i & (i - 1)] + 1
  }

  return bits
}

console.log('countBitsOptimized(2): ', countBitsOptimized(2)) // [0, 1, 1]
console.log('countBitsOptimized(5): ', countBitsOptimized(5)) // [0, 1, 1, 2, 1, 2]

// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

/*
This implementation uses a loop to count the number of set bits in each number from 0 to n. The loop extracts each bit of the number using bitwise AND (&) and shifts the number to the right (>>=) to extract the next bit. The loop continues until the number becomes zero.
*/
function countBitsRaw(n) {
  const bits = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    let count = 0
    let x = i
    while (x > 0) {
      if (x & 1) {
        count++
      }
      x >>= 1
    }
    bits[i] = count
  }

  return bits
}

console.log('countBitsRaw(2): ', countBitsRaw(2)) // [0, 1, 1]
console.log('countBitsRaw(5): ', countBitsRaw(5)) // [0, 1, 1, 2, 1, 2]
