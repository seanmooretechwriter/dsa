function searchInsert(nums, target) {
  console.log('searchInsert(', nums, ',', target, ')')
  let leftPointer = 0
  let rightPointer = nums.length - 1

  while (leftPointer <= rightPointer) {
    const middleIndex = Math.floor((leftPointer + rightPointer) / 2)
    const middleValue = nums[middleIndex]

    console.log('middleIndex: ', middleIndex)
    console.log('middleValue: ', middleValue)

    if (middleValue === target) {
      return middleIndex
    } else if (middleValue > target) {
      rightPointer = middleIndex - 1
      console.log('rightPointer: ', rightPointer)
    } else {
      leftPointer = middleIndex + 1
      console.log('leftPointer: ', leftPointer)
    }
  }

  // If the target value is not found, the left pointer will have moved to the
  // first element that is greater than the target value.
  // This is where the target value should be inserted to maintain the sorted order.
  return leftPointer
}

//console.log(searchInsert([1, 3, 5, 6], 5) === 2)
console.log(searchInsert([1, 3, 5, 6, 7, 8, 9, 10, 12, 14, 16, 17], 2)) // === 1)
//console.log(searchInsert([1, 3, 5, 6], 7) === 4)
//console.log(searchInsert([0], 7) === 0)
//console.log(searchInsert([0, -1, 4, 11], 7))
