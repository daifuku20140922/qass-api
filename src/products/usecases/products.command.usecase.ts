import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsRepository } from '../infra/products.repository.prisma';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsCommandUsecase {
  constructor(private readonly repository: ProductsRepository) {}

  async createProduct(dto: CreateProductDto) {
    const id = v4();

    const input = { id: id, ...dto };

    return this.repository.create(input);
  }

  async updateProduct(id: string, dto: UpdateProductDto) {
    const where = { id: id };

    //ServiceにisExistsメソッド生やす
    const entity = await this.repository.product(where);
    if (!entity) {
      throw new Error('Product Not Found.');
    }

    return this.repository.update({ where, data: { ...dto } });
  }

  async deleteProduct(id: string) {
    const where = { id: id };
    const entity = await this.repository.product(where);
    if (!entity) {
      throw new Error('Product Not Found');
    }

    return this.repository.delete(where);
  }
}
