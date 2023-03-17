const twoSum = (nums, target) => {
  let complementsHashTable = {}
  //let complements = {}
  for (let i = 0; i < nums.length; i++) {
    let currentIndex = i
    let currentElement = nums[i]
    let complement = target - currentElement

    if (complementsHashTable[complement] !== undefined) {
      //Object.keys(complements).forEach((prop) => console.log(prop))
      return [complementsHashTable[complement], currentIndex]
    }

    complementsHashTable[currentElement] = currentIndex
    //complements[nums[i]] = i
  }
}

console.log(`twoSum: ${twoSum([4, 8, 3, 1, 12], 7)}`)
