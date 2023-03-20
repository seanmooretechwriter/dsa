const replaceStringWithAlphabetPositionFP = (s) => {
  const alphabet = "'abcdefghijklmnopqrstuvwxyz"
  const alphaTable = {}

  ;[...alphabet].forEach((letter, index) => (alphaTable[letter] = index))

  return [...s]
    .map((char) => alphaTable[char.toLowerCase()])
    .filter((index) => index !== undefined)
    .join(' ')
}

const replaceStringWithAlphabetPosition = (s) => {
  const alphabet = "'abcdefghijklmnopqrstuvwxyz"
  const alphaTable = {}
  for (let i = 0; i < alphabet.length; i++) {
    alphaTable[alphabet[i]] = i
  }

  const result = []
  for (let i = 0; i < s.length; i++) {
    if (alphaTable[s[i].toLowerCase()]) {
      result.push(alphaTable[s[i].toLowerCase()])
    }
  }
  return result.join(' ')
}

const s = "The sunset sets at twelve o' clock."
//'abce9efg'
//console.log(`${replaceStringWithAlphabetPosition(s)}`)

const actual = replaceStringWithAlphabetPosition(s)
console.log(`actual: ${actual}`)
const expected =
  '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
console.log(`expected: ${expected}`)
console.log(
  `replaceStringWithAlphabetPosition: (actual === expected): ${
    actual === expected
  }`,
)
