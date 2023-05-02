/*

238. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/

Given an integer array nums, return an array answer such that answer[i] is 
equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

const productExceptSelfSimple = (nums) => {
  const output = []
  let product = 1

  // calculate the product of all elements to the left of each element
  for (let i = 0; i < nums.length; i++) {
    output[i] = product
    product *= nums[i]
  }

  product = 1

  // calculate the product of all elements to the right of each element
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= product
    product *= nums[i]
  }

  return output
}

const productExceptSelf = (nums) => {
  const products = new Array(nums.length).fill(1)
  let leftProduct = 1
  let rightProduct = 1

  for (let i = 0; i < nums.length; i++) {
    products[i] *= leftProduct
    leftProduct *= nums[i]

    const rightArrayIndex = nums.length - i - 1

    products[rightArrayIndex] *= rightProduct
    rightProduct *= nums[rightArrayIndex]
  }

  return products
}

/*

input: [1, 2, 3, 4]
i:  0 numCount:  4 1 rightProduct:  4 output:  [ 1, 1, 1, 1 ]
i:  1 numCount:  4 2 rightProduct:  12 output:  [ 1, 1, 4, 1 ]
i:  2 numCount:  4 6 rightProduct:  24 output:  [ 1, 12, 8, 1 ]
i:  3 numCount:  4 24 rightProduct:  24 output:  [ 24, 12, 8, 6 ]

*/

const a = [1, 2, 3, 4]
console.log(`productExceptSelf(${a}): ${productExceptSelf(a)}`)

const productExceptSelfFP = (nums) => {
  const n = nums.length
  const leftProducts = nums.reduce(
    (acc, curr) => [...acc, acc[acc.length - 1] * curr],
    [1],
  )
  const rightProducts = nums.reduceRight(
    (acc, curr) => [curr * acc[0], ...acc],
    [1],
  )
  const output = leftProducts.map(
    (left, index) => left * rightProducts[index + 1],
  )
  return output
}
