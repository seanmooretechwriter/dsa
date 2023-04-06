const climbStairs = (n) => {
  // Create an array to store the number of ways to climb each step
  const dp = new Array(n + 1).fill(0)

  // There's only one way to climb 0 and 1 steps
  dp[0] = 1
  dp[1] = 1

  // For each step i, the number of ways to climb it is the sum of the number
  // of ways to climb the previous step (i-1) and the number of ways to climb
  // the step before the previous one (i-2)
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  // Return the number of ways to climb n steps
  return dp[n]
}

console.log(`climbStairs(2): ${climbStairs(2)}`)
console.log(`climbStairs(3): ${climbStairs(3)}`)
