function rot13(message) {
  // Data
  const alphabet = {};
  const alphabetLength = 26;
  let shiftValue = 13;
  let res = "";
  // Create alphabet Object
  for (let i = 97, num = 1; i < 123; i++, num++) {
    let letter = String.fromCharCode(i);
    alphabet[letter] = num;
  }
  // Shift message
  for (let i = 0; i < message.length; i++) {
    const currentLetterInMessage = message[i];
    const currentLowerCaseLetterInMessage = currentLetterInMessage.toLowerCase()
    // Check if value in alphabet
    if (Object.hasOwn(alphabet, currentLowerCaseLetterInMessage)) {
      // Check if we’re out of bounds of the object
      let currentLetterInAlphabet = alphabet[currentLowerCaseLetterInMessage];
      const outOfArray = currentLetterInAlphabet + shiftValue > alphabetLength;
      let resultLetter = Object.keys(alphabet).find((k) => alphabet[k] === currentLetterInAlphabet + (outOfArray ? -shiftValue : shiftValue));
      // Check if letter is uppercase
      if (currentLetterInMessage !== currentLowerCaseLetterInMessage) {
        resultLetter = resultLetter?.toUpperCase()
      }
      res += resultLetter
    } else {
      res += currentLowerCaseLetterInMessage;
    }
  }
  return res
}