import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  maker?: string;
  @ApiProperty({ required: false })
  imagePath?: string;
  @ApiProperty({ required: false })
  model?: string;
  @ApiProperty({ required: false })
  accessories?: string[];
  @ApiProperty({ required: false })
  buyDate?: Date;
  @ApiProperty({ required: false })
  note?: string;
}
