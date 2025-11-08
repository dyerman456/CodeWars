function solution(str) {
  // split string by character pairs
  const result = str.match(/.{1,2}/g) ?? []
  // check if last pair is odd
  if (str.length % 2 !== 0) {
    result[result.length - 1] += "_"
  }
  return result
}
