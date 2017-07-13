## Exercise

Write a function to compare whether two binary trees are identical. Identical trees have the same key value at each position and the same structure.

## Solution

```ts
interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

/**
 * Tree Structure
 *
 * @class Tree
 */
class Tree {
  root: TreeNode;

  /**
   * Creates an instance of Tree.
   * @param {TreeNode} root
   * @memberof Tree
   */
  constructor(root: TreeNode) {
    this.root = root;
  }

  /**
   * Add a node to the tree
   *
   * @param {MyNode} node
   * @param {MyNode} [root=this.root]
   * @memberof Tree
   */
  addNode(node: TreeNode, root: TreeNode = this.root): void {
    if (node.value > root.value) {
      if (root.right === undefined) {
        root.right = node;
      } else {
        this.addNode(node, root.right);
      }
    } else {
      if (root.left === undefined) {
        root.left = node;
      } else {
        this.addNode(node, root.left);
      }
    }
  }
}

/**
 * Check if two trees are indentical
 *
 * @param {Tree} tree1
 * @param {Tree} tree2
 * @returns {boolean}
 */
const isTreesIdentical = function(tree1: Tree, tree2: Tree): boolean {
  const arr1 = [];
  const arr2 = [];

  /**
   * Turn a BST to an array using in-order traversal
   *
   * @param {TreeNode} root
   * @param {Array<number>} arr
   * @returns {Array<number>}
   */
  const treeToArray = function(root: TreeNode, arr: Array<number>): Array<number> {
    if (!root) return;
    treeToArray(root.left, arr);
    arr.push(root.value);
    treeToArray(root.right, arr);
  };

  treeToArray(tree1.root, arr1);
  treeToArray(tree2.root, arr2);

  if (arr1.length !== arr2.length) return false;

  let isIdentical = true;

  let j = arr1.length - 1;
  while (j > -1) {
    if (arr1[j] !== arr2[j]) {
      isIdentical = false;
      break;
    }
    --j;
  }

  return isIdentical;
};

const tree1 = new Tree({ value: 1, left: undefined, right: undefined });
tree1.addNode({ value: 2, left: undefined, right: undefined });
tree1.addNode({ value: 3, left: undefined, right: undefined });
tree1.addNode({ value: -2, left: undefined, right: undefined });
tree1.addNode({ value: 12, left: undefined, right: undefined });
tree1.addNode({ value: 22, left: undefined, right: undefined });
tree1.addNode({ value: -200, left: undefined, right: undefined });

const tree2 = new Tree({ value: 31, left: undefined, right: undefined });
tree2.addNode({ value: 9, left: undefined, right: undefined });
tree2.addNode({ value: 23, left: undefined, right: undefined });
tree2.addNode({ value: 5, left: undefined, right: undefined });
tree2.addNode({ value: -223, left: undefined, right: undefined });
tree2.addNode({ value: 122, left: undefined, right: undefined });
tree2.addNode({ value: -3220, left: undefined, right: undefined });

const tree3 = new Tree({ value: 31, left: undefined, right: undefined });
tree3.addNode({ value: 9, left: undefined, right: undefined });
tree3.addNode({ value: 23, left: undefined, right: undefined });
tree3.addNode({ value: 5, left: undefined, right: undefined });
tree3.addNode({ value: -223, left: undefined, right: undefined });
tree3.addNode({ value: 122, left: undefined, right: undefined });
tree3.addNode({ value: -3220, left: undefined, right: undefined });

console.assert(isTreesIdentical(tree1, tree3) === false, 'Wrong Implementation');
console.assert(isTreesIdentical(tree2, tree3), 'Wrong Implementation');
```
