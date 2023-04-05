const search = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

const a = [4, 5, 6, 7, 0, 1, 2]
console.log(`search(a, 3): ${search(a, 3)}`)

const b = [5, 6, 7, 0, 1, 2, 3]
console.log(`search(b, 1): ${search(b, 2)}`)

//[4,5,6,7,0,1,2], target = 3
