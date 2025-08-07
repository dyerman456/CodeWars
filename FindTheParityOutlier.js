function findOutlier(integers) {
  // filter all numbers. if even => passes
  const even = integers.filter(num => num % 2 !== 0)
  // filter all numbers. if odd => passes
  const odd = integers.filter(num => num % 2 === 0)

  // return even if its only 1 element in even array, else return odd
  return even.length === 1 ? even[0] : odd[0]
}