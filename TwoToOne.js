function longest(s1, s2) {
    let newArr = s1.split("").concat(s2.split(""))
    newArr = [...new Set(newArr)].sort().join("")
    return newArr
}
