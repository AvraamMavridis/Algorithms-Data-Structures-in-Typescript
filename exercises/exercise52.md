## Exercise

Generate combinations of a given string.
e.g. if string is 'abc' the functions should return
'abc', 'ab', 'ac', 'bc', 'a', 'b', 'c'

## Solution

```ts
const combinations = new Set();

const getCombinations = function(str: string, maxLen: number){
  if(!str) return;
  if(str.length === maxLen){
    combinations.add(str);
  }

  for(let i=0; i<str.length; i++){
    const newArr = str.split('');
    newArr.splice(i, 1, '');
    combinations.add(newArr.join(''));
    getCombinations(newArr.join(''), maxLen);
  }
}

getCombinations('abc', 3)
console.assert(combinations.has('abc'), 'Wrong implementation');
console.assert(combinations.has('ab'), 'Wrong implementation');
console.assert(combinations.has('bc'), 'Wrong implementation');
console.assert(combinations.has('ac'), 'Wrong implementation');
console.assert(combinations.has('a'), 'Wrong implementation');
console.assert(combinations.has('c'), 'Wrong implementation');
console.assert(combinations.has('b'), 'Wrong implementation');
```
