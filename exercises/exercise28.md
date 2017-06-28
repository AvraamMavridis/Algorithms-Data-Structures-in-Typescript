## Exercise

In a 2D-matrix every row is increasingly sorted from left to right. Write a function to search for a number in the array that is has complexity better than O(n).

## Solution

```ts
const matrix2D = [[1, 2, 3], [20, 25, 30], [33, 38, 49], [50, 53, 57]];

/**
 * One dimension binarySearch
 *
 * @param {Array} array
 * @param {number} number
 * @returns {boolean}
 */
const binarysearch = function(array: Array<number>, number: number): boolean {
  if (array.length === 0) return false;
  if (array.length === 1) return array[0] === number;

  const mid = Math.floor(array.length / 2);

  if (array[mid] > number) {
    return binarysearch(array.slice(0, mid), number);
  } else {
    return binarysearch(array.slice(mid), number);
  }
};

/**
 * Two dimensions binary search
 *
 * @param {Array<Array<number>>} array
 * @param {number} number
 * @returns {boolean}
 */
const binarySearch2D = function binarySearch2D(
  array: Array<Array<number>>,
  number: number
): boolean {
  if (array.length === 0) return false;
  if (array.length === 1) return binarysearch(array[0], number);

  const mid = Math.floor(array.length / 2);

  if (array[mid][0] > number) {
    return binarySearch2D(array.slice(0, mid), number);
  } else {
    return binarySearch2D(array.slice(mid), number);
  }
};

console.assert(
  binarySearch2D(matrix2D, 33),
  "Should return true for the elements that are on the list"
);
console.assert(
  !binarySearch2D(matrix2D, 9999),
  "Should return false for the elements that are not on the list"
);
```
