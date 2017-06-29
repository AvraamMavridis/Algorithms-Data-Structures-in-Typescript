## Exercise

Given an array and a value, how to implement a function to move all instances of that value in the end of the array (in place, without using any other array)? The order of elements can be changed. It doesn't matter what you leave.

## Solution

```ts
const array = [2, 2, 2, 3, 5, 6, 7, 8, 9, 2];

const moveInstances = function(array: Array<number>, value: number) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] === value) {
      if (array[j] !== value) {
        [array[i], array[j]] = [array[j], array[i]];
      } else {
        j--;
      }
    } else {
      i++;
    }
  }

  return array;
};

console.assert(
  moveInstances(array, 2).toString() === "9,8,7,3,5,6,2,2,2,2",
  "Wrong implementation"
);
```
