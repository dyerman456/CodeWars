const moveZeros = (arr) => {
  const noZerosArr = arr.filter(el => el !== 0)
  const ZerosArr = arr.filter(el => el === 0)
  return noZerosArr.concat(ZerosArr)
}
