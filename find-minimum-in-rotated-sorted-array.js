const findMin = (nums) => {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}

const a = [4, 5, 6, 7, 0, 1, 2]
console.log(`findMin(a): ${findMin(a)}`)

const b = [5, 6, 7, 8, 9, 1, 2, 3]
console.log(`findMin(b): ${findMin(b)}`)
