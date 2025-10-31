function findEvenIndex(arr) {
  let totalSum = arr.reduce((a, b) => a + b, 0);
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];
    if (left === totalSum) return i;
    left += arr[i];
  }

  return -1;
}