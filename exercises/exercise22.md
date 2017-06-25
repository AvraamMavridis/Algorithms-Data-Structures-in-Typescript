## Exercise

Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

## Solution

```js
// Unbalanced tree
const value13 = { value: 13, left: undefined, right: undefined };
const value14 = { value: 14, left: value13, right: undefined };
const value7 = { value: 7, left: undefined, right: undefined };
const value4 = { value: 4, left: undefined, right: undefined };
const value6 = { value: 6, left: value4, right: value7 };
const value1 = { value: 1, left: undefined, right: undefined };
const value3 = { value: 3, left: value1, right: value6 };
const value10 = { value: 10, left: undefined, right: value14 };
const root = { value: 8, left: value3, right: value10 };

// Balanced tree
const value15 = { value: 15, left: undefined, right: undefined };
const value16 = { value: 16, left: undefined, right: undefined };
const root2 = { value: 8, left: value15, right: value16 };

/**
* Returns the height of a tree
*
* @param {object} root
*/
const getHeight = function(root) {
  if (!root) return 0;
  else return getHeight(root.left) + getHeight(root.right) + 1;
};

/**
* Checks if a tree is balanced
*
* @param {object} root
*/
const isBalanced = function(root) {
  if (!root) return true;
  const leftSubTreeHeight = getHeight(root.left);
  const rightSubTreeHeight = getHeight(root.right);
  return Math.abs(leftSubTreeHeight - rightSubTreeHeight) <= 1;
};

console.assert(isBalanced(root) === false, "Wrong implementation");
console.assert(isBalanced(root2) === true, "Wrong implementation");
```
