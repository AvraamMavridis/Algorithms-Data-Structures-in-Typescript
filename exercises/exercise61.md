## Exercise

Write a divide and conquer algorithm to calculate the root of a number.

## Solution

```ts
/**
 * Calculate the square root of a number
 *
 * @param {number} n
 * @returns {number}
 */
const squareRoot = function(n: number): number {
  let start = 1;
  let end = n;

  const squareRootCore = function(start: number, end: number, n: number): number {
    const startQuad = start * start;
    const endQuad = end * end;
    const medium = (start + end) / 2;
    const mediumQuad = medium * medium;

    if (endQuad === n) return end;
    if (startQuad === n) return start;
    if (start.toFixed(6) === end.toFixed(6)) return +medium.toFixed(6);

    if (mediumQuad < n) return squareRootCore(medium, end, n);
    else return squareRootCore(start, medium, n);
  };

  return squareRootCore(start, end, n);
};

console.assert(squareRoot(9) === 3, 'Wrong Impelmentation');
console.assert(squareRoot(16) === 4, 'Wrong Impelmentation');
```
