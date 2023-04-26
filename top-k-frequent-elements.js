/*

347. Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

// The runtime complexity for the topKFrequent function is O(n log k), where n is the length of the input array and k is the number of elements to return.
function topKFrequent(nums, k) {
  // Create a hash map to store the frequency of each number
  const freqMap = {}
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1
  }

  // Create a min heap to store the top k frequent numbers
  const heap = new MinHeap((a, b) => freqMap[a] - freqMap[b])
  for (let num in freqMap) {
    heap.push(num)
    if (heap.size() > k) {
      heap.pop()
    }
  }

  // Return the top k frequent numbers
  const result = []
  while (!heap.isEmpty()) {
    result.unshift(heap.pop())
  }
  return result
}

class MinHeap {
  constructor(compareFunc) {
    this.compare = compareFunc
    this.heap = []
  }

  push(val) {
    this.heap.push(val)
    this.bubbleUp(this.heap.length - 1)
  }

  pop() {
    const min = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown(0)
    }
    return min
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.heap.length === 0
  }

  bubbleUp(idx) {
    const element = this.heap[idx]
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      const parent = this.heap[parentIdx]
      if (this.compare(element, parent) >= 0) {
        break
      }
      this.heap[idx] = parent
      this.heap[parentIdx] = element
      idx = parentIdx
    }
  }

  bubbleDown(idx) {
    const element = this.heap[idx]
    const length = this.heap.length
    while (true) {
      const leftChildIdx = idx * 2 + 1
      const rightChildIdx = idx * 2 + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx]
        if (this.compare(leftChild, element) < 0) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx]
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && this.compare(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) {
        break
      }
      this.heap[idx] = this.heap[swap]
      this.heap[swap] = element
      idx = swap
    }
  }
}

const nums = [1, 1, 1, 2, 2, 3]
const k = 2
console.log('topKFrequent(nums, k): ', topKFrequent(nums, k)) // [1, 2]
