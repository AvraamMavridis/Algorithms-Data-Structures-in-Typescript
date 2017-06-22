## Hashing and Strings

Hash tables are a very practical way to maintain a dictionary. They exploit the fact
that looking an item up in an array takes constant time once you have its index. A
hash function is a mathematical function that maps keys to integers. We will use
the value of our hash function as an index into an array, and store our item at that
position.
The first step of the hash function is usually to map each key to a big integer.
Let α be the size of the alphabet on which a given string S is written. Let char(c)
be a function that maps each symbol of the alphabet to a unique integer from 0 to
α − 1.


### Write a hash function for an array with lenght n. The values of the array is strings.


```js

const hash = function(key, arrayLength){
  key = +(key.split('').map(a => a.charCodeAt(0) - 96).join(''))
  console.log(key);
}

