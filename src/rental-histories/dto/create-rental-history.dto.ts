import { ApiProperty } from '@nestjs/swagger';
import { AssetStatus } from 'src/assets/vo/assetStatus.vo';

export class CreateRentalHistoryDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  assetId: number;
  @ApiProperty()
  status: AssetStatus;
  @ApiProperty({ required: false })
  date: Date;
}
