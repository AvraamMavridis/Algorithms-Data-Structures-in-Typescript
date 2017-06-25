## Exercise

An animal shelter holds only dogs and cats, and operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement opera- tions such as enqueue, dequeueAny, dequeueDog and dequeueCat.

## Solution

```js
// The smaller the counter, the older the animal based on arrival time
// of all animals at the shelter
let counter = 0;

/**
* Animal implementation
*/
class Animal {
  constructor(name){
    this._name = name; // Name to be able to test
    this._timestamp = counter++;
  }
}

class Dog extends Animal{};
class Cat extends Animal{};

/**
* Animal shelter implementation
*/
class AnimalShelter {

  /**
  * Create a shelter instance
  */
  constructor(){
    this.dogQueue = [];
    this.catQueue = [];
  }

  /**
  * Push animals on the shelter
  *
  * @param {Animal} animal
  */
  enqueue(animal){
    if(animal instanceof Dog){
      this.dogQueue.push(animal);
    } else if(animal instanceof Cat){
      this.catQueue.push(animal);
    }
  }

  /**
  * Get any type of animal out of the shelter
  *
  * @returns {Animal}
  */
  dequeueAny(){
    const lastCat = this.catQueue[0];
    const lastDog = this.dogQueue[0];

    if(!lastDog && !lastCat){
      throw Error('There isnt any animal in the shleter');
    } else if(lastCat && !lastDog){
      return this.catQueue.shift();
    } else if(!lastCat && lastDog){
      return this.dogQueue.shift();
    } else {
      return lastCat._timestamp < lastDog._timestamp ? this.catQueue.shift() : this.dogQueue.shift();
    }
  }

  /**
  * Get a cat out of the shelter
  *
  * @returns {Cat}
  */
  dequeueCat(){
    if(!this.catQueue.length) throw Error('There isnt any cat left');
    return this.catQueue.shift();
  }

  /**
  * Get a dog out of the shelter
  *
  * @returns {Dog}
  */
  dequeueDog(){
    if(!this.dogQueue.length) throw Error('There isnt any dog left');
    return this.dogQueue.shift();
  }
}

const animalShelter = new AnimalShelter();

animalShelter.enqueue(new Dog('Jack'));
animalShelter.enqueue(new Dog('Rex'));
animalShelter.enqueue(new Cat('Mila'));
animalShelter.enqueue(new Cat('Maniki'));
animalShelter.enqueue(new Dog('Ralf'));
animalShelter.enqueue(new Cat('Katia'));

console.assert(animalShelter.dequeueAny()._name === 'Jack', 'Wrong Implementation');
console.assert(animalShelter.dequeueCat()._name === 'Mila', 'Wrong Implementation');
console.assert(animalShelter.dequeueDog()._name === 'Rex', 'Wrong Implementation');
console.assert(animalShelter.dequeueAny()._name === 'Maniki', 'Wrong Implementation');
console.assert(animalShelter.dequeueAny()._name === 'Ralf', 'Wrong Implementation');
console.assert(animalShelter.dequeueAny()._name === 'Katia', 'Wrong Implementation');
```
