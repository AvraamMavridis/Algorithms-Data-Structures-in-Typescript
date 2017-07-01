## Exercise

Find intervals of consecutive prime numbers and consecutive non-prime numbers.
Replace each such interval with the sum of numbers in it.
If the resulting array is different from the initial one, repeat the process.
Otherwise return the resulting array.

## Solution

```ts
/**
 * Check if a number is prime
 *
 * @param {number} value
 * @returns {boolean}
 */
const isPrimeNumb = function(value: number): boolean {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1;
};

/**
 * Check if an array has consecutive prime or non-prime numbers
 *
 * @param {Array<number>} arr
 * @returns {boolean}
 */
const hasConsecutiveNumbers = function(arr: Array<number>): boolean {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (isPrimeNumb(arr[i]) === isPrimeNumb(arr[j])) {
      return true;
    }
    j = i;
  }
  return false;
};

/**
 * Main algorithm to simplify the array
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
const simplifyArray = function(arr: Array<number>): Array<number> {
  const simp = function simp(arr) {
    let sumNonPrime = 0;
    let sumPrime = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        if (isPrimeNumb(arr[i])) {
          sumPrime += arr[i];
        } else {
          sumNonPrime += arr[i];
        }
      } else {
        if (isPrimeNumb(arr[i])) {
          if (sumNonPrime) newArr.push(sumNonPrime);
          sumNonPrime = 0;
          sumPrime += arr[i];
        } else {
          if (sumPrime) newArr.push(sumPrime);
          sumPrime = 0;
          sumNonPrime += arr[i];
        }
      }
    }

    if (sumNonPrime) newArr.push(sumNonPrime);
    else if (sumPrime) newArr.push(sumPrime);

    return newArr;
  };

  let newArr = arr;
  while (hasConsecutiveNumbers(newArr)) {
    newArr = simp(newArr);
  }

  return newArr;
};

console.assert(
  simplifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).toString() === '1,5,4,5,30',
  'Wrong Implementation'
);
console.assert(
  simplifyArray([-3, 4, 5, 2, 0, -10]).toString() === '1,7,-10',
  'Wrong Implementation'
);
```
