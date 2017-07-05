## Exercise

Given a binary tree how will you get its mirrored tree.

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

const preOrderTraversal = function(node: MyNode, cb: Function) {
  if (!node) return;
  cb(node);
  preOrderTraversal(node.left, cb);
  preOrderTraversal(node.right, cb);
};

const getMirroredTree = function(root) {
  const swapChildren = function(node) {
    if (!node) return true;
    if (!node.left && !node.right) return true;

    const tmp = {...node.left};
    node.left = {...node.right};
    node.right = tmp;
  };

  preOrderTraversal(root, swapChildren);
  return root;
};

console.log(getMirroredTree(root));
```
