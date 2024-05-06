function positiveSum(arr) {
    result = 0;
    for (const el of arr){
      if (el > 0){
        result += el;
      }
    }
    return result
  }
