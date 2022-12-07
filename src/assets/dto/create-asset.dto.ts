import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import type { AssetEntity } from 'src/assets/entities/asset.entity';
import { AssetStatus, isAssetStatus } from '../entities/asset.status';

//IDをValueObjectとして切り出すべきかも
import { v4 } from 'uuid';

export class CreateAssetDto {
  @ApiProperty()
  @IsOptional()
  qrImagePath?: string;

  @ApiProperty()
  @IsNotEmpty()
  productId: string;

  @ApiProperty()
  @IsOptional()
  simId?: string;

  @ApiProperty()
  @IsOptional()
  note?: string;

  @ApiProperty({ enum: AssetStatus, example: AssetStatus.InActive })
  @IsOptional()
  @IsEnum(AssetStatus)
  status?: AssetStatus;

  @ApiProperty()
  @IsOptional()
  buyDate?: Date;
}

export const toEntity = (dto: CreateAssetDto) => {
  const { qrImagePath, simId, note, status, buyDate } = dto;
  const entity: AssetEntity = {
    id: v4(),
    qrImagePath: qrImagePath,
    simId: simId,
    note: note,
    status: status && isAssetStatus(status) ? status : AssetStatus.InActive,
    buyDate: buyDate ? buyDate : new Date(),
  };
  return entity;
};
