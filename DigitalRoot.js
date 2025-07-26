function digitalRoot(n) {
  let result = 0
  let arr = n.toString().split("")

  arr.forEach(el => result += Number(el));

  while (result > 9) {
    arr = result.toString().split("")
    result = 0
    arr.forEach(el => result += Number(el))
  }

  return result
}