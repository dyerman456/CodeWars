function persistence(num) {
  // data
  let cycleResult = 1
  let finalResult = 0;

  while (num >= 10) {
    // create array from number
    let arr = String(num).split("");
    // multiply every el
    arr.forEach(el => cycleResult *= el)
    // update num, cycleResult, finalResult
    num = cycleResult
    cycleResult = 1
    finalResult += 1
  }
  return finalResult
}
