const shortestPath = (graph, start, end) => {
  const heap = []
  const distances = new Map()
  const previous = new Map()

  Object.keys(graph).forEach((vertex) => {
    if (vertex === start) {
      distances.set(vertex, 0)
      heap.push([0, vertex])
    } else {
      distances.set(vertex, Infinity)
      heap.push([Infinity, vertex])
    }
    previous.set(vertex, null)
  })

  const updateHeap = (current, priority) => {
    graph[current].forEach(([neighbor, weight]) => {
      const alt = priority + weight
      if (alt < distances.get(neighbor)) {
        distances.set(neighbor, alt)
        previous.set(neighbor, current)

        // Update heap
        let index = heap.findIndex(([_, v]) => v === neighbor)
        heap[index][0] = alt
        while (
          index > 0 &&
          heap[index][0] < heap[Math.floor((index - 1) / 2)][0]
        ) {
          // Swap with parent
          ;[heap[index], heap[Math.floor((index - 1) / 2)]] = [
            heap[Math.floor((index - 1) / 2)],
            heap[index],
          ]
          index = Math.floor((index - 1) / 2)
        }
      }
    })
  }

  while (heap.length > 0) {
    heap.sort((a, b) => a[0] - b[0]) // Sort heap by priority
    const [priority, current] = heap.shift()
    if (current === end) {
      const path = []
      let node = current
      while (previous.get(node)) {
        path.push(node)
        node = previous.get(node)
      }
      path.push(start)
      return { distance: priority, path: path.reverse() }
    }
    updateHeap(current, priority)
  }

  return { distance: Infinity, path: null }
}

// Sample graph
const graph = {
  A: [
    ['B', 3],
    ['C', 2],
  ],
  B: [['D', 2]],
  C: [['D', 1]],
  D: [],
}

const start = 'A'
const end = 'D'

const result = shortestPath(graph, start, end)

console.log(`Shortest distance from ${start} to ${end}: ${result.distance}`)
console.log(`Shortest path from ${start} to ${end}: ${result.path}`)
