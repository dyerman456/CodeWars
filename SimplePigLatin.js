const pigIt = (str) => {
  let strArr = str.split(" ");
  let fixedWordsArr = strArr.map((word) => {
    if (/^[!,.?]$/.test(word)) {
      return word
    }
    return word.slice(1) + word[0] + "ay";
  });

  return fixedWordsArr.join(" ");
}