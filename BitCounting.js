function countBits(n) {
  let binary = n.toString(2);
  let result = 0

  for (let i = 0; i < binary.length; i++) {
    binary[i] === "1" ? result += 1 : ""
  }

  return result
}