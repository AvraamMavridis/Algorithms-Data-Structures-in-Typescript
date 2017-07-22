## Exersice

Implemenent Binary Search in an array

## Solution

```ts
const binarysearch = function(array: Array<number>, number: number) {
  if (array.length === 0) return false;
  if (array.length === 1) return array[0] === number;

  const mid = Math.floor(array.length / 2);

  if (array[mid] > number) {
    return binarysearch(array.slice(0, mid), number);
  } else {
    return binarysearch(array.slice(mid), number);
  }
};

console.assert(
  binarysearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 19], 0),
  'Wrong implementantion'
);
console.assert(
  !binarysearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 19], 50),
  'Wrong implementantion'
);
```
