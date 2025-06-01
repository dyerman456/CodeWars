function sumTwoSmallestNumbers(numbers) {
    let firstNum;
    let firstNumIndex;

    for (let i = 0; i < numbers.length; i++){
        if (i === 0) {firstNum = numbers[i]; firstNumIndex = i}
        if (firstNum > numbers[i]) {firstNum = numbers[i]; firstNumIndex = i}
    }

    numbers.splice(firstNumIndex, 1)

    let secondNum = Math.min(...numbers)

    return firstNum + secondNum
}