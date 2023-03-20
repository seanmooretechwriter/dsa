const reverseWordsBasic = (s) => {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ')
}

const reverseWords = (str) => {
  let result = ''
  let wordBuilder = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += wordBuilder + ' '
      wordBuilder = ''
    } else {
      console.log(`${i} : ${str[i]} + ${wordBuilder} : ${str[i] + wordBuilder}`)
      wordBuilder = str[i] + wordBuilder
    }
  }
  return result + wordBuilder
}

const reverseWordsReduce = (str) => {
  return str.split('').reduce((acc, char) => {
    if (char === ' ') {
      return ' ' + acc
    } else {
      return char + acc
    }
  }, '')
}

var reverseWordsRegEx = (s) => s.replace(/\S+/g, (v) => [...v].reverse().join``)

const s = 'abcde' //'This is an example!'
//const s2 = 'double  spaces'
console.log(`reverseWords(${s}): ${reverseWords(s)}`)
//console.log(`reverseWords(${s2}): ${reverseWords(s2)}`)
