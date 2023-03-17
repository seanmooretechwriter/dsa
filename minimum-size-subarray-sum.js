// [1,2,3,4,5,6,7]
// [3,4]

// smallest sub array of k elements matching target

// 209. Minimum Size Subarray Sum
const minSubArrayLen = (s, nums) => {
  let windowSum = 0
  let output = Infinity
  let windowStart = 0
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    //console.log(`nums[windowEnd]: ${nums[windowEnd]}`)
    windowSum += nums[windowEnd]
    //console.log(`windowSum: ${windowSum}`)
    // shrink the window until the windowSum is smaller than s
    while (windowSum >= s) {
      output = Math.min(output, windowEnd - windowStart + 1)
      // subtract the element at the windowStart index
      windowSum -= nums[windowStart]
      // change windowStart to the next element
      windowStart++
    }
  }
  return output == Infinity ? 0 : output
}

//console.log(`minSubArrayLen: ${minSubArrayLen(7, [2, 3, 1, 2, 4, 3])}`)

const minSubArrayLength = (s, nums) => {
  let n = nums.length
  let ans = Infinity
  let left = 0
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left)
      sum -= nums[left++]
    }
  }
  return ans != Infinity ? ans : 0
}

console.log(`minSubArrayLength: ${minSubArrayLength(7, [2, 3, 1, 2, 4, 3])}`)
