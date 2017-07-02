## Exercise

A Robot starts moving in a 2D matrix from position 0,0.
It can move to a cell only if the value of the cell is greater than a specified threshold.
Write a function to count how many cells the Robot can visit.

## Solution

```ts
const check = function(matrix: Array<Array<number>>, i: number, j: number, threshold: number) {
  return matrix[i][j] > threshold;
};

const move = function(
  matrix: Array<Array<number>>,
  nRows: number,
  nColumns: number,
  threshold: number
) {
  const visited = [];

  for (let i = 0; i < nRows; i++) {
    visited[i] = [];
    for (let j = 0; j < nColumns; j++) {
      visited[i][j] = false;
    }
  }

  let count = 0;
  const moveCore = function(
    matrix: Array<Array<number>>,
    nRows: number,
    nColumns: number,
    i: number,
    j: number,
    visited: Array<Array<boolean>>,
    threshold: number
  ) {
    if (visited[i][j]) return;
    count++;
    visited[i][j] = true;

    if (i > 0 && check(matrix, i - 1, j, threshold)) {
      moveCore(matrix, nRows, nColumns, i - 1, j, visited, threshold);
    }
    if (i < nRows - 1 && check(matrix, i + 1, j, threshold)) {
      moveCore(matrix, nRows, nColumns, i + 1, j, visited, threshold);
    }
    if (j > 0 && check(matrix, i, j - 1, threshold)) {
      moveCore(matrix, nRows, nColumns, i, j - 1, visited, threshold);
    }
    if (j < nColumns - 1 && check(matrix, i, j + 1, threshold)) {
      moveCore(matrix, nRows, nColumns, i, j + 1, visited, threshold);
    }
  };

  moveCore(matrix, nRows, nColumns, 0, 0, visited, threshold);
  return count;
};

console.assert(move(matrix, 3, 5, 4) === 10, "Wrong Implementation");
console.assert(move(matrix, 3, 5, 10) === 5, "Wrong Implementation");
console.assert(move(matrix, 3, 5, 15) === 1, "Wrong Implementation");
console.assert(move(matrix, 3, 5, 14) === 2, "Wrong Implementation");
```
