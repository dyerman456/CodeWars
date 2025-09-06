function order(words) {
  // check if words not empty
  if (words) {
    // data
    let result = [];
    let wordsArr = words.split(" ");

    for (let i = 1; i <= wordsArr.length; i++) {
      for (let j = 0; j < wordsArr.length; j++) {
        // check if current word includes number we need
        if (wordsArr[j].includes(String(i))) {
          result.push(wordsArr[j]);
        }
      }
    }
    return result.join(" ");
  }
  return ""
}
