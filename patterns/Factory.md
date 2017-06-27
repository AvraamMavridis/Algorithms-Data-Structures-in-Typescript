# Factory Pattern

In Factory pattern, we create object without exposing the creation logic to the client and refer to newly created object using a common interface.

"Define an interface for creating an object, but let subclasses decide which class to instantiate. The Factory method lets a class defer instantiation it uses to subclasses." (Gang Of Four)


## Implementation in Typescript

### Using class

```ts
/**
 * Product
 * @class Product
 */
class Product {
  name : string;
  price : number;

  constructor(...p: Array<any>) {
    this.name = p[0];
    this.price = p[1];
  }
}

/**
 * Food
 * @class Food
 * @extends {Product}
 */
class Food extends Product {
  weight : number;

  /**
   * Creates an instance of Food.
   * @param {string} name
   * @param {number} price
   * @param {number} weight
   */
  constructor(...p: Array<any>) {
    super(p[0], p[1]);
    this.weight = p[2];
  }
}

/**
 * Drink
 * @class Drink
 * @extends {Product}
 */
class Drink extends Product {
  ml : number;

  /**
   * Creates an instance of Drink.
   * @param {string} name
   * @param {number} price
   * @param {number} ml
   */
  constructor(...p: Array<any>) {
    super(p[0], p[1]);
    this.ml = p[2];
  }
}

/**
 * Product Factory
 * @class ProductFactory
 */
class ProductFactory {
  /**
   * Create Products
   *
   * @static
   * @param {string} type
   * @param {ProductProps} props
   * @returns {Product}
   */
  static createProduct(type : string, ...rest) : Product {
    switch(type) {
      case 'food':
        return new Food(...rest);
      case 'drink':
        return new Drink(...rest);
      default:
        return new Product(...rest);
    }
  }
}

const bread = ProductFactory.createProduct('food', 'Bread', 1, 100);
console.assert(bread instanceof Food, 'Wrong implementation');
console.assert(bread instanceof Product, 'Wrong implementation');
console.assert(!(bread instanceof Drink), 'Wrong implementation');
```