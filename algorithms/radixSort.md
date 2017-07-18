## Exersice

Implemenent LSD (less-significant-bit) Radix Sort.


## Solution

```ts
/**
 * Counting sort by digit
 *
 * @param {Array<number>} array
 * @param {number} exponent
 * @returns {Array<number>}
 */
const countingSort = function(array: Array<number>, exponent: number): Array<number> {
  let bucketIndex;
  const buckets = [];
  const output = [];

  // Initialize bucket
  for (let i = 0; i < 10; i++) {
    buckets[i] = 0;
  }

  // Count frequencies per bucket
  for (let i = 0; i <array.length; i++) {
    bucketIndex = Math.floor(((array[i]) / exponent) % 10);
    buckets[bucketIndex]++;
  }

  // Modify the count array such that each element at each index
  // stores the sum of previous counts.
  for (let i = 1; i < 10; i++) {
    buckets[i] += buckets[i - 1];
  }

  // Output each object from the input sequence followed by
  // decreasing its count by 1
  for (let i = array.length - 1; i >= 0; i--) {
    bucketIndex = Math.floor(((array[i]) / exponent) % 10);
    output[--buckets[bucketIndex]] = array[i];
  }

  return output;
}

/**
 * Radix Sort
 *
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
const radixSordLSD = function(array: Array<number>): Array<number> {
  if (array.length === 0) {
    return array;
  }

  const maxValue = Math.max(...array);

  // Perform counting sort on each exponent/digit
  var exponent = 1;
  while ((maxValue) / exponent >= 1) {
    array = countingSort(array, exponent);

    exponent *= 10;
  }

  return array;
}
```