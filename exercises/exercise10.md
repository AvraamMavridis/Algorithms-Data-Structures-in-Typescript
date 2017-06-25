### Exercise

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


### Solution

```js
var uniqueChars = function(str){
  let arrOfChars = str.split('');
  return arrOfChars.filter((char,i, arr) => arr.indexOf(char)===i).length === arrOfChars.length;
}

console.assert(uniqueChars('asb') === true, 'Implementation is wrong');
console.assert(uniqueChars('aaasb') === false, 'Implementation is wrong');
console.assert(uniqueChars('aasssbbbb') === false, 'Implementation is wrong');
```