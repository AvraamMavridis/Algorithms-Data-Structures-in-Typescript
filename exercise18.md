## Exercise

Imagine a (literal) stack of plates. If the stack gets too high, it migh t topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOf- Stacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks. pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

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
    this._stack = [];
  }

  /**
  * Push value to the stack
  *
  * @param {number} value
  */
  push(value){
    this._stack.push(value);
    return this._stack;
  }

  /**
  * Pop a value from the stack
  */
  pop(){
    return this._stack.pop();;
  }
}

/**
* SetOfStack implementation
*/
class SetOfStacks {
  /**
  * Creates a Stack instance
  *
  * @param {numbmer} threshold - the number of items a stack can hold
  */
  constructor(threshold = 10){
    this._threshold = threshold;
    this._setOfStacks = [ new Stack() ];
    this._itemsOnStacks = 0;
  }

  /**
  * Push value to the stack
  *
  * @param {number} value
  */
  push(value){
    const stackToPushIndex = Math.floor(this._itemsOnStacks / this._threshold);
    if(stackToPushIndex >= this._setOfStacks.length){
      this._setOfStacks.push(new Stack());
    }
    this._itemsOnStacks++;
    this._setOfStacks[stackToPushIndex].push(value);
  }

  /**
  * Pop a value from the stack
  */
  pop(){
    if(this._itemsOnStacks === 0) return undefined;
    let value;
    let j = this._setOfStacks.length;

    // We always try to pop from the last stack but because popAt may
    // have removed elements from there we try to find the last value
    // that exists on the setOfStacks from the end
    while(!value){
      if(this._setOfStacks[j - 1]){
        value = this._setOfStacks[j - 1].pop();
        j--;
      } else break;
    }

    return value;
  }

  /**
  * Pop a value from a specific sub-stack
  */
  popAt(stackIndex){
    if(!this._setOfStacks[stackIndex]) throw Error('There isnt stack at this position');
    return this._setOfStacks[stackIndex].pop();;
  }
}


const stackSet = new SetOfStacks(2);
stackSet.push(9);
stackSet.push(3);
stackSet.push(2);
stackSet.push(77);
stackSet.push(5);
stackSet.push(2);
stackSet.push(-7);
stackSet.push(15);

console.assert(stackSet.pop() === 15, 'Wrong implementation');
console.assert(stackSet.pop() === -7, 'Wrong implementation');
console.assert(stackSet.pop() === 2, 'Wrong implementation');
console.assert(stackSet.pop() === 5, 'Wrong implementation');
console.assert(stackSet.pop() === 77, 'Wrong implementation');
console.assert(stackSet.popAt(0) === 3, 'Wrong implementation');
console.assert(stackSet.pop() === 2, 'Wrong implementation');
console.assert(stackSet.pop() === 9, 'Wrong implementation');
console.assert(stackSet.pop() === undefined, 'Wrong implementation');
```
