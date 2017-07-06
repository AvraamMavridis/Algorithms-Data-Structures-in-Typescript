## Exercise

Write a function to calculate the height of an arbitrary binary tree.

## Solution

```ts
interface MyNode {
  value: number,
  parent?: MyNode,
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
const root: MyNode = {value: 8, parent: undefined, left: node3, right: node10};

const preOrder = function(root, cb) {
  if(!root) return;
  cb(root);
  preOrder(root.left);
  preOrder(root.right);
};

console.assert(getHeight(root) === 3, 'Wrong implementation');
```
