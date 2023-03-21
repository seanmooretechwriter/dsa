function findUniq(arr) {
  if (arr.length === 0) {
    return 0
  }
  const ht = {}
  for (let i = 0; i < arr.length; i++) {
    if (ht[arr[i]] === undefined) {
      ht[String(arr[i])] = 1
    } else {
      ht[String(arr[i])]++
    }
  }

  for (let elm in ht) {
    if (ht[elm] === 1) {
      return parseFloat(elm)
    }
  }
}

console.log(`findUniq: ${findUniq([1, 0, 0])}`)
