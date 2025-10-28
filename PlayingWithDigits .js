const digPow = (n, p) => {
  // pow every number
  const powNumbersArr = n.toString().split("").reduce((accumulator, currentValue) => {
    accumulator.push(Math.pow(Number(currentValue), p))
    p += 1
    return accumulator
  }, [])
  // sum of all numbers
  const sumNumbers = powNumbersArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  // result of division
  const divisionResult = sumNumbers / n
  // check if there is reminder of division
  if (divisionResult % 1 === 0) {
    return divisionResult
  }
  return -1
}