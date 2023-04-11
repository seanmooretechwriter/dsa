/*

39. Combination Sum
https://leetcode.com/problems/combination-sum/

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 
Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40

*/

// The time complexity of the combinationSum function is O(N^target), where N is the length of the candidates array.
const combinationSum = (candidates, target) => {
  const result = []

  function backtrack(startIndex, target, currentCombination) {
    if (target === 0) {
      result.push([...currentCombination])
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (candidates[i] > target) {
        break
      }

      currentCombination.push(candidates[i])
      backtrack(i, target - candidates[i], currentCombination)
      currentCombination.pop()
    }
  }

  backtrack(0, target, [])
  return result
}

const a = [2, 3, 6, 7]
console.log(`combinationSum(${a}, 7): ${JSON.stringify(combinationSum(a, 7))}`)

const actual = combinationSum(a, 7)
const expected = [[2, 2, 3], [7]]
console.assert(actual.toString() === expected.toString())

const combinationSumFP = (candidates, target) => {
  if (target === 0) {
    return [[]]
  }

  if (candidates.length === 0 || target < 0) {
    return []
  }

  return candidates.flatMap((candidate, index) => {
    const combinations = combinationSum(
      candidates.slice(index),
      target - candidate,
    )
    return combinations.map((combination) => [candidate, ...combination])
  })
}
