# Builder Pattern

The builder pattern uses another object, a builder, that receives each initialization parameter step by step and then returns the resulting constructed object at once.

## Implementation in Typescript

### Using function

```ts
/**
 * Product
 *
 * @class Product
 */
class Product {
  price : number;
  name : string;

  /**
   * Set the Product price
   *
   * @param {number} price
   * @memberof Product
   */
  setPrice(price : number) {
    this.price = price;
  }

  /**
   * Set the Product name
   *
   * @param {string} name
   * @memberof Product
   */
  setName(name : string) {
    this.name = name;
  }
}

/**
 * Builder
 *
 * @class ProductBuilder
 */
class ProductBuilder {
  product : Product;
  constructor() {
    this.product = new Product()
  }

  /**
   * Set the price of the product
   *
   * @param {number} price
   * @returns {ProductBuilder}
   * @memberof ProductBuilder
   */
  setPrice(price : number) : ProductBuilder {
    this
      .product
      .setPrice(price);
    return this;
  }

  /**
   * Set the name of the product
   *
   * @param {string} name
   * @returns {ProductBuilder}
   * @memberof ProductBuilder
   */
  setName(name : string) : ProductBuilder {
    this
      .product
      .setName(name);
    return this;
  }

  /**
   * Return the product
   *
   * @returns {Product}
   * @memberof ProductBuilder
   */
  getProduct() : Product {return this.product;}
}

const builder = new ProductBuilder();
builder
  .setName('Bread')
  .setPrice(1);
const product = builder.getProduct();

console.assert(product.name === 'Bread', 'Wrong Implementation');
console.assert(product.price === 1, 'Wrong Implementation');
```