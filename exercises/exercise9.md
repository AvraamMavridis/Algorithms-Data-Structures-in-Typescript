### Exercise

How many are smaller than me?

Write

```js
function smaller(arr)
```

that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:
```js
smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]
```

### Solution

```js
function smaller(arr) {
  return arr.reduce((prev, curr, index, arr) => {
    const arrRest = arr.slice(index);
    const times = arrRest.filter(val => val < curr).length;
    prev[index] = times;
    return prev;
  },[])
}
```