function solution(number) {
    debugger
    let result = 0
    if (number > 0) {
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0) {
                result += i
            } else if (i % 5 === 0 ) {
                result += i
            } else if (i % 3 === 0 && i % 5 === 0 ) {
                result += i
            }
        }
        return result
    }
    return 0
}