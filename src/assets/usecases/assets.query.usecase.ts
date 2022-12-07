import { Injectable } from '@nestjs/common';
import { FindAssetsByConditionDto } from '../assets.controller';
import { AssetsQueryService } from '../infra/assets.query.service.prisma';

@Injectable()
export class AssetsQueryUsecase {
  constructor(private readonly query: AssetsQueryService) {}

  findByCondition(dto: FindAssetsByConditionDto) {
    this.query.assets({ where: dto });
  }
}
