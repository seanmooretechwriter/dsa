function threeSum(nums) {
  const n = nums.length

  // Sort the input array
  const sortedNums = nums.slice().sort((a, b) => a - b)

  // Define a helper function to find all three sums that add up to 0
  const findThreeSumsFP = (start, target) => {
    if (target === 0 && start.length === 3) {
      return [start]
    } else if (start.length < 3 || target < 0) {
      return []
    } else {
      const result = []
      for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i - 1]) {
          continue
        }
        const nextStart = start.concat(sortedNums[i])
        const nextTarget = target - sortedNums[i]
        const nextResult = findThreeSums(nextStart, nextTarget)
        result.push(...nextResult)
      }
      return result
    }
  }

  // Find all three sums that add up to 0
  const result = findThreeSums([], 0)

  return result
}

/*

First sort the array and then use a loop to fix the first element 
of the triplet. We can then use two pointers, one pointing to the 
next element and the other pointing to the end of the array. We can 
move these two pointers towards each other, checking if the sum of 
the three elements is equal to zero. If the sum is less than zero, 
we can move the left pointer one step to the right, and if the sum 
is greater than zero, we can move the right pointer one step to the 
left. If the sum is equal to zero, we can add the triplet to our 
result set, and move both pointers towards each other.

We can skip over duplicates by checking if the current element is 
the same as the previous element. We can also skip over duplicates 
for the second and third elements by checking if they are the same 
as their previous element.

*/

function threeSum(nums) {
  nums.sort((a, b) => a - b)

  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      console.log(`i: ${i}, left: ${left}, right: ${right}`)
      console.log(
        `nums[i]: ${nums[i]}, nums[left]: ${nums[left]}, nums[right]: ${nums[right]}`,
      )

      const sum = nums[i] + nums[left] + nums[right]
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return result
}

function threeSumTarget(nums, sum) {
  nums.sort((a, b) => a - b)

  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right]
      if (currentSum < sum) {
        left++
      } else if (currentSum > sum) {
        right--
      } else {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return result
}

// This function takes an array of numbers as input
function threeSumWithComments(nums) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b)

  // Create an empty array to hold the result
  const result = []

  // Loop through the input array
  for (let i = 0; i < nums.length - 2; i++) {
    // If the current number is equal to the previous number, continue to the next iteration
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    // Set left and right pointers for two numbers to be compared with the current number
    let left = i + 1
    let right = nums.length - 1

    // While left pointer is smaller than right pointer
    while (left < right) {
      // Calculate the sum of current number, left and right number
      const sum = nums[i] + nums[left] + nums[right]

      // If the sum is smaller than 0, move the left pointer to the right
      if (sum < 0) {
        left++
      }
      // If the sum is greater than 0, move the right pointer to the left
      else if (sum > 0) {
        right--
      }
      // If the sum is equal to 0, add the triplet of numbers to the result
      // array and move the left and right pointers to the next distinct numbers
      else {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--

        // Skip the duplicates of left number
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }

        // Skip the duplicates of right number
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }

  // Return the resulting array
  return result
}

const a = [5, 1, -7, -6, -5, 6, 0] //[-1, 0, 1, 2, -1, -4]
console.log('threeSum(a): ', threeSum(a))

console.log('threeSumTarget(a, 0): ', threeSumTarget(a, 0))
console.log('threeSumTarget(a, 1): ', threeSumTarget(a, 1))

/*
const d = [0, 0, 1, 3, 4, 5, 5, 6, 7, 5, 9, 10, 1, 0, 3]
const r = []
d.sort((a, b) => a - b)
for (let i = 0; i < d.length; i++) {
  if (i > 0 && d[i] === d[i - 1]) {
    continue
  }

  r.push(d[i])
}

console.log(`r: ${r}`)
*/
