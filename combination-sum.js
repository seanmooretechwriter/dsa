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
