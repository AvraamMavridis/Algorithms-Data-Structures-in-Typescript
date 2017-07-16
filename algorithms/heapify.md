## Exersice

Create a maxHeap

## Solution

```ts
/**
 * Heapify an array
 *
 * @param {Array<number>} array
 * @param {number} i
 */
const heapIFY = function(array: Array<number>, i: number){
  let left = 2*i + 1;
  let right = 2*i + 2;
  let largest = i;

  if(left < array.length && array[left] > array[largest]){
    largest = left;
  }

  if(right < array.length && array[right] > array[largest]){
    largest = right;
  }

  if(largest !== i){
    [array[largest], array[i]] = [array[i], array[largest]];
    heapIFY(array, largest);
  }
}


/**
 * Call heapify to create a heap
 *
 * @param {Array<number>} array
 * @returns
 */
const buildMaxHeap = function(array: Array<number>): Array<number>{
  for(let i=Math.floor(array.length/2); i>=0; i--){
    heapIFY(array, i);
  }

  return array;
}
```