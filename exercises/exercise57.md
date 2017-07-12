## Exercise

Merge two BSTs into a double sorted linked list

## Solution

```ts
interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

interface ListNode {
  value: number;
  next?: ListNode;
  previous?: ListNode;
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

/**
 * Turn an BST into a double linked list
 *
 * @param {Tree} tree
 * @returns {ListNode}
 */
const flattenTree = function(tree: Tree): ListNode {
  /**
   * Recursive in-order traversal
   *
   * @param {TreeNode} node
   * @param {Function} cb
   * @returns {void}
   */
  const inOrderTraversal = function(node: TreeNode, cb: Function): void {
    if (!node) return;
    inOrderTraversal(node.left, cb);
    cb(node);
    inOrderTraversal(node.right, cb);
  };

  let head = undefined;
  let pointer = undefined;

  /**
   * Turn a BST into a double sorted linked list
   *
   * @param {TreeNode} node
   */
  const createList = function(node: TreeNode) {
    if (!head) {
      head = node;
      pointer = head;
    } else {
      pointer.next = { ...node, previous: { ...pointer } };
      pointer = pointer.next;
    }
  };

  inOrderTraversal(tree.root, createList);

  return head;
};

/**
 * Print the values of a list
 *
 * @param {ListNode} head
 */
const printList = function(head: ListNode): void {
  let pointer = head;
  while (pointer) {
    console.log(pointer.value);
    pointer = pointer.next;
  }
};

/**
 * Merge two linked lists
 *
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @returns {ListNode}
 */
const mergeLists = function(head1: ListNode, head2: ListNode): ListNode {
  let pointer1 = head1;
  let pointer2 = head2;
  let newListhead = undefined;
  let newListPointer = undefined;

  while (pointer1 && pointer2) {
    if (pointer1.value <= pointer2.value) {
      if (!newListhead) {
        newListhead = pointer1;
        newListPointer = newListhead;
      } else {
        newListPointer.next = { ...pointer1, previous: { ...newListPointer } };
        newListPointer = newListPointer.next;
      }
      pointer1 = pointer1.next;
    } else {
      if (!newListhead) {
        newListhead = pointer2;
        newListPointer = newListhead;
      } else {
        newListPointer.next = { ...pointer2, previous: { ...newListPointer } };
        newListPointer = newListPointer.next;
      }
      pointer2 = pointer2.next;
    }
  }

  while (pointer1) {
    newListPointer.next = { ...pointer1, previous: { ...newListPointer } };
    newListPointer = newListPointer.next;
    pointer1 = pointer1.next;
  }

  while (pointer2) {
    newListPointer.next = { ...pointer2, previous: { ...newListPointer } };
    newListPointer = newListPointer.next;
    pointer2 = pointer2.next;
  }

  return newListhead;
};

const list1 = flattenTree(tree1);
const list2 = flattenTree(tree2);
const mergedList = mergeLists(list1, list2);

printList(mergedList);
```
