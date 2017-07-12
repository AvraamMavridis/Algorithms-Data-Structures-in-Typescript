## Exercise

Design a data structure to support the following operations:
- insert(x,T) – Insert item x into the set T .
- findSmallest(k,T) – Find the kth smallest element from T
- member(x,T) – Return true iff x ∈ T .

All operations must take O(log n) time on an n-element set.

## Solution

```ts
interface MyNode {
  value: number,
  left: MyNode,
  right: MyNode,
  counterLeft: number,
  counterRight: number
}

const node1 = { value: 1, left: undefined, right: undefined, counterLeft: 0, counterRight: 0 };
const node2 = { value: 2, left: undefined, right: undefined, counterLeft: 0, counterRight: 0 };
const node3 = { value: 3, left: undefined, right: undefined, counterLeft: 0, counterRight: 0 };
const node4 = { value: 4, left: undefined, right: undefined, counterLeft: 0, counterRight: 0 };
const node6 = { value: -6, left: undefined, right: undefined, counterLeft: 0, counterRight: 0 };

/**
 * Binary Tree
 *
 * @class Tree
 */
class Tree {
  root: MyNode;

  /**
   * Creates an instance of Tree.
   * @param {MyNode} root
   * @memberof Tree
   */
  constructor(root: MyNode) {
    this.root = root;
  }

  /**
   * Add a node to the tree
   *
   * @param {MyNode} node
   * @param {MyNode} [root=this.root]
   * @memberof Tree
   */
  addNode(node: MyNode, root: MyNode = this.root): void{
    if(node.value > root.value){
      root.counterRight++;
      if(root.right === undefined){
        root.right = node;
      } else {
        this.addNode(node, root.right);
      }
    } else {
      root.counterLeft++;
      if(root.left === undefined){
        root.left = node;
      } else {
        this.addNode(node, root.left);
      }
    }
  }

  /**
   * Check if a value exist on the tree
   *
   * @param {number} value
   * @returns {boolean}
   * @memberof Tree
   */
  member(value: number): boolean{
    let found = false;
    const preOrder = (node, value) => {
      if(!node) return;
      if(node.value === value) {
        found = true;
      }
      if(!found){
        preOrder(node.left, value);
      }
      if(!found){
        preOrder(node.right, value);
      }
    }

    preOrder(this.root, value);

    return found;
  }

  /**
   * Find the kth smallest number in a tree
   *
   * @param {number} k
   * @param {MyNode} [root=this.root]
   * @returns {MyNode}
   * @memberof Tree
   */
  findSmallest(k: number, root: MyNode = this.root): MyNode{
    if(root.counterLeft === k){
      return root;
    } else if(k > root.counterLeft){
      return this.findSmallest(k - root.counterLeft - 1, root.right);
    } else if(k < root.counterLeft && root.counterLeft){
      return this.findSmallest(k, root.left);
    }
  }

}

const t = new Tree(node1);
t.addNode(node3);
t.addNode(node4);
t.addNode(node6);
t.addNode(node2);

console.assert(t.findSmallest(0).value === -6, 'Wrong Implementation');
console.assert(t.findSmallest(1).value === 1, 'Wrong Implementation');
console.assert(t.findSmallest(2).value === 2, 'Wrong Implementation');
```
