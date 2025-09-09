function tribonacci(signature, n) {
  // check if n > 0
  if (n === 0) {
    return [];
  }

  // check if n = 1
  if (n === 1) {
    // first num in signature
    return [signature[0]];
  }

  // check if n = 2
  if (n === 2) {
    // first and second num in signature
    return [signature[0], signature[1]];
  }

  for (let i = 3; i < n; i++) {
    // sum of last 3 numbers in signature
    signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
  }

  return signature;
}