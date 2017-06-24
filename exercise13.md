## Exercise

Write an algorithm such that if an element in an MxN matrix is greater than a `value`, its entire row and column are set to that `value`.

## Solution

```js
const testArray = [
  [70, 22, 98, 19, 35],
  [43, 69, 6, 80, 60],
  [3, 85, 88, 92, 76],
  [62, 64, 16, 87, 40],
  [87, 36, 82, 2, 7]
];


const setZeros = function(arr, value) {
  let rowIndexes = [];
  let columnIndexes = [];

  // Keep the indexes of the [row,colum] where the value is greater
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > 90) {
        rowIndexes.push(i);
        columnIndexes.push(j);
      }
    }
  }
  // Keep only the unique rowIndexes, columnIndexes
  rowIndexes = rowIndexes.filter((val, i) => rowIndexes.indexOf(val) === i)
  columnIndexes = columnIndexes.filter((val, i) => columnIndexes.indexOf(val) === i)

  // Turn rows' values equal to the passing value
  for (let j = 0; j < rowIndexes.length; j++) {
    arr[rowIndexes[j]] = arr[rowIndexes[j]].map(() => value)
  }

  // Turn columns' values equal to the passing value
  for (let i = 0; i < arr.length; i++) {
    if (rowIndexes.includes(i)) continue; //Optionally ignore row that is already zero
    for (let j = 0; j < columnIndexes.length; j++) {
      arr[i][columnIndexes[j]] = value;
    }
  }

  return arr;
}

const expected1 = JSON.stringify([
  [90, 90, 90, 90, 90],
  [43, 69, 90, 90, 60],
  [90, 90, 90, 90, 90],
  [62, 64, 90, 90, 40],
  [87, 36, 90, 90, 7]
]);

console.assert(JSON.stringify(setZeros(testArray, 90)) === expected1, 'Implementation is wrong');
```
