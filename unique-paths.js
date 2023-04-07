const uniquePaths = (m, n) => {
  // Create a 2D grid to store the number of paths for each cell
  const grid = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0),
  )

  // Set the number of paths for the first row and column to 1
  for (let i = 0; i < m; i++) {
    grid[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    grid[0][j] = 1
  }

  // Calculate the number of paths for each cell in the grid
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
    }
  }

  // Return the number of paths for the bottom-right cell
  return grid[m - 1][n - 1]
}

console.log(`uniquePaths(3,7): ${uniquePaths(3, 7)}`) // 28
console.log(`uniquePaths(3,2): ${uniquePaths(3, 2)}`) // 3
