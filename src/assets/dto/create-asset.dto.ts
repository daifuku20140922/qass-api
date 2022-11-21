import { ApiProperty } from '@nestjs/swagger';
import { AssetStatus } from 'src/assets/vo/assetStatus.vo';

export class CreateAssetDto {
  @ApiProperty({ required: false })
  qrImagePath?: string;
  @ApiProperty()
  categoryId: number;
  @ApiProperty({ required: false })
  simId?: string;
  @ApiProperty({ required: false })
  note?: string;
  @ApiProperty({ required: false })
  userId?: number;
  @ApiProperty({ required: false, default: AssetStatus.InActive })
  status: AssetStatus;
}
