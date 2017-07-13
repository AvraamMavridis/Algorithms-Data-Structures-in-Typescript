## Exercise

In the bin-packing problem, we are given n metal objects, each weighing between zero and one kilogram. Our goal is to find the smallest number of bins that will hold the n objects, with each bin holding one kilogram at most.

- The best-fit heuristic for bin packing is as follows. Consider the objects in the order in which they are given. For each object, place it into the partially filled bin with the smallest amount of extra room after the object is inserted.. If no such bin exists, start a new bin. Design an algorithm that implements the best-fit heuristic (taking as input the n weights w1,w2,...,wn and outputting the number of bins used) in O(n log n) time.

- Repeat the above using the worst-fit heuristic, where we put the next object in the partially filled bin with the largest amount of extra room after the object is inserted.

## Solution

```ts
type Heuristic = 'best' | 'worst';

/**
 * Bin
 *
 * @class Bin
 */
class Bin {
  sum: number;
  max: number;
  left: undefined;
  right: undefined;

  /**
   * Creates an instance of Bin.
   * @memberof Bin
   */
  constructor() {
    this.sum = 0;
    this.max = 1;
  }

  /**
   * Add an item to the Bin
   *
   * @param {number} metalObjectWeight
   * @memberof Bin
   */
  addItem(metalObjectWeight: number) {
    if (metalObjectWeight + this.sum <= this.max) {
      this.sum += metalObjectWeight;
    }
  }

  /**
   * Helper to compare bin sizes
   *
   * @returns
   * @memberof Bin
   */
  valueOf() {
    return this.sum;
  }
}

/**
 * Tree of Bins
 *
 * @class BinManager
 */
class BinManager {
  private bins: Array<Bin> = [];

  /**
   * Return the array of bins
   *
   * @returns {Array<Bin>}
   * @memberof BinManager
   */
  getBins(): Array<Bin> {
    return this.bins;
  }

  /**
   * Add metal object to the bins using the best heuristic
   *
   * @param {number} metalObjectWeight
   * @returns {Array<Bin>}
   * @memberof BinManager
   */
  addItemBestHeuristic(metalObjectWeight: number): Array<Bin> {
    return this.addItem(metalObjectWeight, 'best');
  }

  /**
   * Add metal object to the bins using the worst heuristic
   *
   * @param {number} metalObjectWeight
   * @returns {Array<Bin>}
   * @memberof BinManager
   */
  addItemWorstHeuristic(metalObjectWeight: number): Array<Bin> {
    return this.addItem(metalObjectWeight, 'worst');
  }

  /**
   * Add item to the Bin Manager
   *
   * @private
   * @param {number} metalObjectWeight
   * @param {Heuristic} type
   * @returns {Array<Bin>}
   * @memberof BinManager
   */
  private addItem(metalObjectWeight: number, type: Heuristic): Array<Bin> {
    let isAdded = false;
    let i, max;
    if (type === 'worst') {
      for (let i = 0; i < this.bins.length; i++) {
        if (metalObjectWeight + this.bins[i].sum <= this.bins[i].max) {
          this.bins[i].addItem(metalObjectWeight);
          isAdded = true;
          break;
        }
      }
    } else if (type === 'best') {
      for (let i = this.bins.length - 1; i >= 0; i--) {
        if (metalObjectWeight + this.bins[i].sum <= this.bins[i].max) {
          this.bins[i].addItem(metalObjectWeight);
          isAdded = true;
          break;
        }
      }
    }

    if (!isAdded) {
      const newBin = new Bin();
      newBin.addItem(metalObjectWeight);
      this.bins.push(newBin);
    }

    this.bins = this.mergeSort(this.bins);
    return this.bins;
  }

  /**
   * Merge two arrays in sorted order
   *
   * @private
   * @param {Array<Bin>} arr1
   * @param {Array<Bin>} arr2
   * @returns {Array<Bin>}
   * @memberof BinManager
   */
  private merge(arr1: Array<Bin>, arr2: Array<Bin>): Array<Bin> {
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

  /**
   * Merge Sort implementation
   *
   * @private
   * @param {Array<Bin>} arr
   * @returns {Array<Bin>}
   * @memberof BinManager
   */
  private mergeSort(arr: Array<Bin>): Array<Bin> {
    if (arr.length === 1) return arr;
    let half = arr.length / 2;
    let l1 = arr.slice(0, half);
    let l2 = arr.slice(half, arr.length);
    l1 = this.mergeSort(l1);
    l2 = this.mergeSort(l2);
    return this.merge(l1, l2);
  }
}

const bm = new BinManager();
bm.addItemBestHeuristic(0.2);
bm.addItemBestHeuristic(0.9);
bm.addItemBestHeuristic(0.3);
bm.addItemBestHeuristic(0.8);
bm.addItemBestHeuristic(0.05);
bm.addItemBestHeuristic(0.01);

console.assert(bm.getBins()[0].valueOf() === 0.5, 'Wrong Implementation');
console.assert(bm.getBins()[bm.getBins().length - 1].valueOf() > 0.9, 'Wrong Implementation');

const bmw = new BinManager();
bmw.addItemWorstHeuristic(0.2);
bmw.addItemWorstHeuristic(0.9);
bmw.addItemWorstHeuristic(0.3);
bmw.addItemWorstHeuristic(0.8);
bmw.addItemWorstHeuristic(0.05);
bmw.addItemWorstHeuristic(0.01);

console.assert(bmw.getBins()[0].valueOf() === 0.56, 'Wrong Implementation');
console.assert(bmw.getBins()[bmw.getBins().length - 1].valueOf() === 0.9, 'Wrong Implementation');
```
