function narcissistic(value) {
  // data
  let result = 0
  let valueAsStr = String(value)
  let arrOfStr = valueAsStr.split("")
  // turn each line into a number and raise the number to a power
  arrOfStr.forEach(element => result += Math.pow(Number(element), valueAsStr.length))
  return value === result
}