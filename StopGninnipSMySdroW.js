function spinWords(string) {
    let arr = string.split(" ")
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]

        if (el.length >= 5) {
            let reversedWord = el.split("").reverse().join("")
            result.push(reversedWord)
        } else {result.push(el)}
    }
    return result.join(" ")
}
