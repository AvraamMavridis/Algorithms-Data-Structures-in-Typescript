## Exersice

For each of the following problems, give an algorithm that finds the desired numbers within the given amount of time. To keep your answers brief, feel free to use known algorithms as subroutines. For the example, S={6,13,19,3,8}, 19−3 maximizes the difference, while 8−6 minimizes the difference.

- (a) Let S be an unsorted array of n integers. Give an algorithm that finds the pair x,y∈S that maximizes |x−y|. Your algorithm must run in O(n) worst-case time.
- (b) Let S be a sorted array of n integers. Give an algorithm that finds the pair x,y∈S that maximizes |x−y|. Your algorithm must run in O(1) worst-case time.


## Solution

#### Solution A

```js
function findBest(array){
  let a = array[0], b = array[1]; c = array[2];

  for(let i=1; i<=array.length; i++){ // O(n)
    let absAB = Math.abs(a - b);
    let absAC = Math.abs(a - c);
    let absCB = Math.abs(b - c);
    let maxAbs = Math.max(absAB, absAC, absCB);

    if(absAB ===  maxAbs){
      c = array[i];
    } else if (absAC ===  maxAbs){
      b = array[i];
    } else if (absCB ===  maxAbs){
      a = array[i];
    }

  }

  // Although filter is a loop it has fixed number of iterations, 3
  return [a,b,c].filter(val => val !== undefined);
}
```

#### Solution B

```js
function findBest(sorterArray){
  return [sorterArray[0], sorterArray[sorterArray.length - 1 ]];
}
```
