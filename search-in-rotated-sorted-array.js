const search = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  let iterator = 0

  while (left <= right) {
    iterator++

    const mid = Math.floor((left + right) / 2)

    console.log(
      `iterator: ${iterator}, left: nums[${left}]: ${nums[left]}, mid: nums[${mid}]: ${nums[mid]}, right: nums[${right}]: ${nums[right]}`,
    )

    let leftValue = nums[left]
    let midValue = nums[mid]
    let rightValue = nums[right]

    let isNumsLeftLessThanEqualNumsMid = leftValue <= midValue
    let isNumsLeftLessThanEqualTarget = leftValue <= target
    let isTargetLessThanNumsMid = target < midValue
    let isNumsMidLessThanTarget = midValue < target
    let isTargetLessThanEqualNumsRight = target <= rightValue

    if (nums[mid] === target) {
      return mid
    }

    if (isNumsLeftLessThanEqualNumsMid) {
      if (isNumsLeftLessThanEqualTarget && isTargetLessThanNumsMid) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (isNumsMidLessThanTarget && isTargetLessThanEqualNumsRight) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

//const a = [4, 5, 6, 7, 0, 1, 2]
//console.log(`search(a, 3): ${search(a, 3)}`)

//const b = [5, 6, 7, 0, 1, 2, 3]
//const b = [13, 12, 11, 10, 9, 8, 7, 5, 0, 1, 2, 3]
const b = [13, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const t = 2
console.log(`search(${b}, ${t}): ${search(b, 2)}`)

//[4,5,6,7,0,1,2], target = 3

/*
iterator: 1, left: nums[0]: 13, mid: nums[6]: 5, right: nums[12]: 11
iterator: 2, left: nums[0]: 13, mid: nums[2]: 1, right: nums[5]: 4
iterator: 3, left: nums[3]: 2, mid: nums[4]: 3, right: nums[5]: 4
iterator: 4, left: nums[3]: 2, mid: nums[3]: 2, right: nums[3]: 2
search(13,12,1,2,3,4,5,6,7,8,9,10,11, 2): 3
*/

/*
iterator: 1, left: nums[0]: 13, mid: nums[6]: 5, right: nums[12]: 11
isNumsLeftLessThanEqualNumsMid: false
isNumsLeftLessThanEqualTarget: false
isTargetLessThanNumsMid: true
isNumsMidLessThanTarget: false
isTargetLessThanEqualNumsRight: true
iterator: 2, left: nums[0]: 13, mid: nums[2]: 1, right: nums[5]: 4
isNumsLeftLessThanEqualNumsMid: false
isNumsLeftLessThanEqualTarget: false
isTargetLessThanNumsMid: false
isNumsMidLessThanTarget: true
isTargetLessThanEqualNumsRight: true
iterator: 3, left: nums[3]: 2, mid: nums[4]: 3, right: nums[5]: 4
isNumsLeftLessThanEqualNumsMid: true
isNumsLeftLessThanEqualTarget: true
isTargetLessThanNumsMid: true
isNumsMidLessThanTarget: false
isTargetLessThanEqualNumsRight: true
iterator: 4, left: nums[3]: 2, mid: nums[3]: 2, right: nums[3]: 2
isNumsLeftLessThanEqualNumsMid: true
isNumsLeftLessThanEqualTarget: true
isTargetLessThanNumsMid: false
isNumsMidLessThanTarget: false
isTargetLessThanEqualNumsRight: true
*/
