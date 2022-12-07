import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import {
  ProductCategory,
  ProductCategories,
} from '../entities/product.category';

export class FindProductByConditionDto {
  @ApiProperty({
    name: 'maker',
    required: false,
  })
  @IsOptional()
  maker?: string;

  @ApiProperty({
    name: 'category',
    required: false,
    enum: ProductCategory,
    example: ProductCategory.Laptop,
  })
  @IsOptional()
  @IsEnum(ProductCategory)
  category?: string;
}
