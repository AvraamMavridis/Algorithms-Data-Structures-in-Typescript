## Exercise

Give an algorithm that returns true if a string contains properly nested and balanced parentheses, and false if otherwise.

## Solution

```ts
/**
* Stack implementation
*/
class Stack {
  _stack: Array<number>;
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
  * Pop a value out of the stack
  *
  * @param {number} value
  */
  pop() {
    return this._stack.pop();
  }

  /**
  * Returns the number of the elements in the stack
  *
  * @param {number} value
  */
  getStackLength() {
    return this._stack.length;
  }
}

/**
* Check if a string has a balanced parenthesis
*
* @param {string} str
* @returns {boolean}
*/
const isBalanced = function(str: string) : boolean{
  const parenthesisStack = new Stack();

  str.split('').forEach(char => {
    if (char === '(') {
      parenthesisStack.push('(');
    } else if (char === ')') {
      if (parenthesisStack.getStackLength() === 0) return false;
      parenthesisStack.pop();
    }
  });

  return parenthesisStack.getStackLength() === 0;
};

console.assert(isBalanced('(((())))') === true, 'Wrong Implementation');
console.assert(isBalanced('(((())))(') === false, 'Wrong Implementation');
console.assert(isBalanced(')()(') === false, 'Wrong Implementation');
```
