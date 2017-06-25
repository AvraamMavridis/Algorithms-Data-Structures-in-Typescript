## Exercise

How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.

## Solution

```js
/**
* Stack implementation
*/
class Stack {
  /**
  * Creates a Stack instance
  */
  constructor(){
    this._minHistory = [ Infinity ];
    this._stack = [];
  }

  /**
  * Push value to the stack
  *
  * @param {number} value
  */
  push(value){
    let last = this._minHistory[this._minHistory.length - 1];
    this._minHistory.push(Math.min(last, value));
    this._stack.push(value);
    return this._stack;
  }

  /**
  * Pop a value out of the stack
  *
  * @param {number} value
  */
  pop(){
    this._minHistory.pop();
    return this._stack.pop();;
  }

  /**
  * Return the minimum
  *
  * @param {number} value
  */
  getMin(){
    return this._minHistory[this._minHistory.length - 1];
  }
}


var s = new Stack();

console.assert(s.getMin() === Infinity, 'Initially the min should be Infinity');

s.push(10)
console.assert(s.getMin() === 10, 'Should return the correct min');

s.push(-100)
console.assert(s.getMin() === -100, 'Should return the correct min');

console.assert(s.pop() === -100, 'Should pop correctly');
console.assert(s.getMin() === 10, 'Should return the correct min after pop');
console.assert(s.pop() === 10, 'Should pop correctly');
console.assert(s.getMin() === Infinity, 'Should return the correct min after pop');
```
