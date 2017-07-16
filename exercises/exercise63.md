## Exercise

Assume that we are given n pairs of items as input, where the first item is a number and the second item is one of three colors (red, blue, or yellow). Further assume that the items are sorted by number. Give an O(n) algorithm to sort the items by color (all reds before all blues before all yellows) such that the numbers for identical colors stay sorted.
For example: (1,blue), (3,red), (4,blue), (6,yellow), (9,red) should become (3,red), (9,red), (1,blue), (4,blue), (6,yellow).

## Solution

```ts
type color = 'red' | 'yellow' | 'blue';
type colorTuple = [number, color];
type colorOrder = Array<color>;

/**
 * Sort array based on colorOrder keeping the number order
 *
 * @param {Array<colorTuple>} arr
 * @param {Array<any>} colorOrder
 * @returns
 */
const sortByColor = function(arr: Array<colorTuple>, colorOrder: Array<any>) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const color = arr[i][1];
    let colorOcur = map.get(color);
    if (colorOcur === undefined) {
      map.set(color, 1);
    } else {
      map.set(color, ++colorOcur);
    }
  }

  const indexes = {
    [colorOrder[0]]: 0,
    [colorOrder[1]]: map.get(colorOrder[0]),
    [colorOrder[2]]: map.get(colorOrder[0]) + map.get(colorOrder[1])
  };

  let c1Pointer = 0,
    c2Pointer = 0,
    c3Pointer = 0;
  const sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const color = arr[i][1];
    if (color === colorOrder[0]) {
      const iDx = indexes[color] + c1Pointer;
      sortedArray[iDx] = arr[i];
      c1Pointer++;
    } else if (color === colorOrder[1]) {
      const iDx = indexes[color] + c2Pointer;
      sortedArray[iDx] = arr[i];
      c2Pointer++;
    } else if (color === colorOrder[2]) {
      const iDx = indexes[color] + c3Pointer;
      sortedArray[iDx] = arr[i];
      c3Pointer++;
    }
  }

  return sortedArray;
};

const arr: Array<colorTuple> = [[1, 'blue'], [3, 'red'], [4, 'blue'], [6, 'yellow'], [9, 'red']];

const order: colorOrder = ['red', 'blue', 'yellow'];
console.log(sortByColor(arr, order).toString() === '3,red,9,red,1,blue,4,blue,6,yellow', 'Wrong Implementation');
```
