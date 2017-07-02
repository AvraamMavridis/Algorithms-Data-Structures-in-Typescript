## Exercise

Write a function to find the turning number in an array.
Turning number is the maximum number in an array which increases and then decreases.

## Solution

```ts
const arr = [1,2,3,4,5,6,7, 40, 30, 28, 22, 10, 5,2,1,-10, -100, -1000, -20000];
const arr2 = [1,2,3,4,5,6,7,8,9, 10, 40, 30, 28, 22, 10, 5,2,1,-10, -100, -1000, -20000];
const arr3 = [-1000, -100, -15, -10, -15, -50, -100];
const arr4 = [-1000, -100, -15, -10, -15];


const findTurningNumber = function(arr: Array<number>) : number{
  if(arr.length === 0 || !arr) throw Error('Empty or Undefined array');
  if(arr.length === 1) return arr[0];
  const pivot = Math.floor(arr.length/2);

  let prev = arr[pivot-1];
  let next = arr[pivot+1];

  if(prev < arr[pivot] && arr[pivot] < next){
    return findTurningNumber(arr.slice(pivot))
  } else if(prev > arr[pivot] && arr[pivot] > next) {
    return findTurningNumber(arr.slice(0, pivot))
  } else {
    return arr[pivot];
  }
}

console.assert(findTurningNumber(arr) === findTurningNumber(arr2), 'Wrong Implementation');
console.assert(findTurningNumber(arr3) === findTurningNumber(arr4), 'Wrong Implementation');
```
