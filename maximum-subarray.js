const computeMaximumSubarray = (a) => {
  let max = 0
  for (let i = 1; i < a.length; i++) {
    a[i] = Math.max(a[i], a[i] + a[i - 1])
    max = Math.max(max, a[i])
  }
  return max
}

const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(`a: ${a}`)
console.log(`computeMaximumSubarray: ${computeMaximumSubarray(a)}`)
console.log(`a: ${a}`)

/*
const maxSubArray = (nums) => {
  let max = nums[0]
  let sum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i])
    max = Math.max(sum, max)
  }

  return max
}
*/
const maxSubArray = (a) => {
  let maxSoFar = a[0]
  let maxEndingHere = a[0]

  for (let i = 1; i < a.length; i++) {
    maxEndingHere = Math.max(a[i], maxEndingHere + a[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

const maxSubArrayFP = (nums) => {
  const maxSum = nums.reduce(
    (acc, num) => {
      const sum = Math.max(num, acc.sum + num)
      return { max: Math.max(sum, acc.max), sum }
    },
    { max: nums[0], sum: nums[0] },
  )

  return maxSum.max
}

const kadane = (a) => {
  let best_sum = 0
  let current_sum = 0
  for (num of a) {
    current_sum = Math.max(0, current_sum + num)
    best_sum = Math.max(best_sum, current_sum)
  }
  return best_sum
}

/*
1. num: -2, current_sum: 0, best_sum: 0
2. num: 1, current_sum: 1, best_sum: 1
3. num: -3, current_sum: 0, best_sum: 1 
4. num: 4, current_sum: 4, best_sum: 4 
5. num: -1, current_sum: 3, best_sum: 4 
6. num: 2, current_sum: 5, best_sum: 5 
7. num: 1, current_sum: 6, best_sum: 6 
8. num: -5, current_sum: 1, best_sum: 6 
9. num: 4, current_sum: 5, best_sum: 6 
*/

const b = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(`maxSubArray: ${maxSubArray(b)}`)

const c = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//console.log(`kadane: ${kadane(c)}`)

/*
Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element of the array:
    max_ending_here = max_ending_here + a[i]
    if max_ending_here < 0:
        max_ending_here = 0
    if max_so_far < max_ending_here:
        max_so_far = max_ending_here

Return max_so_far
*/

const assertEquals = (actual, expected, message) => {
  if (actual !== expected) {
    console.log(message || `Expected ${expected} but got ${actual}`)
  }
}

//assertEquals(5, kadane(c))
//assertEquals(6, kadane(c))

const findMaxSubarray = (a) => {
  let maxSoFar = 0
  let maxEndingHere = 0

  for (let i = 0; i < a.length; i++) {
    maxEndingHere = maxEndingHere + a[i]
    if (maxEndingHere < 0) {
      maxEndingHere = 0
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
    }
  }
  return maxSoFar
}

assertEquals(5, findMaxSubarray(c))
assertEquals(6, findMaxSubarray(c))
