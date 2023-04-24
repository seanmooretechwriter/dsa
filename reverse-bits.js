/*

190. Reverse Bits
https://leetcode.com/problems/reverse-bits/

Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
 
Constraints:

The input must be a binary string of length 32

*/

// The reverseBits function has a time complexity of O(1), because it performs a fixed number of operations (32 operations in this case) regardless of the input size. Therefore, its time complexity does not depend on the input size.
function reverseBits(n) {
  let result = 0

  for (let i = 0; i < 32; i++) {
    result <<= 1
    result |= n & 1
    n >>= 1
  }

  return result >>> 0
}

console.log('reverseBits(43261596): ', reverseBits(43261596)) // 964176192

// Follow up: If this function is called many times, how would you optimize it?

/*

One way to optimize the reverseBits function is to use bit manipulation tricks to perform the reverse operation more efficiently. One such trick is to use a precomputed lookup table that contains the reversed 8-bit patterns for all possible 8-bit values. Then, the function can perform the reverse operation by splitting the input into 4 8-bit segments, looking up the reversed patterns for each segment in the lookup table, and concatenating the reversed segments in the correct order.

This implementation uses a Uint8Array object to store the reversed 8-bit patterns for all possible 8-bit values. The for loop initializes the lookup table by recursively applying a bit shifting and OR operation to each possible 8-bit value.

The reverseBits function then splits the input number into 4 8-bit segments, looks up the reversed patterns for each segment in the lookup table, and concatenates the reversed segments in the correct order. Finally, the function returns the result as an unsigned integer, which is achieved by using the zero-fill right shift operator (>>>).

Using a lookup table can significantly improve the performance of the reverseBits function when it's called many times with different inputs. However, the size of the lookup table may become a limiting factor if memory usage is a concern.

*/

const lookupTable = new Uint8Array(256)

for (let i = 0; i < 256; i++) {
  lookupTable[i] = (lookupTable[i >> 1] >> 1) | ((i & 1) << 7)
}

function reverseBitsOptimized(n) {
  let result = 0

  result |= lookupTable[n & 0xff] << 24
  result |= lookupTable[(n >> 8) & 0xff] << 16
  result |= lookupTable[(n >> 16) & 0xff] << 8
  result |= lookupTable[(n >> 24) & 0xff]

  return result >>> 0
}

console.log('reverseBitsOptimized(43261596): ', reverseBitsOptimized(43261596)) // 964176192
