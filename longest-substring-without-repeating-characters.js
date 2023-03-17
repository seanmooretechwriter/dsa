const lengthOfLongestSubstring = (s) => {
  let max = 0
  let start = 0
  let map = {}
  for (let i = 0; i < s.length; i++) {
    //console.log(`max: ${max}`)
    //console.log(`start: ${start}`)
    if (map[s[i]] > start) {
      start = map[s[i]]
    }
    map[s[i]] = i
    max = Math.max(max, i - start + 1)
    console.log(`map[${s[i]}]: ${map[s[i]]}`)
  }
  //for (let prop in map) {
  //  console.log(`map[${prop}]: ${map[prop]}`)
  //}
  return max
}

console.log(
  `lengthOfLongestSubstring: ${lengthOfLongestSubstring(
    'abcdefghijklmmnopqrstuvwxyz',
  )}`,
)

const findLengthOfLongestSubstring = (s) => {
  // Store counters for the biggest string,
  // the start of the window, and the current
  // letter's position (end of window)
  let longestStringLength = 0,
    startOfWindow = 0,
    currentPosition = 0

  // Initialise a Set to store the characters
  let characterSet = new Set()

  // Loop through the provided string
  while (currentPosition < s.length) {
    // Check if the current character exists in the Set
    if (characterSet.has(s[currentPosition])) {
      // If so, delete it from the Set (as it will be picked up on the next run), and move the window's start forwards
      characterSet.delete(s[startOfWindow++])
    } else {
      // If not, add the current character to the Set, and move the current character forwards
      characterSet.add(s[currentPosition++])
      longestStringLength = Math.max(longestStringLength, characterSet.size)
    }
  }

  return longestStringLength
}

// [1,2,3,4,5,6,7]
// [3,4]

// smallest sub array of k elements matching target

// 209. Minimum Size Subarray Sum
const minSubArrayLen (s, nums) => {
    let windowSum = 0
    let output = Infinity;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      windowSum += nums[windowEnd];
      // shrink the window until the windowSum is smaller than s
      while (windowSum >= s) {
        output = Math.min(output, windowEnd - windowStart + 1);
        // subtract the element at the windowStart index
        windowSum -= nums[windowStart];
        // change windowStart to the next element
        windowStart++; 
      }
    }
    return output == Infinity ? 0 : output;
};