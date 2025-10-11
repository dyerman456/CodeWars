function humanReadable(seconds) {

  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds / 60) % 60)
  seconds = seconds % 60

  function formater(number) {
    return number < 10 ? number = "0" + number : String(number)
  }

  return formater(hours) + ":" + formater(minutes) + ":" + formater(seconds)
}