## Exercise

Check if an array can be the post-order traversal of a binary search tree.

## Solution

```ts
const verifySequenceOfBST = function(sequence : Array<number>){
  if(sequence.length === 0){
    return false;
  }

  const root = sequence[sequence.length - 1];

  let i = 0;
  while(sequence[i] < root){
    i++;
  }

  let j = i;
  for(j = i; j < sequence.length; j++){
    if(sequence[j] < root){
      return false;
    }
  }

  const isLeftBST = true;
  if(i > 0){
    verifySequenceOfBST(sequence.slice(0, i))
  }

  const isRightBST = true;
  if(j > 0){
    verifySequenceOfBST(sequence.slice(i + 1))
  }

  return isRightBST && isLeftBST;
}

console.assert(verifySequenceOfBST([5,7,6,9,11,10,8]) === true, 'Wrong implementation')
console.assert(verifySequenceOfBST([7,4,6,5]) === false, 'Wrong implementation');
console.assert(verifySequenceOfBST([5,4,6,7]) === true, 'Wrong implementation');
console.assert(verifySequenceOfBST([3,2,-1,1]) === false, 'Wrong implementation');
console.assert(verifySequenceOfBST([6,3,5,4]) === false, 'Wrong implementation');
```
