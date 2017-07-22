### Write functions to:

1. Find the path to a node in a binary tree
2. Insert a new node to the tree
3. Traverse the tree
4. Find min/max
5. Delete node

<img src="../images/binary_search_tree.png" alt="Tree" style="width: 300px;"/>

### Solution

```ts
interface MyNode {
  value: number;
  left?: MyNode;
  right?: MyNode;
}

// Tree representation
const value13: MyNode = { value: 13, left: undefined, right: undefined };
const value14: MyNode = { value: 14, left: value13, right: undefined };
const value7: MyNode = { value: 7, left: undefined, right: undefined };
const value4: MyNode = { value: 4, left: undefined, right: undefined };
const value6: MyNode = { value: 6, left: value4, right: value7 };
const value1: MyNode = { value: 1, left: undefined, right: undefined };
const value3: MyNode = { value: 3, left: value1, right: value6 };
const value10: MyNode = { value: 10, left: undefined, right: value14 };
const root: MyNode = { value: 8, left: value3, right: value10 };

/**
 * Find the path from root to a value
 *
 * @param  {MyNode} root
 * @param  {number} value
 * @returns {Array<MyNode>}
 */
const findPath = function(root: MyNode, value: number): Array<MyNode> {
  if (!root || !root.value) return [];
  this.path = this.path || {};
  this.path[`${value}`] = this.path[`${value}`] || [];
  this.path[`${value}`].push(root.value);

  if (root.value === value) {
    return this.path[`${value}`];
  } else {
    if (value > root.value) findPath(root.right, value);
    else if (value < root.value) findPath(root.left, value);
  }

  return this.path[`${value}`];
};

/**
* Find a value in the tree
*
* @param {MyNode} root - The root of the tree
* @param {number} value - The value to search for
* @returns {MyNode}
*/
const find = function(root: MyNode, value: number): MyNode {
  if (!root || !root.value) return undefined;

  if (root.value === value) {
    return root;
  } else {
    if (value > root.value) return find(root.right, value);
    else if (value < root.value) return find(root.left, value);
  }

  return root;
};

/**
* Insert a value in the tree
*
* @param {MyNode} root - The root of the tree
* @param {number} value - The value to insert
* @returns {MyNode}
*/
const insert = function(root: MyNode, value: number): MyNode {
  if (value > root.value) {
    if (root.right === undefined) {
      root.right = { value: value, left: undefined, right: undefined };
    } else {
      insert(root.right, value);
    }
  } else if (value < root.value) {
    if (root.left === undefined) {
      root.left = { value: value, left: undefined, right: undefined };
    } else {
      insert(root.left, value);
    }
  }
  return root;
};

/**
* Traverse the tree and process it through a callback
*
* @param {MyNode} root - The root of the tree
* @param {function} cb
*/
const traverse = function(root: MyNode, cb: Function) {
  if (root && root.value) {
    cb(root.value);
    traverse(root.right, cb);
    traverse(root.left, cb);
  }
};

/**
* Find the minimum value in the tree
*
* @param {MyNode} root - The root of the tree
* @returns {number}
*/
const findMin = function(root: MyNode): number {
  if (root.left) return findMin(root.left);
  else return root.value;
};

/**
* Find the maximum value in the tree
*
* @param {MyNode} root - The root of the tree
* @returns {number}
*/
const findMax = function(root: MyNode): number {
  if (root.right) return findMax(root.right);
  else return root.value;
};

/**
* Find the parent of a value in the tree
*
* @param {MyNode} root - The root of the tree
* @param {number} value - The value to insert
* @returns {MyNode}
*/
const findParentOfToBeDeletedNode = function(
  root: MyNode,
  value: number
): MyNode {
  let node = root;
  const cb = root => {
    if (
      root &&
      ((root.right && root.right.value === value) ||
        (root.left && root.left.value === value))
    )
      node = root;
  };
  traverse(root, cb);
  return node;
};

/**
* Delete a node from the tree
*
* @param {MyNode} root - The root of the tree
* @param {number} value - The value to insert
*/
const deleteNode = function(root: MyNode, value: number) {
  let parent = findParentOfToBeDeletedNode(root, value);
  let node = find(root, value);

  // leaves
  if (node.left === undefined && node.right === undefined) {
    if (parent.left.value === node.value) {
      parent.left = undefined;
    } else if (parent.right.value === node.value) {
      parent.right = undefined;
    }
  } else if (node.left === undefined && node.right !== undefined) {
    // node with 1 child
    parent.right = node.right;
  } else if (node.left !== undefined && node.right === undefined) {
    // node with 1 child
    parent.left = node.left;
  } else if (node.left && node.right) {
    // node with 2 children
    // find the min  in the subtree
    // and swap it with the value that would be deleted
    let min = node.left.value;
    let pointer = node;
    while (pointer) {
      min = pointer.value;
      pointer = pointer.left;
    }
    node.value = min;

    // Delete the dublicate
    pointer = node;
    while (pointer) {
      if (pointer.left && pointer.left.value === min) {
        pointer.left = undefined;
      }
      pointer = pointer.left;
    }
  }
};
```