## Exercise

Find the nth Node in a single linked list traversing the list only once.

## Solution

```ts
interface MyNode {
  value: number,
  next?: MyNode
}

const node8: MyNode = { value: 8, next: undefined };
const node7: MyNode = { value: 7, next: node8 };
const node6: MyNode = { value: 6, next: node7 };
const node5: MyNode = { value: 5, next: node6 };
const node4: MyNode = { value: 4, next: node5 };
const node3: MyNode = { value: 3, next: node4 };
const node2: MyNode = { value: 2, next: node3 };
const head: MyNode = { value: 1, next: node2 };

/**
 * Find the nth Node from the tail of the linked list
 *
 * @param {MyNode} head
 * @param {number} n
 * @returns {MyNode}
 */
const findNthNodeFromTail = function(head: MyNode, n: number): MyNode {
  let pointer = head;

  while (n && pointer) {
    pointer = pointer.next;
    n--;
  }

  if (n) throw Error("The list doestn have so many nodes");

  let pointer2 = head;

  while (pointer) {
    pointer2 = pointer2.next;
    pointer = pointer.next;
  }

  return pointer2;
};

console.assert(
  findNthNodeFromTail(head, 2).value === 7,
  "Wrong implementation"
);
console.assert(
  findNthNodeFromTail(head, 8).value === 1,
  "Wrong implementation"
);
```
