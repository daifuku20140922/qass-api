import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssetsRepository {
  constructor(private readonly prisma: PrismaService) {}

  createAsset(input: Prisma.AssetCreateInput) {
    return this.prisma.asset.create({
      data: input,
    });
  }

  // updateAsset(where:Prisma.AssetWhereUniqueInput, input:Prisma.AssetUpdateInput) {
  //     return this.prisma.asset.update({
  //         where: where,
  //         data: input
  //     })
  // }
}
