/*

191. Number of 1 Bits
https://leetcode.com/problems/number-of-1-bits/

Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

Constraints:

The input must be a binary string of length 32.

*/

// The hammingWeight function has a time complexity of O(log n), where n is the input number. This is because the loop runs once for each 1 bit in the input number, and the number of 1 bits is at most log n.
function hammingWeight(n) {
  let count = 0

  while (n !== 0) {
    count++
    n &= n - 1
  }

  return count
}

console.log('hammingWeight(11): ', hammingWeight(11)) // 3

// Follow up: If this function is called many times, how would you optimize it?

/*

This implementation uses a Map object to cache the results of previous function calls. If the result for a given input n is already in the Map, the function returns the cached result instead of recomputing it.

Using memoization can significantly improve the performance of the hammingWeight function when it's called many times with the same inputs. However, memoization may not be useful if the inputs are different each time the function is called. In that case, other optimization techniques, such as algorithmic optimization, may be more appropriate.

*/

const memo = new Map()

function hammingWeightOptimized(n) {
  if (memo.has(n)) {
    return memo.get(n)
  }

  let count = 0

  while (n !== 0) {
    count++
    n &= n - 1
  }

  memo.set(n, count)
  return count
}

console.log('hammingWeightOptimized(11): ', hammingWeightOptimized(11)) // 3
