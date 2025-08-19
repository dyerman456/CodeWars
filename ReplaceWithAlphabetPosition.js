function alphabetPosition(text) {
  let result = ""

  for (let i = 0; i < text.length; i++) {
    let charCode = text.toUpperCase().charCodeAt(i)

    if (charCode >= 65 && charCode <= 90) {
      result += (charCode - 64) + " "
    }
  }

  return result.slice(0, result.length - 1)
}