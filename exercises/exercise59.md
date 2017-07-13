## Exercise

Given a sequence of n values x1...xn, and seek to quickly answer repeated queries of the form: given i and j, find the smallest value in xi,...,xj. Design a data structure that uses O(n2) space and answers queries in O(1) time.

## Solution

```ts
/**
 * Lookup Matrix
 *
 * @class LookupMatrix
 */
class LookupMatrix {
  private matrix: Array<Array<number>> = [];
  private array: Array<number>;

  /**
   * Construct the lookup matrix
   * @param {Array<number>} array
   * @memberof LookupMatrix
   */
  constructor(array: Array<number>) {
    this.array = array;
    for (let i = 0; i < array.length; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < array.length; j++) {
        this.matrix[i][j] = Math.min(...array.slice(i, j));
      }
    }
  }

  /**
   * Find the minimun in a range in O(1) time
   *
   * @param {number} i
   * @param {number} j
   * @returns {number}
   * @memberof LookupMatrix
   */
  findMin(i: number, j: number): number {
    if (i == j) return this.array[i];
    if (j < i) throw Error('i should be smaller than j');
    return this.matrix[i][j];
  }
}

const array = [1, 2, -10, 9, 2, 3, 44, 29, 5];
const lookup = new LookupMatrix(array);

console.assert(lookup.findMin(3, 6) === 2, 'Wrong Implementation');
console.assert(lookup.findMin(2, 6) === -10, 'Wrong Implementation');
```
