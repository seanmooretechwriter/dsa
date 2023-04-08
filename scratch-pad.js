const containsDuplicates = (a) => {
  a.sort((a, b) => a - b)

  for (let i = 0; i < a.length - 2; i++) {
    if (a[i] == a[i - 1]) {
      return true
    }
  }

  return false
}

const fs = require('fs')

const fileUrl = 'blind75-leetocde-questions.txt'
fs.readFile(fileUrl, 'utf8', (err, data) => {
  if (err) {
    console.error(
      `Failed to load file: ${fileUrl}. Error message: ${err.message}`,
    )
  } else {
    //console.log(data)
    console.log('DATA LOADED')
    data = data.replace(/[\r\n]+/gm, ' ')
    const words = removeSpaceOnlyElements(data.split(' '))
    console.log(`word count: ${words.length}`)

    console.log(
      'wordOccuranceCount(words, "sum"): ',
      wordOccuranceCount(words, 'sum'),
    )
    console.log(`longest word: ${findLongestWord(words)}`)
  }
})

const findLongestWordLength = (a) => {
  // step through elements
  // compare length of current word to longest length encountered so far
  let maxLengthSoFar = a[0].length
  let maxLengthTotal = a[0].length
  for (let i = 1; i < a.length; i++) {
    maxLengthSoFar = Math.max(maxLengthSoFar, a[i].length)
    maxLengthTotal = Math.max(maxLengthTotal, maxLengthSoFar)
  }
  return maxLengthTotal
}

const wordOccuranceCount = (a, word) => {
  const wordCountTable = {}
  for (var i = 0; i < a.length; i++) {
    let w = a[i].toLowerCase()
    if (wordCountTable[a[i].toLowerCase()] === undefined) {
      wordCountTable[a[i].toLowerCase()] = 1
    } else {
      wordCountTable[a[i].toLowerCase()]++
    }
    //console.log(`w: ${w}, count: ${wordCountTable[a[i].toLowerCase()]}`)
  }
  return wordCountTable[word.toLowerCase()]
}

const findLongestWord = (a) => {
  const longestWordLength = findLongestWordLength(a)
  for (let word of a) {
    if (word.length === longestWordLength) {
      return word
    }
  }
  return -1
}

const removeSpaceOnlyElements = (a) => {
  const b = []
  for (let elm of a) {
    if (elm.length >= 1 && elm !== ' ') {
      b.push(elm)
    }
  }
  return b
}

const a = [0, 1, -4, 7, 5, -8, 1, 0, 4, 8, 9, 11, -34, 5, 3]
const b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(`containsDuplicates(${a}): ${containsDuplicates(a)}`)
console.log(`containsDuplicates(${b}): ${containsDuplicates(b)}`)
