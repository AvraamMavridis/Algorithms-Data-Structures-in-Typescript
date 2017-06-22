## Exersice

Implemenent insertionSort

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