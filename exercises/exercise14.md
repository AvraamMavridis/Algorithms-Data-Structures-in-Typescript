## Exercise

Write code to remove duplicates from an unsorted linked list.

## Solution

```js
/**
* Remove duplicates from a linked list
*
* @param {object} root - head of the list
*/
const removeDuplicates = function(root){
  let pointer = root;
  let occur = new Map();
  occur.set(pointer.value, true)

  while(pointer){
    if(pointer.next && (occur.get(pointer.next.value) === undefined)){
      occur.set(pointer.next.value, true);
      pointer = pointer.next;
    } else if(pointer.next && !(occur.get(pointer.next.value) === undefined)){
      pointer.next = pointer.next.next;
    }
  }

  return root;
}
```
