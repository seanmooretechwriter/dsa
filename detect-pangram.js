const detectPangram = (s) => {
  let isPangramPresent = false
  let alph = 'abcdefghijklmnopqrstuvwmyz'.split('')
  const alphaTable = {}

  for (let i = 0; i < alph.length; i++) {
    alphaTable[alph[i]] = i
  }

  for (let i = 0; i < s.length; i++) {
    if (alphaTable[s[i].toLowerCase()] !== undefined) {
      delete alphaTable[s[i].toLowerCase()]
    }
  }

  if (Object.keys(alphaTable).length === 0) {
    isPangramPresent = true
  }

  return isPangramPresent
}

console.log(
  `detectPangram: ${detectPangram('Cwm fjord bank glyphs vext quiz')}`,
)

console.log(`detectPangram: ${detectPangram('abcdefghijklmnopqrstuvwmyz')}`)

console.log(`detectPangram: ${detectPangram('abcdefghijklmnopqrstuvwmyzzz')}`)

console.log(`detectPangram: ${detectPangram('abcdefghijklmnopqrstuvwmy')}`)

console.log(
  `detectPangram: ${detectPangram('thequickbrownfoxjumpsoverthelazydog')}`,
)

console.log(
  `detectPangram: ${detectPangram(
    'The quick brown fox jumps over the lazy dog.',
  )}`,
)

console.log(`detectPangram: ${detectPangram('Yo mamma!')}`)
