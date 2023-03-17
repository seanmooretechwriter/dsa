const containsDuplicateSet = (a) => {
  let arrayContainsDuplicates = false
  const map = new Set()
  for (let element of a) {
    map.add(element)
  }
  console.log(`map.size: ${map.size}`)
  console.log(`a.length: ${a.length}`)
  if (map.size < a.length) {
    arrayContainsDuplicates = true
  }
  return arrayContainsDuplicates
}

var containsDuplicate = function (nums) {
  const map = {}
  for (const num of nums) {
    // If we have seen this num before return true
    if (map[num]) return true
    map[num] = true
  }
  return false
}

const a = [1, 2, 3, 4, 4, 5]
console.log(`containsDuplicate: ${containsDuplicate(a)}`)
