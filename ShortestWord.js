function findShort(s) {
    let arr = s.split(" ")
    let shortestWord = arr[0];

    for (let i = 0; i < arr.length; i++) {
        shortestWord.length < arr[i].length ? arr[i] : shortestWord = arr[i]
    }
    return shortestWord.length
}