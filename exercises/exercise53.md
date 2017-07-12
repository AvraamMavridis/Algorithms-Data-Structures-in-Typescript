## Exercise

Smallest possible sum

## Solution

```ts
function findSmallest(numbers) {

  let max = Math.max(...numbers);
  let min = Math.min(...numbers);

  while(max !== min){
    const maxIndex = numbers.findIndex(val => val === max);
    numbers[maxIndex] = max - min;
    max = Math.max(...numbers);
    min = Math.min(...numbers);
  }

  return numbers.reduce((sum, next) => {
    sum += next;
    return sum;
  }, 0);
}

console.assert(findSmallest([6,9,21]) === 9, 'Wrong implementation');
```
