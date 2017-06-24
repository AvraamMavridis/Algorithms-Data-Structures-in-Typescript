## Exercise Utils

Create a linked list with random numbers up to a maxValue

```js
/**
* Create a linked list of n items with max valeue `maxValue`
*
* @param {number} n
* @param {number} maxValue
*/
var createALinkedList = function(n, maxValue) {
  let root;
  let prev;

  for (let i = 0; i < n; i++) {
    let value = Math.floor(Math.random() * maxValue);
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
};

/**
* Print a linked list
*
* @param {number} n
* @param {number} maxValue
*/
var printList = function(root) {
  let pointer = root;
  while (pointer) {
    console.log(pointer);
    pointer = pointer.next;
  }
};

```
