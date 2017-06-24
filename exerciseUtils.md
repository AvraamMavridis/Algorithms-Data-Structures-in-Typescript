## Exercise Utils

Create a linked list with random numbers up to a maxValue

```js
var createALinkedList = function(n, maxValue) {
  let root;
  let prev;

  for (let i = 0; i < n; i++) {
    let value = Math.floor(Math.random() * maxValue)
    let newElement = {
      value: value,
      next: undefined
    };

    if (i === 0) {
      root = newElement;
      prev = root;
      root.next = newElement;
    } else {
      prev.next = newElement;
      prev = newElement;
    }

    if (i == n - 1) {
      prev.next = undefined;
    }
  }

  return root;
}
```
