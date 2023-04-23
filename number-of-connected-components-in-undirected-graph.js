/*

323. Number of Connected Components in an Undirected Graph
https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Example 2:
(See tree graphic/image on LeetCode website.)

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
Constraints:

1 <= n <= 2000
1 <= edges.length <= 5000
edges[i].length == 2
0 <= ai <= bi < n
ai != bi
There are no repeated edges

*/

// The countComponents function has a time complexity of O(n + m), where n is the number of
// nodes and m is the number of edges in the graph. The for loop at the beginning takes O(m)
// time to build the graph. The DFS algorithm takes O(n + m) time, since each node is
// visited exactly once, and each edge is visited twice (once for each of its endpoints).
// Therefore, the overall time complexity is O(n + m).
function countComponents(n, edges) {
  const graph = Array.from({ length: n }, () => [])
  const visited = new Set()
  let count = 0

  for (const [src, dest] of edges) {
    graph[src].push(dest)
    graph[dest].push(src)
  }

  const dfs = (node) => {
    visited.add(node)

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i)
      count++
    }
  }

  return count
}

const n = 5
const edges = [
  [0, 1],
  [1, 2],
  [3, 4],
]

console.log('countComponents(n, edges): ', countComponents(n, edges)) // 2
