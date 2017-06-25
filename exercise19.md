## Exercise

Implement a Queue class which implements a queue using two stacks.

## Solution

```js
/**
* Stack implementation
*/
class Stack {
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
* Queue implementation using two Stacks
*/
class Queue {
  /**
  * Creates a Queue instance
  */
  constructor() {
    this._stack1 = new Stack();
    this._stack2 = new Stack();
  }

  /**
  * Push value to the stack
  *
  * @param {number} value
  */
  push(value) {
    // We always push to the first stack
    this._stack1.push(value);
  }

  /**
  * Pop value from the stack
  */
  pop() {
    // We always pop from the second stack
    // We copy the elements from the first stack to reverse their order
    if (this._stack2.isEmpty()) {
      let value;
      while ((value = this._stack1.pop())) {
        this._stack2.push(value);
      }
    }
    return this._stack2.pop();
  }
}

let q = new Queue();

q.push(10);
q.push(1000);
q.push(-10);

console.assert(q.pop() === 10, "Wrong implementation");
q.push(-10000);
console.assert(q.pop() === 1000, "Wrong implementation");
q.push(50000);
q.push(50001);
q.push(50002);
console.assert(q.pop() === -10, "Wrong implementation");
console.assert(q.pop() === -10000, "Wrong implementation");
console.assert(q.pop() === 50000, "Wrong implementation");
console.assert(q.pop() === 50001, "Wrong implementation");
console.assert(q.pop() === 50002, "Wrong implementation");
```
