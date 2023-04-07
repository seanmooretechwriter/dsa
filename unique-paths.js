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
