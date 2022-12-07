import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsQueryService } from 'src/products/infra/products.query.service.prisma';

import { FindProductByConditionDto } from 'src/products/dto/find-product-by-condition.dto';
import { FindProductByIdDto } from 'src/products/dto/find-product-by-id.dto';

@Injectable()
export class ProductsQueryUsecase {
  constructor(private readonly query: ProductsQueryService) {}

  productByUniqueKey(dto: FindProductByIdDto) {
    return this.query.product(dto);
  }

  productsByCondition(dto: FindProductByConditionDto) {
    return this.query.products({ where: dto, orderBy: { id: 'asc' } });
  }
}
