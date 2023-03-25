/*
function twoSum(nums, target) {
  const seen = {} // create an object to store seen values

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i] // calculate the complement

    console.log(`complement: ${complement}`)
    console.log(`seen[complement]: ${seen[complement]}`)

    if (seen[complement] !== undefined) {
      // if the complement is in the object, return the indices
      return [seen[complement], i]
    }

    seen[nums[i]] = i // store the current value in the object
  }

  return null // if no solution found, return null
}
*/

function twoSum(numbers, target) {
  const ht = {}

  for (let i = 0; i < numbers.length; i++) {
    let comp = target - numbers[i]

    if (ht[comp] !== undefined) {
      return [ht[comp], i]
    }
    ht[numbers[i]] = i
  }
}

console.log(`twoSum: ${twoSum([4, 8, 3, 1, 12], 7)}`)
