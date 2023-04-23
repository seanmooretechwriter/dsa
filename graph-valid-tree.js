/*

261. Graph Valid Tree
https://leetcode.com/problems/graph-valid-tree/

You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Example 1:
(See tree graphic/image on LeetCode website.)

Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true

Example 2:
(See tree graphic/image on LeetCode website.)

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
Constraints:

1 <= 2000 <= n
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no self-loops or repeated edges.

*/

// The validTree function has a time complexity of O(n + m), where n is the number of nodes and m
// is the number of edges in the graph. The for loop at the beginning takes O(m) time to build
// the graph. The DFS algorithm takes O(n + m) time, since each node is visited exactly once, and
// each edge is visited twice (once for each of its endpoints). Therefore, the overall time
// complexity is O(n + m).
function validTree(n, edges) {
  if (n === 1 && edges.length === 0) {
    return true
  }

  if (n < 1 || edges.length !== n - 1) {
    return false
  }

  const graph = Array.from({ length: n }, () => [])
  const visited = new Set()

  for (const [src, dest] of edges) {
    graph[src].push(dest)
    graph[dest].push(src)
  }

  const dfs = (node, parent) => {
    visited.add(node)

    for (const neighbor of graph[node]) {
      if (neighbor !== parent) {
        if (visited.has(neighbor) || !dfs(neighbor, node)) {
          return false
        }
      }
    }

    return true
  }

  if (!dfs(0, -1)) {
    return false
  }

  return visited.size === n
}

const n = 5
const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
]

console.log('validTree(n, edges): ', validTree(n, edges)) // true
