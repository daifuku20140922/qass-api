import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { AssetsRepository } from './infra/assets.repository.prisma';
import { toEntity } from './dto/create-asset.dto';
import { AssetsQueryService } from './infra/assets.query.service.prisma';
import {
  FindAssetsByConditionDto,
  FindAssetsByUniqueKeyDto,
} from './assets.controller';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssetStatus } from 'src/assets/entities/asset.status';

@Injectable()
export class AssetsService {
  constructor(
    private readonly repository: AssetsRepository,
    private readonly query: AssetsQueryService,
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}
  async create(createAssetDto: CreateAssetDto) {
    const { productId } = createAssetDto;

    const assetEntity = toEntity(createAssetDto);

    //永続化時Prismaで生成された型をそのまま使おうとするとこうなる。どうするよ？
    return this.repository.createAsset({
      ...assetEntity,
      product: { connect: { id: productId } },
    });
  }

  findByCondition(dto: FindAssetsByConditionDto) {
    return this.query.assets({ where: dto });
  }

  findByUniqueKey(dto: FindAssetsByUniqueKeyDto) {
    // return `This action returns a #${id} asset`;
    return this.query.asset(dto);
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    // return `This action updates a #${id} asset`;
  }

  async checkout(dto: { assetId: string; userId: number }) {
    const { assetId, userId } = dto;
    const user = await this.usersService.isExists(userId);
    if (!user) {
      throw new Error('User Not Found');
    }

    if (!(await this.isExists(assetId))) {
      throw new Error('Asset Not Found');
    }

    if (this.isActive(assetId)) {
      throw new Error('Asset is Already Checked Out');
    }
    return this.prisma.asset.update({
      where: { id: assetId },
      data: { userId: userId, status: AssetStatus.Active },
    });
  }

  async bringBack(id: string) {
    if (!this.isExists(id)) {
      throw new Error('Asset Not Found');
    }

    return this.prisma.asset.update({
      where: { id },
      data: { userId: null, status: AssetStatus.InActive },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }

  isExists(id: string) {
    return this.query.asset({ id: id }).then((res) => {
      return res !== null;
    });
  }

  isActive(id: string) {
    return this.query
      .asset({ id: id })
      .then((x) => {
        x.status === AssetStatus.Active;
      })
      .catch((e) => {
        console.error(e);
        throw new Error(e.message);
      });
  }
}

type Entity = {
  id: string;
  qrImagePath?: string;
};

@Injectable()
export class AssetsRepository2 {
  constructor(private readonly prisma: PrismaService) {}

  store(entity: Entity) {}
}
