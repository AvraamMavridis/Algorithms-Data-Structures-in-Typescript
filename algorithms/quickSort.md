## Exersice

Implemenent QuickSort


## Solution

```ts
const array = [1, 2, 33, 31, 1, 2, 63, 123, 6, 32, 943, 346, 24];

/**
 * Split array and swap values
 *
 * @param {Array<number>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number}
 */
function partition(array: Array<number>, left: number = 0, right: number = array.length - 1) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  return i;
}

/**
 * Quicksort implementation
 *
 * @param {Array<number>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {Array<number>}
 */
function quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
  let index;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
}

console.assert(
  quickSort(array, 0, array.length - 1).toString() === '1,1,2,2,6,24,31,32,33,63,123,346,943',
  'Wrong Implementation'
);
```