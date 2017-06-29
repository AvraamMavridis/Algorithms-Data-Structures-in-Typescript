## Exercise

Implement a function to sort a linked list.

## Solution

```ts
const node7 = { value: -50000, next: undefined };
const node6 = { value: 5, next: node7 };
const node5 = { value: 9, next: node6 };
const node4 = { value: 1, next: node5 };
const node3 = { value: -16, next: node4 };
const node2 = { value: 36, next: node3 };
const node1 = { value: 3, next: node2 };
const head = { value: 16, next: node1 };

const shortList = function(head) {
  let pointer = head;

  while (pointer) {
    if (pointer.next && pointer.value > pointer.next.value) {
      const tmp = pointer.value;
      pointer.value = pointer.next.value;
      pointer.next.value = tmp;
      pointer = head;
    } else {
      pointer = pointer.next;
    }
  }

  return head;
};

const printList = function(head) {
  let pointer = head;
  while (pointer) {
    console.log(pointer.value);
    pointer = pointer.next;
  }
};

printList(shortList(head));
```
