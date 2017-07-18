## Exersice

Implemenent CountingSort.


Implementation 1

```ts
/**
 * Count sort implementation 1
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
const countSort = function(arr: Array<number>): Array<number> {
  const max = Math.max(...arr);
  const occurrences = [];

  for (let i = 0; i < max + 1; i++) {
    occurrences[i] = 0;
  }

  for (let j = 0; j < arr.length; j++) {
    occurrences[arr[j]]++;
  }

  let index = 0;
  for (let j = 0; j < occurrences.length; j++) {
    for (let i = 0; i < occurrences[j]; i++) {
      arr[index] = j;
      index++;
    }
  }

  return arr;
};

console.assert(
  countSort([1, 12, 3, 3, 3, 23, 3, 4, 35, 6, 6]).toString() === "1,3,3,3,3,4,6,6,12,23,35",
  "Wrong Implementation"
);
```

Implementation 2


```ts
/**
 * Counting Sort Implementation 2
 *
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
const countingSort = function(array: Array<number>): Array<number> {
  const max = Math.max(...array);
  const occurrences = [];
  const sorted = [];
  let i, j;

  for (i = 0; i <= max; i++) {
    occurrences[i] = 0;
  }

  for (i = 0; i <= max; i++) {
    occurrences[array[i]]++;
  }

  for (i = 1; i <= max; i++) {
    occurrences[i] += occurrences[i - 1];
  }

  // sort
  for (i = array.length - 1; i >= 0; i--) {
    sorted[--occurrences[array[i]]] = array[i];
  }

  return sorted;
};

console.assert(
  countingSort([1, 9, 3, 13, 3, 3, 12, 4, 7, 6, 6]).toString() === "1,3,3,3,4,6,6,7,9,12,13",
  "Wrong Implementation"
);
```