## Exercise

Print a binary tree by level, from top to down, with each level in a line<

## Solution

```ts
interface MyNode {
  value: number;
  parent?: MyNode;
  left?: MyNode;
  right?: MyNode;
}

const node4: MyNode = { value: 5, left: undefined, right: undefined };
const node7: MyNode = { value: 9, left: undefined, right: undefined };
const node6: MyNode = { value: 7, left: undefined, right: undefined };
const node1: MyNode = { value: 5, left: undefined, right: undefined };
const node3: MyNode = { value: 6, left: node1, right: node6 };
const node10: MyNode = { value: 6, left: node7, right: node4 };
const root: MyNode = { value: 8, parent: undefined, left: node3, right: node10 };


/**
 * Print a tree by level
 *
 * @param {MyNode} root
 */
const printPerLevel = function(root: MyNode){
  const queue = [root];
  let listToPrint = [];
  let toBePrented = 1;
  let nextlevel = 0;

  while(queue.length){
    const node = queue.pop();
    listToPrint.push(node.value);

    if(node.left) {
      nextlevel++;
      queue.unshift(node.left);
    }
    if(node.right){
      nextlevel++;
      queue.unshift(node.right);
    }

    toBePrented--;
    if(toBePrented === 0){
      toBePrented = nextlevel;
      nextlevel = 0;
      console.log(listToPrint.toString());
      listToPrint = [];
    }

  }
}

printPerLevel(root);
```
