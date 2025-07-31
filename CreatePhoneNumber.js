function createPhoneNumber(numbers) {
  const first3 = numbers.slice(0, 3).join("")
  const second3 = numbers.slice(3, 6).join("")
  const last4 = numbers.slice(-4).join("")
  return `(${first3}) ${second3}-${last4}`
}