## Exercise

Implement a function to check if there is a circle in a linked list.

## Solution

```ts
interface MyNode {
  val: number,
  next?: MyNode
}

const head: MyNode = { val: 0 };
const n1: MyNode = { val: 1 };
const n2: MyNode = { val: 2 };
const n3: MyNode = { val: 3 };
const n4: MyNode = { val: 4 };

const createCirularList = function(head: MyNode): MyNode {
  (head.next = n2), (n2.next = n4), (n4.next = n3), (n3.next = n1), (n1.next = n4);
  return head;
};

const createNonCirularList = function(head: MyNode): MyNode {
  (head.next = n2), (n2.next = n4), (n4.next = n3), (n3.next = n1), (n1.next = undefined);
  return head;
};

const hasLoop = function(head: MyNode): boolean {
  if (!head) return false;
  if (head === head.next) return true;
  if (head === head.next.next) return true;

  let pointer1 = head;
  let pointer2 = head;

  while (pointer1 && pointer2 && pointer2.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
    if (pointer1 === pointer2) {
      return true;
    }
  }
  return false;
};

console.assert(hasLoop(createCirularList(head)), "Wrong implementation");
console.assert(!hasLoop(createNonCirularList(head)), "Wrong implementation");
```
