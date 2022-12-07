import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssetsQueryService {
  constructor(private readonly prisma: PrismaService) {}

  asset(input: Prisma.AssetWhereUniqueInput) {
    return this.prisma.asset.findUnique({
      where: input,
      include: { product: true },
    });
  }

  assets(input: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AssetWhereUniqueInput;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = input;
    return this.prisma.asset.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { product: true, user: true },
    });
  }
}
