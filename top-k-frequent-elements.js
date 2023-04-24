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
  const freqMap = new Map()
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  const minHeap = new MinHeap()
  for (let [num, freq] of freqMap) {
    minHeap.insert({ num, freq })
    if (minHeap.size() > k) {
      minHeap.remove()
    }
  }

  const result = []
  while (!minHeap.isEmpty()) {
    result.unshift(minHeap.remove().num)
  }
  return result
}

class MinHeap {
  constructor() {
    this.heap = []
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.heap.length === 0
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
  }

  remove() {
    const minValue = this.heap[0]
    const lastValue = this.heap.pop()
    if (!this.isEmpty()) {
      this.heap[0] = lastValue
      this.bubbleDown(0)
    }
    return minValue
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)
    if (index > 0 && this.heap[index].freq < this.heap[parentIndex].freq) {
      this.swap(index, parentIndex)
      this.bubbleUp(parentIndex)
    }
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2
    let minIndex = index
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].freq < this.heap[minIndex].freq
    ) {
      minIndex = leftChildIndex
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].freq < this.heap[minIndex].freq
    ) {
      minIndex = rightChildIndex
    }
    if (index !== minIndex) {
      this.swap(index, minIndex)
      this.bubbleDown(minIndex)
    }
  }

  swap(index1, index2) {
    ;[this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]
  }
}

const nums = [1, 1, 1, 2, 2, 3]
const k = 2
console.log('topKFrequent(nums, k): ', topKFrequent(nums, k)) // [1, 2]
