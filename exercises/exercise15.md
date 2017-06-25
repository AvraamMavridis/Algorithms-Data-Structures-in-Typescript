## Exercise

Write code to partition a linked list around a value x, such that all nodes less than x come before alt nodes greater than or equal to x.

## Solution

```js
const li = createALinkedList(100, 50); // from exercise utils

/**
* Split a list into two lists, one list will have the nodes with values less than or equal to x
* and the other all nodes with values greater than x
*
* @param {object} list - head of the list
* @param {number} x
*/
const splitList = function(list, x) {
  let currentPointer = list;
  let list1, list2;
  let list1Pointer, list2Pointer;

  while (currentPointer) {
    if (currentPointer.value > x) {
      if (!list1) {
        list1 = Object.assign({}, currentPointer, { next: undefined });
        list1Pointer = list1;
      } else {
        list1Pointer.next = Object.assign({}, currentPointer, {
          next: undefined
        });
        list1Pointer = list1Pointer.next;
      }
    } else if (currentPointer.value <= x) {
      if (!list2) {
        list2 = Object.assign({}, currentPointer, { next: undefined });
        list2Pointer = list2;
      } else {
        list2Pointer.next = Object.assign({}, currentPointer, {
          next: undefined
        });
        list2Pointer = list2Pointer.next;
      }
    }
    currentPointer = currentPointer.next;
  }

  return {
    lessThanList: list1,
    greaterThanList: list2
  };
};

/**
* Merge two lists
*
* @param {object} list1 - head of the first list
* @param {object} list2 - head of the second list
*/
const mergeTwoLists = function(list1, list2) {
  let pointer = list1;
  while (pointer) {
    if (pointer.next) {
      pointer = pointer.next;
    } else {
      pointer.next = list2;
      break;
    }
  }

  return list1;
};

const lists = splitList(li, 25);
const newList = mergeTwoLists(lists.lessThanList, lists.greaterThanList);
printList(newList); // from exercise utils
```
