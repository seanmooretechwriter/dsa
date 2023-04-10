/*

70. Climbing Stairs
https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
Constraints:

1 <= n <= 45

*/

// The time complexity of the given code is O(n), where n is the input value n.
const climbStairs = (n) => {
  const steps = [1, 1]
  for (let i = 2; i < n + 1; i++) {
    steps.push(steps[i - 1] + steps[i - 2])
  }
  return steps[n]
}

console.log(`climbStairs(2): ${climbStairs(2)}`)
console.log(`climbStairs(3): ${climbStairs(3)}`)
console.log(`climbStairs(8): ${climbStairs(8)}`)

const climbStairsFP = (n) => {
  const steps = Array.from({ length: n + 1 }, (_, i) =>
    i < 2 ? 1 : steps[i - 1] + steps[i - 2],
  )
  return steps[n]
}
