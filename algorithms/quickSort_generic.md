## Exercise

Implement QuickSort Using TypeScript Generics

## Solution

```ts

type SortPredicate = (item: Sortable) => boolean;

interface Sortable {
    equals: SortPredicate;
    lessThan: SortPredicate;
    greaterThan: SortPredicate;
}

function genericPartition<T extends Sortable>(
    sourceArray: T[], 
    leftIndex: number = 0, 
    rightIndex: number = sourceArray.length - 1) {

    const pivotItem: T = sourceArray[Math.floor((rightIndex + leftIndex) / 2)];

    let i = leftIndex;
    let j = rightIndex;

    while (i <= j) {

        while (sourceArray[i].lessThan(pivotItem)) {
            i++;
        }

        while (sourceArray[j].greaterThan(pivotItem)) {
            j--;
        }

        if (i <= j) {
            [sourceArray[i], sourceArray[j]] = [sourceArray[j], sourceArray[i]];
            i++;
            j--;
        }
    }

    return i;
}


function genericQuickSort<T extends Sortable>(
    array: T[], 
    left: number = 0, 
    right: number = array.length - 1) {
    
    let index: number;

    if (array.length > 1) {
        index = genericPartition<T>(array, left, right);

        if (left < index - 1) {
            genericQuickSort<T>(array, left, index - 1);
        }

        if (index < right) {
            genericQuickSort<T>(array, index, right);
        }
    }

    return array;
}

class Cat implements Sortable {
    
    public Name: string;
    public Age: number;

    constructor(catName: string, catAge: number) {
        this.Name = catName;
        this.Age = catAge;
    }

    public equals(testCat: Cat) {
        return testCat.Name === this.Name;
    }
    public lessThan(testCat: Cat) {
        return testCat.Name > this.Name;
    }
    public greaterThan(testCat: Cat) {
        return testCat.Name < this.Name;
    }
}

const unsortedArray = [
    new Cat("Marvin", 4), 
    new Cat("Arial", 3),
    new Cat("Felix", 3),
    new Cat("Tommy Boy", 9),
    new Cat("Athena", 1)
];

const sortedArray = [...unsortedArray];

genericQuickSort<Cat>(sortedArray);

console.log({unsorted: unsortedArray, sorted: sortedArray});

```

Result:

<img src="../images/generic_quicksort_output.jpg"/>

