const duplicateEncode = (word) => {
  // Data
  word = word.toLowerCase()
  let obj = {}
  let result = ''

  for (let i = 0; i < word.length; i++) {
    // loop data
    const currentLetter = word[i]
    // check if letter repeats
    Object.hasOwn(obj, currentLetter) ? obj[currentLetter] += 1
      : obj[currentLetter] = 1
  }

  for (let i = 0; i < word.length; i++) {
    // update result depending on if letter repeats
    obj[word[i]] > 1 ? result += ')'
      : result += '('
  }
  return result
}
