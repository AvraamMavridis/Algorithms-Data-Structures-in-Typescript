## Exercise

Write a function to calculate the exponential of a number.

## Solution

```js
const exponential = function(b, n){
  if(n === 0) return 1;
  if(n === 1) return b;
  return b * exponential(b, n - 1);
}

console.assert(exponential(2, 6) === 64, "Wrong implementation");
console.assert(exponential(2, 10) === 1024, "Wrong implementation");
```
