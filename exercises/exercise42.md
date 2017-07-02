## Exercise

Find the majority element in an array.
If it doesnt exist return null.
The majority element is the element that occurs more than the half of the size of the array.

## Solution


#### Ο(nlogn) solution

```ts
const arr = [5, 5, 5, 1, 2, -10, 0, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 8, 9, 5, 5, 5, 5];
const arr2 = [2, 2, 7, 3, 1];

function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  let newArr = [],
    j,
    i;
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      newArr.push(arr2.shift());
    } else {
      newArr.push(arr1.shift());
    }
  }

  if (arr1.length) {
    newArr = newArr.concat(arr1);
  }

  if (arr2.length) {
    newArr = newArr.concat(arr2);
  }

  return newArr;
}

function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length === 1) return arr;

  let half = arr.length / 2;
  let l1 = arr.slice(0, half);
  let l2 = arr.slice(half, arr.length);

  l1 = mergeSort(l1);
  l2 = mergeSort(l2);

  return merge(l1, l2);
}

function findMajority(arr: Array<number>): number | null {
  const sortedArr = mergeSort(arr);

  const med = Math.floor(sortedArr.length / 2);

  let majorityCandidate = sortedArr[med];

  let i = 0;
  let count = 0;

  while (sortedArr[i] !== undefined && majorityCandidate >= sortedArr[i]) {
    if (sortedArr[i] === majorityCandidate) {
      count++;
    }
    i++;
  }

  return count > med ? sortedArr[med] : null;
}

console.assert(findMajority(arr) === 5, 'Wrong implementation');
console.assert(findMajority(arr2) === null, 'Wrong implementation');

```

#### Ο(n) solution

<href src="https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm">Boyer–Moore majority vote algorithm</href>

```ts
const arr = [5, 5, 5, 1, 2, -10, 0, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 8, 9, 5, 5, 5, 5];
const arr2 = [2, 2, 7, 3, 1];

const findMajority = function(arr: Array<number>) {
  let count = 0;
  let candidate = arr[0];

  for (let i = 0; i < arr.length; i++) {
    count = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (count[i] === 0) {
      candidate = arr[i];
    } else {
      if (arr[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }

  if (count === 0) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  const med = Math.floor(arr.length / 2);

  return count > med ? candidate : null;
};

console.assert(findMajority(arr) === 5, 'Wrong implementation');
console.assert(findMajority(arr2) === null, 'Wrong implementation');
```
