function findOdd(a) {
  const occuranceCountTable = {}

  for (let i = 0; i < a.length; i++) {
    if (occuranceCountTable[a[i]] === undefined) {
      occuranceCountTable[a[i]] = 1
    } else {
      occuranceCountTable[a[i]]++
    }
  }

  for (let occ in occuranceCountTable) {
    if (occuranceCountTable[occ] % 2) {
      return parseInt(occ)
    }
  }
}
