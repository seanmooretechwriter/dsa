/*

62. Unique Paths
https://leetcode.com/problems/unique-paths/

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
()

Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 
Constraints:

1 <= m, n <= 100

*/

// The time complexity of the uniquePaths function is O(m*n), where m is the number of rows and n is the number of columns in the grid.
const uniquePaths = (m, n) => {
  // Create dp array
  const dp = new Array(n + 1).fill(1)

  // Populate dp array
  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 1; col > 0; col--) {
      dp[col] = dp[col] + dp[col + 1]
    }
  }
  return dp[1]
}

console.log(`uniquePaths(3,7): ${uniquePaths(3, 7)}`) // 28
console.log(`uniquePaths(3,2): ${uniquePaths(3, 2)}`) // 3

const uniquePathsFP = (m, n) => {
  const rows = Array.from({ length: m }, () => 1)

  return rows.reduceRight(
    (dp, _, row) =>
      Array.from({ length: n }).reduce((prev, _, col) => {
        const val = col === n - 1 ? 1 : dp[col] + prev
        return [val, ...prev]
      }, []),
    [1],
  )[0]
}
