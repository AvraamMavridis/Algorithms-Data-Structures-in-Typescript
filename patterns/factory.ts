/**
 * Product Attributes Interface
 *
 * @interface ProductProps
 */
interface ProductProps {
  name : string;
  price : number;
  weight?: number;
  ml?: number;
}

/**
 * Product
 * @class Product
 */
class Product {
  name : string;
  price : number;

  constructor(name : string, price : number) {
    this.name = name;
    this.price = price;
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
  constructor(name : string, price : number, weight : number) {
    super(name, price);
    this.weight = weight;
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
  constructor(name : string, price : number, ml : number) {
    super(name, price);
    this.ml = ml;
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
  static createProduct(type : string, props : ProductProps) : Product {
    switch(type) {
      case 'food':
        return new Food(props.name, props.price, props.weight);
      case 'drink':
        return new Drink(props.name, props.price, props.ml);
      default:
        return new Product(props.name, props.price);
    }
  }
}