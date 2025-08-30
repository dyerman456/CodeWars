function toCamelCase(str) {
  // data
  let result = ""
  // check if str is empty
  if (str.length === 0) {
    return result
  }
  // create strArray
  const strArray = str.split(/-|_/)
  // capitalize words and add in result
  strArray.forEach(word => {
    result += word[0].toUpperCase() + word.slice(1)
  });
  // check if str started with lower case
  if (result.charAt(0) !== str.charAt(0)) {
    result = result.charAt(0).toLowerCase() + result.slice(1)
  }
  return result
}