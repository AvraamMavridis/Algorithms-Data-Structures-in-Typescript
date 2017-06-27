## Exersice

Implemenent insertionSort.

Given a list, take the current element and insert it at the appropriate position of the list, adjusting the list every time you insert.

## Solution

```js
function InsertionSort(arr){
    for(let j = 1; j < arr.length; j++){
        let value = arr[j];
        let i = j - 1;
        while(i >= 0 && arr[i] > value){
          [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
          i--;
        }
    }
  return arr;
}
```