## Exercise

Implemenent insertionSort.

Given a list, take the current element and insert it at the appropriate position of the list, adjusting the list every time you insert.

## Solution

```js
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
```
