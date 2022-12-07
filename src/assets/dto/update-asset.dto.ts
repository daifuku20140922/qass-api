import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { AssetStatus } from '../entities/asset.status';
import { CreateAssetDto } from './create-asset.dto';

export class UpdateAssetDto {
  @ApiProperty()
  @IsOptional()
  qrImagePath?: string;

  @ApiProperty()
  @IsOptional()
  simId?: string;

  @ApiProperty()
  @IsOptional()
  note?: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(AssetStatus)
  status?: AssetStatus;

  @ApiProperty()
  @IsOptional()
  buyDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  userId?: number;
}
