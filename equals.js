const findNumbersWithSum = function(array, sum){
  let pointer1 = 0;
  let pointer2 = pointer1 + 1;
  let flag = false;

  while(pointer2 > pointer1 && pointer2 <= array.length){
    if(array[pointer1] + array[pointer2] === sum){
      flag = true;
    }

    if(pointer2 === array.length - 1){
      pointer1++;
      pointer2 = pointer1 + 1;
    } else {
      pointer2++;
    }
  }

  return flag;
}

console.assert(findNumbersWithSum([1,2,3,4,5], 9) === true, 'Wrong implementation');
console.assert(findNumbersWithSum([1,2,3,4,5], 19) === false, 'Wrong implementation');