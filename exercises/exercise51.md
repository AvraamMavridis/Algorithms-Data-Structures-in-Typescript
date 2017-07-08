## Exercise

Convert a binary search tree into a sorted double linked list

## Solution

```ts
interface MyNode {
  value: number,
  left?: MyNode,
  right?: MyNode
}

const node13: MyNode = {value: 13, left: undefined, right: undefined};
const node14: MyNode = {value: 14, left: node13, right: undefined};
const node7: MyNode = {value: 7, left: undefined, right: undefined};
const node4: MyNode = {value: 4, left: undefined, right: undefined};
const node6: MyNode = {value: 6, left: node4, right: node7};
const node1: MyNode = {value: 1, left: undefined, right: undefined};
const node3: MyNode = {value: 3, left: node1, right: node6};
const node10: MyNode = {value: 10, left: undefined, right: node14};
const root: MyNode = {value: 8, left: node3, right: node10};

const inOrder = function(root: MyNode, cb: Function) {
  if(!root) return;
  inOrder(root.left, cb);
  cb(root);
  inOrder(root.right, cb);
};

let prev = undefined;
let listHead = null;
let listTail = null;

inOrder(root, node => {
  if(prev){
    prev.next = { ...node };
    node.previous = { ...prev };
  } else if(!prev){
    listHead = node;
  }
  prev = node;
  listTail = node;
});

console.assert((function(){
  let pointer = listHead;
  while(pointer && pointer.next){
    if(pointer.next.value < pointer.value){
      return false
    }
    pointer = pointer.next;
  }
  return true;
})(), 'Wrong Implementation');

console.assert((function(){
  let pointer = listTail;
  while(pointer && pointer.previous){
    if(pointer.previous.value > pointer.value){
      return false
    }
    pointer = pointer.previous;
  }
  return true;
})(), 'Wrong Implementation');
```
