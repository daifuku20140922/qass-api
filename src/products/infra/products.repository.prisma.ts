import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(input: Prisma.ProductCreateInput) {
    return this.prisma.product.create({ data: input });
  }
  update(input: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }) {
    const { where, data } = input;
    return this.prisma.product.update({ where, data });
  }
  delete(input: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.delete({ where: input });
  }

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
