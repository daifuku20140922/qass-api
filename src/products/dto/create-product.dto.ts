import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import {
  ProductCategories,
  ProductCategory,
} from '../entities/product.category';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  maker?: string;

  @ApiProperty()
  @IsOptional()
  model?: string;

  @ApiProperty()
  @IsOptional()
  imagePath?: string;

  @ApiProperty()
  @IsOptional()
  note?: string;

  @ApiProperty({
    enum: ProductCategory,
    example: ProductCategory.MobilePhone,
  })
  @IsNotEmpty()
  @IsEnum(ProductCategory)
  category: ProductCategory;

  @ApiProperty()
  @IsOptional()
  accessories?: string[];
}

export class CreateAccessoryDto {
  name: string;
}
