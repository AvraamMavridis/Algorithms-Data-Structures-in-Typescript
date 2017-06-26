## Exercise

Given an increasingly sorted array and a number s, please find two numbers whose sum is s. If there are multiple pairs with sum s, just output any one of them.

For example, if the inputs are an array {1, 2, 4, 7, 11, 15} and a number 15, please out two numbers 4 and 11 since 4+11=15.

## Solution

```js
const findNumbersWithSum = function(array, sum) {
  let pointer1 = 0;
  let pointer2 = pointer1 + 1;
  let flag = false;

  while (pointer2 > pointer1 && pointer2 <= array.length) {
    if (array[pointer1] + array[pointer2] === sum) {
      flag = true;
    }

    if (pointer2 === array.length - 1) {
      pointer1++;
      pointer2 = pointer1 + 1;
    } else {
      pointer2++;
    }
  }

  return flag;
};

console.assert(findNumbersWithSum([1, 2, 3, 4, 5], 9) === true, "Wrong implementation");
console.assert(findNumbersWithSum([1, 2, 3, 4, 5], 19) === false, "Wrong implementation");
```
