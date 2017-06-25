## Exercise

You have two numbers represented by a linked list, where each node contains a single digit. Thedigits are stored in reverse order, such that the 1'sdigit isat the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

Number: 104, List1: 4 -> 0 -> 1
Number: 997, List2: 7 -> 9 -> 9

List1 + List2: 1 -> 0 -> 1 -> 1

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
