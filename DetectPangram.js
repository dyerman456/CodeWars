const isPangram = (string) => {
  // create object with all letters in alphabet
  const alphabet = Object.fromEntries(
    Array.from({length: 26}, (_, i) => [String.fromCharCode(97 + i), i])
  );
  // check if letters from string in alphabet
  for (let i = 0; i < string.length; i++) {
    const lowerCaseLetter = string[i].toLowerCase();
    if (Object.hasOwn(alphabet, lowerCaseLetter)) {
      delete alphabet[lowerCaseLetter];
    }
  }
  return Object.keys(alphabet).length === 0;
};
