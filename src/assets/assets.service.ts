import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { AssetStatus } from './vo/assetStatus.vo';

@Injectable()
export class AssetsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAssetDto: CreateAssetDto) {
    return this.prisma.asset.create({ data: createAssetDto });
  }

  findAll() {
    return this.prisma.asset.findMany();
  }

  findOne(id: number) {
    return this.prisma.asset.findUnique({ where: { id: id } });
  }

  findByUser(userId: number) {
    return this.prisma.asset.findMany({ where: { userId: userId } });
  }

  findByCategory(categoryId: number) {
    return this.prisma.asset.findMany({ where: { categoryId: categoryId } });
  }

  findByStatus(status: AssetStatus) {
    return this.prisma.asset.findMany({ where: { status: status } });
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return this.prisma.asset.update({ where: { id }, data: updateAssetDto });
  }

  remove(id: number) {
    return this.prisma.asset.delete({ where: { id } });
  }
}
