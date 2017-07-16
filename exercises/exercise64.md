## Exercise

Given two sets S1 and S2 (each of size n), and a number x, describe an O(n log n) algorithm for finding whether there exists a pair of elements, one from S1 and one from S2, that add up to x in O(n)

## Solution

```ts
/**
 * Finds whether there exists a pair of elements,
 * one from arr1 and one from arr2, that add up to x
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @param {number} x
 * @returns {boolean}
 */
const existX = function(arr1: Array<number>, arr2: Array<number>, x: number): boolean {
  let smallArray = arr2,
    bigArray = arr1;

  // For space efficiency we use the small array as the hash
  if (arr2.length > arr1.length) {
    smallArray = arr1;
    bigArray = arr2;
  }

  const map = new Map();
  for (let i = 0; i < smallArray.length; i++) {
    map.set(smallArray[i], true);
  }

  for (let j = 0; j < bigArray.length; j++) {
    if (map.get(x - bigArray[j])) return true;
  }

  return false;
};

const arr1 = [1, 2, 3, 9, 14];
const arr2 = [-2, 7, 19, 20];

console.assert(existX(arr1, arr2, 34), 'Wrong Implementation');
console.assert(existX(arr1, arr2, 21), 'Wrong Implementation');
console.assert(existX(arr1, arr2, -1), 'Wrong Implementation');
console.assert(existX(arr1, arr2, 35) === false, 'Wrong Implementation');
console.assert(existX(arr1, arr2, -5) === false, 'Wrong Implementation');
console.assert(existX(arr1, arr2, 11) === false, 'Wrong Implementation');
```
