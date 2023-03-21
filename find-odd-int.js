const findOddInt = (a) => {
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

const a = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]
console.log(`findOddInt: ${findOddInt(a)}`)

// from Codewars
const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
