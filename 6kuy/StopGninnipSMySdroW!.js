function spinWords(str) {
  return str.split(' ').map(spinSingleWord).join(' ');
}

function spinSingleWord(word) {
  return word.length >= 5 ? word.split('').reverse().join('') : word;
}
