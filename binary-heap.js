class BinaryHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  remove() {
    const lastIdx = this.heap.length - 1
    this.swap(0, lastIdx)
    const removed = this.heap.pop()
    this.bubbleDown()
    return removed
  }

  bubbleUp() {
    let currentIdx = this.heap.length - 1
    let parentIdx = Math.floor((currentIdx - 1) / 2)

    while (currentIdx > 0 && this.heap[currentIdx] > this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  bubbleDown() {
    let currentIdx = 0
    let leftChildIdx = 1
    let rightChildIdx = 2
    let maxChildIdx = this.getMaxChildIdx(leftChildIdx, rightChildIdx)

    while (
      maxChildIdx !== null &&
      this.heap[currentIdx] < this.heap[maxChildIdx]
    ) {
      this.swap(currentIdx, maxChildIdx)
      currentIdx = maxChildIdx
      leftChildIdx = 2 * currentIdx + 1
      rightChildIdx = 2 * currentIdx + 2
      maxChildIdx = this.getMaxChildIdx(leftChildIdx, rightChildIdx)
    }
  }

  getMaxChildIdx(leftChildIdx, rightChildIdx) {
    if (leftChildIdx >= this.heap.length) return null

    if (
      rightChildIdx >= this.heap.length ||
      this.heap[leftChildIdx] > this.heap[rightChildIdx]
    ) {
      return leftChildIdx
    } else {
      return rightChildIdx
    }
  }

  swap(idx1, idx2) {
    ;[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }
}

const binaryHeap = () => {
  const heap = []

  const insert = (value) => {
    heap.push(value)
    bubbleUp(heap.length - 1)
  }

  const remove = () => {
    const lastIdx = heap.length - 1
    swap(0, lastIdx)
    const removed = heap.pop()
    bubbleDown(0)
    return removed
  }

  const bubbleUp = (idx) => {
    const parentIdx = Math.floor((idx - 1) / 2)
    if (idx > 0 && heap[idx] > heap[parentIdx]) {
      swap(idx, parentIdx)
      bubbleUp(parentIdx)
    }
  }

  const bubbleDown = (idx) => {
    const leftChildIdx = 2 * idx + 1
    const rightChildIdx = 2 * idx + 2
    const maxChildIdx = getMaxChildIdx(leftChildIdx, rightChildIdx)

    if (maxChildIdx !== null && heap[idx] < heap[maxChildIdx]) {
      swap(idx, maxChildIdx)
      bubbleDown(maxChildIdx)
    }
  }

  const getMaxChildIdx = (leftChildIdx, rightChildIdx) => {
    if (leftChildIdx >= heap.length) return null

    if (
      rightChildIdx >= heap.length ||
      heap[leftChildIdx] > heap[rightChildIdx]
    ) {
      return leftChildIdx
    } else {
      return rightChildIdx
    }
  }

  const swap = (idx1, idx2) => {
    ;[heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]]
  }

  return {
    insert,
    remove,
  }
}

const myHeap = binaryHeap()

myHeap.insert(10)
myHeap.insert(20)
myHeap.insert(30)
myHeap.insert(40)

console.log(myHeap.remove()) // 40
console.log(myHeap.remove()) // 30
console.log(myHeap.remove()) // 20
console.log(myHeap.remove()) // 10
