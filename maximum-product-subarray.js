function maxProductSubarray(nums) {
  let maxSoFar = nums[0]
  let maxEndingHere = nums[0]
  let minEndingHere = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]

    // update the maximum and minimum ending here
    const previousMaxEndingHere = maxEndingHere
    maxEndingHere = Math.max(num, num * maxEndingHere, num * minEndingHere)
    minEndingHere = Math.min(
      num,
      num * previousMaxEndingHere,
      num * minEndingHere,
    )

    // update the maximum so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

console.log(
  `maxProductSubarray([1, 2, 3, 4, 5, 0]: ${maxProductSubarray([
    1,
    2,
    3,
    4,
    5,
    0,
  ])}`,
)

console.log(`maxProductSubarray([0]: ${maxProductSubarray([0, -1, -12, 4, 6])}`)
console.log(`maxProductSubarray([0]: ${maxProductSubarray([0, 2, -3, 7, -1])}`)

const findCurrentMaximum = (
  currentElementValue,
  currentMaximum,
  currentMinimum,
) => {
  currentMaximum = Math.max(
    currentMaximum * currentElementValue,
    currentMinimum * currentElementValue,
  )
  currentMaximum = Math.max(currentMaximum, currentElementValue)
  return currentMaximum
}

const findCurrentMinimum = (
  currentElementValue,
  currentMinimum,
  previousMaximum,
) => {
  currentMinimum = Math.min(
    previousMaximum * currentElementValue,
    currentMinimum * currentElementValue,
  )
  currentMinimum = Math.min(currentMinimum, currentElementValue)
  return currentMinimum
}

const maxProduct = (nums) => {
  let currentMaximum = nums[0]
  let currentMinimum = nums[0]
  let finalMaximum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let previousMaximum = currentMaximum
    let currentElementValue = nums[i]
    currentMaximum = findCurrentMaximum(
      currentElementValue,
      currentMaximum,
      currentMinimum,
    )
    currentMinimum = findCurrentMinimum(
      currentElementValue,
      currentMinimum,
      previousMaximum,
    )
    finalMaximum = Math.max(currentMaximum, finalMaximum)
  }

  return finalMaximum
}

/*

console.log(
      `nums[${i}]: ${nums[i]}, previousMaximum: ${previousMaximum}, currentMaximum: ${currentMaximum},  currentMinimum: ${currentMinimum}, finalMaximum: ${finalMaximum},
    `,
    )

    */

/*
nums[1]: 2, currentMaximum: 2,  currentMinimum: 2, finalMaximum: 2, currentMaxCache: 1
nums[2]: 3, currentMaximum: 6,  currentMinimum: 3, finalMaximum: 6, currentMaxCache: 2
nums[3]: 4, currentMaximum: 24,  currentMinimum: 4, finalMaximum: 24, currentMaxCache: 6
nums[4]: 5, currentMaximum: 120,  currentMinimum: 5, finalMaximum: 120, currentMaxCache: 24
nums[5]: 0, currentMaximum: 0,  currentMinimum: 0, finalMaximum: 120, currentMaxCache: 120
*/

const a = [1, 2, 3, 4, 5, 0]
console.log(`maxProduct(${a}): ${maxProduct(a)}`) // should be 120

const findMaxProductSubarrayFP = (a) => {
  const maxProduct = a.reduce(
    (acc, curr) => {
      const maxEndingHere = (acc.maxEndingHere || 1) * curr
      console.log(`maxEndingHere: ${maxEndingHere}`)
      console.log(`curr: ${curr}`)
      console.log(`acc.maxSoFar: ${acc.maxSoFar}`)
      return {
        maxEndingHere: maxEndingHere === 0 ? 1 : maxEndingHere,
        maxSoFar: Math.max(acc.maxSoFar, maxEndingHere),
      }
    },
    { maxSoFar: a[0] },
  )

  return maxProduct.maxSoFar
}

const assertEquals = (actual, expected, message) => {
  if (actual !== expected) {
    console.log(message || `Expected ${expected} but got ${actual}`)
  }
}

//assertEquals(7, findMaxProductSubarrayFP(a))
//assertEquals(120, findMaxProductSubarrayFP(a))

/*

Initialize:
    max_so_far = 1
    max_ending_here = 1

Loop for each element of the array:
    max_ending_here = max_ending_here * a[i]
    if max_ending_here == 0:
        max_ending_here = 1
    if max_so_far < max_ending_here:
        max_so_far = max_ending_here
    if max_ending_here < 0 and abs(max_ending_here) > abs(max_so_far):
        max_so_far = max_ending_here

Return max_so_far

*/

/*

const findMaxProductSubarray = (a) => {
  let maxSoFar = 1
  let maxEndingHere = 1

  for (let i = 0; i < a.length; i++) {
    maxEndingHere = maxEndingHere * a[i]

    if (maxEndingHere === 0) {
      maxEndingHere = 1
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
    }
    if (maxEndingHere < 0 && maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere
    }
  }
  return maxSoFar
}

console.log(`findMaxProductSubarray: ${findMaxProductSubarray([0])}`)

*/
