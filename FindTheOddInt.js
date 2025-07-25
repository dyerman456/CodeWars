function findOdd(A) {
  let odd;
  const obj = {};

  A.forEach((el) => {
    obj[`${el}`] === undefined ? (obj[`${el}`] = 1) : (obj[`${el}`] += 1);
  });

  for (const key in obj) {
    if (obj[key] % 2 !== 0) {
      odd = key
    }
  }
  return Number(odd)
}