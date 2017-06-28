## Exercise

Given two sorted arrays, array1 and array2, merge them into array1 and keep the
merged array sorted. Suppose there is sufficient memory at then end of array1.

## Solution

```ts
const array1 = [
  1,
  3,
  5,
  7,
  9,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
];
const array2 = [2, 4, 6, 8];

const mergeArrays = function(array1, array2) {
  const firstUndefinedPosition = array1.findIndex(val => val === undefined);
  const lastArray1Position = firstUndefinedPosition - 1;

  let j = lastArray1Position;
  let i = array2.length - 1;
  let k = 0;
  let positionToInsert;

  while (j > -1) {
    positionToInsert = lastArray1Position + array2.length + k;
    if (array2[i] > array1[j]) {
      array1[positionToInsert] = array2[i];
      array2[i] = undefined;
      i--;
      k--;
    } else {
      array1[positionToInsert] = array1[j];
      j--;
      k--;
    }
  }

  return array1;
};

console.assert(
  mergeArrays(array1, array2).toString() === "1,2,3,4,5,6,7,8,9,,",
  "Wrong Implementation"
);
```
