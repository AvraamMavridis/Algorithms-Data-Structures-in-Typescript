## Exersice

Implemenent Selection Sort.

Given a list, take the current element and exchange it with the smallest element on the right hand side of the current element.

## Solution

```js
function selectionSort(arr){
  for(j=0; j< arr.length; j++){
    let min = Infinity, index = -1;
    for(let i=j; i < arr.length; i++){
      if(Math.min(arr[i], min) === arr[i]){
        min = arr[i];
        index = i;
      }
    }
    [arr[j], arr[index]] = [arr[index], arr[j]];
  }
}
```