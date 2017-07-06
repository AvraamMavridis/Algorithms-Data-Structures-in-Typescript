## Exercise

Convert a binary tree to a min-heap.

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

const preOrder = function(root: MyNode, cb: Function) {
  if(!root) return;
  cb(root);
  preOrder(root.left, cb);
  preOrder(root.right, cb);
};

const createHeap = function(root: MyNode){
  const arr = [];

  const func = node => arr.push(node.value);
  preOrder(root, func);

  arr.sort((a,b) => a - b);

  const change = node => node.value = arr.shift();

  preOrder(root, change);
}

createHeap(root);
```
