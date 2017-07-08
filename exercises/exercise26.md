## Exercise

Get the permutations of an array

## Solution

```js
/**
* Generated array permutations
*/
const getPermutations = function(array: Array<any>) {
  const permutations = [];
  const permute = function(array: Array<any>, position: number) {
    if (array.length === position) {
      permutations.push(array);
      return array;
    } else {
      for (let i = position; i < array.length; i++) {
        const newArray = array.slice();
        [newArray[position], newArray[i]] = [newArray[i], newArray[position]];
        permute(newArray, position + 1);
      }
    }
  };

  permute(array, 0);
  return permutations;
};

const expectedResult = JSON.stringify(
[ [ '1', '2', '3' ],
  [ '1', '3', '2' ],
  [ '2', '1', '3' ],
  [ '2', '3', '1' ],
  [ '3', '2', '1' ],
  [ '3', '1', '2' ],
  [ '1', '2', '3' ],
  [ '1', '3', '2' ] ]
);

console.assert(JSON.stringify(getPermutations(["1", "2", "3"])) === expectedResult, 'Wrong implementation');
```
