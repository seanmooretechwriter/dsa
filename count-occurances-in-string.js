const countOccurancesInString = (s) => {
  const occuranceTable = {}

  for (let i = 0; i < s.length; i++) {
    if (occuranceTable[s[i]] === undefined) {
      occuranceTable[s[i]] = 1
    } else {
      occuranceTable[s[i]]++
    }
  }

  return occuranceTable
}

const s = 'here is the stringg'
const obj = countOccurancesInString(s)
for (let prop in obj) {
  console.log(`{'${prop}': ${obj[prop]}}`)
}
