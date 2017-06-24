## Exercise

Given two strings, write a method to decide if one is a permutation of the other.

## Solution

```js
var permuteStrings = function(str1, str2){
  if(str1.length !== str2.length) return false;

  let chars1 = str1.split('');
  let chars2 = str2.split('');

  const checkfunc = (sum, charval) => sum + charval.charCodeAt(0);
  chars1 = chars1.reduce(checkfunc,0);
  chars2 = chars2.reduce(checkfunc,0);
  return chars1 === chars2;
}


console.assert(permuteStrings('BALL', 'LALB') === true, 'Implementation is wrong1');
console.assert(permuteStrings('BALL', 'laab') === false, 'Implementation is wrong2');
console.assert(permuteStrings('BALL', 'LABBB') === false, 'Implementation is wrong3');
```