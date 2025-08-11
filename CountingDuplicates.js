function duplicateCount(text) {
  let dict = {};
  let result = 0;
  text = text.split("");
  for (let i = 0; i < text.length; i++) {
    let arrElement = text[i].toUpperCase();
    arrElement in dict ? (dict[arrElement] += 1) : (dict[arrElement] = 1);
  }
  for (let key of Object.keys(dict)) {
    dict[key] > 1 ? result++ : "";
  }
  return result
}
