## Exercise

Implement a queue using a single linked list.

## Solution

```ts
interface MyNode {
  value: number,
  next?: MyNode
}

/**
 * Stack implemented using a single linked list
 *
 * @class StackList
 */
class QueueList {
  head: MyNode;
  tail: MyNode;

  /**
   * Push node to the StackList
   *
   * @param {MyNode} node
   * @memberof StackList
   */
  push(node: MyNode) {
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = { value: node.value, next: undefined };
      this.tail = this.tail.next;
    }
  }

  /**
   * Retrieve the last inserted value
   *
   * @returns {*}
   * @memberof StackList
   */
  pop(): any {
    if (!this.head) return "Stack underflows";
    else {
      const head = { value: this.head.value, next: this.head.next };
      this.head = this.head.next;
      return head;
    }
  }
}

const s = new QueueList();
s.push({ value: 10 });
s.push({ value: 20 });
s.push({ value: 30 });
s.push({ value: 40 });

console.assert(s.pop().value === 10, "Wrong Implementation");
console.assert(s.pop().value === 20, "Wrong Implementation");
console.assert(s.pop().value === 30, "Wrong Implementation");
console.assert(s.pop().value === 40, "Wrong Implementation");
console.assert(s.pop() === "Stack underflows", "Wrong Implementation");
```
