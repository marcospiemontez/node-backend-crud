import { ProductRepository } from "../repositories/ProductRepository";
import { ProductEntity } from "../entities/ProductEntity";
import { InsertProductDTO } from "../../../dtos/InsertProductDTO";

export class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  insertProduct(insertProductDTO: InsertProductDTO): ProductEntity {
    const newProduct = new ProductEntity(
      insertProductDTO.getName(),
      insertProductDTO.getDescription(),
      insertProductDTO.getAmount(),
      insertProductDTO.getPrice(),
      insertProductDTO.getUserId(),
    );

    this.productRepository.insert(newProduct);
    return newProduct;
  }
}
