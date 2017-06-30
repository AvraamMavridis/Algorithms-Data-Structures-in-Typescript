## Exercise

Implement a Stack using two Queues.

## Solution

```ts
class Queue {
  _queue: Array<number>

  constructor(){
    this._queue = [];
  }

  enqueue(value: number){
    this._queue.push(value)
  }

  dequeue(){
    return this._queue.shift();
  }

  getSize(){
    return this._queue.length;
  }
}


class Stack {
  qu1: Queue;
  qu2: Queue;

  constructor() {
    this.qu1 = new Queue();
    this.qu2 = new Queue();
  }

  push(value: number){
    this.qu1.enqueue(value);
  }

  pop(){
    let value = undefined;
    while(this.qu1.getSize() > 1){
      this.qu2.enqueue(this.qu1.dequeue())
    }

    value = this.qu1.dequeue();

    while(this.qu2.getSize()){
      this.qu1.enqueue(this.qu2.dequeue())
    }

    return value;
  }
}

const s = new Stack();

s.push(10);
s.push(30);
s.push(50);
console.assert(s.pop() === 50, 'Wrong implementation');

s.push(40);
s.push(90);
console.log(s.pop() === 90, 'Wrong implementation');
```
