import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsQueryService {
  constructor(private readonly prisma: PrismaService) {}

  product(input: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.findUnique({ where: input });
  }

  products(input: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = input;
    return this.prisma.product.findMany({ skip, take, cursor, where, orderBy });
  }
}
