## Exercise

Verify that a binary tree is a binary search tree.

## Solution

```ts
interface MyNode {
  value: number;
  parent?: MyNode;
  left?: MyNode;
  right?: MyNode;
}

const node13: MyNode = { value: 13, left: undefined, right: undefined };
const node14: MyNode = { value: 14, left: node13, right: undefined };
const node7: MyNode = { value: 7, left: undefined, right: undefined };
const node4: MyNode = { value: 4, left: undefined, right: undefined };
const node6: MyNode = { value: 6, left: node4, right: node7 };
const node1: MyNode = { value: 1, left: undefined, right: undefined };
const node3: MyNode = { value: 3, left: node1, right: node6 };
const node10: MyNode = { value: 10, left: undefined, right: node14 };
const root: MyNode = { value: 8, parent: undefined, left: node3, right: node10 };

const createTree = function(): MyNode{
  root.parent = undefined;
  node10.parent = root;
  node3.parent = root;
  node1.parent = node3;
  node6.parent = node3;
  node4.parent = node6;
  node7.parent = node6;
  node14.parent = node10;
  node13.parent = node14;

  return root;
}

const inOrderTraversal = function(node: MyNode, cb: Function){
  if(!node) return;
  inOrderTraversal(node.left, cb);
  cb(node);
  inOrderTraversal(node.right, cb);
}


const isBinarySearchTree = function(node){
  let max = -Infinity;
  let flag = true;

  const func = (node) => {
    if(node.value < max) {
       flag = false;
    } else {
      max = Math.max(node.value, max);
    }
  }

  inOrderTraversal(node, func);
  return flag;
}

console.assert(isBinarySearchTree(createTree()), 'Wrong implementation');
```
