## Exercise

Devise an algorithm for finding the k smallest elements of an unsorted set of n integers in O(n + k log n)

## Solution

```ts
/**
 * Heapify an array
 *
 * @param {Array<number>} array
 * @param {number} i
 */
const heapIFY = function(arra  y: Array<number>, i: number) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let smallest = i;

  if (left < array.length && array[left] < array[smallest]) {
    smallest = left;
  }

  if (right < array.length && array[right] < array[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    [array[smallest], array[i]] = [array[i], array[smallest]];
    heapIFY(array, smallest);
  }
};

/**
 * Call heapify to create a heap
 *
 * @param {Array<number>} array
 * @returns
 */
const buildMinHeap = function(array: Array<number>): Array<number> {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapIFY(array, i);
  }

  return array;
};

/**
 * Find the k smallest elements in an array
 *
 * @param {Array<number>} array
 * @param {number} k
 * @returns {Array<number>}
 */
const findKSmallest = function(array: Array<number>, k: number): Array<number> {
  if (array.length <= k) return array;

  let smallest = [];
  let arr = array.slice();
  for (let i = 0; i < k; i++) {
    const minHeap = buildMinHeap(arr);
    smallest.push(minHeap.shift());
    arr = minHeap;
  }

  return smallest;
};

const arr = [1, -20, -30, 30, 39, -12314, 10, 1000, 130, 0, -100, -2, 1];

console.assert(findKSmallest(arr, 6).toString() === '-12314,-100,-30,-20,-2,0', 'Wrong Implementation');
```
