function arrayDiffSet(a, b) {
  const setB = new Set(b)
  return a.filter((x) => !setB.has(x))
}

const differenceOfTwoArrays = (a, b) => {
  return a.filter((x) => !b.includes(x))
}

console.log(differenceOfTwoArrays([1, 2], [1]))
console.log(differenceOfTwoArrays([1, 2, 2, 2, 3], [2]))
console.log(differenceOfTwoArrays([1, 2, 3], [1, 2]))

/*
First sort both arrays a and b in ascending order. We then use 
two pointers i and j to iterate over both arrays simultaneously. 
If the current element in a is less than the current element in b, 
we add the current element in a to the result and move 
the pointer i to the next element in a. If the current element in 
a is greater than the current element in b, we move the pointer j 
to the next element in b. If the current elements in a and b are 
equal, we move both pointers to the next element. 

After iterating over both arrays, we add the remaining elements 
in a to the result. The resulting array contains only the 
elements that are in a but not in b.

This implementation has a time complexity of O(n log n) due to 
the sorting operation. However, this implementation has a better 
average case runtime complexity than the previous implementation 
when the size of the arrays is very large.
*/

function arrayDiff(a, b) {
  a.sort((x, y) => x - y)
  b.sort((x, y) => x - y)

  const result = []
  let i = 0 // pointer for array a
  let j = 0 // pointer for array b

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]) // add the current element in a to the result
      i++
    } else if (a[i] > b[j]) {
      j++ // move the pointer in b to the next element
    } else {
      // the current elements in a and b are equal, move both pointers to the next element
      i++
      j++
    }
  }
  // add the remaining elements in a to the result
  while (i < a.length) {
    result.push(a[i])
    i++
  }

  return result
}
