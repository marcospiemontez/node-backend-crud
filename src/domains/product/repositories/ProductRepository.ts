import { ProductEntity } from "../entities/ProductEntity";

export class ProductRepository {
  private products: Array<ProductEntity>;

  constructor() {
    this.products = [];
  }

  insert(products: ProductEntity): void {
    this.products.push(products);
  }

  getProductByName(name: string): Array<ProductEntity> {
    const lowercaseName = name.toLowerCase();
    return this.products.filter(product => product.getName().toLowerCase() === lowercaseName);
  }

  getProductsByUserId(userId: string): Array<ProductEntity> {
    return this.products.filter((product) => product.getUserId() == userId);
  }

  getAllProducts(): Array<ProductEntity> {
    return this.products
  }
}