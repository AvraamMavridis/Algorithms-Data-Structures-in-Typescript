## Exercise

Implement a function to print a list from its tail to head.

## Solution

```ts
class Stack {
  _stack: Array<any>;
  /**
  * Creates a Stack instance
  */
  constructor() {
    this._stack = [];
  }

  /**
  * Push value to the stack
  *
  * @param {number} value
  */
  push(value) {
    this._stack.push(value);
    return this._stack;
  }

  /**
  * Pop a value from the stack
  */
  pop() {
    return this._stack.pop();
  }

  /**
  * Check if the stack is empty
  */
  isEmpty() {
    return this._stack.length === 0;
  }
}

/**
 * List
 */
const node5 = { value: 264, next: undefined };
const node4 = { value: 964, next: node5 };
const node3 = { value: 4, next: node4 };
const node2 = { value: 64, next: node3 };
const node1 = { value: 13, next: node2 };

const printListFromTailToHead = function(root) {
  let pointer = root;
  const stack = new Stack();
  stack.push(pointer);

  while (pointer.next) {
    stack.push(pointer.next);
    pointer = pointer.next;
  }

  while (!stack.isEmpty()) {
    console.log(stack.pop().value);
  }
};

printListFromTailToHead(node1);
```
